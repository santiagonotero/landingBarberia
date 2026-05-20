'use client'

import RevealSection from '../RevealSection'

export default function Contact() {

  return (
    <section id="contact" className="max-sm:py-10 py-24 bg-gradient-to-b from-white to-gray-50 reveal">
      <div className="flex flex-col container-custom section-padding">
        <RevealSection direction='up'>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">             
                Quiénes somos
              </span>
            </h2>
            <p className="text-xl text-gray-600">Estamos en el barrio de Palermo hace más de 20 años. </p>
          </div>
        </RevealSection>

        <div className="grid h-fit md:grid-cols-2 gap-8 px-4 md:px-8 lg:grid-cols-2 lg:px-16">
          <RevealSection direction='up'>
            <div className="group h-max bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 justify-items-center">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Nuestra dirección:</h3>

              <div className='grid grid-cols-1 grid-rows-1 w-full gap-8'>
                <div className='align-middle'>
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1381.037693874275!2d-58.409532834516156!3d-34.586970207394934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sar!4v1778248493091!5m2!1ses-419!2sar" 
                    className="w-full md:h-[300px] rounded-2xl shadow-lg"
                    style={{ border:0 }} 
                    allowFullScreen
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade">
                  </iframe>
                </div>
                <div className='grid'>
                  <p className="text-xl text-gray-600 justify-self-center w-fit"> Coronel Díaz 2122</p>
                  <p className="text-xl text-gray-600 justify-self-center w-fit">Palermo - CABA</p>
                </div>
              </div>
            </div>
          </RevealSection>
        
          <RevealSection direction='up'>
            <div className="group h-fit bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 justify-items-center">
              <div className="grid content-center justify-items-center">
                <h3 className="text-2xl font-bold mb-4 text-gray-900 w-fit">Nuestros horarios</h3>
                <p className="text-xl text-gray-600 justify-self-center w-fit my-4">Lunes a viernes de 10 a 20hs</p>
                <p className="text-xl text-gray-600 justify-self-center w-fit my-4">Sábados de 10 a 17hs</p>
              </div>
            </div>
          </RevealSection>
        </div>
      </div>
    </section>
  )
} 