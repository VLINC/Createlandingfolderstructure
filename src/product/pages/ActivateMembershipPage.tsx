import React, { useState } from "react";
import { toast } from "sonner";
import { auth } from "../../firebase/config";
import { Capacitor } from "@capacitor/core";
import { Browser } from "@capacitor/browser";
import { App } from "@capacitor/app";
import { purchaseActivationFee } from "../services/playBilling";

const FUNCTIONS_URL = "https://createactivationcheckoutsession-aaugqdjzaq-uc.a.run.app";

const getActivationReturnUrls = () => {
  if (Capacitor.isNativePlatform()) {
    return {
      successUrl: "customerbookingapp://activation-successsession_id={CHECKOUT_SESSION_ID}",
      cancelUrl: "customerbookingapp://activate-membershipactivation=canceled",
    };
  }

  const origin = window.location.origin;
  return {
    successUrl: `${origin}/#/activation=success&session_id={CHECKOUT_SESSION_ID}`,
    cancelUrl: `${origin}/#/activate-membershipactivation=canceled`,
  };
};

const ActivateMembershipPage: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const isNative = Capacitor.isNativePlatform();

  const startActivationCheckout = async () => {
    try {
      setLoading(true);

      const currentUser = auth.currentUser;
      if (!currentUser) {
        toast.error("You must be logged in.");
        return;
      }

      // Android: Use Google Play Billing
      if (isNative) {
        console.log('🛒 Initiating Google Play purchase for activation fee');
        purchaseActivationFee();
        return;
      }

      // Web: Use Stripe
      const idToken = await currentUser.getIdToken(true);
      const { successUrl, cancelUrl } = getActivationReturnUrls();

      const resp = await fetch(FUNCTIONS_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${idToken}`,
        },
        body: JSON.stringify({ successUrl, cancelUrl }),
      });

      const data = await resp.json().catch(() => ({}));

      console.log("Activation checkout response:", data);
      if (data.sessionId) toast.message(`Activation sessionId: ${data.sessionId}`);

      if (!resp.ok) {
        toast.error(data.error || "Failed to start activation checkout.");
        return;
      }

      const url: string | undefined = data.url;
      if (!url) {
        toast.error("Missing Stripe checkout URL.");
        return;
      }

      console.log('💳 Opening Stripe checkout...');
      window.location.href = url;
    } catch (e: any) {
      toast.error(e.message || "Failed to fetch");
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    if (!isNative) return;

    const sub = App.addListener("appUrlOpen", async (event) => {
      if (!event.url) return;

      try {
        await Browser.close();
      } catch {
        // ignore
      }

      if (event.url.includes("activation-success")) {
        toast.success("Activation payment complete!");
      } else if (event.url.includes("activate-membership")) {
        toast.info("Activation payment cancelled.");
      }
    });

    return () => {
      sub.then((h) => h.remove()).catch(() => {});
    };
  }, [isNative]);

  return (
    <div className="min-h-screen bg-gray-50 p-4 pb-20 pt-28">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
          <h1 className="text-2xl font-bold text-gray-900">Activate Your Account</h1>

          <p className="mt-3 text-gray-700">
            You must activate your account before booking services.
          </p>

          <div className="mt-5 bg-gray-50 border border-gray-200 rounded-lg p-4">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="font-semibold text-gray-900">Activation Fee</p>
                <p className="text-sm text-gray-700">$5.00 (one-time)</p>
              </div>

              <button
                onClick={startActivationCheckout}
                disabled={loading}
                className="
                  bg-[#D91429] text-white
                  px-4 py-2.5
                  rounded-md
                  font-semibold
                  hover:bg-[#B71022]
                  transition
                  disabled:opacity-60
                  disabled:cursor-not-allowed
                "
              >
                {loading ? "Starting..." : "Pay & Activate"}
              </button>
            </div>
          </div>

          <p className="mt-4 text-sm text-gray-600">
            Payment is processed securely {isNative  'via Google Play' : 'by Stripe'}.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ActivateMembershipPage;










