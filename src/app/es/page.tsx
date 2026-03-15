import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "Pasteler\u00eda Artesanal en San Diego | Auntie Lu's Bakery - Pasteles Personalizados",
  description: 'Pasteler\u00eda artesanal en San Diego. Pasteles de quincea\u00f1era, bodas, cumplea\u00f1os, cake pops y pan de masa madre. Servimos Chula Vista, National City, Barrio Logan y todo San Diego.',
  openGraph: {
    title: "Auntie Lu's Bakery | Pasteles Personalizados en San Diego",
    description: 'Pasteles de quincea\u00f1era, bodas, cumplea\u00f1os y m\u00e1s. Pasteler\u00eda artesanal hecha con amor en San Diego.',
    url: 'https://www.auntielusbakery.com/es',
    locale: 'es_MX',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.auntielusbakery.com/es',
    languages: { 'en': 'https://www.auntielusbakery.com' },
  },
}

const servicios = [
  {
    titulo: 'Pasteles de Quincea\u00f1era',
    descripcion: 'Pasteles personalizados para los XV a\u00f1os de tu princesa. Dise\u00f1os elegantes con flores de az\u00facar, coronas, colores vibrantes y detalles \u00fanicos que hacen tu celebraci\u00f3n inolvidable.',
    href: '/es/pasteles-de-quinceanera',
    imagen: 'https://images.unsplash.com/photo-1535254973040-607b474cb50d?w=600&h=400&fit=crop',
  },
  {
    titulo: 'Pasteles de Boda',
    descripcion: 'Desde bodas \u00edntimas hasta grandes celebraciones. Pasteles de varios pisos con dise\u00f1os personalizados, degustaci\u00f3n gratuita y entrega en tu sal\u00f3n favorito de San Diego.',
    href: '/es/pasteles-de-boda',
    imagen: 'https://images.unsplash.com/photo-1535254973040-607b474cb50d?w=600&h=400&fit=crop',
  },
  {
    titulo: 'Pasteles de Cumplea\u00f1os',
    descripcion: 'Pasteles personalizados para todas las edades y temas. Desde pi\u00f1atas hasta superhores, princesas y m\u00e1s. Cada pastel es una obra de arte.',
    href: '/es/contacto',
    imagen: 'https://images.unsplash.com/photo-1558636508-e0db3814bd1d?w=600&h=400&fit=crop',
  },
]

const vecindarios = [
  { nombre: 'Chula Vista', desc: 'Entrega a domicilio en toda Chula Vista y alrededores' },
  { nombre: 'National City', desc: 'Servicio completo para National City y comunidades cercanas' },
  { nombre: 'Barrio Logan', desc: 'Orgullosamente sirviendo al coraz\u00f3n cultural de San Diego' },
  { nombre: 'San Ysidro', desc: 'Entregas en San Ysidro y la frontera' },
  { nombre: 'Logan Heights', desc: 'Pasteles frescos para Logan Heights y vecindarios cercanos' },
  { nombre: 'City Heights', desc: 'Cubrimos City Heights y comunidades multiculturales' },
]

const pasos = [
  { num: '01', titulo: 'Cu\u00e9ntanos Tu Visi\u00f3n', desc: 'Comp\u00e1rtenos los detalles de tu evento, colores, tema y sabores favoritos. Hablamos espa\u00f1ol.' },
  { num: '02', titulo: 'Degustaci\u00f3n Gratis', desc: 'Prueba hasta 6 sabores de pastel, rellenos y coberturas. Trae a tu familia.' },
  { num: '03', titulo: 'Dise\u00f1o Personalizado', desc: 'Creamos bocetos y dise\u00f1os basados en tu inspiraci\u00f3n. T\u00fa apruebas cada detalle.' },
  { num: '04', titulo: 'Entrega Perfecta', desc: 'Entregamos y armamos tu pastel en el sal\u00f3n o lugar de tu evento en San Diego.' },
]

const testimonios = [
  {
    nombre: 'Mar\u00eda G.',
    ubicacion: 'Chula Vista',
    texto: 'El pastel de quincea\u00f1era de mi hija fue absolutamente hermoso. Todos los invitados preguntaron d\u00f3nde lo compr\u00e9. \u00a1El sabor fue incre\u00edble!',
    evento: 'Quincea\u00f1era',
  },
  {
    nombre: 'Rosa M.',
    ubicacion: 'National City',
    texto: 'Hicieron el pastel de bodas de mis sue\u00f1os. La atenci\u00f3n al detalle y el servicio en espa\u00f1ol hicieron todo m\u00e1s f\u00e1cil.',
    evento: 'Boda',
  },
  {
    nombre: 'Carlos L.',
    ubicacion: 'Barrio Logan',
    texto: 'Pedimos cake pops para el cumplea\u00f1os de mi hijo y fueron un \u00e9xito total. Deliciosos y con dise\u00f1os incre\u00edbles.',
    evento: 'Cumplea\u00f1os',
  },
]

