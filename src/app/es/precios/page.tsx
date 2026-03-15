import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "Precios | Auntie Lu's Bakery - Pasteles y Repostería en San Diego",
  description: 'Precios transparentes para pasteles de quinceañera, bodas, cumpleaños, cake pops, cupcakes y pan de masa madre en San Diego. Cotización gratis.',
  openGraph: {
    title: "Precios | Auntie Lu's Bakery San Diego",
    description: 'Consulta nuestros precios para pasteles de boda, quinceañera, cumpleaños, cake pops y más. Solicita una cotización gratis hoy.',
    url: 'https://www.auntielusbakery.com/es/precios',
    locale: 'es_MX',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.auntielusbakery.com/es/precios',
  },
}

const categorias = [
  {
    categoria: 'Pasteles de Boda',
    descripcion: 'Diseños personalizados para tu día especial con consulta gratuita',
    items: [
      { nombre: '2 Pisos Buttercream', porciones: '30-50 invitados', precio: 'Desde $350' },
      { nombre: '3 Pisos Buttercream', porciones: '75-100 invitados', precio: 'Desde $650' },
      { nombre: '3 Pisos Fondant', porciones: '75-100 invitados', precio: 'Desde $850' },
      { nombre: '4+ Pisos Diseño Personalizado', porciones: '150+ invitados', precio: 'Desde $1,200' },
    ],
    nota: 'Degustación gratuita para pedidos de más de $500. El precio varía según la complejidad del diseño, flores de azúcar y detalles pintados a mano.',
  },
  {
    categoria: 'Pasteles de Quinceañera',
    descripcion: 'Diseños elegantes para los XV años de tu princesa',
    items: [
      { nombre: 'Clásico Elegante (2 pisos)', porciones: '50-75 invitados', precio: 'Desde $450' },
      { nombre: 'Princesa Moderna (3 pisos)', porciones: '75-150 invitados', precio: 'Desde $650' },
      { nombre: 'Gran Celebración (4+ pisos)', porciones: '150+ invitados', precio: 'Desde $1,200' },
    ],
    nota: 'Incluye consulta personalizada. Agrega corona comestible (+$75), flores de azúcar y más.',
  },
  {
    categoria: 'Pasteles de Cumpleaños',
    descripcion: 'Diseños personalizados para todas las edades y temas',
    items: [
      { nombre: '6 pulgadas (1 piso)', porciones: '8-12 porciones', precio: 'Desde $75' },
      { nombre: '8 pulgadas (1 piso)', porciones: '15-20 porciones', precio: 'Desde $95' },
      { nombre: '10 pulgadas (1 piso)', porciones: '25-30 porciones', precio: 'Desde $135' },
      { nombre: '2 Pisos Personalizado', porciones: '30-40 porciones', precio: 'Desde $175' },
    ],
    nota: 'Agrega cobertura de fondant (+$25), toppers 3D (+$30-$75) o imágenes comestibles (+$15).',
  },
  {
    categoria: 'Cake Pops',
    descripcion: 'Hechos a mano y decorados individualmente',
    items: [
      { nombre: 'Clásicos (por docena)', porciones: '12 piezas', precio: '$36' },
      { nombre: 'Decoración Personalizada (por docena)', porciones: '12 piezas', precio: '$42' },
      { nombre: 'Premium / Con Marca (por docena)', porciones: '12 piezas', precio: '$48' },
      { nombre: 'Paquete de Evento (50+)', porciones: '50+ piezas', precio: 'Cotización' },
    ],
    nota: 'Pedido mínimo: 1 docena. Descuentos por volumen disponibles para 100+ piezas.',
  },
  {
    categoria: 'Cupcakes',
    descripcion: 'Perfectos para fiestas, baby showers y eventos corporativos',
    items: [
      { nombre: 'Cupcakes Estándar', porciones: 'Por cupcake', precio: 'Desde $4' },
      { nombre: 'Decorados / Topper Personalizado', porciones: 'Por cupcake', precio: 'Desde $5' },
      { nombre: 'Mini Cupcakes', porciones: 'Por cupcake', precio: 'Desde $2.50' },
      { nombre: 'Torre de Cupcakes (24+)', porciones: '24+ cupcakes', precio: 'Desde $100' },
    ],
    nota: 'Pedido mínimo: 12 cupcakes. Las torres incluyen préstamo del exhibidor.',
  },
  {
    categoria: 'Pan de Masa Madre',
    descripcion: 'Producción artesanal en lotes pequeños',
    items: [
      { nombre: 'Masa Madre Clásica', porciones: '1 pieza', precio: '$12' },
      { nombre: 'Sabores Especiales', porciones: '1 pieza', precio: '$14' },
      { nombre: 'Focaccia de Masa Madre', porciones: '1 pieza', precio: 'Desde $16' },
    ],
    nota: 'Sabores: romero con aceite de oliva, jalapeño con queso cheddar, y everything seasoning. Ordena con 3-5 días de anticipación.',
  },
]

