'use client'

import { useState, useRef } from 'react'
import Link from 'next/link'

const TIPOS_EVENTO = [
  'Quincea\u00f1era',
  'Boda',
  'Cumplea\u00f1os',
  'Baby Shower',
  'Bautizo',
  'Primera Comuni\u00f3n',
  'Corporativo',
  'Otro',
]

function ContactoForm() {
  const [enviado, setEnviado] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const form = formRef.current
    if (!form) return
    try {
      const res = await fetch('https://formspree.io/f/myznknaa', {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      })
      if (res.ok) setEnviado(true)
      else throw new Error()
    } catch {
      alert('Algo sali\u00f3 mal. Por favor env\u00eda un correo a hello@auntielusbakery.com directamente.')
    }
  }

  if (enviado) {
    return (
      <div className="bg-white p-8 md:p-10 rounded-3xl shadow-[0_15px_50px_rgba(0,0,0,0.08)]">
        <div className="text-center py-8">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-wheat to-crust flex items-center justify-center text-4xl text-white mx-auto mb-6">&check;</div>
          <h3 className="font-serif text-2xl text-dark-crust mb-2">\u00a1Mensaje Enviado!</h3>
          <p className="text-[#6B6560]">Gracias por contactarnos. Te responderemos en menos de 24 horas.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white p-8 md:p-10 rounded-3xl shadow-[0_15px_50px_rgba(0,0,0,0.08)]">
      <form ref={formRef} onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <input type="hidden" name="_subject" value="Nueva Consulta - P\u00e1gina en Espa\u00f1ol" />
        <input type="hidden" name="_language" value="es" />

        <div className="flex flex-col">
          <label className="text-sm font-semibold text-dark-crust mb-1.5">Tu Nombre *</label>
          <input type="text" name="name" required placeholder="Mar\u00eda Garc\u00eda" className="px-4 py-3 border-2 border-blush rounded-xl bg-cream focus:border-wheat focus:bg-white focus:outline-none transition-all" />
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-semibold text-dark-crust mb-1.5">Correo Electr\u00f3nico *</label>
          <input type="email" name="email" required placeholder="maria@ejemplo.com" className="px-4 py-3 border-2 border-blush rounded-xl bg-cream focus:border-wheat focus:bg-white focus:outline-none transition-all" />
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-semibold text-dark-crust mb-1.5">Tel\u00e9fono *</label>
          <input type="tel" name="phone" required placeholder="(619) 555-1234" className="px-4 py-3 border-2 border-blush rounded-xl bg-cream focus:border-wheat focus:bg-white focus:outline-none transition-all" />
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-semibold text-dark-crust mb-1.5">Tipo de Evento</label>
          <select name="event_type" className="px-4 py-3 border-2 border-blush rounded-xl bg-cream focus:border-wheat focus:bg-white focus:outline-none transition-all">
            <option value="">Selecciona tipo de evento...</option>
            {TIPOS_EVENTO.map((tipo) => (
              <option key={tipo} value={tipo}>{tipo}</option>
            ))}
          </select>
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-semibold text-dark-crust mb-1.5">Fecha del Evento</label>
          <input type="date" name="event_date" className="px-4 py-3 border-2 border-blush rounded-xl bg-cream focus:border-wheat focus:bg-white focus:outline-none transition-all" />
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-semibold text-dark-crust mb-1.5">N\u00famero de Invitados</label>
          <input type="number" name="guests" min="1" placeholder="50" className="px-4 py-3 border-2 border-blush rounded-xl bg-cream focus:border-wheat focus:bg-white focus:outline-none transition-all" />
        </div>

        <div className="flex flex-col sm:col-span-2">
          <label className="text-sm font-semibold text-dark-crust mb-1.5">Mensaje / Detalles del Pedido *</label>
          <textarea name="message" rows={4} required placeholder="Cu\u00e9ntanos sobre tu evento, sabores favoritos, ideas de dise\u00f1o o cualquier pregunta. \u00a1Hablamos espa\u00f1ol!" className="px-4 py-3 border-2 border-blush rounded-xl bg-cream focus:border-wheat focus:bg-white focus:outline-none transition-all resize-y min-h-[120px]" />
        </div>

        <button type="submit" className="sm:col-span-2 bg-dark-crust text-white py-4 rounded-full font-semibold cursor-pointer hover:bg-crust transition-colors border-none text-base">
          Enviar Mensaje
        </button>
      </form>
    </div>
  )
}

