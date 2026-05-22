import Hero from '@/components/sections/Hero'
import Features from '@/components/sections/Features'
import Testimonials from '@/components/sections/Testimonials'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/sections/Footer'

export default function Home() {
  return (
    <main className='bg-black '>
      <Hero />
      <Features />
      <Testimonials />
      <Contact />
      <Footer />
      {/* Botón de Whatsapp flotando en la parte inferior derecha de la pantalla */}
      <a
          href="https://wa.me/5491112345678?text=Hola,%20quiero%20consultar%20por%20un%20turno%20para%20un%20servicio%20de%20barberia"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            backgroundColor: "#f0f0f0",
            color: "#fff",
            padding: "15px 18px",
            borderRadius: "50px",
            textDecoration: "none",
            fontWeight: "bold",
            boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
            zIndex: 1000
          }}
        >
          <img src="/images/logoWhatsapp.png" />
        </a>
    </main>
  )
}