const extras = [
  { nombre: 'Cobertura de Fondant', precio: '+$25–$50', desc: 'Acabado suave y pulido para cualquier pastel' },
  { nombre: 'Flores de Azúcar', precio: '+$15–$75 c/u', desc: 'Flores realistas hechas a mano' },
  { nombre: 'Hoja de Oro / Plata', precio: '+$20–$40', desc: 'Acentos metálicos comestibles' },
  { nombre: 'Toppers 3D', precio: '+$30–$75', desc: 'Figuras esculpidas en fondant o pasta de goma' },
  { nombre: 'Impresión Comestible', precio: '+$15', desc: 'Foto o logo impreso en papel comestible' },
  { nombre: 'Detalles Pintados a Mano', precio: '+$50–$150', desc: 'Acuarela, brush strokes o arte personalizado' },
]

const tarifasEntrega = [
  { area: 'Dentro de 10 millas (San Diego Central)', tarifa: '$25' },
  { area: 'Chula Vista, National City, Barrio Logan', tarifa: '$25' },
  { area: 'La Jolla, Coronado, Mission Valley', tarifa: '$35' },
  { area: 'Del Mar, Encinitas, El Cajon', tarifa: '$50' },
  { area: 'North County, East County', tarifa: '$65–$75' },
  { area: 'Montaje en salón (pastel de pisos)', tarifa: '+$50' },
]

const preguntasFrecuentes = [
  {
    pregunta: '¿Cómo obtengo una cotización?',
    respuesta: 'Contáctanos con la fecha de tu evento, número de invitados, sabores deseados e inspiración de diseño (Pinterest, fotos, bocetos). Respondemos en 24 horas con una cotización detallada. Para pasteles de boda y quinceañera, ofrecemos consultas gratuitas.',
  },
  {
    pregunta: '¿Qué factores afectan el precio?',
    respuesta: 'El precio depende de: número de pisos y porciones, complejidad del diseño (buttercream simple vs. fondant pintado a mano), elementos especiales (flores de azúcar, hoja de oro, toppers 3D), ingredientes premium y requisitos de entrega.',
  },
  {
    pregunta: '¿Requieren depósito?',
    respuesta: 'Sí, requerimos un depósito del 50% para pedidos personalizados de más de $300. El saldo restante se paga 7 días antes de tu evento. Para pedidos menores, el pago completo se cobra al hacer el pedido.',
  },
  {
    pregunta: '¿La degustación tiene costo?',
    respuesta: 'La degustación es gratuita para pedidos de más de $500 (bodas y quinceañeras). Para otros pedidos, ofrecemos cajas de degustación por $35 con 6 muestras de sabor. Los $35 se acreditan a tu pedido final si ordenas con nosotros.',
  },
  {
    pregunta: '¿Los precios incluyen impuestos?',
    respuesta: 'Los precios mostrados no incluyen el impuesto de venta de California (actualmente 7.75% en San Diego). El impuesto se calcula al momento del pago. Las tarifas de entrega también están sujetas a impuestos.',
  },
  {
    pregunta: '¿Puedo recoger mi pedido?',
    respuesta: '¡Por supuesto! La recolección gratuita está disponible en nuestra ubicación de San Diego. Tendremos tu pedido empacado y listo a la hora programada. Recomendamos recolección para artículos simples — los pasteles de pisos se entregan mejor por nosotros por seguridad.',
  },
  {
    pregunta: '¿Qué métodos de pago aceptan?',
    respuesta: 'Aceptamos todas las tarjetas de crédito y débito a través de Stripe, Zelle y transferencias bancarias. Planes de pago disponibles para pedidos de pastel de boda de más de $1,000.',
  },
]

