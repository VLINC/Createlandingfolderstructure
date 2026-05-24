import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/config";
import { useAuth } from "../../auth/AuthProvider";
import { Button } from "../../shared/ui/button";

export default function Navbar() {
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/");
  };

  return (
    <header className="w-full border-b bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-4 flex items-center justify-between">
        <Link to="/" className="text-lg font-bold tracking-tight">
          Victorious Love Pro Clean
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link to="/services" className="hover:text-[#D91429] transition">
            Services
          </Link>
          <Link to="/reviews" className="hover:text-[#D91429] transition">
            Reviews
          </Link>
          <Link to="/provider-signup" className="hover:text-[#D91429] transition">
            Providers
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          {user ? (
            <>
              <Link to="/dashboard">
                <Button variant="outline" className="rounded-xl">
                  Dashboard
                </Button>
              </Link>
              <Button onClick={handleLogout} variant="outline" className="rounded-xl">
                Logout
              </Button>
            </>
          ) : (
            <>
              <Link to="/login">
                <Button variant="outline" className="rounded-xl">
                  Sign In
                </Button>
              </Link>
              <Link to="/signup">
                <Button className="bg-[#D91429] text-white rounded-xl">
                  Get Started
                </Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
