import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useScrollAnimation(selector, options = {}) {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(selector, {
        y: 24,
        rotateX: 6,
        opacity: 0,
        stagger: 0.08,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: options.trigger || selector,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
        ...options,
      })
    })
    return () => ctx.revert()
  }, [selector])
}
