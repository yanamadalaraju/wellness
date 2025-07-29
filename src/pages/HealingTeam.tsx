import React from 'react'
import { Award, BookOpen, Heart, Star } from 'lucide-react'
import { Link } from 'react-router-dom'

const HealingTeam: React.FC = () => {
  const teamMembers = [
    {
      name: "Dr. Priya Sharma",
      title: "Founder & Chief Ayurvedic Physician",
      image: "https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=400",
      specialization: "Ayurveda, Panchakarma, Women's Health",
      experience: "20+ years",
      education: "BAMS, MD (Ayurveda), Certified Panchakarma Specialist",
      description: "Dr. Priya is a renowned Ayurvedic physician with over two decades of experience in traditional healing. She has treated thousands of patients worldwide and is passionate about making ancient wisdom accessible to modern lives.",
      achievements: [
        "Founder of Nowal Retreat Center",
        "Published author of 'Ayurveda for Modern Life'",
        "International speaker on holistic health",
        "Winner of Excellence in Ayurveda Award 2020"
      ]
    },
    {
      name: "Dr. Michael Chen",
      title: "Naturopathic Doctor & Nowal Director",
      image: "https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=400",
      specialization: "Naturopathy, Nutrition, Detoxification",
      experience: "15+ years",
      education: "ND, MS in Holistic Nutrition, Certified Detox Specialist",
      description: "Dr. Chen combines scientific training with natural healing methods. His approach focuses on identifying and treating root causes rather than just symptoms.",
      achievements: [
        "Board certified Naturopathic Doctor",
        "Research in integrative medicine",
        "Developed our signature detox protocols",
        "Featured in Natural Health Magazine"
      ]
    },
    {
      name: "Sarah Johnson",
      title: "Senior Yoga Instructor & Meditation Guide",
      image: "https://images.pexels.com/photos/3822621/pexels-photo-3822621.jpeg?auto=compress&cs=tinysrgb&w=400",
      specialization: "Hatha Yoga, Meditation, Breathwork",
      experience: "12+ years",
      education: "E-RYT 500, Meditation Teacher Training, Pranayama Specialist",
      description: "Sarah brings a gentle yet powerful approach to yoga and meditation. Her classes are designed to meet students where they are and guide them toward deeper self-awareness.",
      achievements: [
        "Certified E-RYT 500 Yoga Teacher",
        "Trained over 200 yoga instructors",
        "Specialist in therapeutic yoga",
        "Lead meditation retreat facilitator"
      ]
    },
    {
      name: "Dr. Rajesh Patel",
      title: "Ayurvedic Physician & Pulse Diagnostician",
      image: "https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=400",
      specialization: "Pulse Diagnosis, Herbal Medicine, Lifestyle Counseling",
      experience: "18+ years",
      education: "BAMS, MD (Kayachikitsa), Advanced Pulse Diagnosis",
      description: "Dr. Patel is a master of traditional Ayurvedic pulse diagnosis. His intuitive understanding of the body's subtle energies helps create highly personalized treatment plans.",
      achievements: [
        "Expert in Nadi Pariksha (pulse diagnosis)",
        "Herbalist with extensive plant knowledge",
        "Trained in traditional Gurukula system",
        "Consultant to international Nowal centers"
      ]
    },
    {
      name: "Emma Williams",
      title: "Nutritionist & Nowal Coach",
      image: "https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=400",
      specialization: "Holistic Nutrition, Lifestyle Coaching, Meal Planning",
      experience: "10+ years",
      education: "MS in Nutrition, Certified Health Coach, Ayurvedic Nutrition Specialist",
      description: "Emma specializes in creating sustainable nutrition plans that honor both modern nutritional science and traditional wisdom. Her approach emphasizes whole foods and mindful eating.",
      achievements: [
        "Certified Holistic Nutrition Specialist",
        "Developed our signature meal programs",
        "Expert in food as medicine approach",
        "Workshop leader in conscious eating"
      ]
    },
    {
      name: "Marcus Thompson",
      title: "Massage Therapist & Bodywork Specialist",
      image: "https://images.pexels.com/photos/3822864/pexels-photo-3822864.jpeg?auto=compress&cs=tinysrgb&w=400",
      specialization: "Abhyanga, Deep Tissue, Lymphatic Drainage",
      experience: "14+ years",
      education: "LMT, Certified Ayurvedic Massage Therapist, Craniosacral Therapy",
      description: "Marcus brings healing touch to our Nowal programs. His skilled hands and intuitive understanding of the body's energy systems provide deep relaxation and therapeutic benefits.",
      achievements: [
        "Licensed Massage Therapist",
        "Trained in traditional Ayurvedic massage",
        "Specialist in therapeutic bodywork",
        "Certified in lymphatic drainage"
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-cream-50">
      {/* Hero Section */}
      <section className="relative min-h-96 flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/3822621/pexels-photo-3822621.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Healing Team"
            className="w-full h-full object-cover"
          />
         
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-6 text-shadow">
            Our Healing Team
          </h1>
          <p className="text-xl md:text-2xl text-shadow">
            Meet the compassionate experts guiding your Nowal journey
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
                          <span className="text-sage-800 font-medium">Healing Team</span>
                        </li>
                      </ol>
                    </nav>
                  </div>

      {/* Team Introduction */}
      <section className="section-padding bg-white">
        <div className="container-max text-center">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-sage-600 mb-8">
            Experts in Healing
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
            Our diverse team of healing professionals brings together centuries of traditional wisdom 
            with modern expertise. Each member is carefully selected for their deep knowledge, 
            compassionate approach, and commitment to your complete Nowal.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-sage-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-playfair font-semibold text-sage-600 mb-2">
                Certified Experts
              </h3>
              <p className="text-gray-600 text-sm">
                All our practitioners hold advanced certifications in their specialties
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-sage-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-playfair font-semibold text-sage-600 mb-2">
                Continuous Learning
              </h3>
              <p className="text-gray-600 text-sm">
                Our team regularly updates their knowledge with latest research
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-sage-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-playfair font-semibold text-sage-600 mb-2">
                Compassionate Care
              </h3>
              <p className="text-gray-600 text-sm">
                Every interaction is guided by empathy and genuine care
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-sage-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-playfair font-semibold text-sage-600 mb-2">
                Proven Results
              </h3>
              <p className="text-gray-600 text-sm">
                Thousands of successful healing journeys speak to our expertise
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="section-padding bg-sage-50">
        <div className="container-max">
          <div className="space-y-16">
            {teamMembers.map((member, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-3 gap-8 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={`lg:col-span-1 ${index % 2 === 1 ? 'lg:col-start-3' : ''}`}>
                  <div className="card">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-64 object-cover rounded-lg mb-4"
                    />
                    <div className="text-center">
                      <h3 className="text-xl font-playfair font-bold text-sage-600 mb-1">
                        {member.name}
                      </h3>
                      <p className="text-terracotta-500 font-medium mb-3">
                        {member.title}
                      </p>
                      <div className="space-y-2 text-sm">
                        <p><span className="font-medium">Experience:</span> {member.experience}</p>
                        <p><span className="font-medium">Specialization:</span> {member.specialization}</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className={`lg:col-span-2 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="card">
                    <h3 className="text-2xl font-playfair font-bold text-sage-600 mb-4">
                      About {member.name.split(' ')[0]}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {member.description}
                    </p>
                    
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-sage-600 mb-3">Education & Training</h4>
                      <p className="text-gray-600">{member.education}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-sage-600 mb-3">Key Achievements</h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {member.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start text-gray-600">
                            <div className="w-2 h-2 bg-sage-400 rounded-full mr-2 mt-2 flex-shrink-0"></div>
                            <span className="text-sm">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-sage-400 text-white">
        <div className="container-max text-center">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
            Ready to Meet Your Healing Team?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Our experts are here to guide you on your Nowal journey with personalized care and proven expertise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/booking" className="btn-secondary">
              Book Your Consultation
            </a>
            <a href="/contact" className="btn-outline border-white text-white hover:bg-white hover:text-sage-400">
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HealingTeam