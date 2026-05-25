import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  Heart,
  Leaf,
  Sparkles,
  Trees,
  ArrowRight,
  MapPin,
  BatteryCharging,
  Users,
  Smartphone,
  Quote,
  Calendar,
  Gift,
  Clock,
  Compass,
  Diamond,
  Shield,
  Sun,
  Moon,
  SunDim,
  Activity,
  Flower,
  UtensilsCrossed,
  Salad,
  CandlestickChart,
  ChefHat,
  PhoneCall,
  Droplet,
  Wind,
  Hotel,
  BookOpen,
  Sparkle,
  Award,
  Sprout,
  SunMedium,
  Recycle,
  Sunset,
  Home as HomeIcon,
  HelpCircle,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { Helmet } from "react-helmet-async";

export default function CoupleRetreatSection() {
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = React.useState<number | null>(null);

  const faqs = [
    {
      question: "What is included in a couple wellness retreat at Nowal NatureCare?",
      answer: "The retreat typically includes luxury accommodation, holistic wellness consultations, and organic vegetarian meals. Couples have access to various therapies including Ayurveda, Naturopathy, acupuncture, and physiotherapy. The package also features daily yoga and meditation sessions, use of the outdoor swimming pool, fitness center, and steam/sauna facilities."
    },
    {
      question: "What is the best time to visit Nowal NatureCare near Jaipur?",
      answer: "The ideal time to visit is during the winter months, from October to March. During this period, the weather is pleasant and cool, making it perfect for outdoor yoga and relaxing in the gardens. Monsoon (July to September) is also a beautiful time as the lush greenery of the resort comes alive."
    },
    {
      question: "What is the recommended duration for a couple's retreat?",
      answer: "While the resort allows for single-day stays, a duration of 3 to 5 days is recommended to fully experience the benefits of the naturopathy and wellness programs. This allows enough time for the body to detoxify and for couples to deeply engage with the guided meditation and therapy schedules."
    },
    {
      question: "How far is Nowal NatureCare from Jaipur, and how do we get there?",
      answer: "The resort is located approximately 60–70 km from Jaipur in the Renwal region (near Khatu Shyam Ji). The most convenient way to reach the property is by private taxi or car, which takes about 1.5 to 2 hours. It is also accessible via local trains to the nearby Badhal Station, followed by a short 15-minute drive."
    }
  ];

  const handleNavigateToContact = () => {
    navigate("/contact");
    window.scrollTo(0, 0);
  };

  return (
    <>
      {/* Meta Tags for SEO */}
      <Helmet>
        <title>Top Couple Retreats Near Jaipur You'll Love | Nowal NatureCare</title>
        <meta name="description" content="Plan the perfect romantic getaway near Jaipur with Nowal NatureCare Rajasthan's premier destination for naturopathy, Ayurveda, and luxury wellness. A rare sanctuary for reconnection and natural healing, on the Khatu Shyam ji / Salasar route. Book your couple's retreat today." />
      </Helmet>

      <section className="relative overflow-hidden bg-[#f8f5ef]">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#f9f6f1] via-[#f3ece2] to-[#ede1cf]" />
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#b88646]/10 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-0 w-[30rem] h-[30rem] bg-[#d6b27a]/10 blur-3xl rounded-full" />

        {/* HERO BANNER IMAGE WITH HEADING */}
        <div className="relative z-10 w-full h-[70vh] md:h-[80vh] lg:h-[90vh] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070&auto=format&fit=crop"
            alt="Luxury Couple Retreat Banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#f8f5ef] via-[#f8f5ef]/20 to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center text-center px-6">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.2] text-white max-w-4xl drop-shadow-2xl">
              How to Plan the Perfect Couple Retreat Near Jaipur
            </h1>
          </div>
        </div>

        {/* CONTENT WRAPPER */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-0 -mt-8">
          <div className="grid lg:grid-cols-2 gap-8 items-stretch">
            {/* LEFT CONTENT */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white/50 backdrop-blur-sm rounded-[40px] p-8 -mt-16 flex flex-col h-full"
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white border border-[#eadcc8] shadow-sm w-fit">
                <Heart className="w-4 h-4 text-[#b88646]" />
                <span className="text-sm font-semibold tracking-wide text-[#b88646]">
                  Luxury Couple Wellness Retreat
                </span>
              </div>

              {/* Quote */}
              <div className="mt-8 border-l-4 border-[#b88646] pl-6">
                <p className="italic text-[#43382d] text-xl leading-8">
                  “More than a getaway — a sanctuary for healing, reconnection,
                  mindful living, and authentic Rajasthan hospitality.”
                </p>
              </div>

              {/* Human Vision Section */}
              <div className="mt-8 flex-grow">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#b88646]/10 flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-5 h-5 text-[#b88646]" />
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-[3px] text-[#b88646] font-semibold">
                      Our Philosophy
                    </p>
                    <h3 className="text-2xl font-bold text-[#241c15] mt-1">
                      A Human Vision Behind Every Stay
                    </h3>
                  </div>
                </div>

                <p className="mt-5 text-base leading-7 text-[#5f5448]">
                  Nowal NatureCare was created with a simple but powerful vision —
                  to combine natural healing, Rajasthan hospitality, and mindful
                  living in one peaceful destination.
                </p>

                <p className="mt-3 text-base leading-7 text-[#5f5448]">
                  We are not a spa resort. We are a destination for reconnection
                  and natural healing, rooted in what makes this land truly
                  extraordinary.
                </p>

                {/* Features Grid */}
                <div className="grid sm:grid-cols-2 gap-3 mt-6">
                  {/* Card 1 */}
                  <div className="group bg-white border border-[#eadcc8] rounded-2xl p-4 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                    <div className="w-10 h-10 rounded-xl bg-[#f5ebdd] flex items-center justify-center text-[#b88646]">
                      <Leaf className="w-5 h-5" />
                    </div>
                    <h4 className="mt-3 text-base font-bold text-[#241c15]">
                      Traditional Healing
                    </h4>
                    <p className="mt-1 text-[#5f5448] leading-5 text-xs">
                      Ayurveda, naturopathy, and ancient Rajasthani wellness wisdom.
                    </p>
                  </div>

                  {/* Card 2 */}
                  <div className="group bg-white border border-[#eadcc8] rounded-2xl p-4 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                    <div className="w-10 h-10 rounded-xl bg-[#f5ebdd] flex items-center justify-center text-[#b88646]">
                      <Trees className="w-5 h-5" />
                    </div>
                    <h4 className="mt-3 text-base font-bold text-[#241c15]">
                      Slow Living
                    </h4>
                    <p className="mt-1 text-[#5f5448] leading-5 text-xs">
                      No digital noise — only open skies and the rhythm of nature.
                    </p>
                  </div>

                  {/* Card 3 */}
                  <div className="group bg-white border border-[#eadcc8] rounded-2xl p-4 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                    <div className="w-10 h-10 rounded-xl bg-[#f5ebdd] flex items-center justify-center text-[#b88646]">
                      <Heart className="w-5 h-5" />
                    </div>
                    <h4 className="mt-3 text-base font-bold text-[#241c15]">
                      Family Hospitality
                    </h4>
                    <p className="mt-1 text-[#5f5448] leading-5 text-xs">
                      Warm, personal care that creates deeply human experiences.
                    </p>
                  </div>

                  {/* Card 4 */}
                  <div className="group bg-white border border-[#eadcc8] rounded-2xl p-4 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                    <div className="w-10 h-10 rounded-xl bg-[#f5ebdd] flex items-center justify-center text-[#b88646]">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <h4 className="mt-3 text-base font-bold text-[#241c15]">
                      Spiritual Rajasthan
                    </h4>
                    <p className="mt-1 text-[#5f5448] leading-5 text-xs">
                      Near Khatu Shyam Ji & Salasar Balaji for spiritual calm.
                    </p>
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-6 flex flex-wrap gap-3">
                  <button 
                    onClick={handleNavigateToContact}
                    className="group inline-flex items-center gap-2 bg-[#b88646] hover:bg-[#a17237] text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all shadow-lg"
                  >
                    Reserve Your Retreat
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button 
                    onClick={handleNavigateToContact}
                    className="px-5 py-2.5 rounded-full border border-[#d8c4aa] text-[#3a2f25] hover:bg-white transition-all text-sm font-medium"
                  >
                    Explore Wellness
                  </button>
                </div>
              </div>
            </motion.div>

            {/* RIGHT CONTENT */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white/50 backdrop-blur-sm rounded-[40px] p-8 -mt-16 flex flex-col h-full"
            >
              <div className="flex-grow flex flex-col">
                <p className="text-base leading-7 text-[#5f5448]">
                  In a world that rarely slows down, the ultimate luxury is time —
                  specifically, time spent reconnecting with your partner away from
                  the digital noise and daily grind.
                </p>

                <p className="mt-4 text-base leading-7 text-[#5f5448]">
                  Choosing the best couple wellness retreat near Jaipur is more than
                  selecting accommodation; it is about discovering a sanctuary that
                  nurtures intimacy, healing, and emotional restoration.
                </p>

                <p className="mt-4 text-base leading-7 text-[#5f5448]">
                  Nestled near the Pink City,
                  <span className="font-semibold text-[#b88646]">
                    {" "}Nowal NatureCare
                  </span>{" "}
                  offers a seamless blend of heritage-inspired grandeur, authentic
                  naturopathy, and modern tranquility — the perfect setting for a
                  transformative romantic escape.
                </p>

                {/* Floating Card */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.7 }}
                  viewport={{ once: true }}
                  className="mt-6 bg-[#f5ebdd] rounded-2xl p-5 border border-[#eadcc8]"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center flex-shrink-0 shadow-md">
                      <Heart className="text-[#b88646] w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-[#241c15]">
                        A Sanctuary for Reconnection
                      </h4>
                      <p className="mt-1 text-[#5f5448] leading-6 text-sm">
                        Rooted in healing traditions, mindful living, and heartfelt
                        hospitality — where couples rediscover peace, balance, and
                        meaningful connection together.
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* IMAGE AT BOTTOM */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="mt-6 overflow-hidden rounded-2xl shadow-lg"
                >
                  <img
                    src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2070&auto=format&fit=crop"
                    alt="Couple enjoying wellness retreat"
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* SECTION - Does This Sound Familiar? */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="mt-16 mb-8"
          >
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-[#241c15]">
                Does This Sound Familiar?
              </h2>
              <p className="mt-3 text-lg text-[#5f5448] max-w-2xl mx-auto">
                Modern life is quietly eroding the things that matter most. You deserve a reset together.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Burnout Card */}
              <div className="group bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-[#eadcc8] hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-14 h-14 rounded-xl bg-[#b88646]/10 flex items-center justify-center mb-4">
                  <BatteryCharging className="w-7 h-7 text-[#b88646]" />
                </div>
                <h3 className="text-xl font-bold text-[#241c15]">Burnout</h3>
                <p className="mt-2 text-[#5f5448] leading-6">
                  Running on empty, physically and mentally drained, with nothing left to give your partner at the end of the day.
                </p>
              </div>

              {/* Relationship Disconnect Card */}
              <div className="group bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-[#eadcc8] hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-14 h-14 rounded-xl bg-[#b88646]/10 flex items-center justify-center mb-4">
                  <Users className="w-7 h-7 text-[#b88646]" />
                </div>
                <h3 className="text-xl font-bold text-[#241c15]">Relationship Disconnect</h3>
                <p className="mt-2 text-[#5f5448] leading-6">
                  Living parallel lives — busy schedules, shallow conversations, and a creeping distance that neither of you planned.
                </p>
              </div>

              {/* Digital Overload Card */}
              <div className="group bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-[#eadcc8] hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-14 h-14 rounded-xl bg-[#b88646]/10 flex items-center justify-center mb-4">
                  <Smartphone className="w-7 h-7 text-[#b88646]" />
                </div>
                <h3 className="text-xl font-bold text-[#241c15]">Digital Overload</h3>
                <p className="mt-2 text-[#5f5448] leading-6">
                  Screens before sleep, notifications at dinner, and the constant pull of a world that never lets you truly be present.
                </p>
              </div>
            </div>

            {/* Quote Section */}
            <div className="mt-10 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#b88646]/10 mb-4">
                <Quote className="w-6 h-6 text-[#b88646]" />
              </div>
              <p className="text-xl md:text-2xl italic text-[#43382d] max-w-3xl mx-auto leading-relaxed">
                "Planning a retreat of this caliber requires a shift in mindset — from 'vacationing' to 'healing.' Intentionality turns a holiday into a homecoming to yourselves."
              </p>
            </div>
          </motion.div>

          {/* SECTION - Why Choose a Luxury Wellness Retreat? with 2 Images */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="mt-16 mb-8"
          >
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#eadcc8] shadow-sm mb-4">
                <Diamond className="w-4 h-4 text-[#b88646]" />
                <span className="text-sm font-semibold tracking-wide text-[#b88646]">
                  Why Choose Us
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#241c15]">
                Why Choose a Luxury Wellness Retreat?
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-10 items-center">
              {/* Left Side - Images (2 images stacked) */}
              <div className="space-y-5">
                <div className="overflow-hidden rounded-2xl shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2070&auto=format&fit=crop"
                    alt="Luxury wellness retreat courtyard"
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="overflow-hidden rounded-2xl shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2070&auto=format&fit=crop"
                    alt="Couple enjoying wellness retreat together"
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>

              {/* Right Side - Content */}
              <div className="space-y-5">
                <p className="text-base leading-7 text-[#5f5448]">
                  A couple's getaway shouldn't just be a change of scenery, it should be a transformative journey. The best luxury wellness retreats near Jaipur ensure your time together is genuinely balanced. While traditional holidays often leave you exhausted, a wellness-focused itinerary ensures you return to life feeling lighter, more aligned, and deeply reconnected.
                </p>
                <p className="text-base leading-7 text-[#5f5448]">
                  Jaipur's regal history and serene outskirts provide an unparalleled backdrop. The moment you arrive, the mind begins to decompress. Architecture mirrors the soul of the land: vast courtyards, intricate stone carvings, and lush medicinal gardens that invite slow walks and even slower conversations.
                </p>
                <div className="flex items-center gap-3 pt-2">
                  <div className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-[#b88646]" />
                    <span className="text-sm text-[#5f5448]">Transformative Journey</span>
                  </div>
                  <div className="w-1 h-1 rounded-full bg-[#b88646]" />
                  <div className="flex items-center gap-2">
                    <Heart className="w-5 h-5 text-[#b88646]" />
                    <span className="text-sm text-[#5f5448]">Deeply Reconnected</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* SECTION - Signature 3-Day Couple Retreat Plan */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="mt-16 mb-8"
          >
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#eadcc8] shadow-sm mb-4">
                <Calendar className="w-4 h-4 text-[#b88646]" />
                <span className="text-sm font-semibold tracking-wide text-[#b88646]">
                  Your Journey
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#241c15]">
                Our Signature 3-Day Couple Retreat Plan
              </h2>
              <p className="mt-4 text-lg text-[#5f5448] max-w-2xl mx-auto">
                A carefully curated rhythm — not a schedule — designed to carry you from depletion to renewal
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Day One */}
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl border border-[#eadcc8] overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="bg-gradient-to-r from-[#b88646] to-[#a17237] px-6 py-4">
                  <div className="flex items-center gap-2">
                    <Sun className="w-5 h-5 text-white" />
                    <h3 className="text-xl font-bold text-white">Day One</h3>
                  </div>
                  <p className="text-white/90 text-sm mt-1">Arrive & Detox</p>
                </div>
                <div className="p-6 space-y-3">
                  {[
                    "Welcome Naturopathy Consultation — personalised health roadmap by certified experts",
                    "Mud Therapy & Hydrotherapy — ancient healing techniques in a luxurious modern setting",
                    "Abhyanga Ayurvedic Oil Massage — synchronized couple session to melt stored tension",
                    "Organic Farm-to-Fork Dinner — alkalizing thali curated for your dosha types",
                    "Evening Botanical Walk — guided tour through our medicinal gardens",
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <Leaf className="w-4 h-4 text-[#b88646] mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-[#5f5448] leading-6">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Day Two */}
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl border border-[#eadcc8] overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="bg-gradient-to-r from-[#b88646] to-[#a17237] px-6 py-4">
                  <div className="flex items-center gap-2">
                    <SunDim className="w-5 h-5 text-white" />
                    <h3 className="text-xl font-bold text-white">Day Two</h3>
                  </div>
                  <p className="text-white/90 text-sm mt-1">Reconnect & Restore</p>
                </div>
                <div className="p-6 space-y-3">
                  {[
                    "Private Sunrise Yoga — guided asana & pranayama as mist clears over the Aravallis",
                    "Panchakarma Detox Session — deep cleansing therapy tailored to each partner",
                    "Infinity Pool & Cold-Pressed Juices — let the afternoon slip by without a glance at a watch",
                    "Hydrotherapy Circuit — shared thermal journey that deepens empathetic connection",
                    "Candlelit Dinner Under the Rajasthani Sky — a sensory experience, not just a meal",
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <Activity className="w-4 h-4 text-[#b88646] mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-[#5f5448] leading-6">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Day Three */}
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl border border-[#eadcc8] overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="bg-gradient-to-r from-[#b88646] to-[#a17237] px-6 py-4">
                  <div className="flex items-center gap-2">
                    <Moon className="w-5 h-5 text-white" />
                    <h3 className="text-xl font-bold text-white">Day Three</h3>
                  </div>
                  <p className="text-white/90 text-sm mt-1">Integrate & Carry Home</p>
                </div>
                <div className="p-6 space-y-3">
                  {[
                    "Guided Aravalli Nature Walk — foothills trail with our naturalist guide",
                    "Village Artisan Visit — optional soft adventure to Shekhawati heritage village",
                    "Closing Naturopathy Consultation — take-home wellness plan & lifestyle tools",
                    "Stress Management Workshop — carry the peace of the retreat into daily life",
                    "Farewell Organic Brunch — a final nourishing meal from our kitchen garden",
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <Flower className="w-4 h-4 text-[#b88646] mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-[#5f5448] leading-6">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Note */}
            <div className="mt-8 text-center">
              <div className="inline-flex items-center gap-2 text-[#b88646] bg-white/50 rounded-full px-4 py-2">
                <Heart className="w-4 h-4" />
                <span className="text-sm font-medium">All experiences are customizable to your preferences</span>
              </div>
            </div>
          </motion.div>

          {/* SECTION - Food as Medicine, Dining as Memory with 2 Images */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="mt-16 mb-8"
          >
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#eadcc8] shadow-sm mb-4">
                <UtensilsCrossed className="w-4 h-4 text-[#b88646]" />
                <span className="text-sm font-semibold tracking-wide text-[#b88646]">
                  Farm to Fork
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#241c15]">
                Food as Medicine, Dining as Memory
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-10 items-center">
              {/* Left Side - Content */}
              <div className="space-y-5">
                <p className="text-base leading-7 text-[#5f5448]">
                  At Nowal NatureCare, we believe food is a vital pillar of health. Forget heavy buffet lines. Instead, experience "farm-to-fork" dining where every ingredient is sourced from our own certified organic gardens or local sustainable farms. Menus are curated to balance the five elements, ensuring you feel energized rather than sluggish.
                </p>
                <p className="text-base leading-7 text-[#5f5448]">
                  Candlelit dinners under the vast Rajasthani sky offer more than a meal; they provide a multi-sensory experience. From traditional flavors refined with Ayurvedic wisdom to international wellness cuisine, every bite is designed to support your vitality and deepen your shared experience.
                </p>
                <div className="flex items-center gap-3 pt-2">
                  <div className="flex items-center gap-2">
                    <Salad className="w-5 h-5 text-[#b88646]" />
                    <span className="text-sm text-[#5f5448]">Organic Farm-to-Fork</span>
                  </div>
                  <div className="w-1 h-1 rounded-full bg-[#b88646]" />
                  <div className="flex items-center gap-2">
                    <CandlestickChart className="w-5 h-5 text-[#b88646]" />
                    <span className="text-sm text-[#5f5448]">Candlelit Dinners</span>
                  </div>
                </div>
              </div>

              {/* Right Side - Images (2 images stacked) */}
              <div className="space-y-5">
                <div className="overflow-hidden rounded-2xl shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1543353071-10c8ba85a904?q=80&w=2070&auto=format&fit=crop"
                    alt="Farm-to-fork organic dining experience"
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="overflow-hidden rounded-2xl shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop"
                    alt="Candlelit dinner under the Rajasthani sky"
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* CTA SECTION - Taste the Retreat Before You Arrive */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-8 mb-8 text-center"
          >
            <div className="bg-gradient-to-br from-[#b88646]/20 to-[#d6b27a]/20 rounded-3xl p-10 md:p-12 shadow-xl border border-[#b88646]/30">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#b88646] mb-6">
                <ChefHat className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#241c15] mb-3">
                Taste the Retreat Before You Arrive
              </h2>
              <p className="text-lg md:text-xl text-[#5f5448] mb-8">
                Ask us about our seasonal menus and dietary customisations.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <button 
                  onClick={handleNavigateToContact}
                  className="group inline-flex items-center gap-2 bg-[#b88646] hover:bg-[#a17237] text-white px-8 py-4 rounded-full text-base md:text-lg font-semibold transition-all shadow-xl hover:shadow-2xl"
                >
                  BOOK YOUR COUPLE RETREAT
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button 
                  onClick={handleNavigateToContact}
                  className="group inline-flex items-center gap-2 bg-white border-2 border-[#b88646] text-[#b88646] hover:bg-[#b88646] hover:text-white px-8 py-4 rounded-full text-base md:text-lg font-semibold transition-all shadow-md"
                >
                  <PhoneCall className="w-5 h-5" />
                  SCHEDULE A WELLNESS CONSULTATION
                </button>
              </div>
            </div>
          </motion.div>

          {/* SECTION - Detox the Body. Reconnect the Bond. */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="mt-16 mb-8"
          >
            <div className="grid md:grid-cols-2 gap-10 items-center">
              {/* Left Side - Content */}
              <div className="space-y-5">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#eadcc8] shadow-sm mb-2">
                  <Droplet className="w-4 h-4 text-[#b88646]" />
                  <span className="text-sm font-semibold tracking-wide text-[#b88646]">
                    Healing Therapies
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#241c15]">
                  Detox the Body. Reconnect the Bond.
                </h2>
                <p className="text-base leading-7 text-[#5f5448]">
                  No luxury escape is complete without the therapeutic touch of world-class experts. Our therapies are guided by certified naturopathy treatment experts with 10+ years of clinical experience, ensuring every session is both evidence-based and deeply restorative.
                </p>
                <p className="text-base leading-7 text-[#5f5448]">
                  Rather than choosing from a standard menu, couples receive bespoke synchronized massages using traditional Ayurvedic oils, rejuvenating floral baths, and Panchakarma protocols precisely calibrated to your constitution. Moving through our thermal suite or hydrotherapy circuit together, the shared relaxation deepens your empathetic connection. Words aren't necessary. The silence is restorative.
                </p>
                <div className="mt-4 p-4 bg-white/50 rounded-xl border-l-4 border-[#b88646]">
                  <p className="italic text-[#43382d] text-base leading-7">
                    "The goal of these therapies is detoxification — not just of the body, but of the stresses modern life places on a relationship."
                  </p>
                </div>
              </div>

              {/* Right Side - Services Grid */}
              <div>
                <h3 className="text-xl font-bold text-[#241c15] mb-4 flex items-center gap-2">
                  <Sparkle className="w-5 h-5 text-[#b88646]" />
                  Everything We Offer You
                </h3>
                <p className="text-sm text-[#5f5448] mb-4">
                  A suite of services refined for the most discerning couples.
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    "Ayurveda & Panchakarma",
                    "Bespoke Naturopathy Consultations",
                    "Hydrotherapy & Mud Treatments",
                    "Private Yoga & Meditation Pavilions",
                    "Organic Gourmet Dining",
                    "Luxury Eco-Suites",
                    "Botanical Therapy",
                    "Holistic Detox Programs",
                    "Stress Management Workshops",
                  ].map((service, idx) => (
                    <div key={idx} className="flex items-center gap-2 bg-white/50 rounded-lg p-2 border border-[#eadcc8]">
                      <Wind className="w-3 h-3 text-[#b88646]" />
                      <span className="text-xs text-[#5f5448]">{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* CTA SECTION - Explore All Retreat Packages */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-8 mb-8 text-center"
          >
            <div className="bg-gradient-to-br from-[#b88646] to-[#a17237] rounded-3xl p-10 md:p-12 shadow-2xl">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm mb-6">
                <Hotel className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3">
                Explore All Retreat Packages
              </h2>
              <p className="text-lg md:text-xl text-white/90 mb-8">
                3-night, 5-night, and custom durations available for couples.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <button 
                  onClick={handleNavigateToContact}
                  className="group inline-flex items-center gap-2 bg-white text-[#b88646] hover:bg-[#f8f5ef] px-8 py-4 rounded-full text-base md:text-lg font-semibold transition-all shadow-xl hover:shadow-2xl"
                >
                  BOOK YOUR COUPLE RETREAT
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button 
                  onClick={handleNavigateToContact}
                  className="group inline-flex items-center gap-2 bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-full text-base md:text-lg font-semibold transition-all"
                >
                  <Gift className="w-5 h-5" />
                  EXPLORE PACKAGES
                </button>
              </div>
            </div>
          </motion.div>

          {/* SECTION - Why Nowal NatureCare Is Different */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="mt-16 mb-8"
          >
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#eadcc8] shadow-sm mb-4">
                <Award className="w-4 h-4 text-[#b88646]" />
                <span className="text-sm font-semibold tracking-wide text-[#b88646]">
                  The Nowal Difference
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#241c15]">
                Why Nowal NatureCare Is Different
              </h2>
              <p className="mt-4 text-lg text-[#5f5448] max-w-2xl mx-auto">
                Most luxury resorts offer comfort. We offer transformation.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-10">
              {/* Card 1 - Naturopathy First */}
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-[#eadcc8] hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-14 h-14 rounded-xl bg-[#b88646]/10 flex items-center justify-center mb-4">
                  <Sprout className="w-7 h-7 text-[#b88646]" />
                </div>
                <h3 className="text-xl font-bold text-[#241c15]">Naturopathy First</h3>
                <p className="mt-2 text-[#5f5448] leading-6">
                  We are not a hotel with a spa. We are a certified naturopathy and Ayurveda centre with luxury accommodation, a fundamental difference that shapes every decision we make.
                </p>
              </div>

              {/* Card 2 - Personalised Healing */}
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-[#eadcc8] hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-14 h-14 rounded-xl bg-[#b88646]/10 flex items-center justify-center mb-4">
                  <Users className="w-7 h-7 text-[#b88646]" />
                </div>
                <h3 className="text-xl font-bold text-[#241c15]">Personalised Healing</h3>
                <p className="mt-2 text-[#5f5448] leading-6">
                  No two couples receive the same retreat. Every programme begins with a deep consultation to craft a healing journey specific to your bodies, your relationship, and your goals.
                </p>
              </div>

              {/* Card 3 - Eco & Organic Integration */}
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-[#eadcc8] hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-14 h-14 rounded-xl bg-[#b88646]/10 flex items-center justify-center mb-4">
                  <Recycle className="w-7 h-7 text-[#b88646]" />
                </div>
                <h3 className="text-xl font-bold text-[#241c15]">Eco & Organic Integration</h3>
                <p className="mt-2 text-[#5f5448] leading-6">
                  From our solar-powered eco-suites to our certified organic gardens and biodegradable spa products, sustainability is not a marketing promise — it is our operating philosophy.
                </p>
              </div>
            </div>

            {/* Expert Note */}
            <div className="mt-6 p-5 bg-white/50 rounded-xl border border-[#eadcc8] text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Sparkle className="w-5 h-5 text-[#b88646]" />
                <span className="text-sm font-semibold text-[#b88646] uppercase tracking-wide">Expert Guidance</span>
              </div>
              <p className="text-[#5f5448] leading-7">
                Our therapies are guided by certified naturopathy and Ayurvedic experts with 10+ years of clinical experience — ensuring every session is evidence-based, deeply therapeutic, and genuinely transformative.
              </p>
            </div>
          </motion.div>

          {/* CTA SECTION - Experience the Nowal Difference */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-8 mb-8 text-center"
          >
            <div className="bg-gradient-to-br from-[#b88646]/20 to-[#d6b27a]/20 rounded-3xl p-10 md:p-12 shadow-xl border border-[#b88646]/30">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#b88646] mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#241c15] mb-3">
                Experience the Nowal Difference
              </h2>
              <p className="text-lg md:text-xl text-[#5f5448] mb-8">
                Begin your couple's healing journey today.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <button 
                  onClick={handleNavigateToContact}
                  className="group inline-flex items-center gap-2 bg-[#b88646] hover:bg-[#a17237] text-white px-8 py-4 rounded-full text-base md:text-lg font-semibold transition-all shadow-xl hover:shadow-2xl"
                >
                  BOOK YOUR COUPLE RETREAT
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button 
                  onClick={handleNavigateToContact}
                  className="group inline-flex items-center gap-2 bg-white border-2 border-[#b88646] text-[#b88646] hover:bg-[#b88646] hover:text-white px-8 py-4 rounded-full text-base md:text-lg font-semibold transition-all shadow-md"
                >
                  <PhoneCall className="w-5 h-5" />
                  SCHEDULE A WELLNESS CONSULTATION
                </button>
              </div>
            </div>
          </motion.div>

          {/* SECTION - The Lasting Impact of a Health & Wellness Retreat */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="mt-16 mb-8"
          >
            <div className="grid md:grid-cols-2 gap-10 items-center">
              {/* Left Side - Image */}
              <div className="relative order-2 md:order-1">
                <div className="overflow-hidden rounded-2xl shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073&auto=format&fit=crop"
                    alt="Couple watching sunset during retreat"
                    className="w-full h-96 object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="absolute -bottom-5 -left-5 w-32 h-32 bg-[#b88646]/10 rounded-full blur-2xl -z-10" />
                <div className="absolute -top-5 -right-5 w-24 h-24 bg-[#d6b27a]/10 rounded-full blur-2xl -z-10" />
              </div>

              {/* Right Side - Content */}
              <div className="space-y-5 order-1 md:order-2">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#eadcc8] shadow-sm mb-2">
                  <Sunset className="w-4 h-4 text-[#b88646]" />
                  <span className="text-sm font-semibold tracking-wide text-[#b88646]">
                    Lasting Transformation
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#241c15]">
                  The Lasting Impact of a Health & Wellness Retreat
                </h2>
                <p className="text-base leading-7 text-[#5f5448]">
                  As the sun sets on your stay, the focus shifts from experience to afterglow. A truly successful retreat equips you with a renewed sense of purpose. You aren't just leaving a beautiful location; you are carrying home better versions of yourselves.
                </p>
                <p className="text-base leading-7 text-[#5f5448]">
                  The serenity of the desert stays with you. The conversations held in the quiet corners of our gardens, the shared laughter over a nutritious meal, the collective exhale during a spa treatment — these become the foundation for a stronger, more vibrant relationship. And when life accelerates again (as it will), you will know how to find your way back to each other.
                </p>
                <div className="mt-4 p-5 bg-white/50 rounded-xl border-l-4 border-[#b88646]">
                  <p className="italic text-[#43382d] text-base leading-7">
                    "We don't just provide a room. We provide a rebirth. A world where the air is purer, the pace is slower, and the connection is deeper."
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* SECTION - Your Journey Back to Each Other Begins Here */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="mt-8 mb-8"
          >
            <div className="bg-gradient-to-br from-[#b88646]/15 to-[#d6b27a]/15 rounded-3xl p-10 md:p-12 text-center border border-[#b88646]/20">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#b88646] mb-6">
                <HomeIcon className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#241c15] mb-4">
                Your Journey Back to Each Other Begins Here
              </h2>
              <p className="text-base md:text-lg text-[#5f5448] max-w-3xl mx-auto leading-relaxed">
                Whether you are celebrating a honeymoon, anniversary, or simply seeking time to reconnect, Nowal NatureCare offers a rare space where wellness and relationships heal together — rooted in traditional Indian healing, surrounded by the stillness of Rajasthan, and carried by family-led hospitality that feels like home.
              </p>
              <div className="mt-8 inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 border border-[#b88646]/30">
                <Heart className="w-4 h-4 text-[#b88646]" />
                <span className="text-sm font-medium text-[#b88646]">Retreat slots are limited. Reserve yours before they fill.</span>
              </div>
            </div>
          </motion.div>

          {/* FAQ SECTION */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="mt-16 mb-8"
          >
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#eadcc8] shadow-sm mb-4">
                <HelpCircle className="w-4 h-4 text-[#b88646]" />
                <span className="text-sm font-semibold tracking-wide text-[#b88646]">
                  FAQ
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#241c15]">
                Frequently Asked Questions
              </h2>
              <p className="mt-3 text-lg text-[#5f5448] max-w-2xl mx-auto">
                Everything You Need to Know
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white/70 backdrop-blur-sm rounded-2xl border border-[#eadcc8] overflow-hidden hover:shadow-lg transition-all duration-300"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-[#b88646]/5 transition-colors duration-200"
                  >
                    <span className="font-semibold text-[#241c15] text-base md:text-lg">
                      {faq.question}
                    </span>
                    {openFaq === index ? (
                      <ChevronUp className="w-5 h-5 text-[#b88646] flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-[#b88646] flex-shrink-0" />
                    )}
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-4">
                      <p className="text-[#5f5448] leading-7 text-base">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* LOCATION SECTION */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="mt-16 mb-8"
          >
            <div className="grid md:grid-cols-2 gap-10 items-center">
              {/* Left Side - Content */}
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#eadcc8] shadow-sm mb-6">
                  <Compass className="w-4 h-4 text-[#b88646]" />
                  <span className="text-sm font-semibold tracking-wide text-[#b88646]">
                    Our Location
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#241c15]">
                  Located Just 90 Minutes from Jaipur
                </h2>
                <div className="mt-4 space-y-4">
                  <p className="text-base leading-7 text-[#5f5448]">
                    Nowal NatureCare sits near the serene foothills of the Aravalli range, just 90 minutes from Jaipur city centre — close enough for a spontaneous escape, far enough to feel a world away.
                  </p>
                  <p className="text-base leading-7 text-[#5f5448]">
                    The transition from Jaipur's vibrant streets to our sprawling, silent landscape is immediate and deeply felt. Vast courtyards, intricate stone craftsmanship, and lush healing gardens await.
                  </p>
                  <p className="text-base leading-7 text-[#5f5448]">
                    Our location places you at the heart of some of Rajasthan's most treasured natural and spiritual landmarks — making your couple wellness retreat rich in cultural depth as well as natural beauty.
                  </p>
                </div>
                <div className="mt-6 flex items-center gap-3">
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-[#b88646]" />
                    <span className="text-sm text-[#5f5448]">90 min from Jaipur</span>
                  </div>
                  <div className="w-1 h-1 rounded-full bg-[#b88646]" />
                  <div className="flex items-center gap-2">
                    <Compass className="w-5 h-5 text-[#b88646]" />
                    <span className="text-sm text-[#5f5448]">Aravalli Foothills</span>
                  </div>
                </div>
              </div>

              {/* Right Side - Image */}
              <div className="relative">
                <div className="overflow-hidden rounded-2xl shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=2070&auto=format&fit=crop"
                    alt="Nowal NatureCare Location - Aravalli Foothills"
                    className="w-full h-80 object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="absolute -bottom-5 -right-5 w-32 h-32 bg-[#b88646]/10 rounded-full blur-2xl -z-10" />
                <div className="absolute -top-5 -left-5 w-24 h-24 bg-[#d6b27a]/10 rounded-full blur-2xl -z-10" />
              </div>
            </div>
          </motion.div>

          {/* BOTTOM SECTION - Covers Both Sides */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-8 mb-8 bg-gradient-to-r from-[#b88646]/10 to-[#d6b27a]/10 rounded-2xl p-6 border border-[#b88646]/20"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#b88646] flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-[#241c15]">
                  On the Khatu Shyam ji / Salasar Route?
                </h4>
                <p className="mt-2 text-base leading-7 text-[#5f5448]">
                  Nowal NatureCare is perfectly positioned as a rejuvenating halt for pilgrims and spiritual travellers on this sacred route. Combine the blessings of the journey with deep healing — body, mind, and soul.
                </p>
              </div>
            </div>
          </motion.div>

          {/* FINAL CTA SECTION */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-8 mb-16 text-center"
          >
            <div className="bg-gradient-to-br from-[#b88646] to-[#a17237] rounded-3xl p-10 md:p-12 shadow-2xl">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm mb-6">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3">
                Ready to Escape Together?
              </h2>
              <p className="text-lg md:text-xl text-white/90 mb-8">
                Limited retreat slots available. Reserve your dates today.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <button 
                  onClick={handleNavigateToContact}
                  className="group inline-flex items-center gap-2 bg-white text-[#b88646] hover:bg-[#f8f5ef] px-8 py-4 rounded-full text-base md:text-lg font-semibold transition-all shadow-xl hover:shadow-2xl"
                >
                  BOOK YOUR COUPLE RETREAT
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button 
                  onClick={handleNavigateToContact}
                  className="group inline-flex items-center gap-2 bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-full text-base md:text-lg font-semibold transition-all"
                >
                  <Gift className="w-5 h-5" />
                  EXPLORE PACKAGES
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}