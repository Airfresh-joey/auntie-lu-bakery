import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "Pasteles de Quincea\u00f1era San Diego | Dise\u00f1os Personalizados | Auntie Lu's Bakery",
  description: 'Pasteles de quincea\u00f1era personalizados en San Diego. Dise\u00f1os elegantes con flores de az\u00facar, coronas y colores vibrantes. Servimos Chula Vista, National City y Barrio Logan. Cotizaci\u00f3n gratis.',
  openGraph: {
    title: "Pasteles de Quincea\u00f1era | Auntie Lu's Bakery San Diego",
    description: 'Pasteles personalizados para XV a\u00f1os. Dise\u00f1os \u00fanicos, sabores deliciosos y entrega en todo San Diego.',
    url: 'https://www.auntielusbakery.com/es/pasteles-de-quinceanera',
    locale: 'es_MX',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.auntielusbakery.com/es/pasteles-de-quinceanera',
  },
}

const estilos = [
  {
    nombre: 'Cl\u00e1sico Elegante',
    descripcion: 'Pasteles de varios pisos con acabado de buttercream suave, flores naturales o de az\u00facar, y detalles en dorado o plateado. El estilo t\u00edpico que nunca pasa de moda.',
    precio: 'Desde $450',
    invitados: '50\u2013100 invitados',
  },
  {
    nombre: 'Princesa Moderna',
    descripcion: 'Dise\u00f1os con corona comestible, efecto marmoleado, detalles met\u00e1licos en oro rosa y decoraciones en fondant. Para la quincea\u00f1era que quiere algo \u00fanico.',
    precio: 'Desde $650',
    invitados: '75\u2013150 invitados',
  },
  {
    nombre: 'Gran Celebraci\u00f3n',
    descripcion: 'Pasteles de 4+ pisos con dise\u00f1o completamente personalizado. Incluye flores de az\u00facar hechas a mano, efectos de acuarela, detalles 3D y mesa de postres completa.',
    precio: 'Desde $1,200',
    invitados: '150+ invitados',
  },
]

const sabores = [
  { nombre: 'Tres Leches', desc: 'El cl\u00e1sico favorito, h\u00famedo y delicioso' },
  { nombre: 'Vainilla con Fresas', desc: 'Suave vainilla con fresas frescas' },
  { nombre: 'Chocolate Mexicano', desc: 'Chocolate con un toque de canela y chile' },
  { nombre: 'Dulce de Leche', desc: 'Caramelo cremoso irresistible' },
  { nombre: 'Guayaba con Queso Crema', desc: 'Sabores tropicales con queso crema suave' },
  { nombre: 'Red Velvet', desc: 'Terciopelo rojo con frosting de queso crema' },
  { nombre: 'Horchata', desc: 'Inspirado en la bebida cl\u00e1sica mexicana' },
  { nombre: 'Coco con Pi\u00f1a', desc: 'Tropical y refrescante' },
]

const elementos = [
  { nombre: 'Corona Comestible', precio: '+$75\u2013$150', desc: 'Corona de fondant o az\u00facar dorada hecha a mano' },
  { nombre: 'Flores de Az\u00facar', precio: '+$15\u2013$75 c/u', desc: 'Rosas, peon\u00edas y flores realistas de az\u00facar' },
  { nombre: 'Mu\u00f1eca de Quincea\u00f1era', precio: '+$50\u2013$100', desc: 'Figura personalizada de la quincea\u00f1era' },
  { nombre: 'N\u00famero 15 en Dorado', precio: '+$30\u2013$60', desc: 'N\u00famero decorativo en dorado, plateado u oro rosa' },
  { nombre: 'Efecto Cascada', precio: '+$100\u2013$200', desc: 'Flores o mariposas cayendo en cascada por los pisos' },
  { nombre: 'Detalles Pintados a Mano', precio: '+$50\u2013$150', desc: 'Acuarela, brush strokes o dise\u00f1os personalizados' },
]

