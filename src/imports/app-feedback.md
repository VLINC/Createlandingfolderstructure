src/App.tsx
v3
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Assistance from "./components/Assistance";
import BookingFlow from "./components/BookingFlow";
src/components/Hero.tsx
v3
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section
      className="bg-gray-50 py-20 px-6 text-center fade-in mt-16"
src/components/Header.tsx
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const [open, setOpen] = useState(false);
src/components/BookingFlow.tsx
import { Calendar, CheckCircle, Sparkles } from "lucide-react";

export default function BookingFlow() {
  const steps = [
    {
      icon: Calendar,
src/components/CTA.tsx
import { Link } from "react-router-dom";

export default function CTA() {
  return (
    <section
      className="py-20 px-6 bg-[#D91429] text-white text-center fade-in"
Two things to fix/confirm before you ship this:

Header and Footer placement: In App.tsx you render <Footer /> outside <main>, but <Header /> is inside <main>. That’s not wrong, but most sites do Header outside main so “Skip to main content” truly skips the header/nav. If you want that, move <Header /> above <main>.

Since this is a providers + customers signup portal, the external redirect to https://app.procleanvlinc.com/login is OK short-term, but long-term you’ll probably replace it with internal routes:

/login
/signup/customer
/signup/provider (or keep /apply)
If you answer these, I’ll map the exact next steps (still keeping your marketing sections):

Auth method: email/password, Google, or both?
Provider approval: required or instant?
Which domain will host this app? (victorious-landing-site.web.app, app.procleanvlinc.com, etc.)