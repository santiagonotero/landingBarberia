'use client'

import { ArrowRight, Sparkles } from 'lucide-react'
import RevealSection from '../RevealSection'

export default function Pricing() {
  const scrollToContact = () => {
    const element = document.querySelector('#contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="min-h-screen flex items-center pt-20 reveal">
      <div className="container-custom section-padding">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <RevealSection direction="up">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                <Sparkles size={16} />
                <span>Lanzamiento Beta Disponible</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                <span className="block">Transforma tu</span>
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Experiencia Digital
                </span>
              </h1>

              <p className="text-xl text-gray-600 max-w-2xl">
                Una solución completa que revoluciona la forma en que interactúas con la tecnología. 
                Diseñada para el futuro, disponible hoy.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={scrollToContact}
                  className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Comenzar Ahora
                  <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                </button>
                <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold text-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-300">
                  Ver Demo
                </button>
              </div>

              <div className="flex items-center gap-6 pt-8">
                <div>
                  <div className="text-3xl font-bold text-gray-900">10K+</div>
                  <div className="text-gray-600">Usuarios Activos</div>
                </div>
                <div className="h-12 w-px bg-gray-300"></div>
                <div>
                  <div className="text-3xl font-bold text-gray-900">99.9%</div>
                  <div className="text-gray-600">Tiempo Activo</div>
                </div>
              </div>
            </div>
          </RevealSection>

          {/* Right Column - Animated Graphic */}
          <RevealSection direction="right" delay={0.2}>
            <div className="relative">
              <div className="relative h-[500px] bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl overflow-hidden shadow-2xl">
                {/* Floating elements */}
                <div className="absolute top-10 left-10 w-20 h-20 bg-blue-500 rounded-2xl animate-bounce" 
                  style={{ animationDelay: '0.2s' }}></div>
                <div className="absolute bottom-20 right-10 w-24 h-24 bg-purple-500 rounded-3xl animate-bounce"
                  style={{ animationDelay: '0.4s' }}></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full animate-pulse"></div>
                
                {/* Grid pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `linear-gradient(to right, #3b82f6 1px, transparent 1px),
                                    linear-gradient(to bottom, #3b82f6 1px, transparent 1px)`,
                    backgroundSize: '40px 40px'
                  }}></div>
                </div>
              </div>
              
              {/* Floating card */}
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl max-w-xs stagger-item">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 font-bold">✓</span>
                  </div>
                  <div>
                    <div className="font-semibold">¡Nueva función!</div>
                    <div className="text-sm text-gray-600">IA Integrada</div>
                  </div>
                </div>
                <div className="text-gray-700">
                  Ahora con asistente de IA para automatizar tus tareas.
                </div>
              </div>
            </div>
          </RevealSection>
        </div>
      </div>
    </section>
  )
}