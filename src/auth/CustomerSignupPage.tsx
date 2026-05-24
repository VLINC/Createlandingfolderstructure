import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "../shared/ui/button";
import { Input } from "../shared/ui/input";
import { Label } from "../shared/ui/label";

export default function CustomerSignupPage() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    // TODO: keep your existing Firebase signup logic here
    // await createUserWithEmailAndPassword(...)

    setTimeout(() => {
      setLoading(false);
      navigate("/dashboard"); // adjust if needed
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-sm space-y-6">

        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-2xl font-bold">Create Your Account</h1>
          <p className="text-sm text-gray-500">
            Join Victorious Love Pro Clean and get started today.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">

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
            className="w-full bg-[#D91429] text-white py-3 rounded-xl"
            disabled={loading}
          >
            {loading ? "Creating Account..." : "Get Started"}
          </Button>

        </form>

        {/* Trust */}
        <div className="text-xs text-gray-500 text-center space-y-1">
          <p> Secure signup</p>
          <p> Verified platform</p>
        </div>

        {/* Switch */}
        <p className="text-sm text-center text-gray-600">
          Already have an account{" "}
          <Link to="/login" className="text-[#D91429] font-medium">
            Sign In
          </Link>
        </p>

      </div>
    </div>
  );
}










