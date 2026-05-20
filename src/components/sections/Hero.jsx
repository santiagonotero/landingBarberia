'use client'

export default function Hero() {
  const scrollToContact = () => {
    const element = document.querySelector('#contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className='relative h-[60vh] min-h-[400px] w-full flex items-center justify-center overflow-hidden'>
      {/* Imagen de fondo*/}
      <img src='/images/herramientasBarberia.jpg' className='absolute inset-0  w-full h-full object-cover'/>
      {/* Overlay oscuro */}
      <div className='absolute inset-0 bg-black/60 z-10' ></div>
      {/* Logo y botón de Whatsapp*/}
      <div className='relative flex flex-col z-30 items-center'>
        <img src='/images/Logo.png' />
        <div className='h-fit justify-self-center'>
          <a 
            href="https://wa.me/549XXXXXXXXXX?text=Hola%20quiero%20reservar%20un%20turno"
            target="_blank"
            className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-xl transition"
          >
            Reservar por WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}