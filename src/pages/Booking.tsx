import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Calendar, Clock, User, Mail, Phone, MessageSquare, CreditCard } from 'lucide-react'

interface BookingFormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  program: string
  duration: string
  checkIn: string
  checkOut: string
  guests: number
  healthConcerns: string
  dietaryRestrictions: string
  emergencyContact: string
  emergencyPhone: string
}

const Booking: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<BookingFormData>()
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState<Partial<BookingFormData>>({})

  const programs = [
    { id: 'ayurveda', name: 'Ayurveda Healing', price: 599 },
    { id: 'yoga', name: 'Yoga & Meditation', price: 499 },
    { id: 'detox', name: 'Detox Program', price: 699 },
    { id: 'stress', name: 'Stress Management', price: 549 },
    { id: 'wellness', name: 'Complete Wellness', price: 899 }
  ]

  const durations = [
    { id: '3-days', name: '3 Days', multiplier: 1 },
    { id: '7-days', name: '7 Days', multiplier: 2.2 },
    { id: '14-days', name: '14 Days', multiplier: 4 },
    { id: '21-days', name: '21 Days', multiplier: 5.5 }
  ]

  const onSubmit = (data: BookingFormData) => {
    const finalData = { ...formData, ...data }
    if (step < 3) {
      setFormData(finalData)
      setStep(step + 1)
    } else {
      // Process final booking
      console.log('Final booking data:', finalData)
      alert('Booking submitted successfully! You will receive a confirmation email shortly.')
    }
  }

  const getSelectedProgram = () => {
    return programs.find(p => p.id === formData.program)
  }

  const getSelectedDuration = () => {
    return durations.find(d => d.id === formData.duration)
  }

  const getTotalPrice = () => {
    const program = getSelectedProgram()
    const duration = getSelectedDuration()
    if (program && duration) {
      return Math.round(program.price * duration.multiplier)
    }
    return 0
  }

  return (
    <div className="min-h-screen bg-cream-50">
      <div className="container-max section-padding">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold text-sage-600 mb-4">
            Book Your Healing Journey
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Take the first step towards complete Nowal. Fill out the form below to reserve your spot.
          </p>
        </div>

        {/* Progress Bar */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="flex items-center justify-between mb-4">
            <div className={`flex items-center ${step >= 1 ? 'text-sage-600' : 'text-gray-400'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-2 ${step >= 1 ? 'bg-sage-400 text-white' : 'bg-gray-200'}`}>1</div>
              <span>Program Selection</span>
            </div>
            <div className={`flex items-center ${step >= 2 ? 'text-sage-600' : 'text-gray-400'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-2 ${step >= 2 ? 'bg-sage-400 text-white' : 'bg-gray-200'}`}>2</div>
              <span>Personal Details</span>
            </div>
            <div className={`flex items-center ${step >= 3 ? 'text-sage-600' : 'text-gray-400'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-2 ${step >= 3 ? 'bg-sage-400 text-white' : 'bg-gray-200'}`}>3</div>
              <span>Confirmation</span>
            </div>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className={`bg-sage-400 h-2 rounded-full transition-all duration-500`} style={{ width: `${(step / 3) * 100}%` }}></div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-xl shadow-lg p-8">
            {/* Step 1: Program Selection */}
            {step === 1 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-playfair font-semibold text-sage-600 mb-6">Select Your Program</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {programs.map((program) => (
                    <label key={program.id} className="cursor-pointer">
                      <input
                        type="radio"
                        value={program.id}
                        {...register('program', { required: 'Please select a program' })}
                        className="sr-only"
                      />
                      <div className="border-2 border-gray-200 rounded-lg p-4 hover:border-sage-400 transition-colors">
                        <div className="flex justify-between items-center">
                          <div>
                            <h3 className="font-semibold text-sage-600">{program.name}</h3>
                            <p className="text-sm text-gray-600">Starting from ${program.price}</p>
                          </div>
                        </div>
                      </div>
                    </label>
                  ))}
                </div>
                {errors.program && <p className="text-red-500 text-sm">{errors.program.message}</p>}

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Duration</label>
                  <select
                    {...register('duration', { required: 'Please select duration' })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sage-400"
                  >
                    <option value="">Select duration</option>
                    {durations.map((duration) => (
                      <option key={duration.id} value={duration.id}>{duration.name}</option>
                    ))}
                  </select>
                  {errors.duration && <p className="text-red-500 text-sm">{errors.duration.message}</p>}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Check-in Date</label>
                    <input
                      type="date"
                      {...register('checkIn', { required: 'Check-in date is required' })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sage-400"
                    />
                    {errors.checkIn && <p className="text-red-500 text-sm">{errors.checkIn.message}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Check-out Date</label>
                    <input
                      type="date"
                      {...register('checkOut', { required: 'Check-out date is required' })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sage-400"
                    />
                    {errors.checkOut && <p className="text-red-500 text-sm">{errors.checkOut.message}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Number of Guests</label>
                  <select
                    {...register('guests', { required: 'Please select number of guests' })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sage-400"
                  >
                    <option value="">Select guests</option>
                    <option value="1">1 Guest</option>
                    <option value="2">2 Guests</option>
                    <option value="3">3 Guests</option>
                    <option value="4">4 Guests</option>
                  </select>
                  {errors.guests && <p className="text-red-500 text-sm">{errors.guests.message}</p>}
                </div>
              </div>
            )}

            {/* Step 2: Personal Details */}
            {step === 2 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-playfair font-semibold text-sage-600 mb-6">Personal Information</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                    <input
                      type="text"
                      {...register('firstName', { required: 'First name is required' })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sage-400"
                    />
                    {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName.message}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                    <input
                      type="text"
                      {...register('lastName', { required: 'Last name is required' })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sage-400"
                    />
                    {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName.message}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    {...register('email', { required: 'Email is required' })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sage-400"
                  />
                  {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    {...register('phone', { required: 'Phone number is required' })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sage-400"
                  />
                  {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Health Concerns</label>
                  <textarea
                    {...register('healthConcerns')}
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sage-400"
                    placeholder="Please describe any health concerns or conditions we should be aware of..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Dietary Restrictions</label>
                  <textarea
                    {...register('dietaryRestrictions')}
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sage-400"
                    placeholder="Please list any dietary restrictions or allergies..."
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Emergency Contact Name</label>
                    <input
                      type="text"
                      {...register('emergencyContact', { required: 'Emergency contact is required' })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sage-400"
                    />
                    {errors.emergencyContact && <p className="text-red-500 text-sm">{errors.emergencyContact.message}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Emergency Contact Phone</label>
                    <input
                      type="tel"
                      {...register('emergencyPhone', { required: 'Emergency contact phone is required' })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sage-400"
                    />
                    {errors.emergencyPhone && <p className="text-red-500 text-sm">{errors.emergencyPhone.message}</p>}
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Confirmation */}
            {step === 3 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-playfair font-semibold text-sage-600 mb-6">Booking Confirmation</h2>
                
                <div className="bg-sage-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-4">Booking Summary</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Program:</span>
                      <span className="font-semibold">{getSelectedProgram()?.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Duration:</span>
                      <span className="font-semibold">{getSelectedDuration()?.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Guests:</span>
                      <span className="font-semibold">{formData.guests}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Check-in:</span>
                      <span className="font-semibold">{formData.checkIn}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Check-out:</span>
                      <span className="font-semibold">{formData.checkOut}</span>
                    </div>
                    <div className="border-t pt-2 mt-4">
                      <div className="flex justify-between text-lg font-semibold">
                        <span>Total Amount:</span>
                        <span className="text-sage-600">${getTotalPrice()}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-800 mb-2">Payment Information</h4>
                  <p className="text-sm text-yellow-700">
                    A 30% deposit (${Math.round(getTotalPrice() * 0.3)}) is required to confirm your booking. 
                    The remaining balance can be paid upon arrival.
                  </p>
                </div>

                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="terms"
                    className="w-4 h-4 text-sage-600 rounded focus:ring-sage-400"
                    required
                  />
                  <label htmlFor="terms" className="text-sm text-gray-600">
                    I agree to the terms and conditions and cancellation policy
                  </label>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8">
              {step > 1 && (
                <button
                  type="button"
                  onClick={() => setStep(step - 1)}
                  className="btn-outline"
                >
                  Previous
                </button>
              )}
              <button
                type="submit"
                className="btn-primary ml-auto"
              >
                {step === 3 ? 'Complete Booking' : 'Next Step'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Booking