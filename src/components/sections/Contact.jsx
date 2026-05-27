'use client'

import RevealSection from '../RevealSection'

export default function Contact() {

  return (
    <section id="contact" className="max-sm:py-10 py-24 bg-gradient-to-b">
      <div className="flex flex-col container-custom section-padding">
        <RevealSection direction='up'>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-5xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-yellow-600 to-yellow-300 bg-clip-text text-transparent">             
                Dónde estamos
              </span>
            </h2>
            <p className="font-sans text-xl text-gray-300">
              Nos encontramos en pleno barrio de Palermo Soho, entre cafés y comercios de diversa índole. Cerca del Alto Palermo y no muy lejos del Jardín Botánico y el Ecoparque.
            </p>
          </div>
        </RevealSection>

        <div className="grid h-fit md:grid-cols-2 gap-8 px-4 md:px-8 lg:grid-cols-2 lg:px-16">
          <RevealSection direction='up'>
            <div className="group h-max p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-yellow-600 transition-all duration-300 hover:-translate-y-2 border border-yellow-600 justify-items-center">
              <h2 className='text-3xl md:text-3xl lg:text-4xl font-bold mb-6'>
                <span className="bg-gradient-to-r from-yellow-600 to-yellow-300 bg-clip-text text-transparent">
                  Nuestra dirección:
                </span>  
              </h2>

              <div className='grid grid-cols-1 grid-rows-1 w-full gap-8'>
                <div className='align-middle'>
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1381.037693874275!2d-58.409532834516156!3d-34.586970207394934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sar!4v1778248493091!5m2!1ses-419!2sar" 
                    className="w-full max-sm:h-[300px] md:h-[400px] rounded-2xl shadow-lg"
                    style={{ border:0 }} 
                    allowFullScreen
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade">
                  </iframe>
                </div>
                <div className='grid'>
                  <p className="font-sans text-xl text-gray-300 justify-self-center w-fit"> Coronel Díaz 2122</p>
                  <p className="font-sans text-xl text-gray-300 justify-self-center w-fit">Palermo - CABA</p>
                </div>
              </div>
            </div>
          </RevealSection>
        
          <RevealSection direction='up'>
            <div className="group h-fit p-4 rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-yellow-600 transition-all duration-300 hover:-translate-y-2 border border-yellow-600 justify-items-center">
              <div className="grid content-center justify-items-center">
                <h2 className='text-3xl md:text-3xl lg:text-4xl font-bold mb-6'>
                  <span className="bg-gradient-to-r from-yellow-600 to-yellow-300 bg-clip-text text-transparent">
                    Nuestros horarios
                  </span>
                </h2>
                <p className="font-sans text-xl text-gray-300 justify-self-center w-fit mt-4">Lunes a viernes de 10 a 20hs</p>
                <p className="font-sans text-xl text-gray-300 justify-self-center w-fit mb-4">Sábados de 10 a 17hs</p>
              </div>
            </div>
          </RevealSection>
      </div>
      {/* Logo y botón de Whatsapp*/}
      <div className='relative flex flex-col pt-12 z-30 items-center'>
        <div className='h-fit justify-self-center'>
          <a 
            href="https://wa.me/549XXXXXXXXXX?text=Hola%20quiero%20reservar%20un%20turno"
            target="_blank"
            className="font-[sans-serif] bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-xl transition"
          >
            Solicitar turno por WhatsApp
          </a>
        </div>
        </div>
      </div>
    </section>
  )
} 