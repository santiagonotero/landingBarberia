'use client'

import { Star, Quote } from 'lucide-react'
import RevealSection from '../RevealSection'

const testimonials = [
  {
    name: 'Valentín P',
    content: 'Me encantó el servicio, los que me atendieron...muy buena onda',
    rating: 5,
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alexander'
  },
  {
    name: 'Carlos R.',
    content: 'Vine por recomendación, y la verdad superaron mis expectativas. Los recomiendo también 100%',
    rating: 5,
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Carlos'
  },
  {
    name: 'Diego F.',
    content: 'Ellos supieron entender exactamente lo que quería hacer con mi barba y lo hicieron de 10. Ahora voy siempre',
    rating: 5,
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Aiden'
  },
    {
    name: 'Benito C.',
    content: 'Ellos supieron entender exactamente lo que quería hacer con mi barba y lo hicieron de 10. Ahora voy siempre',
    rating: 5,
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Dylan'
  }
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-gray-50 to-white reveal w-[90%]">
      <div className="container-custom section-padding">
        <RevealSection direction="up">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Lo que dicen nuestros Clientes
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              Tenemos cada vez más clientes, por ende más trabajo...por algo será 😜 
            </p>
          </div>
        </RevealSection>

        <div className="grid md:grid-cols-3 gap-8 place-content-around">
        {/* Acá poner los botones para desplazar los testimonios*/}

          {/* Botón izquierdo */}
          <button className='hover:shadow-2xl hover:delay-100 bg-slate-100 z-10 absolute w-20 h-20 rounded-full self-center justify-self-start'>
            <svg width="80" height="80" viewBox="0 0 80 80">
              <path d="M 45 20 L 25 40 L 45 60 " fill="none" stroke-linecap="round" stroke-linejoin="round" stroke="gray" stroke-width='5'/>
            </svg>
          </button>

          {/* Botón derecho */}
          <button className='hover:shadow-2xl hover:delay-100 bg-slate-100 z-10 absolute w-20 h-20 rounded-full self-center justify-self-end'>
            <svg width="80" height="80" viewBox="0 0 80 80">
              <path d="M 35 20 L 55 40 L 35 60 " fill="none" stroke-linecap="round" stroke-linejoin="round" stroke="gray" stroke-width='5'/>
            </svg>
          </button>
          {testimonials.map((testimonial, index) => (
            <RevealSection 
              key={testimonial.name} 
              direction="up"
              delay={index * 0.1}
            >
              <div className="bg-red-400 h-full p-8 rounded-2xl shadow-xl border border-gray-100 relative group hover:shadow-2xl transition-all duration-300">
                <Quote className="absolute top-6 right-6 w-12 h-12 text-blue-100 group-hover:text-blue-200 transition-colors" />
                
                <div className="flex flex-row items-center gap-4 mb-6">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-16 h-full object-cover rounded-full border-4 border-white shadow-lg"
                  />
                  <div className="flex flex-col justify-center">
                    <h4 className="font-bold text-lg">{testimonial.name}</h4>
                  </div>
                </div>

                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <p className="text-gray-700 italic mb-6">"{testimonial.content}"</p>

                <div className="pt-6 border-t border-gray-100">
                  <div className="text-sm text-gray-500">
                    Desde hace 6 meses
                  </div>
                </div>
              </div>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  )
}