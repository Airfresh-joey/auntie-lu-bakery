import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "Pasteles de Boda San Diego | Dise\u00f1os Personalizados | Auntie Lu's Bakery",
  description: 'Pasteles de boda personalizados en San Diego. Consulta gratuita, degustaci\u00f3n y entrega en tu sal\u00f3n. Servimos Chula Vista, National City, Barrio Logan y todo el condado.',
  openGraph: {
    title: "Pasteles de Boda | Auntie Lu's Bakery San Diego",
    description: 'Pasteles de boda hechos con amor para tu d\u00eda especial en San Diego. Consulta y degustaci\u00f3n gratuita.',
    url: 'https://www.auntielusbakery.com/es/pasteles-de-boda',
    locale: 'es_MX',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.auntielusbakery.com/es/pasteles-de-boda',
  },
}

const paquetes = [
  {
    nombre: 'Plata',
    subtitulo: 'Bodas \u00cdntimas',
    precio: 'Desde $650',
    invitados: 'Hasta 75 invitados',
    destacado: false,
    incluye: [
      'Pastel de dos pisos personalizado',
      'Elecci\u00f3n de 2 sabores',
      'Acabado buttercream o fondant',
      'Acentos de flores naturales',
      'Degustaci\u00f3n gratuita para 2 personas',
      'Entrega y montaje b\u00e1sico',
      'Juego de cuchillos para corte',
    ],
  },
  {
    nombre: 'Oro',
    subtitulo: 'M\u00e1s Popular',
    precio: 'Desde $1,200',
    invitados: 'Hasta 150 invitados',
    destacado: true,
    incluye: [
      'Pastel de tres pisos personalizado',
      'Elecci\u00f3n de 3 sabores',
      'Fondant o buttercream premium',
      'Flores de az\u00facar o detalles pintados a mano',
      'Degustaci\u00f3n gratuita para 4 personas',
      'Entrega, montaje y decoraci\u00f3n',
      'Consulta de mesa de postres',
      'Pastel del novio (6 pulgadas)',
      'Coordinaci\u00f3n de cake topper',
    ],
  },
  {
    nombre: 'Platino',
    subtitulo: 'Grandes Celebraciones',
    precio: 'Desde $2,500',
    invitados: '150+ invitados',
    destacado: false,
    incluye: [
      'Pastel de 4+ pisos de dise\u00f1o exclusivo',
      'Sabores ilimitados',
      'Flores de az\u00facar hechas a mano',
      'Detalles pintados a mano y hoja de oro',
      'Degustaci\u00f3n VIP para 6 personas',
      'Entrega, montaje y estilismo completo',
      'Mesa de postres completa (cupcakes, cake pops, galletas)',
      'Pastel del novio personalizado',
      'Coordinaci\u00f3n con tu wedding planner',
      'Consulta ilimitada de dise\u00f1o',
    ],
  },
]

const pasos = [
  { num: '01', titulo: 'Consulta Inicial', desc: 'Comp\u00e1rtenos tu visi\u00f3n, colores, tema y sabores. Programamos una cita en persona o virtual. Todo en espa\u00f1ol.' },
  { num: '02', titulo: 'Degustaci\u00f3n', desc: 'Prueba hasta 6 sabores de pastel, rellenos y coberturas. Trae a tu pareja, tu mam\u00e1 o tu wedding planner.' },
  { num: '03', titulo: 'Dise\u00f1o y Boceto', desc: 'Creamos bocetos basados en tu inspiraci\u00f3n de Pinterest, la decoraci\u00f3n del sal\u00f3n y tu paleta de colores.' },
  { num: '04', titulo: 'Detalles Finales', desc: 'Confirmamos dise\u00f1o, tama\u00f1o, log\u00edstica de entrega y montaje en tu sal\u00f3n. Nos encargamos de todo.' },
  { num: '05', titulo: 'Entrega y Montaje', desc: 'Nuestro equipo entrega y arma tu pastel en el sal\u00f3n, asegurando una presentaci\u00f3n perfecta para tu gran d\u00eda.' },
]

const salones = [
  'The Prado at Balboa Park',
  'Admiral Kidd Club',
  'Marina Village',
  'Hilton San Diego Bayfront',
  'Paradise Point Resort',
  'Bali Hai Restaurant',
  'Coronado Community Center',
  'The Westgate Hotel',
]

const saboresPopulares = [
  { nombre: 'Tres Leches', desc: 'El favorito mexicano, h\u00famedo y dulce' },
  { nombre: 'Vainilla Cl\u00e1sica', desc: 'Con buttercream de vainilla Madagascar' },
  { nombre: 'Dulce de Leche', desc: 'Caramelo argentino cremoso' },
  { nombre: 'Chocolate con Fresas', desc: 'Chocolate rico con fresas frescas' },
  { nombre: 'Guayaba y Queso Crema', desc: 'Sabores tropicales sofisticados' },
  { nombre: 'Champagne y Frambuesa', desc: 'Elegante y refrescante' },
]