const faqs = [
  {
    pregunta: '\u00bfCon cu\u00e1nta anticipaci\u00f3n debo ordenar mi pastel de quincea\u00f1era?',
    respuesta: 'Recomendamos ordenar con 4\u20136 semanas de anticipaci\u00f3n para dise\u00f1os est\u00e1ndar y 8\u201312 semanas para dise\u00f1os muy elaborados. Para temporada alta (mayo\u2013agosto), sugerimos reservar con 3 meses de anticipaci\u00f3n.',
  },
  {
    pregunta: '\u00bfOfrecen degustaci\u00f3n gratuita?',
    respuesta: '\u00a1S\u00ed! Para \u00f3rdenes de quincea\u00f1era de m\u00e1s de $500, ofrecemos degustaci\u00f3n gratuita de hasta 6 sabores. Puedes traer a tu familia para que todos prueben y elijan juntos.',
  },
  {
    pregunta: '\u00bfPueden entregar en mi sal\u00f3n de eventos?',
    respuesta: 'Entregamos y armamos pasteles en salones de eventos en todo el condado de San Diego, incluyendo Chula Vista, National City, Barrio Logan, El Cajon y m\u00e1s. La entrega incluye armado y montaje profesional.',
  },
  {
    pregunta: '\u00bfHacen pasteles sin gluten o veganos?',
    respuesta: 'S\u00ed, ofrecemos opciones sin gluten y veganas. Solo necesitamos saber con anticipaci\u00f3n para preparar los mejores sabores con ingredientes alternativos. Los precios pueden variar ligeramente.',
  },
  {
    pregunta: '\u00bfQu\u00e9 formas de pago aceptan?',
    respuesta: 'Aceptamos todas las tarjetas de cr\u00e9dito y d\u00e9bito, Zelle, y transferencias bancarias. Requerimos un dep\u00f3sito del 50% para reservar tu fecha, con el balance restante 7 d\u00edas antes del evento.',
  },
  {
    pregunta: '\u00bfTambi\u00e9n hacen mesa de postres para quincea\u00f1era?',
    respuesta: '\u00a1Por supuesto! Ofrecemos paquetes completos que incluyen el pastel principal, cake pops, cupcakes, galletas decoradas y otros postres que combinan con tu tema y colores.',
  },
]

