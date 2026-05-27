'use client'

import { useState, useEffect, useCallback } from "react";

const testimonials = [
  {
    id: 1,
    name: "Valentín P.",
    avatar: "VR",
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alexander',
    color: "from-violet-500 to-purple-600",
    text: 'Me encantó el servicio, los que me atendieron...muy buena onda',
    rating: 5,
  },
  {
    id: 2,
    name: "Carlos R.",
    avatar: "MC",
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Carlos',
    color: "from-teal-500 to-emerald-600",
    text: 'Vine por recomendación, y la verdad superaron mis expectativas. Los recomiendo también 100%',
    rating: 5,
  },
  {
    id: 3,
    name: 'Diego F.',
    avatar: "LV",
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Aiden',
    color: "from-rose-500 to-pink-600",
    text: 'Ellos supieron entender exactamente lo que quería hacer con mi barba y lo hicieron de 10. Ahora voy siempre',
    rating: 5,
  },
  {
    id: 4,
    name: 'Johnatan C.',
    avatar: "JC",
    color: "from-amber-500 to-orange-600",
    text: 'Ellos supieron entender exactamente lo que quería hacer con mi barba y lo hicieron de 10. Ahora voy siempre',
    rating: 5,
  },
];

{/* Figura de estrella llena-vacía */}
const StarIcon = ({ filled }) => (
  <svg
    className={`w-4 h-4 ${filled ? "text-amber-400" : "text-gray-300"}`}
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const QuoteIcon = () => (
  <svg
    className="w-8 h-8 text-white/20"
    fill="currentColor"
    viewBox="0 0 32 32"
  >
    <path d="M10 8C6.686 8 4 10.686 4 14v10h10V14H7c0-1.654 1.346-3 3-3V8zm14 0c-3.314 0-6 2.686-6 6v10h10V14h-7c0-1.654 1.346-3 3-3V8z" />
  </svg>
);


// Tarjeta individual de testimonio
function TestimonialCard({ t }) {
  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-yellow-600 shadow-sm px-6 h-full">
      {/* Avatar + nombre + estrellas */}
      <div className="flex items-center gap-3">
        <div className={`w-12 h-12 rounded-full overflow-hidden bg-gradient-to-br ${t.color} flex-shrink-0`}>
          {t.image ? (
            <img src={t.image} width="48" height="48" alt={`avatar_${t.id}`} className="w-full h-full object-cover" />
          ) : (
            <span className="w-full h-full flex items-center justify-center text-white font-bold text-sm">
              {t.avatar}
            </span>
          )}
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-sans font-semibold text-gray-100 text-sm truncate">{t.name}</p>
          <div className="flex gap-0.5 mt-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <StarIcon key={i} filled={i < t.rating} />
            ))}
          </div>
        </div>
      </div>
 
      {/* Texto */}
      <div className="flex-1">
        <QuoteIcon />
        <p className="text-gray-400 text-sm leading-relaxed mt-1 italic">
          "{t.text}"
        </p>
      </div>
    </div>
  );
}
 


export default function Testimonials() {
  // `current` es el índice del primer testimonio visible
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState("right");
  // Detectamos si es desktop con un hook simple
  const [isDesktop, setIsDesktop] = useState(false);


    useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    setIsDesktop(mq.matches);
    const handler = (e) => setIsDesktop(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);
 

  const visibleCount = isDesktop ? 2 : 1;
  const total = testimonials.length;


  const goTo = useCallback(
    (index, dir = "right") => {
      if (animating) return;
      setDirection(dir);
      setAnimating(true);
      setTimeout(() => {
        // Normalizar índice para que siempre sea válido
        setCurrent(((index % total) + total) % total);
        setAnimating(false);
      }, 300);
    },
    [animating, total]
  );
 

  {/* Control del botón para ir a la izquierda */}
  const prev = () => goTo(current - 1, "left");

  {/* Control del botón para ir a la derecha */}
  const next = useCallback(() => goTo(current + 1, "right"), [current, goTo]);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const t = testimonials[current];


    // Los índices de los testimonios visibles (con wrap circular)
  const visibleIndexes = Array.from({ length: visibleCount }, (_, i) =>
    (current + i) % total
  );



  return (
    <section className="flex items-center justify-center px-4 py-24 font-sans">
      <div className="w-full max-w-4xl">
 
        {/* Encabezado */}
        <div className="text-center mb-14">
          <h2 className="font-[BirchStd] text-5xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-yellow-600 to-yellow-300 bg-clip-text text-transparent">
              Lo que dicen nuestros Clientes
            </span>
          </h2>
          <p className="font-sans text-xl text-gray-300">
            Tenemos cada vez más clientes, por ende más trabajo...por algo será 😜
          </p>
        </div>
 
        {/* Carrusel */}
        <div className="relative px-8">
          {/* Grid de tarjetas */}
          <div
            className={`grid gap-4 transition-all duration-300 ease-out ${
              isDesktop ? "grid-cols-2" : "grid-cols-1"
            } ${
              animating
                ? direction === "right"
                  ? "-translate-x-4 opacity-0"
                  : "translate-x-4 opacity-0"
                : "translate-x-0 opacity-100"
            }`}
          >
            {visibleIndexes.map((idx) => (
              <TestimonialCard key={`${idx}-${current}`} t={testimonials[idx]} />
            ))}
          </div>
 
          {/* Botón anterior */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full border-yellow-600 bg-yellow-600 text-gray-600 hover:bg-yellow-300 hover:text-gray-900 transition-all flex items-center justify-center shadow-sm"
            aria-label="Anterior"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
 
          {/* Botón siguiente */}
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full border-yellow-300 bg-yellow-300 text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-all flex items-center justify-center shadow-sm"
            aria-label="Siguiente"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
 
        {/* Dots — uno por testimonio */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i, i > current ? "right" : "left")}
              className={`transition-all duration-300 bg-gray-400 rounded-full ${
                i === current
                  ? "w-6 h-2 bg-gradient-to-r from-yellow-600 to-yellow-300"
                  : "w-2 h-2 bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Ir al testimonio ${i + 1}`}
            />
          ))}
        </div>
 
        {/* Contador */}
        <p className="text-center text-gray-300 text-xs mt-3 tabular-nums">
          {current + 1} / {total}
        </p>
      </div>
    </section>
  );
}
 