export default function WeddingCakesSpanishPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-20 px-[4%] bg-gradient-to-b from-cream to-white">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-crust font-medium text-sm tracking-widest uppercase mb-4">Pasteles de Boda</p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-dark-crust mb-6 leading-tight">
            Pasteles de Boda<br />Hechos con Amor en San Diego
          </h1>
          <p className="text-lg md:text-xl text-[#6B6560] leading-relaxed max-w-3xl mx-auto mb-8">
            Tu boda merece un pastel tan especial como tu historia de amor. Dise\u00f1os personalizados, sabores aut\u00e9nticos y atenci\u00f3n al detalle en cada capa. Consulta y degustaci\u00f3n gratuita. Hablamos espa\u00f1ol.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/es/contacto" className="inline-flex items-center justify-center bg-dark-crust text-white px-8 py-4 rounded-full font-semibold no-underline hover:bg-crust hover:-translate-y-0.5 transition-all">
              Agendar Consulta Gratis
            </Link>
            <Link href="/es/precios" className="inline-flex items-center justify-center bg-wheat/20 text-dark-crust px-8 py-4 rounded-full font-semibold no-underline hover:bg-wheat/30 transition-colors">
              Ver Precios
            </Link>
          </div>
        </div>
      </section>

      {/* Proceso */}
      <section className="py-24 px-[4%] bg-blush/30">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-crust text-xs font-semibold uppercase tracking-[0.2em] mb-4">Nuestro Proceso</p>
            <h2 className="font-serif text-3xl md:text-4xl text-dark-crust mb-4">De la Consulta al Altar</h2>
            <p className="text-[#6B6560] max-w-xl mx-auto">
              Te acompa\u00f1amos en cada paso para crear el pastel perfecto para tu boda. Todo el proceso es en espa\u00f1ol.
            </p>
          </div>
          <div className="space-y-4">
            {pasos.map((paso) => (
              <div key={paso.num} className="bg-white rounded-2xl p-6 flex items-start gap-5 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-wheat/20 text-crust font-bold text-lg flex items-center justify-center flex-shrink-0">{paso.num}</div>
                <div>
                  <h3 className="font-serif text-lg text-dark-crust mb-1">{paso.titulo}</h3>
                  <p className="text-[#6B6560] text-sm leading-relaxed m-0">{paso.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Paquetes */}
      <section className="py-24 px-[4%] bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-crust text-xs font-semibold uppercase tracking-[0.2em] mb-4">Paquetes</p>
            <h2 className="font-serif text-3xl md:text-4xl text-dark-crust mb-4">Paquetes de Pastel de Boda</h2>
            <p className="text-[#6B6560] max-w-2xl mx-auto leading-relaxed">
              Tres opciones dise\u00f1adas para diferentes tama\u00f1os de boda. Cada paquete se personaliza a tu gusto y presupuesto.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {paquetes.map((paq) => (
              <div key={paq.nombre} className={`rounded-2xl overflow-hidden ${paq.destacado ? 'border-2 border-wheat ring-2 ring-wheat/20 shadow-lg' : 'border border-blush shadow-sm'}`}>
                <div className={`p-8 ${paq.destacado ? 'bg-wheat/10' : 'bg-cream'}`}>
                  {paq.destacado && <span className="inline-block bg-wheat text-dark-crust text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-3">{paq.subtitulo}</span>}
                  {!paq.destacado && <span className="inline-block text-[#6B6560] text-xs font-medium uppercase tracking-wider mb-3">{paq.subtitulo}</span>}
                  <h3 className="font-serif text-2xl text-dark-crust mb-1">{paq.nombre}</h3>
                  <p className="text-3xl font-serif text-crust font-bold mb-1">{paq.precio}</p>
                  <p className="text-[#6B6560] text-sm mb-6">{paq.invitados}</p>
                  <ul className="space-y-2.5 mb-6">
                    {paq.incluye.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-[#6B6560]">
                        <svg className="w-4 h-4 text-wheat flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                        {item}
                      </li>
                    ))}
                  </ul>
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
            <h2 className="font-serif text-3xl md:text-4xl text-dark-crust mb-4">Sabores Populares para Boda</h2>
            <p className="text-[#6B6560] max-w-xl mx-auto">
              Puedes mezclar sabores entre los pisos de tu pastel. Todos preparados con ingredientes frescos y premium.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {saboresPopulares.map((s) => (
              <div key={s.nombre} className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-medium text-dark-crust mb-1 text-base">{s.nombre}</h3>
                <p className="text-[#6B6560] text-sm m-0">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Salones */}
      <section className="py-24 px-[4%] bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-crust text-xs font-semibold uppercase tracking-[0.2em] mb-4">Entrega</p>
            <h2 className="font-serif text-3xl md:text-4xl text-dark-crust mb-4">Entregamos en Tu Sal\u00f3n Favorito</h2>
            <p className="text-[#6B6560] max-w-xl mx-auto">
              Conocemos los principales salones de eventos de San Diego. Entregamos, armamos y decoramos tu pastel en el lugar.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {salones.map((salon) => (
              <div key={salon} className="bg-cream rounded-xl p-4 text-center">
                <p className="text-dark-crust text-sm font-medium m-0">{salon}</p>
              </div>
            ))}
          </div>
          <p className="text-[#6B6560] text-sm mt-6 text-center italic">
            \u00bfTu sal\u00f3n no est\u00e1 en la lista? No te preocupes, entregamos en cualquier lugar del condado de San Diego.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-dark-crust py-20 px-[4%] text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">\u00bfPlaneas Tu Boda?</h2>
          <p className="text-blush text-lg mb-8 leading-relaxed">
            Agenda una consulta gratuita y cu\u00e9ntanos sobre tu boda so\u00f1ada. Te enviaremos una cotizaci\u00f3n personalizada en 24 horas. Hablamos espa\u00f1ol.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/es/contacto" className="inline-flex items-center justify-center bg-wheat text-dark-crust px-8 py-4 rounded-full font-semibold no-underline hover:bg-white transition-colors">
              Agendar Consulta
            </Link>
            <Link href="/es/precios" className="inline-flex items-center justify-center border-2 border-blush text-white px-8 py-4 rounded-full font-semibold no-underline hover:bg-blush/10 transition-colors">
              Ver Precios Completos
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
