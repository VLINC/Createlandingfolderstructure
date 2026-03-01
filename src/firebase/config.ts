import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Check if environment variables are loaded
if (typeof import.meta.env.VITE_FIREBASE_API_KEY === 'undefined') {
  console.error('⚠️ FIREBASE CONFIG ERROR ⚠️');
  console.error('Environment variables are not loaded.');
  console.error('Please create a .env file in the root directory with your Firebase configuration.');
  console.error('See .env.example for the required variables.');
  throw new Error('Missing Firebase environment variables. Create a .env file with VITE_FIREBASE_* variables.');
}

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY as string | undefined,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN as string | undefined,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID as string | undefined,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET as string | undefined,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID as string | undefined,
  appId: import.meta.env.VITE_FIREBASE_APP_ID as string | undefined,
};

const requiredKeys: (keyof typeof firebaseConfig)[] = [
  "apiKey",
  "authDomain",
  "projectId",
  "storageBucket",
  "messagingSenderId",
  "appId",
];

for (const key of requiredKeys) {
  if (!firebaseConfig[key]) {
    throw new Error(`Missing Firebase env var for ${key}. Check your VITE_FIREBASE_* variables.`);
  }
}

const app = initializeApp(firebaseConfig as Required<typeof firebaseConfig>);

export const auth = getAuth(app);
export const db = getFirestore(app);