export default function PreciosPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-16 px-[4%] bg-gradient-to-b from-cream to-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-crust font-medium text-sm tracking-widest uppercase mb-4">Precios Transparentes</p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-dark-crust mb-6 leading-tight">
            Nuestros Precios
          </h1>
          <p className="text-lg md:text-xl text-[#6B6560] leading-relaxed max-w-2xl mx-auto">
            Cada creación es hecha a mano con ingredientes premium. Aquí están nuestros precios claros para que puedas planear con confianza.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link href="/es/contacto" className="inline-flex items-center justify-center bg-dark-crust text-white px-8 py-4 rounded-full font-semibold no-underline hover:bg-crust hover:-translate-y-0.5 transition-all">
              Pedir Cotización
            </Link>
            <Link href="#precios-detallados" className="inline-flex items-center justify-center bg-wheat/20 text-dark-crust px-8 py-4 rounded-full font-semibold no-underline hover:bg-wheat/30 transition-colors">
              Ver Todos los Precios
            </Link>
          </div>
        </div>
      </section>

      {/* Vista Rápida */}
      <section className="py-16 px-[4%] bg-blush/30">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-crust text-xs font-semibold uppercase tracking-[0.2em] mb-4">Vista Rápida</p>
            <h2 className="font-serif text-3xl md:text-4xl text-dark-crust">Precios Iniciales</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { label: 'Bodas', price: '$350+', sub: 'por pastel' },
              { label: 'Quinceañeras', price: '$450+', sub: 'por pastel' },
              { label: 'Cumpleaños', price: '$75+', sub: 'por pastel' },
              { label: 'Cake Pops', price: '$36+', sub: 'por docena' },
              { label: 'Cupcakes', price: '$4+', sub: 'cada uno' },
              { label: 'Masa Madre', price: '$12+', sub: 'por pieza' },
            ].map((item) => (
              <div key={item.label} className="bg-white rounded-2xl p-5 text-center shadow-sm hover:shadow-md transition-shadow">
                <p className="text-2xl md:text-3xl font-serif text-crust font-bold mb-1">{item.price}</p>
                <p className="text-dark-crust font-medium text-sm mb-0.5">{item.label}</p>
                <p className="text-[#6B6560] text-xs m-0">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Precios Detallados */}
      <section id="precios-detallados" className="py-24 px-[4%] bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-crust text-xs font-semibold uppercase tracking-[0.2em] mb-4">Precios Detallados</p>
            <h2 className="font-serif text-3xl md:text-4xl text-dark-crust mb-4">Lo Que Cobramos y Por Qué</h2>
            <p className="text-[#6B6560] max-w-2xl mx-auto leading-relaxed">
              Todos los precios reflejan calidad artesanal, ingredientes premium y el tiempo que nuestros reposteros invierten en cada pedido. Los precios son puntos de partida — tu cotización final depende de tu diseño específico.
            </p>
          </div>

          <div className="space-y-8">
            {categorias.map((cat) => (
              <div key={cat.categoria} className="bg-cream rounded-2xl overflow-hidden">
                <div className="p-6 md:p-8">
                  <h3 className="font-serif text-2xl text-dark-crust mb-2">{cat.categoria}</h3>
                  <p className="text-[#6B6560] text-sm mb-6">{cat.descripcion}</p>

                  <div className="bg-white rounded-xl overflow-hidden">
                    <div className="hidden md:grid grid-cols-3 gap-4 px-5 py-3 bg-blush/40 text-xs font-semibold uppercase tracking-wider text-crust">
                      <span>Artículo</span>
                      <span>Porciones</span>
                      <span className="text-right">Precio</span>
                    </div>
                    {cat.items.map((item, i) => (
                      <div key={i} className={`grid grid-cols-1 md:grid-cols-3 gap-1 md:gap-4 px-5 py-4 ${i < cat.items.length - 1 ? 'border-b border-blush/60' : ''}`}>
                        <span className="text-dark-crust font-medium">{item.nombre}</span>
                        <span className="text-[#6B6560] text-sm">{item.porciones}</span>
                        <span className="text-crust font-semibold md:text-right">{item.precio}</span>
                      </div>
                    ))}
                  </div>

                  {cat.nota && (
                    <p className="text-soft-brown text-sm mt-4 mb-0 italic">{cat.nota}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Extras */}
      <section className="py-24 px-[4%] bg-blush/30">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-crust text-xs font-semibold uppercase tracking-[0.2em] mb-4">Extras</p>
            <h2 className="font-serif text-3xl md:text-4xl text-dark-crust mb-4">Complementos de Diseño</h2>
            <p className="text-[#6B6560] max-w-xl mx-auto">
              Eleva tu pedido con decoraciones premium y detalles personalizados.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {extras.map((extra) => (
              <div key={extra.nombre} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-medium text-dark-crust m-0 text-base">{extra.nombre}</h3>
                  <span className="text-crust font-semibold text-sm whitespace-nowrap ml-3">{extra.precio}</span>
                </div>
                <p className="text-[#6B6560] text-sm m-0">{extra.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tarifas de Entrega */}
      <section className="py-24 px-[4%] bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-crust text-xs font-semibold uppercase tracking-[0.2em] mb-4">Entrega</p>
            <h2 className="font-serif text-3xl md:text-4xl text-dark-crust mb-4">Tarifas de Entrega por Zona</h2>
            <p className="text-[#6B6560] max-w-xl mx-auto">
              Entregamos a domicilio en todo el condado de San Diego. La recolección gratuita siempre está disponible.
            </p>
          </div>
          <div className="bg-cream rounded-2xl overflow-hidden">
            <div className="hidden md:grid grid-cols-2 gap-4 px-6 py-3 bg-blush/40 text-xs font-semibold uppercase tracking-wider text-crust">
              <span>Zona</span>
              <span className="text-right">Tarifa</span>
            </div>
            {tarifasEntrega.map((item, i) => (
              <div key={i} className={`grid grid-cols-1 md:grid-cols-2 gap-1 md:gap-4 px-6 py-4 ${i < tarifasEntrega.length - 1 ? 'border-b border-blush/60' : ''}`}>
                <span className="text-dark-crust font-medium">{item.area}</span>
                <span className="text-crust font-semibold md:text-right">{item.tarifa}</span>
              </div>
            ))}
          </div>
          <p className="text-soft-brown text-sm mt-4 italic text-center">
            Recolección gratuita en nuestra ubicación de San Diego. La entrega incluye transporte cuidadoso en vehículos con temperatura controlada.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-[4%] bg-blush/30">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-crust text-xs font-semibold uppercase tracking-[0.2em] mb-4">Preguntas</p>
            <h2 className="font-serif text-3xl md:text-4xl text-dark-crust">Preguntas Frecuentes sobre Precios</h2>
          </div>
          <div className="space-y-4">
            {preguntasFrecuentes.map((faq) => (
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
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">¿Lista para una Cotización?</h2>
          <p className="text-blush text-lg mb-8 leading-relaxed">
            Cuéntanos sobre tu evento y visión. Te enviaremos una cotización detallada sin compromiso en menos de 24 horas. Hablamos español.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/es/contacto" className="inline-flex items-center justify-center bg-wheat text-dark-crust px-8 py-4 rounded-full font-semibold no-underline hover:bg-white transition-colors">
              Pedir Cotización
            </Link>
            <Link href="/es" className="inline-flex items-center justify-center border-2 border-blush text-white px-8 py-4 rounded-full font-semibold no-underline hover:bg-blush/10 transition-colors">
              Volver al Inicio
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
