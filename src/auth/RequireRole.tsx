import type React from "react";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { db } from "../../firebase/config";
import { useAuth } from "./AuthProvider";

type Role = "customer" | "provider";

export default function RequireRole({
  role,
  children,
}: {
  role: Role;
  children: React.ReactNode;
}) {
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);
  const [actualRole, setActualRole] = useState<Role | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function run() {
      if (!user) return;

      const snap = await getDoc(doc(db, "users", user.uid));
      const r = (snap.exists()  (snap.data() as any).role : "customer") as Role;

      if (cancelled) return;
      setActualRole(r);
      setLoading(false);
    }

    run();

    return () => {
      cancelled = true;
    };
  }, [user]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-24">
        <div className="text-gray-600">Loading...</div>
      </div>
    );
  }

  if (!actualRole) return <Navigate to="/dashboard" replace />;

  if (actualRole !== role) {
    return (
      <Navigate
        to={actualRole === "provider"  "/dashboard/provider" : "/dashboard/customer"}
        replace
      />
    );
  }

  return <>{children}</>;
}