export default function SpanishHomePage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-20 px-[4%] bg-gradient-to-b from-cream to-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-crust font-medium text-sm tracking-widest uppercase mb-4">Pasteler\u00eda Artesanal en San Diego</p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-dark-crust mb-6 leading-tight">
            Pasteles Hechos con Amor<br />para Tus Momentos Especiales
          </h1>
          <p className="text-lg md:text-xl text-[#6B6560] leading-relaxed max-w-3xl mx-auto mb-8">
            Pasteles personalizados para quincea\u00f1eras, bodas, cumplea\u00f1os y toda celebraci\u00f3n. Ingredientes premium, dise\u00f1os \u00fanicos y servicio en espa\u00f1ol. Sirviendo Chula Vista, National City, Barrio Logan y todo San Diego.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/es/contacto" className="inline-flex items-center justify-center bg-dark-crust text-white px-8 py-4 rounded-full font-semibold no-underline hover:bg-crust hover:-translate-y-0.5 transition-all">
              Pedir Cotizaci\u00f3n Gratis
            </Link>
            <Link href="/es/precios" className="inline-flex items-center justify-center bg-wheat/20 text-dark-crust px-8 py-4 rounded-full font-semibold no-underline hover:bg-wheat/30 transition-colors">
              Ver Precios
            </Link>
          </div>
        </div>
      </section>

      {/* Servicios Destacados */}
      <section className="py-24 px-[4%] bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-crust text-xs font-semibold uppercase tracking-[0.2em] mb-4">Nuestros Pasteles</p>
            <h2 className="font-serif text-3xl md:text-4xl text-dark-crust mb-4">Creaciones para Cada Ocasi\u00f3n</h2>
            <p className="text-[#6B6560] max-w-2xl mx-auto leading-relaxed">
              Cada pastel es una obra de arte hecha a mano con ingredientes de la m\u00e1s alta calidad. Desde quincea\u00f1eras hasta bodas, creamos el pastel perfecto para tu celebraci\u00f3n.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {servicios.map((servicio) => (
              <Link key={servicio.titulo} href={servicio.href} className="group no-underline">
                <div className="bg-cream rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={servicio.imagen} alt={servicio.titulo} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-serif text-xl text-dark-crust mb-2">{servicio.titulo}</h3>
                    <p className="text-[#6B6560] text-sm leading-relaxed m-0">{servicio.descripcion}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* C\u00f3mo Funciona */}
      <section className="py-24 px-[4%] bg-blush/30">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-crust text-xs font-semibold uppercase tracking-[0.2em] mb-4">Proceso Simple</p>
            <h2 className="font-serif text-3xl md:text-4xl text-dark-crust mb-4">\u00bfC\u00f3mo Funciona?</h2>
            <p className="text-[#6B6560] max-w-xl mx-auto">
              Ordenar tu pastel personalizado es f\u00e1cil. Te guiamos en cada paso, todo en espa\u00f1ol.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pasos.map((paso) => (
              <div key={paso.num} className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-full bg-wheat/20 text-crust font-bold text-lg flex items-center justify-center mx-auto mb-4">{paso.num}</div>
                <h3 className="font-serif text-lg text-dark-crust mb-2">{paso.titulo}</h3>
                <p className="text-[#6B6560] text-sm leading-relaxed m-0">{paso.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vecindarios */}
      <section className="py-24 px-[4%] bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-crust text-xs font-semibold uppercase tracking-[0.2em] mb-4">\u00c1reas de Servicio</p>
            <h2 className="font-serif text-3xl md:text-4xl text-dark-crust mb-4">Sirviendo a la Comunidad Hispana de San Diego</h2>
            <p className="text-[#6B6560] max-w-2xl mx-auto leading-relaxed">
              Entregamos pasteles frescos en las comunidades hispanas de San Diego. Servicio en espa\u00f1ol, sabores aut\u00e9nticos y precios accesibles.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {vecindarios.map((v) => (
              <div key={v.nombre} className="bg-cream rounded-2xl p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xl">📍</span>
                  <h3 className="font-serif text-lg text-dark-crust m-0">{v.nombre}</h3>
                </div>
                <p className="text-[#6B6560] text-sm m-0">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="py-24 px-[4%] bg-blush/30">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-crust text-xs font-semibold uppercase tracking-[0.2em] mb-4">Testimonios</p>
            <h2 className="font-serif text-3xl md:text-4xl text-dark-crust mb-4">Lo Que Dicen Nuestros Clientes</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonios.map((t) => (
              <div key={t.nombre} className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="text-wheat text-lg mb-3">{'\u2605'.repeat(5)}</div>
                <p className="text-[#6B6560] text-sm leading-relaxed mb-4 italic">&ldquo;{t.texto}&rdquo;</p>
                <div>
                  <p className="text-dark-crust font-semibold text-sm m-0">{t.nombre}</p>
                  <p className="text-[#6B6560] text-xs m-0">{t.ubicacion} &middot; {t.evento}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hablamos Espa\u00f1ol Banner */}
      <section className="py-16 px-[4%] bg-dark-crust text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">\u00a1Hablamos Espa\u00f1ol!</h2>
          <p className="text-blush text-lg mb-8 leading-relaxed">
            Nos encanta servir a la comunidad hispana de San Diego. Desde la consulta hasta la entrega, todo el proceso es en espa\u00f1ol. Ll\u00e1manos o env\u00edanos un mensaje hoy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/es/contacto" className="inline-flex items-center justify-center bg-wheat text-dark-crust px-8 py-4 rounded-full font-semibold no-underline hover:bg-white transition-colors">
              Cont\u00e1ctanos
            </Link>
            <Link href="/es/pasteles-de-quinceanera" className="inline-flex items-center justify-center border-2 border-blush text-white px-8 py-4 rounded-full font-semibold no-underline hover:bg-blush/10 transition-colors">
              Ver Pasteles de Quincea\u00f1era
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
