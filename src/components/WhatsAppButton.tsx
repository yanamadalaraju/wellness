import React from 'react'
import { MessageCircle } from 'lucide-react'

const WhatsAppButton: React.FC = () => {
  const phoneNumber = "1234567890" // Replace with actual phone number
  const message = "Hello%20Wellness%20Retreat%2C%20I%27d%20like%20to%20book%20a%20session."
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`

  return (
    <div className="fixed bottom-6 left-6 z-50">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse-slow"
        title="Chat with us instantly!"
      >
        <MessageCircle className="w-7 h-7 text-white" />
      </a>
      
      {/* Tooltip */}
      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="bg-gray-800 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap">
          Chat with us instantly!
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
        </div>
      </div>
    </div>
  )
}

export default WhatsAppButton