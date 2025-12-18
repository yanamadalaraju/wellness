import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, Gem, ChevronRight } from 'lucide-react';

export interface HeroContent {
  backgroundImage: string;
  titleLine1: string;
  titleLine2: string;
  subtitle: string;
  buttonText: string;
  stats: Array<{
    number: string;
    label: string;
  }>;
  floatingIcons: boolean;
  animatedElements: boolean;
}

export interface HeroSectionProps {
  content: HeroContent;
  onViewGallery: () => void;
  onBookNow: () => void;
  isLoading?: boolean;
  error?: string | null;
  apiError?: boolean;
  onRetry?: () => void;
}

const EventHeroSection: React.FC<HeroSectionProps> = ({
  content,
  onViewGallery,
  onBookNow,
  isLoading = false,
  error = null,
  apiError = false,
  onRetry,
}) => {
  if (isLoading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading wedding page...</p>
          <p className="text-sm text-gray-500 mt-2">Fetching dynamic content from server</p>
        </div>
      </div>
    );
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Error Message - Only show if API error */}
      {apiError && (
        <div className="absolute top-4 left-4 right-4 z-50">
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
            <div className="flex items-center justify-between">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-yellow-700">{error}</p>
                  <p className="text-xs text-yellow-600 mt-1">Showing default content</p>
                </div>
              </div>
              {onRetry && (
                <button
                  onClick={onRetry}
                  className="ml-4 bg-yellow-100 text-yellow-800 px-3 py-1 rounded text-sm font-medium hover:bg-yellow-200"
                >
                  Retry
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={content.backgroundImage}
          alt="Beautiful wedding background"
          className="w-full h-full object-cover"
          onError={(e) => {
            console.log('Image load error, using fallback');
            (e.target as HTMLImageElement).src = 'https://i.pinimg.com/1200x/a2/53/fc/a253fc965d6bcff7b014d412770e7ab8.jpg';
          }}
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 to-green-900/10"></div>
      </div>

      {/* Animated Background Elements - Conditionally rendered */}
      {content.animatedElements && (
        <div className="absolute inset-0">
          <motion.div
            animate={{ 
              rotate: 360,
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              rotate: { duration: 20, repeat: Infinity, ease: "linear" },
              scale: { duration: 8, repeat: Infinity }
            }}
            className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-emerald-200/30 to-green-200/30 rounded-full opacity-20"
          />
          <motion.div
            animate={{ 
              rotate: -360,
              y: [0, -20, 0]
            }}
            transition={{ 
              rotate: { duration: 25, repeat: Infinity, ease: "linear" },
              y: { duration: 6, repeat: Infinity }
            }}
            className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-gradient-to-r from-emerald-100/30 to-green-100/30 rounded-full opacity-30"
          />
        </div>
      )}

      {/* Floating Icons - Conditionally rendered */}
      {content.floatingIcons && (
        <>
          <motion.div
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, 10, 0]
            }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute top-20 left-20 text-white/80"
          >
            <Sparkles size={32} />
          </motion.div>
          <motion.div
            animate={{ 
              y: [0, 15, 0],
              rotate: [0, -15, 0]
            }}
            transition={{ duration: 5, repeat: Infinity, delay: 1 }}
            className="absolute bottom-32 right-32 text-white/80"
          >
            <Heart size={28} />
          </motion.div>
        </>
      )}

      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        {/* Debug info - remove in production */}
        {process.env.NODE_ENV === 'development' && (
          <div className="absolute top-4 right-4 bg-black/50 text-white text-xs p-2 rounded">
            API: {apiError ? '❌ Error' : '✅ Connected'}
          </div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
            className="flex justify-center mb-6"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-white/30 rounded-full animate-ping opacity-75"></div>
              <div className="relative bg-gradient-to-r from-emerald-500 to-green-500 p-4 rounded-full shadow-2xl backdrop-blur-sm">
                <Gem className="w-12 h-12 text-white" />
              </div>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            <span className="bg-gradient-to-r from-white to-emerald-100 bg-clip-text text-transparent">
              {content.titleLine1}
            </span>
            <br />
            <span className="text-white">{content.titleLine2}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-8"
          >
            {content.subtitle}
          </motion.p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onViewGallery}
              className="border-2 border-white/50 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/20 transition-all duration-300 backdrop-blur-sm"
            >
              {content.buttonText}
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onBookNow}
              className="bg-white text-emerald-700 px-8 py-4 rounded-full font-semibold text-lg hover:bg-emerald-50 transition-all duration-300 shadow-lg"
            >
              Book Your Dream Wedding
            </motion.button>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-2xl mx-auto"
        >
          {content.stats.map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              className="text-center"
            >
              <div className="text-2xl md:text-3xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-white/80 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default EventHeroSection;