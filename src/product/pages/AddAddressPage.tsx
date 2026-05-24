import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, Loader2 } from 'lucide-react';
import { Button } from '../app/components/ui/button';
import { Input } from '../app/components/ui/input';
import { Label } from '../app/components/ui/label';
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase/config';
import { useAuth } from '../contexts/AuthContext';
import { toast } from 'sonner';

export default function AddAddressPage() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [saving, setSaving] = useState(false);
  const [formData, setFormData] = useState({
    label: '',
    street: '',
    apartment: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'United States',
    isDefault: false,
  });

  const geocodeAddress = async (address: string) => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/searchformat=json&q=${encodeURIComponent(address)}`
      );
      const data = await response.json();
      
      if (data && data[0]) {
        return {
          latitude: parseFloat(data[0].lat),
          longitude: parseFloat(data[0].lon),
        };
      }
    } catch (error) {
      console.error('Geocoding error:', error);
    }
    
    return {
      latitude: 0,
      longitude: 0,
    };
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!user) {
      toast.error('You must be logged in to save addresses');
      return;
    }

    setSaving(true);

    try {
      const addressId = `addr_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      const fullAddress = `${formData.street}${formData.apartment  ', ' + formData.apartment : ''}, ${formData.city}, ${formData.state} ${formData.zipCode}, ${formData.country}`;
      const location = await geocodeAddress(fullAddress);

      await setDoc(doc(db, 'savedAddresses', addressId), {
        addressId: addressId,
        userId: user.uid,
        label: formData.label.trim(),
        street: formData.street.trim(),
        apartment: formData.apartment.trim(),
        city: formData.city.trim(),
        state: formData.state.trim().toUpperCase(),
        zipCode: formData.zipCode.trim(),
        country: formData.country.trim(),
        instructions: '',
        isDefault: formData.isDefault,
        location: {
          latitude: location.latitude,
          longitude: location.longitude,
        },
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      });

      toast.success('Address saved successfully!');
      navigate('/saved-addresses');
    } catch (error) {
      console.error('Error saving address:', error);
      toast.error('Failed to save address. Please try again.');
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20" style={{ paddingTop: '80px' }}>
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* PAGE TITLE */}
        <div className="mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Add New Address</h1>
          <p className="text-sm sm:text-base text-gray-600">Save a service location for quick booking</p>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-6">
          
          <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm space-y-4">
            
            {/* LABEL */}
            <div>
              <Label htmlFor="label" className="text-sm font-semibold">Address Label *</Label>
              <Input
                id="label"
                placeholder="Home, Work, Rental Property, etc."
                value={formData.label}
                onChange={(e) => setFormData({ ...formData, label: e.target.value })}
                required
                disabled={saving}
                className="mt-1.5"
              />
            </div>

            {/* STREET */}
            <div>
              <Label htmlFor="street" className="text-sm font-semibold">Street Address *</Label>
              <Input
                id="street"
                placeholder="123 Main St"
                value={formData.street}
                onChange={(e) => setFormData({ ...formData, street: e.target.value })}
                required
                disabled={saving}
                className="mt-1.5"
              />
            </div>

            {/* APARTMENT */}
            <div>
              <Label htmlFor="apartment" className="text-sm font-semibold">Apartment, Suite, Unit</Label>
              <Input
                id="apartment"
                placeholder="Apt 4B (Optional)"
                value={formData.apartment}
                onChange={(e) => setFormData({ ...formData, apartment: e.target.value })}
                disabled={saving}
                className="mt-1.5"
              />
            </div>

            {/* CITY */}
            <div>
              <Label htmlFor="city" className="text-sm font-semibold">City *</Label>
              <Input
                id="city"
                placeholder="New York"
                value={formData.city}
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                required
                disabled={saving}
                className="mt-1.5"
              />
            </div>

            {/* STATE & ZIP */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="state" className="text-sm font-semibold">State *</Label>
                <Input
                  id="state"
                  placeholder="NY"
                  value={formData.state}
                  onChange={(e) => setFormData({ ...formData, state: e.target.value.toUpperCase() })}
                  required
                  disabled={saving}
                  maxLength={2}
                  className="mt-1.5"
                />
              </div>
              <div>
                <Label htmlFor="zipCode" className="text-sm font-semibold">Zip Code *</Label>
                <Input
                  id="zipCode"
                  placeholder="10001"
                  value={formData.zipCode}
                  onChange={(e) => setFormData({ ...formData, zipCode: e.target.value })}
                  required
                  disabled={saving}
                  maxLength={10}
                  className="mt-1.5"
                />
              </div>
            </div>

            {/* COUNTRY */}
            <div>
              <Label htmlFor="country" className="text-sm font-semibold">Country</Label>
              <Input
                id="country"
                value={formData.country}
                disabled
                className="mt-1.5 bg-gray-50"
              />
            </div>

            {/* SET AS DEFAULT */}
            <div className="flex items-center gap-3 pt-2">
              <input
                type="checkbox"
                id="isDefault"
                checked={formData.isDefault}
                onChange={(e) => setFormData({ ...formData, isDefault: e.target.checked })}
                disabled={saving}
                className="w-4 h-4 text-[#D91429] border-gray-300 rounded focus:ring-[#D91429] focus:ring-2"
              />
              <Label htmlFor="isDefault" className="cursor-pointer text-sm font-semibold">
                Set as default service location
              </Label>
            </div>

          </div>

          {/* ACTIONS */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              type="button"
              variant="outline"
              onClick={() => navigate('/saved-addresses')}
              className="flex-1 order-2 sm:order-1"
              disabled={saving}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="flex-1 bg-[#D91429] hover:bg-[#B71022] order-1 sm:order-2"
              disabled={saving}
            >
              {saving  (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Saving...
                </>
              ) : (
                <>
                  <MapPin className="w-4 h-4 mr-2" />
                  Save Address
                </>
              )}
            </Button>
          </div>

        </form>

      </div>
    </div>
  );
}










