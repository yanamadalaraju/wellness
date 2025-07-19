import React from 'react';
import { Link } from 'react-router-dom';
import { Download, ArrowRight, Check } from 'lucide-react';

const TariffPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Background Image */}
      <section className="relative py-32 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')" }}>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-40"></div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-4">Our Tariff & Packages</h1>
          <p className="text-xl text-white max-w-2xl mx-auto">
            Experience holistic healing with our transparent pricing and comprehensive wellness packages
          </p>
        </div>
      </section>

      {/* Breadcrumbs */}
      <div className="container mx-auto px-4 py-4 flex justify-center">
  <nav className="flex" aria-label="Breadcrumb">
    <ol className="inline-flex items-center space-x-2 md:space-x-2">
      <li className="inline-flex items-center">
        <Link to="/" className="text-sage-600 hover:text-sage-800">
          Home
        </Link>
      </li>
      <li className="flex items-center">
        <span className="mx text-sage-500">{'>'}</span>
        <span className="mx text-sage-500">{'>'}</span>
      </li>
      <li>
        <span className="text-sage-800 font-medium">Tariff</span>
      </li>
    </ol>
  </nav>
</div>
      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Living Space Tariff Table */}
        <div className="mb-12 bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-playfair font-bold text-sage-600 mb-6">Know About Our Packages</h2>
          <h3 className="text-xl font-bold text-sage-700 mb-4">Category of Living Space</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-200 border-collapse">
              <thead className="bg-sage-100">
                <tr>
                  <th className="py-3 px-4 border border-gray-300 text-left font-medium text-sage-800">Room Type</th>
                  <th className="py-3 px-4 border border-gray-300 text-center font-medium text-sage-800">Single Occupancy (per night)</th>
                  <th className="py-3 px-4 border border-gray-300 text-center font-medium text-sage-800">Double Occupancy (per night)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-gray-50">
                  <td className="py-3 px-4 border border-gray-300 font-medium">Amukha</td>
                  <td className="py-3 px-4 border border-gray-300 text-center">INR 9,500</td>
                  <td className="py-3 px-4 border border-gray-300 text-center">INR 15,000</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="py-3 px-4 border border-gray-300 font-medium">Sumukha</td>
                  <td className="py-3 px-4 border border-gray-300 text-center">INR 10,500</td>
                  <td className="py-3 px-4 border border-gray-300 text-center">INR 16,000</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="py-3 px-4 border border-gray-300 font-medium">Pramukha</td>
                  <td className="py-3 px-4 border border-gray-300 text-center">INR 11,500</td>
                  <td className="py-3 px-4 border border-gray-300 text-center">INR 17,000</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-gray-600">
            Tariff is inclusive of accommodation, meals, consultation and therapy (No discount, No Refund, Minimum 10 Days prior notice is required for change in dates T&C Applied)
          </p>
        </div>

        {/* Packages/Programs Table */}
        <div className="mb-12 bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-bold text-sage-700 mb-4">Packages / Programs</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-200 border-collapse">
              <thead className="bg-sage-100">
                <tr>
                  <th className="py-3 px-4 border border-gray-300 text-left font-medium text-sage-800">Package</th>
                  <th className="py-3 px-4 border border-gray-300 text-center font-medium text-sage-800">Minimum Nights</th>
                  <th className="py-3 px-4 border border-gray-300 text-center font-medium text-sage-800">Living Space</th>
                  <th className="py-3 px-4 border border-gray-300 text-center font-medium text-sage-800">Single Occupancy</th>
                  <th className="py-3 px-4 border border-gray-300 text-center font-medium text-sage-800">Double Occupancy</th>
                </tr>
              </thead>
              <tbody>
                {/* Nature That Heals */}
                <tr className="hover:bg-gray-50">
                  <td className="py-3 px-4 border border-gray-300">
                    <div className="font-medium">Nature That Heals</div>
                    <div className="text-sm text-gray-600 mt-1">
                      Only to let you feel the amazing changes that natural ways of life can bring about in you, even in a brief stay
                    </div>
                  </td>
                  <td className="py-3 px-4 border border-gray-300 text-center">5</td>
                  <td className="py-3 px-4 border border-gray-300 text-center">Amukha</td>
                  <td className="py-3 px-4 border border-gray-300 text-center">47,500</td>
                  <td className="py-3 px-4 border border-gray-300 text-center">75,000</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="py-3 px-4 border border-gray-300"></td>
                  <td className="py-3 px-4 border border-gray-300 text-center"></td>
                  <td className="py-3 px-4 border border-gray-300 text-center">Sumukha</td>
                  <td className="py-3 px-4 border border-gray-300 text-center">52,500</td>
                  <td className="py-3 px-4 border border-gray-300 text-center">80,000</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="py-3 px-4 border border-gray-300"></td>
                  <td className="py-3 px-4 border border-gray-300 text-center"></td>
                  <td className="py-3 px-4 border border-gray-300 text-center">Pramukha</td>
                  <td className="py-3 px-4 border border-gray-300 text-center">57,500</td>
                  <td className="py-3 px-4 border border-gray-300 text-center">85,000</td>
                </tr>

                {/* Wholesome Detox */}
                <tr className="hover:bg-gray-50">
                  <td className="py-3 px-4 border border-gray-300">
                    <div className="font-medium">Wholesome Detox</div>
                    <div className="text-sm text-gray-600 mt-1">
                      Designed to flush out toxins, and let you experience an inner cleansing, thereby enhancing the vitality and overall well-being
                    </div>
                  </td>
                  <td className="py-3 px-4 border border-gray-300 text-center">7</td>
                  <td className="py-3 px-4 border border-gray-300 text-center">Amukha</td>
                  <td className="py-3 px-4 border border-gray-300 text-center">66,500</td>
                  <td className="py-3 px-4 border border-gray-300 text-center">105,000</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="py-3 px-4 border border-gray-300"></td>
                  <td className="py-3 px-4 border border-gray-300 text-center"></td>
                  <td className="py-3 px-4 border border-gray-300 text-center">Sumukha</td>
                  <td className="py-3 px-4 border border-gray-300 text-center">73,500</td>
                  <td className="py-3 px-4 border border-gray-300 text-center">112,000</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="py-3 px-4 border border-gray-300"></td>
                  <td className="py-3 px-4 border border-gray-300 text-center"></td>
                  <td className="py-3 px-4 border border-gray-300 text-center">Pramukha</td>
                  <td className="py-3 px-4 border border-gray-300 text-center">80,500</td>
                  <td className="py-3 px-4 border border-gray-300 text-center">119,000</td>
                </tr>

                {/* Immunity Enhancement */}
                <tr className="hover:bg-gray-50">
                  <td className="py-3 px-4 border border-gray-300">
                    <div className="font-medium">Immunity Enhancement</div>
                    <div className="text-sm text-gray-600 mt-1">
                      Designed to improve quality of Life by this dedicated program of disease prevention, control and care.
                    </div>
                  </td>
                  <td className="py-3 px-4 border border-gray-300 text-center">10</td>
                  <td className="py-3 px-4 border border-gray-300 text-center">Amukha</td>
                  <td className="py-3 px-4 border border-gray-300 text-center">95,000</td>
                  <td className="py-3 px-4 border border-gray-300 text-center">150,000</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="py-3 px-4 border border-gray-300"></td>
                  <td className="py-3 px-4 border border-gray-300 text-center"></td>
                  <td className="py-3 px-4 border border-gray-300 text-center">Sumukha</td>
                  <td className="py-3 px-4 border border-gray-300 text-center">105,000</td>
                  <td className="py-3 px-4 border border-gray-300 text-center">160,000</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="py-3 px-4 border border-gray-300"></td>
                  <td className="py-3 px-4 border border-gray-300 text-center"></td>
                  <td className="py-3 px-4 border border-gray-300 text-center">Pramukha</td>
                  <td className="py-3 px-4 border border-gray-300 text-center">115,000</td>
                  <td className="py-3 px-4 border border-gray-300 text-center">170,000</td>
                </tr>

                {/* Lifestyle Disorder Management */}
                <tr className="hover:bg-gray-50">
                  <td className="py-3 px-4 border border-gray-300">
                    <div className="font-medium">Lifestyle Disorder Management</div>
                    <div className="text-sm text-gray-600 mt-1">
                      Designed to help you discover your inner strength with a feeling of getting healthier with every passing day
                    </div>
                  </td>
                  <td className="py-3 px-4 border border-gray-300 text-center">15</td>
                  <td className="py-3 px-4 border border-gray-300 text-center">Amukha</td>
                  <td className="py-3 px-4 border border-gray-300 text-center">142,500</td>
                  <td className="py-3 px-4 border border-gray-300 text-center">225,000</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="py-3 px-4 border border-gray-300"></td>
                  <td className="py-3 px-4 border border-gray-300 text-center"></td>
                  <td className="py-3 px-4 border border-gray-300 text-center">Sumukha</td>
                  <td className="py-3 px-4 border border-gray-300 text-center">157,500</td>
                  <td className="py-3 px-4 border border-gray-300 text-center">240,000</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="py-3 px-4 border border-gray-300"></td>
                  <td className="py-3 px-4 border border-gray-300 text-center"></td>
                  <td className="py-3 px-4 border border-gray-300 text-center">Pramukha</td>
                  <td className="py-3 px-4 border border-gray-300 text-center">172,500</td>
                  <td className="py-3 px-4 border border-gray-300 text-center">255,000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Additional Occupancy Charges */}
        <div className="mb-12">
          <h2 className="text-2xl font-playfair font-bold text-sage-600 mb-6">Additional Occupancy Charges</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Night Stay Charges */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold text-sage-700 mb-3">Night Stay Charges for Extra Person (Same Room)</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-200 border-collapse">
                  <thead className="bg-sage-100">
                    <tr>
                      <th className="py-2 px-3 border border-gray-300 text-left text-sm font-medium text-sage-800">Age Limit</th>
                      <th className="py-2 px-3 border border-gray-300 text-center text-sm font-medium text-sage-800">Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hover:bg-gray-50">
                      <td className="py-2 px-3 border border-gray-300 text-sm">0 - 5 years</td>
                      <td className="py-2 px-3 border border-gray-300 text-center text-sm">Complimentary</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="py-2 px-3 border border-gray-300 text-sm">5 - 15 years</td>
                      <td className="py-2 px-3 border border-gray-300 text-center text-sm">INR 3,000</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="py-2 px-3 border border-gray-300 text-sm">15 years And above</td>
                      <td className="py-2 px-3 border border-gray-300 text-center text-sm">INR 4,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-3 text-sm text-gray-500">
                * Includes food and accommodation in the same room with extra mattress. Without any treatments.
              </p>
            </div>

            {/* Attendee Charges */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold text-sage-700 mb-3">Attendee Charges (Different Room)</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-200 border-collapse">
                  <thead className="bg-sage-100">
                    <tr>
                      <th className="py-2 px-3 border border-gray-300 text-left text-sm font-medium text-sage-800">Room Category</th>
                      <th className="py-2 px-3 border border-gray-300 text-center text-sm font-medium text-sage-800">Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hover:bg-gray-50">
                      <td className="py-2 px-3 border border-gray-300 text-sm">Amukha</td>
                      <td className="py-2 px-3 border border-gray-300 text-center text-sm">INR 7,000</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="py-2 px-3 border border-gray-300 text-sm">Sumukha</td>
                      <td className="py-2 px-3 border border-gray-300 text-center text-sm">INR 8,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-3 text-sm text-gray-500">
                * Includes food and accommodation in additional room. No treatments included.
              </p>
            </div>

            {/* Night Stay Charges Any Room */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold text-sage-700 mb-3">Night Stay Charges (Any Room)</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-200 border-collapse">
                  <thead className="bg-sage-100">
                    <tr>
                      <th className="py-2 px-3 border border-gray-300 text-left text-sm font-medium text-sage-800">Occupancy</th>
                      <th className="py-2 px-3 border border-gray-300 text-center text-sm font-medium text-sage-800">Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hover:bg-gray-50">
                      <td className="py-2 px-3 border border-gray-300 text-sm">Single Occupancy</td>
                      <td className="py-2 px-3 border border-gray-300 text-center text-sm">INR 3,000</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="py-2 px-3 border border-gray-300 text-sm">Double Occupancy</td>
                      <td className="py-2 px-3 border border-gray-300 text-center text-sm">INR 6,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-3 text-sm text-gray-500">
                * Subject to availability
              </p>
            </div>
          </div>
        </div>

        {/* Additional Therapies */}
        <div className="mb-12">
          <h2 className="text-2xl font-playfair font-bold text-sage-600 mb-6">Additional Therapies</h2>
          
          <div className="space-y-6">
            {/* Acupuncture */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Acupuncture</h3>
              <p className="text-gray-600">
                Acupuncture is a Traditional Chinese Medicine (TCM) which is being practiced worldwide. World Health Organization (WHO) recommends acupuncture for over 100 medical conditions. At Nimba, our well experienced and skilled Doctors combine the acupuncture with our indigenous therapies such as Ayurveda, Yoga & Naturopathy and our inhouse Acupuncturist carefully select the points to balance the energy levels and treat various conditions.
              </p>
            </div>

            {/* Physiotherapy */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Physiotherapy</h3>
              <p className="text-gray-600">
                The holistic approach of Nimba includes Physiotherapy that involves the patients directly in their own care through electrical modalities and exercise therapy to restore movement and function after any injury, illness or disability as well as reduce the risk of injury or illness in the future.
              </p>
            </div>

            {/* Pre-arrival Consultation */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Pre-arrival Consultation</h3>
              <p className="text-gray-600">
                Our holistic consultation provides an opportunity for a comprehensive evaluation and deep dive into your medical concerns. We will discuss health concerns and prioritize your health goals. Our inhouse Naturopathy and Ayurveda experts make a program and prescribe protocols concentrate on weight loss, performance enhancement, disease management and age management issues using only prevention and optimization in areas of wellness such as; sleep, nutrition, hormones, exercise, diet, yoga, nutraceuticals, physiotherapy, acupuncture, inflammation reduction, and lifestyle modification.
              </p>
            </div>

            {/* Body Composition Analyzer */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Body Composition Analyzer (BCA)</h3>
              <p className="text-gray-600">
                We are introducing our new Tanita Full Body Composition Analyzer (BCA) machine, imported from Japan. Anyone serious about improving his or her total health and fitness will love a Tanita full body analyzer. Measurements can include Weight, Body Fat %, Body Water %, BMR, Metabolic Age, Bone Mass, Muscle Mass, Visceral Fat Rating etc. We take the measurement twice on the day of arrival and departure for those who are staying for 7 days and above for better comparison and to see some changes in the parameter.
              </p>
            </div>
          </div>
        </div>

        {/* Download Section */}
        <div className="mb-12 bg-sage-50 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-playfair font-bold text-sage-600 mb-4">Download Complete Tariff</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Get our detailed tariff document with all room types, packages, and additional services
          </p>
          <a 
            href="/downloads/wellness-tariff.pdf" 
            download="Nimba-Wellness-Tariff.pdf"
            className="inline-flex items-center bg-sage-600 hover:bg-sage-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
          >
            <Download className="w-5 h-5 mr-2" />
            Download Tariff PDF
          </a>
        </div>

        {/* Terms & Conditions */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-playfair font-bold text-sage-600 mb-4">Terms & Conditions</h2>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-start">
              <Check className="w-5 h-5 text-sage-500 mr-2 mt-0.5 flex-shrink-0" />
              <span>Prices are inclusive of all taxes</span>
            </li>
            <li className="flex items-start">
              <Check className="w-5 h-5 text-sage-500 mr-2 mt-0.5 flex-shrink-0" />
              <span>Check-in time: 12:00 PM | Check-out time: 10:00 AM</span>
            </li>
            <li className="flex items-start">
              <Check className="w-5 h-5 text-sage-500 mr-2 mt-0.5 flex-shrink-0" />
              <span>Advance reservation required with 50% deposit</span>
            </li>
            <li className="flex items-start">
              <Check className="w-5 h-5 text-sage-500 mr-2 mt-0.5 flex-shrink-0" />
              <span>Cancellation policy: 7 days prior for full refund</span>
            </li>
          </ul>
        </div>

        {/* Contact CTA */}
        <div className="text-center">
          <Link 
            to="/contact" 
            className="inline-flex items-center text-sage-600 hover:text-sage-800 font-medium text-lg"
          >
            Have questions? Contact our team <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TariffPage;