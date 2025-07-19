import { useState } from 'react';

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is the best time to visit?",
      answer: "Our retreat is open year-round, but the best time depends on your preferences. Spring (March-May) and fall (September-November) offer pleasant weather and beautiful scenery."
    },
    {
      question: "Do I need to bring anything specific?",
      answer: "We provide most essentials including towels, yoga mats, and meditation cushions. We recommend bringing comfortable clothing, personal items, and any medications you may need."
    },
    {
      question: "Are meals included in the programs?",
      answer: "Yes, all our programs include three nutritious meals daily, plus healthy snacks. Our meals are prepared according to Ayurvedic principles using organic, locally-sourced ingredients."
    },
    {
      question: "What if I have dietary restrictions?",
      answer: "We accommodate various dietary needs including vegetarian, vegan, gluten-free, and allergy-specific requirements. Please inform us about your dietary restrictions when booking."
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-playfair font-bold text-sage-600 mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Everything you need to know about your wellness journey at Nimba
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`overflow-hidden rounded-xl border ${activeIndex === index ? 'border-sage-300' : 'border-sage-100'} bg-sage-50 transition-all duration-300`}
            >
              <div 
                className="flex items-center justify-between p-6 cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-xl font-semibold text-sage-700">
                  {faq.question}
                </h3>
                <svg 
                  className={`w-5 h-5 text-sage-500 transition-transform ${activeIndex === index ? 'rotate-180' : ''}`} 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              <div 
                className={`px-6 pb-6 transition-all duration-300 overflow-hidden ${activeIndex === index ? 'max-h-96 pt-0' : 'max-h-0 pt-0'}`}
              >
                <p className="text-gray-600">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}

          {/* CTA */}
          <div className="text-center mt-10">
            <p className="text-gray-500 mb-4">Still have questions?</p>
            <button className="bg-sage-600 hover:bg-sage-700 text-white font-medium py-3 px-8 rounded-full transition-colors shadow-md hover:shadow-lg">
              Contact Our Team
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;