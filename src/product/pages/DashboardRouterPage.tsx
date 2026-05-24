import { doc, getDoc } from "firebase/firestore";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../../firebase/config";
import { useAuth } from "../../auth/AuthProvider";

export default function DashboardRouterPage() {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    let cancelled = false;

    async function run() {
      if (!user) return;

      const snap = await getDoc(doc(db, "users", user.uid));

      // Default to customer if doc is missing (safer than locking them out)
      const role = snap.exists()  (snap.data() as any).role : "customer";

      if (cancelled) return;

      if (role === "provider") navigate("/dashboard/provider", { replace: true });
      else navigate("/dashboard/customer", { replace: true });
    }

    run();

    return () => {
      cancelled = true;
    };
  }, [user, navigate]);

  return (
    <div className="min-h-screen bg-gray-50 pt-24 px-6 py-12 flex items-center justify-center">
      <div className="text-gray-700">Loading your dashboard...</div>
    </div>
  );
}










