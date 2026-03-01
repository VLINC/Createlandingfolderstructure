import { useState, FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc, Timestamp } from "firebase/firestore";
import { auth, db } from "../firebase/config";
import { toast } from "sonner";

export default function CustomerSignupPage() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Validate passwords match
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    // Validate password length
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    }

    setLoading(true);
    try {
      // Create Firebase user
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const uid = userCredential.user.uid;

      // Create user document in Firestore
      await setDoc(doc(db, "users", uid), {
        email,
        name,
        role: "customer",
        createdAt: Timestamp.now()
      });

      toast.success("Account created successfully! Welcome!");
      navigate("/dashboard");
    } catch (error: any) {
      console.error("Signup error:", error);

      // Friendly error messages
      if (error.code === "auth/email-already-in-use") {
        toast.error("An account with this email already exists");
      } else if (error.code === "auth/invalid-email") {
        toast.error("Invalid email address");
      } else if (error.code === "auth/weak-password") {
        toast.error("Password is too weak. Please use a stronger password.");
      } else {
        toast.error("Failed to create account. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-24 min-h-screen bg-gray-50 px-6 py-12">
      <div className="max-w-md mx-auto">
        {/* Back Button */}
        <div className="mb-8">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-[#D91429] hover:text-red-700 transition font-semibold"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </Link>
        </div>

        {/* Signup Form */}
        <div className="bg-white p-8 rounded-[1.25rem] shadow-md">
          <h1 className="text-3xl font-bold text-center text-[#D91429] mb-2">
            Sign Up as a Customer
          </h1>
          <p className="text-center text-gray-600 mb-6">
            Create your account to book cleaning services
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Full Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                disabled={loading}
                className="w-full px-4 py-3 border border-gray-300 rounded-[1.25rem] focus:outline-none focus:ring-2 focus:ring-[#D91429] focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed"
                placeholder="John Doe"
                autoComplete="name"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={loading}
                className="w-full px-4 py-3 border border-gray-300 rounded-[1.25rem] focus:outline-none focus:ring-2 focus:ring-[#D91429] focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed"
                placeholder="you@example.com"
                autoComplete="email"
              />
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={6}
                disabled={loading}
                className="w-full px-4 py-3 border border-gray-300 rounded-[1.25rem] focus:outline-none focus:ring-2 focus:ring-[#D91429] focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed"
                placeholder="At least 6 characters"
                autoComplete="new-password"
              />
            </div>

            {/* Confirm Password */}
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-semibold text-gray-700 mb-2">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                minLength={6}
                disabled={loading}
                className="w-full px-4 py-3 border border-gray-300 rounded-[1.25rem] focus:outline-none focus:ring-2 focus:ring-[#D91429] focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed"
                placeholder="Re-enter your password"
                autoComplete="new-password"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#D91429] text-white px-6 py-3 rounded-[1.25rem] font-semibold shadow-lg hover:bg-[#b81022] transition focus:outline-none focus:ring-4 focus:ring-[#D91429] focus:ring-offset-2 disabled:bg-gray-400 disabled:cursor-not-allowed"
              aria-label="Create your customer account"
            >
              {loading ? "Creating account..." : "Sign Up"}
            </button>
          </form>

          {/* Links */}
          <div className="mt-6 text-center space-y-2">
            <p className="text-sm text-gray-600">
              Already have an account?{" "}
              <Link to="/login" className="text-[#D91429] hover:text-red-700 font-semibold">
                Log in
              </Link>
            </p>
            <p className="text-sm text-gray-600">
              Are you a cleaning provider?{" "}
              <Link to="/signup/provider" className="text-[#D91429] hover:text-red-700 font-semibold">
                Sign up as a provider
              </Link>
            </p>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-6 text-center text-sm text-gray-600">
          <p>✓ Secure account creation • ✓ No credit card required • ✓ Free to sign up</p>
        </div>
      </div>
    </div>
  );
}