export default function ContactoPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-16 px-[4%] bg-gradient-to-b from-cream to-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-crust font-medium text-sm tracking-widest uppercase mb-4">Cont\u00e1ctanos</p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-dark-crust mb-6 leading-tight">
            \u00a1Hablemos de Tu Pastel!
          </h1>
          <p className="text-lg md:text-xl text-[#6B6560] leading-relaxed max-w-2xl mx-auto">
            \u00bfLista para ordenar? Llena el formulario y te responderemos en menos de 24 horas. Hablamos espa\u00f1ol y estamos aqu\u00ed para ayudarte.
          </p>
        </div>
      </section>

      {/* Form + Contact Info */}
      <section className="py-16 px-[4%]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10">
          {/* Contact Info Sidebar */}
          <div className="md:col-span-2 space-y-8">
            <div>
              <h2 className="font-serif text-2xl text-dark-crust mb-6">Informaci\u00f3n de Contacto</h2>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <span className="text-2xl">📧</span>
                  <div>
                    <strong className="text-dark-crust">Correo</strong>
                    <p className="text-sm"><a href="mailto:hello@auntielusbakery.com" className="text-crust no-underline hover:underline">hello@auntielusbakery.com</a></p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-2xl">📍</span>
                  <div>
                    <strong className="text-dark-crust">Ubicaci\u00f3n</strong>
                    <p className="text-[#6B6560] text-sm">San Diego, California</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-2xl">⏰</span>
                  <div>
                    <strong className="text-dark-crust">Tiempo de Anticipaci\u00f3n</strong>
                    <p className="text-[#6B6560] text-sm">Pan de masa madre: 3-5 d\u00edas<br />Cake pops: 5-7 d\u00edas<br />Pasteles personalizados: 2-4 semanas</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-2xl">🗣️</span>
                  <div>
                    <strong className="text-dark-crust">Idiomas</strong>
                    <p className="text-[#6B6560] text-sm">Espa\u00f1ol e Ingl\u00e9s</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-cream rounded-2xl p-6">
              <h3 className="font-serif text-lg text-dark-crust mb-3">\u00c1reas de Entrega</h3>
              <ul className="space-y-1.5 text-sm text-[#6B6560] list-none p-0 m-0">
                <li>Chula Vista</li>
                <li>National City</li>
                <li>Barrio Logan</li>
                <li>San Ysidro</li>
                <li>Logan Heights</li>
                <li>City Heights</li>
                <li>Y todo el condado de San Diego</li>
              </ul>
            </div>

            <div className="bg-cream rounded-2xl p-6">
              <h3 className="font-serif text-lg text-dark-crust mb-3">S\u00edguenos</h3>
              <div className="flex gap-4">
                <a href="https://instagram.com/auntielusbakery" target="_blank" rel="noopener noreferrer" className="text-crust hover:text-dark-crust transition-colors no-underline font-medium text-sm">
                  Instagram
                </a>
                <a href="https://facebook.com/auntielusbakery" target="_blank" rel="noopener noreferrer" className="text-crust hover:text-dark-crust transition-colors no-underline font-medium text-sm">
                  Facebook
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="md:col-span-3">
            <ContactoForm />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-[4%] bg-blush/30">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl text-dark-crust mb-4">\u00bfPor Qu\u00e9 Elegirnos?</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { titulo: 'Hablamos Espa\u00f1ol', desc: 'Todo el proceso en tu idioma, desde la consulta hasta la entrega.' },
              { titulo: 'Sabores Aut\u00e9nticos', desc: 'Tres leches, dulce de leche, guayaba y m\u00e1s sabores que amas.' },
              { titulo: 'Entrega Local', desc: 'Entregamos en Chula Vista, National City, Barrio Logan y m\u00e1s.' },
              { titulo: 'Precios Justos', desc: 'Calidad premium a precios accesibles. Cotizaci\u00f3n sin compromiso.' },
            ].map((item) => (
              <div key={item.titulo} className="bg-white rounded-2xl p-5 text-center shadow-sm">
                <h3 className="font-serif text-lg text-dark-crust mb-2">{item.titulo}</h3>
                <p className="text-[#6B6560] text-sm m-0 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
