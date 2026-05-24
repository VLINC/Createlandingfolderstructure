import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "../shared/ui/button";
import { Input } from "../shared/ui/input";
import { Label } from "../shared/ui/label";

export default function ProviderSignupPage() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    // TODO: keep your provider onboarding logic here

    setTimeout(() => {
      setLoading(false);
      navigate("/dashboard");
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-sm space-y-6">

        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-2xl font-bold">Become a Provider</h1>
          <p className="text-sm text-gray-500">
            Join our network and grow your cleaning business.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">

          <div>
            <Label>Full Name</Label>
            <Input required placeholder="Your full name" />
          </div>

          <div>
            <Label>Email</Label>
            <Input type="email" required placeholder="Enter your email" />
          </div>

          <div>
            <Label>Password</Label>
            <Input type="password" required placeholder="Create a password" />
          </div>

          <Button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-xl"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Start as Provider"}
          </Button>

        </form>

        {/* Trust */}
        <div className="text-xs text-gray-500 text-center space-y-1">
          <p> Growth opportunities</p>
          <p> Reliable service standards</p>
        </div>

        {/* Switch */}
        <p className="text-sm text-center text-gray-600">
          Already registered{" "}
          <Link to="/login" className="text-[#D91429] font-medium">
            Sign In
          </Link>
        </p>

      </div>
    </div>
  );
}










