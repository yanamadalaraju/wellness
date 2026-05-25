import React from "react";
import { motion } from "framer-motion";
import {
  Heart,
  Leaf,
  Sparkles,
  Flower2,
  Trees,
  Waves,
  Sun,
  MoonStar,
  CheckCircle2,
} from "lucide-react";
import CoupleRetreatSection from "./blogcompo/CoupleRetreatSection";

const sections = [
  {
    title: "A Human Vision Behind Every Stay",
    content:
      "Nowal NatureCare was created with a simple but powerful vision — to combine natural healing, Rajasthan hospitality, and mindful living in one peaceful destination.",
  },
  {
    title: "Does This Sound Familiar?",
    content:
      "Modern life quietly erodes the things that matter most. Burnout, relationship disconnect, and digital overload create distance between couples.",
  },
  {
    title: "Located Just 90 Minutes from Jaipur",
    content:
      "Nestled near the serene foothills of the Aravalli range, Nowal NatureCare feels worlds away from the chaos of city life.",
  },
  {
    title: "Why Choose a Luxury Wellness Retreat?",
    content:
      "Unlike ordinary vacations that leave you exhausted, wellness retreats are designed for deep restoration and meaningful reconnection.",
  },
];

const retreatDays = [
  {
    day: "Day One — Arrive & Detox",
    icon: <Leaf className="w-6 h-6" />,
    items: [
      "Welcome naturopathy consultation",
      "Mud therapy & hydrotherapy",
      "Couple Ayurvedic massage",
      "Organic wellness dinner",
      "Botanical garden walk",
    ],
  },
  {
    day: "Day Two — Reconnect & Restore",
    icon: <Sun className="w-6 h-6" />,
    items: [
      "Private sunrise yoga",
      "Panchakarma detox therapy",
      "Infinity pool experience",
      "Hydrotherapy circuit",
      "Candlelight dinner",
    ],
  },
  {
    day: "Day Three — Integrate & Carry Home",
    icon: <MoonStar className="w-6 h-6" />,
    items: [
      "Nature walk in Aravallis",
      "Village artisan experience",
      "Closing consultation",
      "Stress management workshop",
      "Organic farewell brunch",
    ],
  },
];

const offerings = [
  "Ayurveda & Panchakarma",
  "Luxury Eco Suites",
  "Hydrotherapy",
  "Private Yoga",
  "Organic Dining",
  "Botanical Healing",
  "Stress Management",
  "Holistic Detox",
];

export default function CoupleRetreatBlogPage() {
  return (
    <div className="bg-[#faf7f2] text-[#3a2e24] min-h-screen">
      {/* HERO SECTION */}
    

       <CoupleRetreatSection />

      
    </div>
  );
}