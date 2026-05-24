import { useState, FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc, Timestamp } from "firebase/firestore";
import { auth, db } from "../../firebase/config";
import { toast } from "sonner";

export default function CustomerSignupPage() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  // 🔥 popup control
  const [showAccountType, setShowAccountType] = useState(true);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    }

    setLoading(true);

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const uid = userCredential.user.uid;

      await setDoc(doc(db, "users", uid), {
        name,
        email,
        role: "customer",
        membership: {
          status: "pending",
          plan: null,
          monthlyPrice: null,
          nextBillingDate: null,
        },
        createdAt: Timestamp.now(),
      });

      toast.success("Account created! Continue to membership setup.");
      navigate("/membership");

    } catch (error: any) {
      if (error.code === "auth/email-already-in-use") {
        toast.error("Email already exists");
      } else {
        toast.error("Signup failed");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-24 min-h-screen bg-gray-50 px-6 py-12">
      <div className="max-w-md mx-auto">

        {/* Back */}
        <div className="mb-8">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-[#D91429] font-semibold"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </Link>
        </div>

        {/* 🔥 ACCOUNT TYPE POPUP */}
        {showAccountType && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl p-8 w-full max-w-sm text-center shadow-xl">

              <h2 className="text-xl font-bold mb-4 text-[#D91429]">
                Choose Account Type
              </h2>

              <p className="text-gray-600 mb-6">
                Select how you want to use the platform
              </p>

              <div className="flex flex-col gap-4">

                {/* Customer */}
                <button
                  onClick={() => setShowAccountType(false)}
                  className="bg-[#D91429] text-white py-3 rounded-xl font-semibold hover:bg-[#b81022]"
                >
                  Create Customer Account
                </button>

                {/* Provider */}
                <button
                  onClick={() => navigate("/signup/location")}
                  className="border border-[#D91429] text-[#D91429] py-3 rounded-xl font-semibold hover:bg-red-50"
                >
                  Become a Provider
                </button>

              </div>
            </div>
          </div>
        )}

        {/* FORM */}
        {!showAccountType && (
          <div className="bg-white p-8 rounded-[1.25rem] shadow-md">

            <h1 className="text-3xl font-bold text-center text-[#D91429] mb-2">
              Create Your Account
            </h1>

            <p className="text-center text-gray-600 mb-6">
              Continue to set up your membership and access services
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">

              <input
                type="text"
                placeholder="Full Name"
                required
                disabled={loading}
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-[#D91429]"
              />

              <input
                type="email"
                placeholder="Email Address"
                required
                disabled={loading}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-[#D91429]"
              />

              <input
                type="password"
                placeholder="Password"
                required
                minLength={6}
                disabled={loading}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-[#D91429]"
              />

              <input
                type="password"
                placeholder="Confirm Password"
                required
                minLength={6}
                disabled={loading}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-[#D91429]"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#D91429] text-white py-3 rounded-xl font-semibold hover:bg-[#b81022]"
              >
                {loading ? "Creating..." : "Continue"}
              </button>

            </form>

          </div>
        )}

      </div>
    </div>
  );
}











