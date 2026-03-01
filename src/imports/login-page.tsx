import { useState, FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../firebase/config";
import { toast } from "sonner";

type UserRole = "customer" | "provider" | "admin";

export default function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    setLoading(true);
    try {
      const credential = await signInWithEmailAndPassword(auth, email.trim(), password);
      const uid = credential.user.uid;

      const userSnap = await getDoc(doc(db, "users", uid));
      const role = (userSnap.exists() ? (userSnap.data() as any).role : undefined) as UserRole | undefined;

      toast.success("Welcome back!");

      if (role === "admin") {
        // If you later add an admin dashboard route on the website
        navigate("/dashboard", { replace: true });
        return;
      }

      // For now, both customer/provider land in the same dashboard placeholder
      navigate("/dashboard", { replace: true });
    } catch (error: any) {
      console.error("Login error:", error);

      if (
        error?.code === "auth/invalid-credential" ||
        error?.code === "auth/wrong-password"
      ) {
        toast.error("Invalid email or password");
      } else if (error?.code === "auth/user-not-found") {
        toast.error("No account found with this email");
      } else if (error?.code === "auth/too-many-requests") {
        toast.error("Too many failed attempts. Please try again later.");
      } else {
        toast.error("Login failed. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-24 min-h-screen bg-gray-50 px-6 py-12">
      <div className="max-w-md mx-auto">
        <div className="mb-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-[#D91429] hover:text-red-700 transition font-semibold"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </Link>
        </div>

        <div className="bg-white p-8 rounded-[1.25rem] shadow-md">
          <h1 className="text-3xl font-bold text-center text-[#D91429] mb-6">
            Log In
          </h1>

          <form onSubmit={handleSubmit} className="space-y-5">
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
                disabled={loading}
                className="w-full px-4 py-3 border border-gray-300 rounded-[1.25rem] focus:outline-none focus:ring-2 focus:ring-[#D91429] focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed"
                placeholder="Enter your password"
                autoComplete="current-password"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#D91429] text-white px-6 py-3 rounded-[1.25rem] font-semibold shadow-lg hover:bg-[#b81022] transition focus:outline-none focus:ring-4 focus:ring-[#D91429] focus:ring-offset-2 disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              {loading ? "Logging in..." : "Log In"}
            </button>
          </form>

          <div className="mt-6 text-center space-y-2">
            <p className="text-sm text-gray-600">
              Don't have an account?{" "}
              <Link to="/signup/customer" className="text-[#D91429] hover:text-red-700 font-semibold">
                Sign up as a customer
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
      </div>
    </div>
  );
}