export default function QuinceaneraPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-20 px-[4%] bg-gradient-to-b from-cream to-white">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-crust font-medium text-sm tracking-widest uppercase mb-4">Pasteles de XV A\u00f1os</p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-dark-crust mb-6 leading-tight">
            Pasteles de Quincea\u00f1era<br />en San Diego
          </h1>
          <p className="text-lg md:text-xl text-[#6B6560] leading-relaxed max-w-3xl mx-auto mb-8">
            Celebra los XV a\u00f1os con un pastel tan especial como tu princesa. Dise\u00f1os personalizados con sabores aut\u00e9nticos, desde tres leches hasta chocolate mexicano. Entrega en Chula Vista, National City, Barrio Logan y todo San Diego.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/es/contacto" className="inline-flex items-center justify-center bg-dark-crust text-white px-8 py-4 rounded-full font-semibold no-underline hover:bg-crust hover:-translate-y-0.5 transition-all">
              Cotizaci\u00f3n Gratis
            </Link>
            <Link href="/es/precios" className="inline-flex items-center justify-center bg-wheat/20 text-dark-crust px-8 py-4 rounded-full font-semibold no-underline hover:bg-wheat/30 transition-colors">
              Ver Precios
            </Link>
          </div>
        </div>
      </section>

      {/* Estilos de Pastel */}
      <section className="py-24 px-[4%] bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-crust text-xs font-semibold uppercase tracking-[0.2em] mb-4">Estilos Populares</p>
            <h2 className="font-serif text-3xl md:text-4xl text-dark-crust mb-4">Paquetes para Quincea\u00f1era</h2>
            <p className="text-[#6B6560] max-w-2xl mx-auto leading-relaxed">
              Cada paquete incluye consulta personalizada, degustaci\u00f3n y entrega. Todos los precios son punto de partida \u2014 tu cotizaci\u00f3n final depende del dise\u00f1o espec\u00edfico.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {estilos.map((estilo, i) => (
              <div key={estilo.nombre} className={`rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all ${i === 1 ? 'border-2 border-wheat ring-2 ring-wheat/20' : 'border border-blush'}`}>
                <div className={`p-8 ${i === 1 ? 'bg-wheat/10' : 'bg-cream'}`}>
                  {i === 1 && <span className="inline-block bg-wheat text-dark-crust text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-3">M\u00e1s Popular</span>}
                  <h3 className="font-serif text-2xl text-dark-crust mb-2">{estilo.nombre}</h3>
                  <p className="text-3xl font-serif text-crust font-bold mb-1">{estilo.precio}</p>
                  <p className="text-[#6B6560] text-sm mb-4">{estilo.invitados}</p>
                  <p className="text-[#6B6560] text-sm leading-relaxed mb-6">{estilo.descripcion}</p>
                  <Link href="/es/contacto" className="block text-center bg-dark-crust text-white px-6 py-3 rounded-full font-semibold no-underline hover:bg-crust transition-colors text-sm">
                    Pedir Cotizaci\u00f3n
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sabores */}
      <section className="py-24 px-[4%] bg-blush/30">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-crust text-xs font-semibold uppercase tracking-[0.2em] mb-4">Sabores</p>
            <h2 className="font-serif text-3xl md:text-4xl text-dark-crust mb-4">Sabores Favoritos para Quincea\u00f1era</h2>
            <p className="text-[#6B6560] max-w-xl mx-auto">
              Sabores aut\u00e9nticos que encantan a toda la familia. Cada sabor es preparado con ingredientes frescos y de la m\u00e1s alta calidad.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {sabores.map((sabor) => (
              <div key={sabor.nombre} className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-medium text-dark-crust mb-1 text-base">{sabor.nombre}</h3>
                <p className="text-[#6B6560] text-sm m-0">{sabor.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Elementos Decorativos */}
      <section className="py-24 px-[4%] bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-crust text-xs font-semibold uppercase tracking-[0.2em] mb-4">Personaliza Tu Pastel</p>
            <h2 className="font-serif text-3xl md:text-4xl text-dark-crust mb-4">Elementos Decorativos</h2>
            <p className="text-[#6B6560] max-w-xl mx-auto">
              Agrega detalles especiales para hacer tu pastel de quincea\u00f1era a\u00fan m\u00e1s impresionante.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {elementos.map((e) => (
              <div key={e.nombre} className="bg-cream rounded-2xl p-6 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-medium text-dark-crust m-0 text-base">{e.nombre}</h3>
                  <span className="text-crust font-semibold text-sm whitespace-nowrap ml-3">{e.precio}</span>
                </div>
                <p className="text-[#6B6560] text-sm m-0">{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-[4%] bg-blush/30">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-crust text-xs font-semibold uppercase tracking-[0.2em] mb-4">Preguntas Frecuentes</p>
            <h2 className="font-serif text-3xl md:text-4xl text-dark-crust">Sobre Pasteles de Quincea\u00f1era</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details key={faq.pregunta} className="bg-white rounded-2xl shadow-sm group">
                <summary className="cursor-pointer px-6 py-5 font-medium text-dark-crust list-none flex justify-between items-center">
                  {faq.pregunta}
                  <svg className="w-5 h-5 text-crust flex-shrink-0 ml-4 group-open:rotate-180 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"/></svg>
                </summary>
                <div className="px-6 pb-5 text-[#6B6560] text-sm leading-relaxed">{faq.respuesta}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-dark-crust py-20 px-[4%] text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">\u00bfLista para Planear los XV A\u00f1os?</h2>
          <p className="text-blush text-lg mb-8 leading-relaxed">
            Cu\u00e9ntanos sobre tu celebraci\u00f3n y te enviaremos una cotizaci\u00f3n detallada en menos de 24 horas. Hablamos espa\u00f1ol.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/es/contacto" className="inline-flex items-center justify-center bg-wheat text-dark-crust px-8 py-4 rounded-full font-semibold no-underline hover:bg-white transition-colors">
              Cotizaci\u00f3n Gratis
            </Link>
            <Link href="/es/precios" className="inline-flex items-center justify-center border-2 border-blush text-white px-8 py-4 rounded-full font-semibold no-underline hover:bg-blush/10 transition-colors">
              Ver Todos los Precios
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
