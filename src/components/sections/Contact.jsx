'use client'


import { 
  Zap, 
  Shield, 
  BarChart3, 
  Cloud, 
  Users, 
  Globe 
} from 'lucide-react'

import { ArrowRight, Sparkles } from 'lucide-react'
import RevealSection from '../RevealSection'

export default function Contact() {
  // const scrollToContact = () => {
  //   const element = document.querySelector('#contact')
  //   if (element) {
  //     element.scrollIntoView({ behavior: 'smooth' })
  //   }
  // }

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-white to-gray-50 reveal">
      <div className="container-custom section-padding">
        <RevealSection direction='up'>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">             
                Quiénes somos
              </span>
            </h2>
          </div>
        </RevealSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          <RevealSection direction='up'>
            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 justify-items-center">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Nuestra dirección:</h3>
              <p className="text-xl text-gray-600"> Coronel Díaz 9798 - Palermo - CABA</p>
            </div>
          </RevealSection>
        
          <RevealSection direction='up'>
            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 justify-items-center">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Nuestros horarios</h3>
              <p className="text-xl text-gray-600">Lunes a viernes de 10 a 20hs</p>
              <p className="text-xl text-gray-600">Sábados de 10 a 17hs</p>
            </div>
          </RevealSection>
        </div>
      </div>
    </section>
  )
} 