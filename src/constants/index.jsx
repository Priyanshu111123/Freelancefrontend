import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";

// import user1 from "../assets/profile-pictures/user1.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "Explore", href: "#" },
  { label: "Find Jobs", href: "#" },
  { label: "Features", href: "#" },
  { label: "About Us", href: "#" },
];

export const testimonials = [
 
  {
    user: "Priyanshu Raj",
    company: "Web Development",
    image: user6,
    text: "The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future.",
  },
];

export const features = [
  {
    icon: <BotMessageSquare />,
    text: "Start Community",
    description:
      "Members enjoy exclusive events and networking in a supportive environment. Start Community empowers entrepreneurs, creatives, and enthusiasts to connect and succeed together",
  },
  {
    icon: <Fingerprint />,
    text: "Verify Yourself",
    description:
      "Facial recognition technology-It ensures only authorized individuals access sensitive information. Face verification enhances security and provides a seamless user experience.",
  },
  {
    icon: <ShieldHalf />,
    text: "Pay Safely",
    description:
      "Advanced encryption protects your financial information, minimizing risks during online payments. Enjoy a seamless and worry-free payment experience every time.",
  },
  {
    icon: <BatteryCharging />,
    text: "Review Working Status",
    description:
      "This feature offers insights into performance and productivity, helping identify improvement areas. Stay informed and on track with regular updates on your working status.",
  },
  {
    icon: <PlugZap />,
    text: "Be In Control",
    description:
      "Enjoy a customizable experience that enhances flexibility and control.",
  },
  {
    icon: <GlobeLock />,
    text: "Secure Connection",
    description:
      "This feature safeguards sensitive information during online interactions, fostering trust and providing peace of mind.",
  },
];

export const checklistItems = [
  {
    title: "Code merge made easy",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Review code without worry",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "AI Assistance to reduce time",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Share work in minutes",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
];

export const pricingOptions = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Private board sharing",
      "5 Gb Storage",
      "Web Analytics",
      "Private Mode",
    ],
  },
  {
    title: "Pro",
    price: "$10",
    features: [
      "Private board sharing",
      "10 Gb Storage",
      "Web Analytics (Advance)",
      "Private Mode",
    ],
  },
  {
    title: "Enterprise",
    price: "$200",
    features: [
      "Private board sharing",
      "Unlimited Storage",
      "High Performance Network",
      "Private Mode",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];
