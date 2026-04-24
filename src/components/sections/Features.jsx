'use client'

import { 
  Zap, 
  Shield, 
  BarChart3, 
  Cloud, 
  Users, 
  Globe 
} from 'lucide-react'
import RevealSection from '../RevealSection'

const features = [
  {
    icon: <Zap className="w-8 h-8" />,
    title: '✔Corte clásico',
    image: '/images/corteClasico/corteClasico.jpg',
    description: 'Optimizado para ofrecer la máxima velocidad y eficiencia en cada operación.',
    color: 'from-yellow-500 to-orange-500'
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: '✔Fade/Degradé',
    image: '/images/fadeDegrade/fadeDegrade.jpg',
    description: 'Protección de datos con encriptación de punta a punta y autenticación multifactor.',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: <BarChart3 className="w-8 h-8" />,
    title: '✔Arreglo de barba',
    image: '/images/arregloBarba/arregloBarba.jpg',
    description: 'Dashboard intuitivo con métricas en vivo para toma de decisiones informadas.',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: <Cloud className="w-8 h-8" />,
    title: '✔Perfilado',
    image: '/images/perfilado/perfilado.jpg',
    description: 'Escalabilidad automática y disponibilidad global con nuestra red de servidores.',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: '✔Corte + Barba',
    image: '/images/corteBarba/corteBarba.jpg',
    description: 'Herramientas integradas para trabajo colaborativo y gestión de proyectos.',
    color: 'from-indigo-500 to-blue-500'
  },
]

export default function Features() {
  return (
    <section id="features" className="py-24 bg-gradient-to-b from-white to-gray-50 reveal">
      <div className="container-custom section-padding">
        <RevealSection direction="up">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Nuestros servicios
              </span>
            </h2>
          </div>
        </RevealSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {features.map((feature, index) => (
            <RevealSection 
              key={feature.title} 
              direction="up"
              delay={index * 0.1}
            >
              <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 justify-items-center">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  {feature.title}
                </h3>
                <img src={feature.image}></img>
              </div>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  )
}