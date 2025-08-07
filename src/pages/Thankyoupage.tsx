import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

const ThankYouPage = () => {
  const navigate = useNavigate();

  // Optional: Redirect to home after 8 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/');
    }, 8000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-sage-50 flex flex-col items-center justify-center p-6 text-center">
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-md overflow-hidden p-8 md:p-12">
        <div className="flex flex-col items-center">
          <CheckCircle className="w-16 h-16 text-green-500 mb-6" />
          <h1 className="text-3xl md:text-4xl font-playfair font-bold text-sage-700 mb-4">
            Thank You for Applying!
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            We've received your application and will review it carefully. 
            If your qualifications match our needs, we'll be in touch soon.
          </p>
          <div className="bg-sage-100 p-4 rounded-lg w-full mb-8">
            <h2 className="font-semibold text-sage-800 mb-2">What's Next?</h2>
            <ul className="text-left text-gray-700 list-disc pl-5 space-y-1">
              <li>Our team will review your application</li>
              <li>We'll contact you within 5-7 business days if selected</li>
              <li>Feel free to explore more opportunities on our careers page</li>
            </ul>
          </div>
          <button
            onClick={() => navigate('/')}
            className="bg-sage-600 hover:bg-sage-700 text-white font-medium py-2 px-6 rounded-lg transition-colors"
          >
            Return to Home
          </button>
          <p className="text-sm text-gray-500 mt-4">
            You'll be automatically redirected in a few seconds...
          </p>
        </div>
      </div>
    </div>
  );
};

export default ThankYouPage;