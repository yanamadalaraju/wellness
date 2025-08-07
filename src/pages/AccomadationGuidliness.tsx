import React, { useState } from 'react';

const AdmissionGuidelines = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    name: '',
    mobile: '',
    email: '',
    location: '',
    state: '',
    country: '',
    disease: '',
    remarks: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
    setShowForm(false);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 font-sans text-gray-700">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-green-800 mb-2">Welcome to Nowal NatureCare</h1>
        <p className="text-lg mb-6">
          Dear Valued Guest,<br />
          Welcome to your sanctuary of healing. We are honored to be part of your wellness journey and committed to ensuring you receive the maximum benefit from our natural healing programs.
        </p>
        {/* <button 
          onClick={() => setShowForm(true)}
          className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-md shadow transition"
        >
          Apply Now
        </button> */}
      </div>

      {/* Booking Information */}
      <div className="mb-8 p-6 bg-gray-50 rounded-lg">
        <h2 className="text-2xl font-semibold text-green-800 mb-4">Booking Information</h2>
        <p className="mb-4">On receipt of your application, Nowal NatureCare will review it. On qualifying, the guest will be updated and will be asked to pay 3 day advance payment for selected accommodation as per the tariff rate if the stay is 7 or more days. In case of stay is less then 7 days, full payment is required to be paid.</p>
        <p className="mb-4">It is to note that few selective treatments are chargeable. A complete briefing will be given on arrival. On average, there will be Rs. 3000/- per day additional charges for treatment per person.</p>
        <p className="mb-4">On receipt of the payment, a confirmation letter will be sent by Email/Whatsapp with all necessary instructions.</p>
        <p className="mb-4"><strong>Cancellation Policy:</strong> In case of cancellation of reservation 2 days before the arrival date, forfeiture of the advance may be applied on sole discretion of the management NNC.</p>
        <p><strong>Transport:</strong> Car facility from Jaipur to Nowal while coming to NNC NatureCare and while returning is available with nominal charges.</p>
      </div>

      {/* Arrival & Check-In */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-green-800 mb-4">Arrival & Check-In Process</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-4 bg-blue-50 rounded">
            <h3 className="font-medium text-lg text-blue-800 mb-2">Upon Arrival</h3>
            <p className="mb-4">Our security team will warmly welcome you and direct you to the Reception. Reception and Admission team will welcome you and complete the admission process and documentation.</p>
            
            <h3 className="font-medium text-lg text-blue-800 mb-2">Check-In Requirements</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Present your admission confirmation letter and valid ID</li>
              <li>Our admission officer will assign your accommodation</li>
              <li>A dedicated attendant with golf cart will escort you to your room</li>
              <li>Enjoy a brief campus orientation tour</li>
            </ul>
          </div>
          
          <div className="p-4 bg-purple-50 rounded">
            <h3 className="font-medium text-lg text-purple-800 mb-2">Room Settlement</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Review the room inventory checklist upon arrival</li>
              <li>Report any discrepancies to Reception immediately</li>
              <li>Receive and thoroughly review your welcome information packet</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Documentation & Payment */}
      <div className="mb-8 grid md:grid-cols-2 gap-6">
        <div className="p-4 bg-yellow-50 rounded">
          <h3 className="text-xl font-semibold text-yellow-800 mb-2">Essential Documentation</h3>
          <h4 className="font-medium text-yellow-700 mb-1">For International Guests:</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>Complete the provided international visitor forms</li>
            <li>Submit photocopies of your passport and visa</li>
          </ul>
        </div>
        
        <div className="p-4 bg-green-50 rounded">
          <h3 className="text-xl font-semibold text-green-800 mb-2">Payment Process</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Settle room charges and estimated treatment costs upfront</li>
            <li>Payment accepted via Master/Visa cards or IMPS transfer</li>
            <li>Final billing reconciliation at departure</li>
          </ul>
        </div>
      </div>

      {/* Medical & Treatment */}
      <div className="mb-8 grid md:grid-cols-2 gap-6">
        <div className="p-4 bg-red-50 rounded">
          <h3 className="text-xl font-semibold text-red-800 mb-2">Medical Consultation</h3>
          <p className="font-medium text-red-700 mb-1">Doctor Availability:</p>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Morning Session: 9:00 AM - 1:00 PM</li>
            <li>Evening Session: 2:00 PM - 6:00 PM</li>
          </ul>
          <p className="font-medium text-red-700 mb-1">During consultation:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Assess your current health status</li>
            <li>Design your personalized treatment protocol</li>
            <li>Prescribe your therapeutic diet plan</li>
          </ul>
        </div>
        
        <div className="p-4 bg-indigo-50 rounded">
          <h3 className="text-xl font-semibold text-indigo-800 mb-2">Treatment Planning</h3>
          <p className="font-medium text-indigo-700 mb-1">Wellness Team Consultations:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Yoga Teacher</strong> - Design personalized yoga therapy</li>
            <li><strong>Physiotherapy</strong> - Treatment as per your diseases</li>
            <li><strong>Acupuncture</strong> - Provided after consultation</li>
          </ul>
          <p className="mt-3 text-sm italic">Note: Consultations will be completed on your first day or the following morning.</p>
        </div>
      </div>

      {/* Meal Times */}
      <div className="mb-8 p-4 bg-teal-50 rounded">
        <h2 className="text-xl font-semibold text-teal-800 mb-3">Meal Times</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <div className="bg-white p-2 rounded shadow-sm">
            <p className="font-medium">Lunch</p>
            <p>11:00 AM - 12:00 PM</p>
          </div>
          <div className="bg-white p-2 rounded shadow-sm">
            <p className="font-medium">Dinner</p>
            <p>6:30 PM - 7:30 PM</p>
          </div>
          <div className="bg-white p-2 rounded shadow-sm">
            <p className="font-medium">Juice Breaks</p>
            <p>Multiple times</p>
          </div>
          <div className="bg-white p-2 rounded shadow-sm">
            <p className="font-medium">Bedtime</p>
            <p>10:00 PM</p>
          </div>
        </div>
      </div>

      {/* What to Bring */}
      <div className="mb-8 p-4 bg-amber-50 rounded">
        <h2 className="text-xl font-semibold text-amber-800 mb-3">Kindly Bring the Following</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Shirts:</strong> Light and loose clothes for activities</li>
            <li><strong>Shoes & track suits:</strong> Walking shoes, socks and track-suits</li>
            <li><strong>Yoga dress:</strong> Appropriate yoga attire</li>
            <li><strong>Swim wear:</strong> At least one swimsuit</li>
          </ul>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Medical Report:</strong> Latest medical report if requested</li>
            <li><strong>Medicines:</strong> All your regular prescription medicines</li>
          </ul>
        </div>
        <p className="mt-3 text-sm"><strong>Note:</strong> Admission in one room is allowed for valid relations only in case of male – female coming together.</p>
      </div>

      {/* Commitment */}
      <div className="p-6 bg-gradient-to-r from-green-50 to-teal-50 rounded-lg text-center">
        <h2 className="text-2xl font-semibold text-green-800 mb-3">Our Commitment to You</h2>
        <p className="text-lg">
          During your stay, our dedicated team members will be available to support and guide you. We're here to ensure your healing journey is smooth, comfortable, and transformative.
        </p>
      </div>

      {/* Application Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold text-green-800">Application Form</h3>
              <button 
                onClick={() => setShowForm(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Title*</label>
                  <select
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                    required
                  >
                    <option value="">Select</option>
                    <option value="Mr.">Mr.</option>
                    <option value="Mrs.">Mrs.</option>
                    <option value="Ms.">Ms.</option>
                    <option value="Master">Master</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Name*</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Mobile Number*</label>
                  <input
                    type="tel"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email Id*</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Location*</label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">State*</label>
                  <input
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Country*</label>
                  <input
                    type="text"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Suffering from (Disease)*</label>
                  <input
                    type="text"
                    name="disease"
                    value={formData.disease}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Remarks</label>
                  <textarea
                    name="remarks"
                    value={formData.remarks}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                    rows={3}
                  />
                </div>
              </div>
              
              <button
                type="submit"
                className="mt-6 w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
              >
                Submit Application
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdmissionGuidelines;