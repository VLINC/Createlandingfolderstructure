import { useState, useEffect, FormEvent, UIEvent } from "react";
import { useNavigate } from "react-router-dom";
import PullToRefresh from 'react-simple-pull-to-refresh';
import {
  Eye,
  EyeOff,
  Shield,
  Clock,
  CheckCircle2,
  XCircle,
  Mail,
  FileSignature,
  Receipt,
  PartyPopper,
  ArrowRight,
  ArrowLeft,
  AlertCircle,
  MapPin,
  RefreshCw
} from "lucide-react";

import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  onAuthStateChanged
} from "firebase/auth";

import {
  collection,
  addDoc,
  doc,
  setDoc,
  getDoc,
  onSnapshot,
  Timestamp,
  updateDoc,
  query,
  where,
  getDocs
} from "firebase/firestore";

import { auth, db } from "../../firebase/config";
import { toast } from "sonner";

interface AgreementData {
  type: string;
  title: string;
  version: string;
  effectiveDate: string;
  content: string;
  required: boolean;
  status: string;
}

export default function SignupScreen() {
  const navigate = useNavigate();

  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 7;

  const [selectedState, setSelectedState] = useState("");
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);

  const [bgCheckData, setBgCheckData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    ssn: "",
    zipCode: "",
    driverLicenseNumber: "",
    driverLicenseState: ""
  });
  const [consentGiven, setConsentGiven] = useState(false);
  const [bgCheckRequestId, setBgCheckRequestId] = useState<string | null>(null);

  const [bgCheckStatus, setBgCheckStatus] = useState<"pending" | "approved" | "rejected">("pending");
  const [bgCheckNotes, setBgCheckNotes] = useState("");

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [emailVerified, setEmailVerified] = useState(false);
  const [checkingEmail, setCheckingEmail] = useState(false);

  const [agreement, setAgreement] = useState<AgreementData | null>(null);
  const [loadingAgreement, setLoadingAgreement] = useState(false);
  const [hasScrolledToBottom, setHasScrolledToBottom] = useState(false);
  const [contractAccepted, setContractAccepted] = useState(false);

  const [w9Data, setW9Data] = useState({
    legalName: "",
    businessName: "",
    taxClassification: "",
    otherClassification: "",
    exemptPayeeCode: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    zipCode: "",
    taxIdType: "SSN" as "SSN" | "EIN",
    taxId: "",
    certificationAgreed: false
  });
  const [showTaxId, setShowTaxId] = useState(false);
  const [w9Errors, setW9Errors] = useState<Record<string, string>>({});

  const [loading, setLoading] = useState(false);
  const [userId, setUserId] = useState<string | null>(null);
  const [checkingExistingApplication, setCheckingExistingApplication] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const states = [
    { code: "AL", name: "Alabama" }, { code: "AK", name: "Alaska" },
    { code: "AZ", name: "Arizona" }, { code: "AR", name: "Arkansas" },
    { code: "CA", name: "California" }, { code: "CO", name: "Colorado" },
    { code: "CT", name: "Connecticut" }, { code: "DE", name: "Delaware" },
    { code: "FL", name: "Florida" }, { code: "GA", name: "Georgia" },
    { code: "HI", name: "Hawaii" }, { code: "ID", name: "Idaho" },
    { code: "IL", name: "Illinois" }, { code: "IN", name: "Indiana" },
    { code: "IA", name: "Iowa" }, { code: "KS", name: "Kansas" },
    { code: "KY", name: "Kentucky" }, { code: "LA", name: "Louisiana" },
    { code: "ME", name: "Maine" }, { code: "MD", name: "Maryland" },
    { code: "MA", name: "Massachusetts" }, { code: "MI", name: "Michigan" },
    { code: "MN", name: "Minnesota" }, { code: "MS", name: "Mississippi" },
    { code: "MO", name: "Missouri" }, { code: "MT", name: "Montana" },
    { code: "NE", name: "Nebraska" }, { code: "NV", name: "Nevada" },
    { code: "NH", name: "New Hampshire" }, { code: "NJ", name: "New Jersey" },
    { code: "NM", name: "New Mexico" }, { code: "NY", name: "New York" },
    { code: "NC", name: "North Carolina" }, { code: "ND", name: "North Dakota" },
    { code: "OH", name: "Ohio" }, { code: "OK", name: "Oklahoma" },
    { code: "OR", name: "Oregon" }, { code: "PA", name: "Pennsylvania" },
    { code: "RI", name: "Rhode Island" }, { code: "SC", name: "South Carolina" },
    { code: "SD", name: "South Dakota" }, { code: "TN", name: "Tennessee" },
    { code: "TX", name: "Texas" }, { code: "UT", name: "Utah" },
    { code: "VT", name: "Vermont" }, { code: "VA", name: "Virginia" },
    { code: "WA", name: "Washington" }, { code: "WV", name: "West Virginia" },
    { code: "WI", name: "Wisconsin" }, { code: "WY", name: "Wyoming" },
    { code: "DC", name: "District of Columbia" }
  ];

  const serviceStates = ["MO", "KS"];

  // DEBUG: Track step changes
  useEffect(() => {
    console.log("⚡ Step changed to:", currentStep);
  }, [currentStep]);

  // DEBUG: Track background check status changes
  useEffect(() => {
    console.log("📊 BG Check Status:", bgCheckStatus, "| Request ID:", bgCheckRequestId);
  }, [bgCheckStatus, bgCheckRequestId]);

  const checkForApprovedBackgroundCheck = async () => {
    if (!bgCheckRequestId) return;

    try {
      const docSnap = await getDoc(doc(db, "backgroundCheckRequests", bgCheckRequestId));
      
      if (docSnap.exists()) {
        const data = docSnap.data();
        setBgCheckStatus(data.status);
        setBgCheckNotes(data.notes || "");

        if (data.status === "approved") {
          toast.success("✅ Background check approved!");
          localStorage.setItem('providerSignupEmail', bgCheckData.email);
          setTimeout(() => {
            setCurrentStep(4);
          }, 1500);
        } else if (data.status === "rejected") {
          toast.error("Background check was not approved");
        } else {
          toast.info("Still pending review...");
        }
      }
    } catch (error) {
      console.error("Error checking status:", error);
    }
  };

  const handleRefresh = async () => {
    setRefreshing(true);
    
    try {
      if (currentStep === 3 && bgCheckRequestId) {
        await checkForApprovedBackgroundCheck();
      } else {
        const savedEmail = localStorage.getItem('providerSignupEmail') || bgCheckData.email;
        
        if (savedEmail) {
          const q = query(
            collection(db, "backgroundCheckRequests"),
            where("email", "==", savedEmail),
            where("status", "==", "approved")
          );

          const snapshot = await getDocs(q);
          if (!snapshot.empty) {
            const data = snapshot.docs[0].data();
            setBgCheckData({
              firstName: data.firstName || "",
              lastName: data.lastName || "",
              email: data.email || "",
              phone: data.phone || "",
              dateOfBirth: data.dateOfBirth || "",
              ssn: data.ssn || "",
              zipCode: data.zipCode || "",
              driverLicenseNumber: data.driverLicenseNumber || "",
              driverLicenseState: data.driverLicenseState || ""
            });
            setSelectedState(data.serviceState || "");
            setBgCheckRequestId(snapshot.docs[0].id);
            setBgCheckStatus("approved");
            toast.success("✅ Found approved application!");
            setCurrentStep(4);
          } else {
            toast.info("No updates yet");
          }
        }
      }
      
      await new Promise(resolve => setTimeout(resolve, 500));
    } catch (error) {
      console.error("Error refreshing:", error);
      toast.error("Failed to refresh");
    } finally {
      setRefreshing(false);
    }
  };

  // FIXED: Check for existing application on mount
  useEffect(() => {
    const checkExistingApplication = async () => {
      const urlParams = new URLSearchParams(window.location.search);
      const emailParam = urlParams.get('email');
      const savedEmail = localStorage.getItem('providerSignupEmail');
      const emailToCheck = emailParam || savedEmail;
      
      console.log("🔍 Checking for email:", emailToCheck);
      
      if (!emailToCheck) {
        console.log("❌ No email to check");
        return;
      }

      setCheckingExistingApplication(true);
      
      try {
        const q = query(
          collection(db, "backgroundCheckRequests"),
          where("email", "==", emailToCheck),
          where("status", "==", "approved")
        );

        const querySnapshot = await getDocs(q);
        
        console.log("📊 Query results:", querySnapshot.size, "documents found");
        
        if (!querySnapshot.empty) {
          const approvedDoc = querySnapshot.docs[0];
          const approvedData = approvedDoc.data();
          
          console.log("✅ Found approved background check:", approvedData);
          
          // Prefill all the background check data
          const filledData = {
            firstName: approvedData.firstName || "",
            lastName: approvedData.lastName || "",
            email: approvedData.email || "",
            phone: approvedData.phone || "",
            dateOfBirth: approvedData.dateOfBirth || "",
            ssn: approvedData.ssn || "",
            zipCode: approvedData.zipCode || "",
            driverLicenseNumber: approvedData.driverLicenseNumber || "",
            driverLicenseState: approvedData.driverLicenseState || ""
          };
          
          console.log("📝 Setting background check data:", filledData);
          
          setBgCheckData(filledData);
          setSelectedState(approvedData.serviceState || "");
          setBgCheckRequestId(approvedDoc.id);
          setBgCheckStatus("approved");
          
          toast.success("✅ Found your approved background check! Continuing registration...");
          
          // IMPORTANT: Use setTimeout to ensure state updates complete
          setTimeout(() => {
            console.log("🚀 Moving to Step 4");
            setCurrentStep(4);
          }, 100);
        } else {
          console.log("ℹ️ No approved application found for:", emailToCheck);
        }
      } catch (error) {
        console.error("❌ Error checking for existing application:", error);
        toast.error("Error checking for existing application");
      } finally {
        setCheckingExistingApplication(false);
      }
    };

    checkExistingApplication();
  }, []); // Empty dependency array - only run once

  useEffect(() => {
    if (currentStep === 6 && !agreement) {
      loadAgreement();
    }
  }, [currentStep, agreement]);

  useEffect(() => {
    if (currentStep === 7) {
      setW9Data((prev) => ({
        ...prev,
        legalName: `${bgCheckData.firstName} ${bgCheckData.lastName}`.trim(),
        state: bgCheckData.driverLicenseState,
        zipCode: bgCheckData.zipCode
      }));
    }
  }, [currentStep, bgCheckData]);

  useEffect(() => {
    if (bgCheckRequestId && currentStep === 3) {
      const unsubscribe = onSnapshot(
        doc(db, "backgroundCheckRequests", bgCheckRequestId),
        (docSnap) => {
          if (docSnap.exists()) {
            const data = docSnap.data() as any;
            setBgCheckStatus(data.status);
            setBgCheckNotes(data.notes || "");

            if (data.status === "approved") {
              toast.success("Background check approved!");
              localStorage.setItem('providerSignupEmail', bgCheckData.email);
            }
            if (data.status === "rejected") toast.error("Background check was not approved");
          }
        }
      );

      return () => unsubscribe();
    }
  }, [bgCheckRequestId, currentStep, bgCheckData.email]);

  useEffect(() => {
    if (currentStep === 5) {
      const unsubscribe = onAuthStateChanged(auth, async (user) => {
        if (user) {
          await user.reload();
          const verified = user.emailVerified;
          setEmailVerified(verified);
          if (verified) toast.success("Email verified!");
        }
      });

      return () => unsubscribe();
    }
  }, [currentStep]);

  const loadAgreement = async () => {
    setLoadingAgreement(true);
    try {
      const agreementDoc = await getDoc(doc(db, "policies", "independent-contractor-agreement"));
      if (agreementDoc.exists()) {
        setAgreement(agreementDoc.data() as AgreementData);
      } else {
        toast.error("Agreement not found. Please contact support.");
      }
    } catch (error) {
      console.error("Error loading agreement:", error);
      toast.error("Failed to load agreement");
    } finally {
      setLoadingAgreement(false);
    }
  };

  const handleAgreementScroll = (e: UIEvent<HTMLDivElement>) => {
    const element = e.currentTarget;
    const scrolledToBottom =
      element.scrollHeight - element.scrollTop <= element.clientHeight + 50;

    if (scrolledToBottom && !hasScrolledToBottom) setHasScrolledToBottom(true);
  };

  const formatTaxId = (value: string, type: "SSN" | "EIN"): string => {
    const cleaned = value.replace(/\D/g, "");
    if (type === "SSN") {
      if (cleaned.length <= 3) return cleaned;
      if (cleaned.length <= 5) return `${cleaned.slice(0, 3)}-${cleaned.slice(3)}`;
      return `${cleaned.slice(0, 3)}-${cleaned.slice(3, 5)}-${cleaned.slice(5, 9)}`;
    }
    if (cleaned.length <= 2) return cleaned;
    return `${cleaned.slice(0, 2)}-${cleaned.slice(2, 9)}`;
  };

  const validateW9 = (): boolean => {
    const errors: Record<string, string> = {};

    if (!w9Data.legalName.trim()) errors.legalName = "Legal name is required";
    if (!w9Data.taxClassification) errors.taxClassification = "Tax classification is required";
    if (w9Data.taxClassification === "other" && !w9Data.otherClassification.trim()) {
      errors.otherClassification = "Please specify other classification";
    }

    if (!w9Data.addressLine1.trim()) errors.addressLine1 = "Address is required";
    if (!w9Data.city.trim()) errors.city = "City is required";
    if (!w9Data.state.trim()) errors.state = "State is required";

    if (!w9Data.zipCode.trim()) errors.zipCode = "ZIP code is required";
    else if (!/^\d{5}(-\d{4})?$/.test(w9Data.zipCode)) errors.zipCode = "Invalid ZIP code format";

    const cleanTaxId = w9Data.taxId.replace(/\D/g, "");
    if (cleanTaxId.length !== 9) errors.taxId = `${w9Data.taxIdType} must be 9 digits`;

    if (!w9Data.certificationAgreed) errors.certificationAgreed = "You must agree to the certification";

    setW9Errors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleLocationCheck = () => {
    if (!selectedState) {
      toast.error("Please select your state");
      return;
    }

    if (serviceStates.includes(selectedState)) {
      setBgCheckData((prev) => ({ ...prev, driverLicenseState: selectedState }));
      toast.success("Great! We service your area.");
      setCurrentStep(2);
      return;
    }
  };

  const handleNewsletterSignup = async (e: FormEvent) => {
    e.preventDefault();

    if (!newsletterEmail || !/\S+@\S+\.\S+/.test(newsletterEmail)) {
      toast.error("Please enter a valid email address");
      return;
    }

    setLoading(true);
    try {
      await addDoc(collection(db, "newsletterSubscribers"), {
        email: newsletterEmail,
        state: selectedState,
        stateName: states.find((s) => s.code === selectedState)?.name,
        subscribedAt: Timestamp.now(),
        source: "signup_location_check",
        notified: false
      });

      setNewsletterSubmitted(true);
      toast.success("✅ Thank you! We'll notify you when we launch in your state.");
    } catch (error) {
      console.error("Error subscribing:", error);
      toast.error("Failed to subscribe. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmitBackgroundCheck = async (e: FormEvent) => {
    e.preventDefault();

    if (!consentGiven) {
      toast.error("Please provide consent for background check");
      return;
    }

    setLoading(true);
    try {
      const docRef = await addDoc(collection(db, "backgroundCheckRequests"), {
        ...bgCheckData,
        serviceState: selectedState,
        status: "pending",
        requestedAt: Timestamp.now(),
        approvedAt: null,
        rejectedAt: null,
        notes: ""
      });

      setBgCheckRequestId(docRef.id);
      localStorage.setItem('providerSignupEmail', bgCheckData.email);
      
      toast.success("Background check request submitted!");
      setCurrentStep(3);
    } catch (error) {
      console.error("Error submitting background check:", error);
      toast.error("Failed to submit request");
    } finally {
      setLoading(false);
    }
  };

  const handleProceedAfterBgCheck = () => {
    if (bgCheckStatus === "approved") setCurrentStep(4);
  };

  const handleCreateAccount = async (e: FormEvent) => {
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
      const userCredential = await createUserWithEmailAndPassword(auth, bgCheckData.email, password);
      const uid = userCredential.user.uid;
      setUserId(uid);

      await sendEmailVerification(userCredential.user);

      await setDoc(doc(db, "providers", uid), {
        email: bgCheckData.email,
        firstName: bgCheckData.firstName,
        lastName: bgCheckData.lastName,
        name: `${bgCheckData.firstName} ${bgCheckData.lastName}`.trim(),
        phone: bgCheckData.phone,
        dateOfBirth: bgCheckData.dateOfBirth,
        zipCode: bgCheckData.zipCode,
        driverLicenseNumber: bgCheckData.driverLicenseNumber,
        driverLicenseState: bgCheckData.driverLicenseState,
        serviceState: selectedState,
        backgroundCheckRequestId: bgCheckRequestId,
        backgroundCheckStatus: "approved",
        emailVerified: false,
        contractSigned: false,
        w9Completed: false,
        onboardingComplete: false,
        createdAt: Timestamp.now(),
        role: "provider"
      });

      await setDoc(doc(db, "users", uid), {
        email: bgCheckData.email,
        name: `${bgCheckData.firstName} ${bgCheckData.lastName}`.trim(),
        role: "provider",
        createdAt: Timestamp.now()
      });

      toast.success("Account created! Check your email for verification link.");
      setCurrentStep(5);
    } catch (error: any) {
      console.error("Error creating account:", error);
      toast.error(error?.message || "Failed to create account");
    } finally {
      setLoading(false);
    }
  };

  const handleCheckEmailVerification = async () => {
    setCheckingEmail(true);
    try {
      const user = auth.currentUser;
      if (!user) {
        toast.error("No user session found. Please log in again.");
        return;
      }

      await user.reload();

      if (user.emailVerified) {
        setEmailVerified(true);
        await updateDoc(doc(db, "providers", user.uid), { emailVerified: true });
        toast.success("Email verified successfully!");
        setTimeout(() => setCurrentStep(6), 1000);
      } else {
        toast.error("Email not verified yet. Please check your inbox.");
      }
    } catch (error) {
      console.error("Error checking email verification:", error);
      toast.error("Could not verify email status");
    } finally {
      setCheckingEmail(false);
    }
  };

  const handleSignContract = async () => {
    if (!contractAccepted || !userId || !hasScrolledToBottom) {
      toast.error("Please read the entire agreement and check the box to accept");
      return;
    }

    setLoading(true);
    try {
      await updateDoc(doc(db, "providers", userId), {
        contractorAgreementAccepted: true,
        contractorAgreementVersion: agreement?.version,
        contractorAgreementAcceptedAt: Timestamp.now(),
        contractorAgreementAcceptedDate: new Date().toISOString(),
        contractSigned: true,
        contractSignedAt: Timestamp.now()
      });

      toast.success("Contract signed!");
      setCurrentStep(7);
    } catch (error) {
      console.error("Error signing contract:", error);
      toast.error("Failed to sign contract");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmitW9 = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateW9()) {
      toast.error("Please fix the errors before submitting");
      return;
    }
    if (!userId) return;

    setLoading(true);
    try {
      const cleanTaxId = w9Data.taxId.replace(/\D/g, "");
      const maskedTaxId =
        w9Data.taxIdType === "SSN"
          ? `***-**-${cleanTaxId.slice(-4)}`
          : `**-***${cleanTaxId.slice(-4)}`;

      await updateDoc(doc(db, "providers", userId), {
        w9Completed: true,
        w9CompletedAt: Timestamp.now(),
        w9Data: {
          legalName: w9Data.legalName,
          businessName: w9Data.businessName,
          taxClassification: w9Data.taxClassification,
          otherClassification: w9Data.otherClassification,
          exemptPayeeCode: w9Data.exemptPayeeCode,
          address: {
            line1: w9Data.addressLine1,
            line2: w9Data.addressLine2,
            city: w9Data.city,
            state: w9Data.state,
            zipCode: w9Data.zipCode
          },
          taxIdType: w9Data.taxIdType,
          taxIdMasked: maskedTaxId,
          certificationAgreed: w9Data.certificationAgreed,
          signedAt: new Date().toISOString(),
          signedDate: new Date().toLocaleDateString()
        },
        taxIdFull: cleanTaxId,
        onboardingComplete: true,
        onboardingCompletedAt: Timestamp.now()
      });

      localStorage.removeItem('providerSignupEmail');

      toast.success("🎉 Onboarding complete! Welcome to Victorious Love Pro Clean!");
      setTimeout(() => navigate("/dashboard"), 2000);
    } catch (error) {
      console.error("Error submitting W-9:", error);
      toast.error("Failed to submit W-9");
    } finally {
      setLoading(false);
    }
  };

  if (checkingExistingApplication) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-pink-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-[#D91429] mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg">Checking for existing application...</p>
        </div>
      </div>
    );
  }

  const renderStep = () => {
    console.log("🎯 Rendering Step:", currentStep, "| BG Status:", bgCheckStatus, "| Request ID:", bgCheckRequestId);
    
    switch (currentStep) {
      case 1:
        return (
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-10 h-10 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Service Area Check</h2>
                <p className="text-gray-600">Let's make sure we service your area</p>
              </div>

              {!selectedState && (
                <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-xl">
                  <h3 className="font-semibold text-gray-900 mb-2">Already started an application?</h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Enter your email to check if your background check was approved
                  </p>
                  <input
                    type="email"
                    placeholder="your.email@example.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D91429]"
                    onBlur={async (e) => {
                      const email = e.target.value.trim();
                      if (!email || !/\S+@\S+\.\S+/.test(email)) return;

                      setCheckingExistingApplication(true);
                      try {
                        const q = query(
                          collection(db, "backgroundCheckRequests"),
                          where("email", "==", email),
                          where("status", "==", "approved")
                        );

                        const snapshot = await getDocs(q);
                        if (!snapshot.empty) {
                          const data = snapshot.docs[0].data();
                          setBgCheckData({
                            firstName: data.firstName || "",
                            lastName: data.lastName || "",
                            email: data.email || "",
                            phone: data.phone || "",
                            dateOfBirth: data.dateOfBirth || "",
                            ssn: data.ssn || "",
                            zipCode: data.zipCode || "",
                            driverLicenseNumber: data.driverLicenseNumber || "",
                            driverLicenseState: data.driverLicenseState || ""
                          });
                          setSelectedState(data.serviceState || "");
                          setBgCheckRequestId(snapshot.docs[0].id);
                          setBgCheckStatus("approved");
                          localStorage.setItem('providerSignupEmail', email);
                          toast.success("✅ Found your approved application!");
                          setTimeout(() => setCurrentStep(4), 100);
                        } else {
                          toast.info("No approved application found. Continue with new signup.");
                        }
                      } catch (error) {
                        console.error("Error checking email:", error);
                      } finally {
                        setCheckingExistingApplication(false);
                      }
                    }}
                  />
                </div>
              )}

              {!serviceStates.includes(selectedState) && selectedState ? (
                <div className="space-y-6">
                  <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 text-center">
                    <XCircle className="w-16 h-16 text-yellow-600 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-gray-900 mb-2">We're Not in Your Area Yet</h3>
                    <p className="text-gray-700 mb-4">
                      Unfortunately, we don't service{" "}
                      <strong>{states.find((s) => s.code === selectedState)?.name}</strong> yet.
                    </p>
                    <p className="text-gray-600 text-sm">
                      We're currently only operating in <strong>Missouri</strong> and <strong>Kansas</strong>.
                    </p>
                  </div>

                  {!newsletterSubmitted ? (
                    <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                      <h3 className="text-lg font-bold text-gray-900 mb-3 text-center">
                        Get Notified When We Launch!
                      </h3>
                      <p className="text-sm text-gray-700 mb-4 text-center">
                        Subscribe and we'll notify you when we expand to your state.
                      </p>

                      <form onSubmit={handleNewsletterSignup} className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            value={newsletterEmail}
                            onChange={(e) => setNewsletterEmail(e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D91429] focus:border-transparent"
                            placeholder="your.email@example.com"
                            required
                          />
                        </div>

                        <button
                          type="submit"
                          disabled={loading}
                          className="w-full bg-[#D91429] text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
                        >
                          {loading ? (
                            <>
                              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                              Subscribing...
                            </>
                          ) : (
                            <>
                              <Mail className="w-5 h-5" />
                              Subscribe to Updates
                            </>
                          )}
                        </button>
                      </form>
                    </div>
                  ) : (
                    <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
                      <CheckCircle2 className="w-16 h-16 text-green-600 mx-auto mb-4" />
                      <h3 className="text-xl font-bold text-gray-900 mb-2">You're on the List!</h3>
                      <p className="text-gray-700 mb-4">
                        We'll email <strong>{newsletterEmail}</strong> when we launch in your state.
                      </p>
                      <button
                        onClick={() => navigate("/login")}
                        className="text-[#D91429] font-semibold hover:underline"
                      >
                        Back to Login
                      </button>
                    </div>
                  )}

                  <div className="text-center">
                    <button
                      onClick={() => setSelectedState("")}
                      className="text-gray-600 hover:text-gray-800 text-sm flex items-center justify-center gap-2 mx-auto"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      Change State
                    </button>
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Which state do you live in? *
                    </label>
                    <select
                      value={selectedState}
                      onChange={(e) => setSelectedState(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D91429] focus:border-transparent text-lg"
                    >
                      <option value="">Select your state</option>
                      {states.map((state) => (
                        <option key={state.code} value={state.code}>
                          {state.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <p className="text-sm text-blue-800">
                      <strong>Currently serving:</strong> Missouri and Kansas
                    </p>
                  </div>

                  <button
                    onClick={handleLocationCheck}
                    disabled={!selectedState}
                    className="w-full bg-[#D91429] text-white py-4 rounded-xl font-semibold hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    Continue
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              )}
            </div>
          </div>
        );

      case 2:
        return (
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-10 h-10 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Background Check Required</h2>
                <p className="text-gray-600">
                  We need to verify your background before you can create an account. This typically
                  takes 3-5 business days.
                </p>
              </div>

              <form onSubmit={handleSubmitBackgroundCheck} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">First Name *</label>
                    <input
                      type="text"
                      value={bgCheckData.firstName}
                      onChange={(e) => setBgCheckData({ ...bgCheckData, firstName: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D91429] focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Last Name *</label>
                    <input
                      type="text"
                      value={bgCheckData.lastName}
                      onChange={(e) => setBgCheckData({ ...bgCheckData, lastName: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D91429] focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                    <input
                      type="email"
                      value={bgCheckData.email}
                      onChange={(e) => setBgCheckData({ ...bgCheckData, email: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D91429] focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone *</label>
                    <input
                      type="tel"
                      value={bgCheckData.phone}
                      onChange={(e) => setBgCheckData({ ...bgCheckData, phone: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D91429] focus:border-transparent"
                      placeholder="(555) 555-5555"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Date of Birth *</label>
                    <input
                      type="date"
                      value={bgCheckData.dateOfBirth}
                      onChange={(e) => setBgCheckData({ ...bgCheckData, dateOfBirth: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D91429] focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Social Security Number *</label>
                    <input
                      type="text"
                      value={bgCheckData.ssn}
                      onChange={(e) => setBgCheckData({ ...bgCheckData, ssn: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D91429] focus:border-transparent"
                      placeholder="XXX-XX-XXXX"
                      maxLength={11}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">ZIP Code *</label>
                  <input
                    type="text"
                    value={bgCheckData.zipCode}
                    onChange={(e) => setBgCheckData({ ...bgCheckData, zipCode: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D91429] focus:border-transparent"
                    placeholder="12345"
                    maxLength={10}
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Driver License Number *</label>
                    <input
                      type="text"
                      value={bgCheckData.driverLicenseNumber}
                      onChange={(e) =>
                        setBgCheckData({ ...bgCheckData, driverLicenseNumber: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D91429] focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">State *</label>
                    <input
                      type="text"
                      value={states.find((s) => s.code === selectedState)?.name || selectedState}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50"
                      disabled
                    />
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={consentGiven}
                      onChange={(e) => setConsentGiven(e.target.checked)}
                      className="mt-1 w-5 h-5 text-[#D91429] rounded focus:ring-[#D91429]"
                    />
                    <span className="text-sm text-gray-700">
                      I authorize Victorious Love Pro Clean to conduct a background check including criminal
                      history, identity verification, and motor vehicle records.
                    </span>
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={loading || !consentGiven}
                  className="w-full bg-[#D91429] text-white py-4 rounded-xl font-semibold hover:bg-red-700 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      Submitting...
                    </>
                  ) : (
                    <>
                      Submit Background Check
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        );

      case 3:
        return (
          <PullToRefresh
            onRefresh={handleRefresh}
            pullingContent={
              <div className="text-center py-4">
                <RefreshCw className="w-6 h-6 text-gray-400 mx-auto animate-spin" />
                <p className="text-sm text-gray-500 mt-2">Pull to check status...</p>
              </div>
            }
            refreshingContent={
              <div className="text-center py-4">
                <RefreshCw className="w-6 h-6 text-[#D91429] mx-auto animate-spin" />
                <p className="text-sm text-gray-600 mt-2">Checking status...</p>
              </div>
            }
            resistance={2}
          >
            <div className="max-w-md mx-auto min-h-[70vh]">
              <div className="bg-white rounded-2xl shadow-lg p-8">
                {bgCheckStatus === "pending" && (
                  <>
                    <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Clock className="w-10 h-10 text-yellow-600 animate-pulse" />
                    </div>
                    <h2 className="text-2xl font-bold text-center text-gray-900 mb-4">
                      Background Check In Progress
                    </h2>
                    <p className="text-center text-gray-600 mb-6">
                      We're reviewing your background check. This typically takes 3-5 business days.
                    </p>
                    
                    <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-4">
                      <div className="flex items-start gap-3">
                        <RefreshCw className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-sm font-semibold text-blue-900 mb-1">📱 Mobile tip</p>
                          <p className="text-sm text-blue-800">
                            Pull down to refresh and check if your background check has been approved
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 mb-4">
                      <div className="flex items-start gap-3">
                        <Mail className="w-5 h-5 text-gray-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-sm font-semibold text-gray-900 mb-1">We'll notify you by email</p>
                          <p className="text-sm text-gray-700">
                            You'll receive an email at <strong>{bgCheckData.email}</strong> once approved.
                          </p>
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={handleRefresh}
                      disabled={refreshing}
                      className="w-full py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
                    >
                      <RefreshCw className={`w-5 h-5 ${refreshing ? 'animate-spin' : ''}`} />
                      {refreshing ? "Checking..." : "Check Status Now"}
                    </button>
                  </>
                )}

                {bgCheckStatus === "approved" && (
                  <>
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="w-10 h-10 text-green-600" />
                    </div>
                    <h2 className="text-2xl font-bold text-center text-gray-900 mb-4">
                      Background Check Approved! ✅
                    </h2>
                    <p className="text-center text-gray-600 mb-6">
                      Great news! You can now continue with registration.
                    </p>
                    <button
                      onClick={handleProceedAfterBgCheck}
                      className="w-full bg-[#D91429] text-white py-4 rounded-xl font-semibold hover:bg-red-700 transition-colors flex items-center justify-center gap-2"
                    >
                      Continue to Registration
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </>
                )}

                {bgCheckStatus === "rejected" && (
                  <>
                    <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <XCircle className="w-10 h-10 text-red-600" />
                    </div>
                    <h2 className="text-2xl font-bold text-center text-gray-900 mb-4">
                      Background Check Not Approved
                    </h2>
                    <p className="text-center text-gray-600 mb-6">
                      Unfortunately, we were unable to approve your background check.
                    </p>
                    {bgCheckNotes && (
                      <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-6">
                        <p className="text-sm text-red-800">
                          <strong>Reason:</strong> {bgCheckNotes}
                        </p>
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>
          </PullToRefresh>
        );

      case 4:
        return (
          <div className="max-w-md mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-10 h-10 text-purple-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Create Your Account</h2>
                <p className="text-gray-600">Set up your password to continue</p>
              </div>

              <form onSubmit={handleCreateAccount} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    value={bgCheckData.email}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50"
                    disabled
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Password *</label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D91429] focus:border-transparent pr-12"
                      placeholder="Enter password"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600"
                    >
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password *</label>
                  <input
                    type={showPassword ? "text" : "password"}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D91429] focus:border-transparent"
                    placeholder="Confirm password"
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#D91429] text-white py-4 rounded-xl font-semibold hover:bg-red-700 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      Creating Account...
                    </>
                  ) : (
                    <>
                      Create Account
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="max-w-md mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              {!emailVerified ? (
                <>
                  <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Mail className="w-10 h-10 text-blue-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-center text-gray-900 mb-4">Verify Your Email</h2>
                  <p className="text-center text-gray-600 mb-6">
                    We sent a verification link to <strong>{bgCheckData.email}</strong>. Click it, then come back.
                  </p>
                  <button
                    onClick={handleCheckEmailVerification}
                    disabled={checkingEmail}
                    className="w-full bg-[#D91429] text-white py-4 rounded-xl font-semibold hover:bg-red-700 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
                  >
                    {checkingEmail ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        Checking...
                      </>
                    ) : (
                      <>
                        I've Verified My Email
                        <ArrowRight className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </>
              ) : (
                <>
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-10 h-10 text-green-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-center text-gray-900 mb-4">Email Verified! ✅</h2>
                  <p className="text-center text-gray-600 mb-6">Your email has been successfully verified.</p>
                </>
              )}
            </div>
          </div>
        );

      case 6:
        return (
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileSignature className="w-10 h-10 text-[#D91429]" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Independent Contractor Agreement</h2>
                <p className="text-gray-600">Please read the entire agreement carefully before accepting</p>
              </div>

              {loadingAgreement ? (
                <div className="flex items-center justify-center py-12">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#D91429]"></div>
                </div>
              ) : agreement ? (
                <>
                  <div
                    className="bg-gray-50 rounded-xl p-6 mb-6 max-h-96 overflow-y-auto border-2 border-gray-200"
                    onScroll={handleAgreementScroll}
                  >
                    <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">{agreement.title}</h3>
                    <p className="text-sm text-gray-600 text-center mb-6">
                      Version {agreement.version} | Effective: {agreement.effectiveDate}
                    </p>

                    <div className="prose prose-sm max-w-none whitespace-pre-wrap text-gray-800">
                      {agreement.content}
                    </div>
                  </div>

                  {!hasScrolledToBottom && (
                    <div className="mb-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                      <p className="text-sm text-yellow-800 text-center font-medium">
                        ⬇️ Please scroll to the bottom to read the entire agreement
                      </p>
                    </div>
                  )}

                  <div className="mb-6">
                    <label className="flex items-start gap-3 cursor-pointer p-4 bg-blue-50 rounded-lg border border-blue-200">
                      <input
                        type="checkbox"
                        checked={contractAccepted}
                        onChange={(e) => setContractAccepted(e.target.checked)}
                        disabled={!hasScrolledToBottom}
                        className="mt-1 w-5 h-5 text-[#D91429] rounded focus:ring-[#D91429] disabled:opacity-50"
                      />
                      <span className="text-sm text-gray-700">
                        <strong>I certify</strong> that I have read and understood the entire Independent Contractor
                        Agreement and agree to be legally bound by it.
                      </span>
                    </label>
                  </div>

                  <button
                    onClick={handleSignContract}
                    disabled={!contractAccepted || !hasScrolledToBottom || loading}
                    className="w-full bg-[#D91429] text-white py-4 rounded-xl font-semibold hover:bg-red-700 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        Signing...
                      </>
                    ) : (
                      <>
                        ✓ Accept and Sign Agreement
                        <ArrowRight className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </>
              ) : (
                <div className="text-center py-12">
                  <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
                  <p className="text-gray-600">Failed to load agreement. Please contact support.</p>
                </div>
              )}
            </div>
          </div>
        );

      case 7:
        return (
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Receipt className="w-10 h-10 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">IRS Form W-9</h2>
                <p className="text-gray-600">Final step - we need your tax information for 1099 reporting</p>
              </div>

              <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg flex items-start gap-3">
                <AlertCircle className="text-blue-600 flex-shrink-0 mt-0.5" size={20} />
                <div className="text-sm text-blue-800">
                  <p className="font-semibold">Why do I need to fill this out?</p>
                  <p className="mt-1">
                    As an independent contractor, we collect W-9 information to issue Form 1099-NEC if you earn $600+ in a calendar year.
                  </p>
                </div>
              </div>

              <form onSubmit={handleSubmitW9} className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-4 border-b pb-2">Part 1: Taxpayer Information</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Name (as shown on your income tax return) *</label>
                      <input
                        type="text"
                        value={w9Data.legalName}
                        onChange={(e) => setW9Data({ ...w9Data, legalName: e.target.value })}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#D91429] ${w9Errors.legalName ? "border-red-500" : "border-gray-300"}`}
                        placeholder="John Doe or ABC Cleaning LLC"
                      />
                      {w9Errors.legalName && <p className="text-red-600 text-xs mt-1">{w9Errors.legalName}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Business name/disregarded entity name (if different)</label>
                      <input
                        type="text"
                        value={w9Data.businessName}
                        onChange={(e) => setW9Data({ ...w9Data, businessName: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D91429]"
                        placeholder="DBA name (optional)"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Federal Tax Classification *</label>
                      <select
                        value={w9Data.taxClassification}
                        onChange={(e) => setW9Data({ ...w9Data, taxClassification: e.target.value })}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#D91429] ${w9Errors.taxClassification ? "border-red-500" : "border-gray-300"}`}
                      >
                        <option value="">Select classification</option>
                        <option value="individual">Individual/Sole Proprietor or Single-Member LLC</option>
                        <option value="c-corp">C Corporation</option>
                        <option value="s-corp">S Corporation</option>
                        <option value="partnership">Partnership</option>
                        <option value="trust-estate">Trust/Estate</option>
                        <option value="llc-c">LLC treated as C Corporation</option>
                        <option value="llc-s">LLC treated as S Corporation</option>
                        <option value="llc-p">LLC treated as Partnership</option>
                        <option value="other">Other</option>
                      </select>
                      {w9Errors.taxClassification && <p className="text-red-600 text-xs mt-1">{w9Errors.taxClassification}</p>}
                    </div>

                    {w9Data.taxClassification === "other" && (
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Specify other classification *</label>
                        <input
                          type="text"
                          value={w9Data.otherClassification}
                          onChange={(e) => setW9Data({ ...w9Data, otherClassification: e.target.value })}
                          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#D91429] ${w9Errors.otherClassification ? "border-red-500" : "border-gray-300"}`}
                        />
                        {w9Errors.otherClassification && <p className="text-red-600 text-xs mt-1">{w9Errors.otherClassification}</p>}
                      </div>
                    )}

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Exempt Payee Code (if any)</label>
                      <input
                        type="text"
                        value={w9Data.exemptPayeeCode}
                        onChange={(e) => setW9Data({ ...w9Data, exemptPayeeCode: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D91429]"
                        placeholder="Leave blank if not exempt"
                      />
                      <p className="text-xs text-gray-500 mt-1">Most independent contractors leave this blank</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-4 border-b pb-2">Part 2: Address</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Street Address *</label>
                      <input
                        type="text"
                        value={w9Data.addressLine1}
                        onChange={(e) => setW9Data({ ...w9Data, addressLine1: e.target.value })}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#D91429] ${w9Errors.addressLine1 ? "border-red-500" : "border-gray-300"}`}
                        placeholder="123 Main Street"
                      />
                      {w9Errors.addressLine1 && <p className="text-red-600 text-xs mt-1">{w9Errors.addressLine1}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Apartment, Suite, Unit (optional)</label>
                      <input
                        type="text"
                        value={w9Data.addressLine2}
                        onChange={(e) => setW9Data({ ...w9Data, addressLine2: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D91429]"
                        placeholder="Apt 4B"
                      />
                    </div>

                    <div className="grid grid-cols-3 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">City *</label>
                        <input
                          type="text"
                          value={w9Data.city}
                          onChange={(e) => setW9Data({ ...w9Data, city: e.target.value })}
                          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#D91429] ${w9Errors.city ? "border-red-500" : "border-gray-300"}`}
                          placeholder="St. Louis"
                        />
                        {w9Errors.city && <p className="text-red-600 text-xs mt-1">{w9Errors.city}</p>}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">State *</label>
                        <select
                          value={w9Data.state}
                          onChange={(e) => setW9Data({ ...w9Data, state: e.target.value })}
                          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#D91429] ${w9Errors.state ? "border-red-500" : "border-gray-300"}`}
                        >
                          <option value="">State</option>
                          {states.map((state) => (
                            <option key={state.code} value={state.code}>{state.code}</option>
                          ))}
                        </select>
                        {w9Errors.state && <p className="text-red-600 text-xs mt-1">{w9Errors.state}</p>}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">ZIP Code *</label>
                        <input
                          type="text"
                          value={w9Data.zipCode}
                          onChange={(e) => setW9Data({ ...w9Data, zipCode: e.target.value })}
                          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#D91429] ${w9Errors.zipCode ? "border-red-500" : "border-gray-300"}`}
                          placeholder="63021"
                          maxLength={10}
                        />
                        {w9Errors.zipCode && <p className="text-red-600 text-xs mt-1">{w9Errors.zipCode}</p>}
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-4 border-b pb-2">Part 3: Taxpayer Identification Number (TIN)</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Tax ID Type *</label>
                      <div className="flex gap-4">
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="taxIdType"
                            value="SSN"
                            checked={w9Data.taxIdType === "SSN"}
                            onChange={(e) => setW9Data({ ...w9Data, taxIdType: e.target.value as "SSN" | "EIN" })}
                            className="mr-2"
                          />
                          <span>Social Security Number (SSN)</span>
                        </label>
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="taxIdType"
                            value="EIN"
                            checked={w9Data.taxIdType === "EIN"}
                            onChange={(e) => setW9Data({ ...w9Data, taxIdType: e.target.value as "SSN" | "EIN" })}
                            className="mr-2"
                          />
                          <span>Employer ID Number (EIN)</span>
                        </label>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        {w9Data.taxIdType === "SSN" ? "Social Security Number" : "Employer ID Number"} *
                      </label>
                      <div className="relative">
                        <input
                          type={showTaxId ? "text" : "password"}
                          value={formatTaxId(w9Data.taxId, w9Data.taxIdType)}
                          onChange={(e) => setW9Data({ ...w9Data, taxId: e.target.value })}
                          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#D91429] pr-20 ${w9Errors.taxId ? "border-red-500" : "border-gray-300"}`}
                          placeholder={w9Data.taxIdType === "SSN" ? "XXX-XX-XXXX" : "XX-XXXXXXX"}
                          maxLength={w9Data.taxIdType === "SSN" ? 11 : 10}
                        />
                        <button
                          type="button"
                          onClick={() => setShowTaxId(!showTaxId)}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-blue-600 hover:text-blue-800"
                        >
                          {showTaxId ? <EyeOff size={20} /> : <Eye size={20} />}
                        </button>
                      </div>
                      {w9Errors.taxId && <p className="text-red-600 text-xs mt-1">{w9Errors.taxId}</p>}
                      <p className="text-xs text-gray-500 mt-1">🔒 Your {w9Data.taxIdType} is stored securely</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Part 4: Certification</h3>
                  <div className="text-sm text-gray-700 mb-4 space-y-2">
                    <p className="font-semibold">Under penalties of perjury, I certify that:</p>
                    <ol className="list-decimal pl-5 space-y-1">
                      <li>The number shown on this form is my correct taxpayer identification number, and</li>
                      <li>I am not subject to backup withholding, and</li>
                      <li>I am a U.S. citizen or other U.S. person, and</li>
                      <li>The FATCA code(s) entered on this form (if any) is correct.</li>
                    </ol>
                  </div>
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={w9Data.certificationAgreed}
                      onChange={(e) => setW9Data({ ...w9Data, certificationAgreed: e.target.checked })}
                      className={`mt-1 w-5 h-5 ${w9Errors.certificationAgreed ? "border-red-500" : ""}`}
                    />
                    <span className="text-sm text-gray-700">
                      <strong>I certify</strong> that the information provided above is true, correct, and complete.
                      I understand this serves as my electronic signature.
                    </span>
                  </label>
                  {w9Errors.certificationAgreed && <p className="text-red-600 text-xs mt-2">{w9Errors.certificationAgreed}</p>}
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#D91429] text-white py-4 rounded-xl font-semibold hover:bg-red-700 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      Completing...
                    </>
                  ) : (
                    <>
                      <PartyPopper className="w-5 h-5" />
                      Complete Registration
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-pink-50">
      <div className="bg-gradient-to-r from-[#D91429] to-red-600 text-white p-6 shadow-lg">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {currentStep > 1 && currentStep !== 3 && (
              <button
                onClick={() => setCurrentStep(currentStep - 1)}
                className="p-2 hover:bg-white/20 rounded-lg transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
            )}
            <div>
              <h1 className="text-2xl font-bold">Provider Registration</h1>
              <p className="text-red-100 text-sm">Step {currentStep} of {totalSteps}</p>
            </div>
          </div>
          <button onClick={() => navigate("/login")} className="text-sm hover:text-red-100">
            Already have an account? Login
          </button>
        </div>
        <div className="mt-4 bg-white/20 rounded-full h-2">
          <div
            className="bg-white h-2 rounded-full transition-all duration-500"
            style={{ width: `${(currentStep / totalSteps) * 100}%` }}
          />
        </div>
      </div>
      <div className="p-6">{renderStep()}</div>
    </div>
  );
}
