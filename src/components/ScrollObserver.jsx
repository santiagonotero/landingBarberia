'use client'

import { useEffect } from 'react'

export default function ScrollObserver() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active')
          
          // Animación para elementos con stagger
          const staggerElements = entry.target.querySelectorAll('.stagger-item')
          staggerElements.forEach((el, index) => {
            el.style.transitionDelay = `${index * 0.1}s`
            el.classList.add('active')
          })
        }
      })
    }, observerOptions)

    // Observar todas las secciones con clase reveal
    document.querySelectorAll('.reveal').forEach((section) => {
      observer.observe(section)
    })

    return () => {
      document.querySelectorAll('.reveal').forEach((section) => {
        observer.unobserve(section)
      })
    }
  }, [])

  return null
}