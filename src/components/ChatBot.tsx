import React, { useState, useEffect } from 'react'
import { MessageCircle, X, Send } from 'lucide-react'

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello! I'm here to help you with your nowal journey. What can I assist you with today?", sender: 'bot' }
  ])
  const [inputValue, setInputValue] = useState('')

  useEffect(() => {
    // Auto-open after 10 seconds of inactivity
    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 10000)

    return () => clearTimeout(timer)
  }, [])

  const handleSend = () => {
    if (inputValue.trim()) {
      const newMessage = {
        id: messages.length + 1,
        text: inputValue,
        sender: 'user'
      }
      setMessages([...messages, newMessage])
      setInputValue('')

      // Simulate bot response
      setTimeout(() => {
        const botResponse = getBotResponse(inputValue)
        setMessages(prev => [...prev, {
          id: prev.length + 1,
          text: botResponse,
          sender: 'bot'
        }])
      }, 1000)
    }
  }

  const getBotResponse = (message: string): string => {
    const lowerMessage = message.toLowerCase()
    
    if (lowerMessage.includes('check-in') || lowerMessage.includes('checkin')) {
      return "Check-in time is 2:00 PM and check-out is 11:00 AM. Early check-in can be arranged based on availability."
    }
    
    if (lowerMessage.includes('price') || lowerMessage.includes('cost')) {
      return "Our nowal  packages start from $299 for a 3-day retreat. Would you like me to connect you with our team for detailed pricing?"
    }
    
    if (lowerMessage.includes('book') || lowerMessage.includes('reservation')) {
      return "I'd be happy to help you book! Please click the 'HEAL NOW' button or I can connect you with our booking team via WhatsApp."
    }
    
    if (lowerMessage.includes('program') || lowerMessage.includes('treatment')) {
      return "We offer Ayurveda treatments, Yoga & Meditation, Naturopathy, Detox programs, and more. Which area interests you most?"
    }
    
    return "Thank you for your question! For personalized assistance, I'll connect you with our nowal experts. Click the WhatsApp button or call us at +91 9251582672."
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Window */}
      {isOpen && (
        <div className="w-80 h-96 bg-white rounded-lg shadow-xl mb-4 flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-sage-400 text-white p-4 flex justify-between items-center">
            <h3 className="font-semibold">Nowal Assistant</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-200"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs px-3 py-2 rounded-lg ${
                    message.sender === 'user'
                      ? 'bg-sage-400 text-white'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-4 border-t">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type your message..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sage-400"
              />
              <button
                onClick={handleSend}
                className="bg-sage-400 text-white px-3 py-2 rounded-lg hover:bg-sage-500 transition-colors"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center w-14 h-14 bg-sage-400 hover:bg-sage-500 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-white"
      >
        <MessageCircle className="w-6 h-6" />
      </button>
    </div>
  )
}

export default ChatBot