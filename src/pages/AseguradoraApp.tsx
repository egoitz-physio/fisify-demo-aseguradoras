import { useEffect, type ReactNode } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  BrainCircuit,
  CheckCircle2,
  DollarSign,
  HeartHandshake,
  HeartPulse,
  PhoneCall,
  ScanSearch,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Users,
} from 'lucide-react'

const navItems = [
  { href: '#servicio', label: 'Servicio' },
  { href: '#prevencion', label: 'Prevención' },
  { href: '#fisioterapia', label: 'Fisioterapia' },
  { href: '#planes', label: 'Planes' },
  { href: '#producto', label: 'Producto' },
  { href: '#comunicacion', label: 'Comunicación' },
]

const heroStats = [
  { value: '70%', label: 'Mayor adherencia frente a programas de ejercicio tradicionales.' },
  { value: '24/7', label: 'Soporte digital y acompañamiento humano en cualquier momento.' },
  { value: '3.7x', label: 'Más continuidad en los hábitos de cuidado y seguimiento.' },
  { value: '9.2/10', label: 'Satisfacción reportada por usuarios en experiencias guiadas.' },
]

const serviceCards = [
  {
    icon: <ShieldCheck className="h-5 w-5" />,
    title: 'Prevención activa',
    body: 'Programas personalizados para anticipar molestias, reforzar hábitos y reducir fricción antes de que aparezca el problema.',
  },
  {
    icon: <BrainCircuit className="h-5 w-5" />,
    title: 'Soporte inteligente',
    body: 'Un asistente digital que adapta el ritmo, recuerda objetivos y acompaña cada sesión con recomendaciones basadas en progreso real.',
  },
  {
    icon: <HeartPulse className="h-5 w-5" />,
    title: 'Recuperación guiada',
    body: 'Planes de rehabilitación con seguimiento continuo para mejorar adherencia, acelerar la recuperación y sostener la confianza.',
  },
]

const pillars = [
  {
    title: 'Más efectiva para crear hábitos',
    body: 'La experiencia está pensada para que el asegurado vuelva cada día y perciba valor más allá del momento del siniestro.',
  },
  {
    title: 'Más personalizada',
    body: 'El contenido se ajusta a ritmo, progreso y objetivos para que el programa no se sienta genérico.',
  },
  {
    title: 'Más motivadora',
    body: 'La combinación de tecnología, seguimiento y lenguaje cercano hace que cuidarse resulte más simple y deseable.',
  },
]

const strategicPoints = [
  {
    title: 'Más visible',
    body: 'La propuesta hace que el seguro se note en el día a día, no solo cuando hay un incidente.',
  },
  {
    title: 'Más útil',
    body: 'Previene, acompaña y mejora la experiencia con mensajes y rutinas que el usuario realmente puede seguir.',
  },
  {
    title: 'Más valor',
    body: 'Refuerza la percepción de cuidado, fidelidad y uso recurrente, ayudando a tangibilizar la cobertura.',
  },
]

const physiotherapyCards = [
  {
    title: 'Consulta + casa',
    body: 'La sesión presencial se complementa con terapia activa desde casa para mantener el progreso entre visitas.',
  },
  {
    title: 'Terapia activa',
    body: 'La plataforma guía ejercicios, ajusta la dificultad y refuerza la constancia sin perder cercanía clínica.',
  },
  {
    title: 'Seguimiento simple',
    body: 'El fisioterapeuta ve la evolución en un solo panel y puede reaccionar con rapidez cuando hace falta.',
  },
]

const physiotherapyMetrics = [
  { value: '20%', label: 'Ahorro potencial en coste medio frente a un modelo totalmente presencial.' },
  { value: '80%+', label: 'Activación esperada de usuarios invitados a seguir el programa.' },
  { value: '9/10', label: 'Objetivo de satisfacción clínica con la experiencia híbrida.' },
  { value: '15%+', label: 'Cobertura en zonas donde la presencialidad es más limitada.' },
]

const physiotherapyWorkflow = [
  {
    title: '1. Valorar',
    body: 'El profesional evalúa, define objetivos y adapta el programa a la situación funcional real del paciente.',
  },
  {
    title: '2. Enviar',
    body: 'El plan se comparte en la plataforma con ejercicios, progresiones y seguimiento, sin fricción operativa.',
  },
  {
    title: '3. Acompañar',
    body: 'El paciente continúa en casa con una experiencia guiada, mientras el fisio mantiene el control de la evolución.',
  },
]

const developments = [
  {
    num: '01',
    icon: <Users size={20} strokeWidth={1.5} />,
    title: 'One-to-One',
    subtitle: 'Bienestar digital con enfoque humano',
    body: 'Cada asegurado cuenta con un fisioterapeuta asignado desde el inicio para valorar, orientar y acompañar todo el proceso.',
    images: ['/images/onetoone1.webp', '/images/onetoone2.webp'],
    process: ['Evaluación', 'Definición de objetivos', 'Plan personalizado', 'Seguimiento continuo'],
  },
  {
    num: '02',
    icon: <ScanSearch size={20} strokeWidth={1.5} />,
    title: 'BodyOS',
    subtitle: 'Inteligencia para la prevención personalizada',
    body: 'BodyOS combina tests de fuerza, análisis postural e integración de datos para generar planes de prevención totalmente personalizados.',
    showcase: ['/images/bodyos1.webp', '/images/bodyos2.webp'],
    videos: [
      {
        src: '/images/testbodyos.mp4',
        label: 'Test de fuerza',
        body: 'Ejercicio guiado para valorar rendimiento, resistencia y calidad del movimiento.',
      },
      {
        src: '/images/bodyos.mp4',
        label: 'Análisis postural',
        body: 'Lectura completa de la postura y sus desalineaciones para orientar el siguiente paso del plan.',
      },
    ],
  },
  {
    num: '03',
    icon: <Stethoscope size={20} strokeWidth={1.5} />,
    title: 'Movimiento guiado con visión artificial',
    subtitle: 'Corrección en tiempo real',
    body: 'El sistema analiza cómo se realizan los ejercicios en tiempo real, corrige la ejecución y ayuda a asegurar una recuperación más segura.',
    showcase: ['/images/vision-ai.png'],
    video: '/images/vision-ai.mp4',
  },
]

const communicationPhases = [
  {
    id: 1,
    label: 'Definición del proyecto',
    months: 'Jul - Nov',
    summary: 'Alinear objetivos, validar la narrativa y preparar los materiales de lanzamiento.',
    actions: [
      'Reunión kickoff con stakeholders de la aseguradora.',
      'Definición de KPIs, universo objetivo y calendario de contenidos.',
      'Creación del hub de contenidos y aprobación del programa.',
    ],
  },
  {
    id: 2,
    label: 'Lanzamiento y seguimiento',
    months: 'Nov - May',
    summary: 'Activar el servicio con campañas, píldoras de contenido y acompañamiento mensual.',
    actions: [
      'Lanzamiento con CTA al servicio digital.',
      'Newsletters / píldoras de contenido mensuales.',
      'Webinars de educación y reuniones de control de resultados.',
    ],
  },
  {
    id: 3,
    label: 'Revisión y resultados',
    months: 'May - Jun',
    summary: 'Medir impacto, cerrar aprendizajes y preparar la siguiente fase.',
    actions: [
      'Análisis de usuarios activos, satisfacción y volumen de uso.',
      'Revisión de adherencia y resultados clínicos.',
      'Presentación de resultados y plan v2.',
    ],
  },
]

const hsbcEssentialPlan = [
  'Evaluación y personalización',
  'Tecnología de asistente virtual',
  'Soluciones especializadas',
  'Educación continua',
]

const hsbcAdvancedPlan = [
  'Plan esencial + seguimiento proactivo',
  'Atención multicanal: videollamadas y chat con fisioterapeutas',
  'Acciones de dinamización',
  'Modelo de gestión dedicada + inteligencia de datos',
]

const hsbcPricing = [
  'Entrada',
  'Crecimiento',
  'Escala media',
  'Gran cartera',
  'Cobertura amplia',
  'Modelo expandido',
]

function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string
  title: string
  description: string
}) {
  return (
    <div className="max-w-3xl">
      <div className="section-label mb-5">{eyebrow}</div>
      <h2 className="heading-display text-4xl md:text-5xl lg:text-6xl text-[#0a1628] leading-[0.95] tracking-tight">
        {title}
      </h2>
      <p className="mt-5 text-base md:text-lg leading-relaxed text-[#0a1628]/70 font-light">
        {description}
      </p>
    </div>
  )
}

function PageMotion({
  children,
  delay = 0,
  className = '',
}: {
  children: ReactNode
  delay?: number
  className?: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

function MetricCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-[1.5rem] border border-[#0a1628]/10 bg-white p-5 shadow-[0_10px_30px_rgba(10,22,40,0.04)]">
      <div className="stat-value text-3xl md:text-4xl">{value}</div>
      <p className="mt-3 text-sm md:text-[15px] leading-relaxed text-[#0a1628]/70 font-light">{label}</p>
    </div>
  )
}

function ContentCard({
  title,
  body,
  icon,
}: {
  title: string
  body: string
  icon?: React.ReactNode
}) {
  return (
    <div className="rounded-[1.75rem] border border-[#0a1628]/10 bg-white p-6 lg:p-7 shadow-[0_10px_30px_rgba(10,22,40,0.04)]">
      {icon && <div className="mb-5 text-[#00008f]">{icon}</div>}
      <h3 className="text-2xl font-medium text-[#0a1628]">{title}</h3>
      <p className="mt-4 text-sm md:text-[15px] leading-relaxed text-[#0a1628]/70 font-light">{body}</p>
    </div>
  )
}

export default function AseguradoraApp() {
  useEffect(() => {
    const previousTitle = document.title
    document.title = 'Aseguradora | Fisioterapia digital para aseguradoras'
    return () => {
      document.title = previousTitle
    }
  }, [])

  return (
    <div className="relative min-h-screen overflow-hidden bg-surface text-main">
      <div className="noise" />

      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="glow-spot w-[900px] h-[900px] -top-48 -right-40 opacity-70" />
        <div className="glow-gold w-[760px] h-[760px] -bottom-52 -left-48 opacity-70" />
        <div className="glow-blue w-[420px] h-[420px] top-1/4 left-1/2 opacity-60" />
      </div>

      <header className="fixed top-0 inset-x-0 z-50 bg-white/85 backdrop-blur-2xl border-b border-[#0a1628]/10">
        <div className="mx-auto max-w-[1440px] px-5 lg:px-10">
          <div className="flex h-16 lg:h-20 items-center justify-between gap-6">
            <a href="#hero" className="flex items-center gap-4 group">
              <span className="h-10 w-10 rounded-2xl border border-[#0a1628]/10 bg-white grid place-items-center overflow-hidden">
                <img src="/images/fisify-logo.svg" alt="Fisify" className="h-7 w-7 object-contain" />
              </span>
              <div className="flex flex-col leading-none">
                <span className="text-[11px] uppercase tracking-[0.3em] text-[#0a1628]/60">Aseguradora</span>
                <span className="text-sm text-[#0a1628]/80 font-light">Fisioterapia digital</span>
              </div>
            </a>

            <nav className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="nav-link">
                  {item.label}
                </a>
              ))}
            </nav>

            <a
              href="#planes"
              className="hidden md:inline-flex items-center gap-2 rounded-full border border-[#0a1628]/10 bg-white px-4 py-2 text-[11px] uppercase tracking-[0.22em] text-[#0a1628]/80 transition-all duration-300 hover:border-[#00008f]/30 hover:text-[#00008f]"
            >
              Ver planes
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </header>

      <main className="relative pt-24 lg:pt-28">
        <section id="hero" className="mx-auto max-w-[1440px] px-5 lg:px-10 pb-16 lg:pb-20">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            <PageMotion className="lg:col-span-6">
              <div className="inline-flex items-center gap-3 rounded-full border border-[#00008f]/15 bg-[#eef3ff] px-4 py-2 text-[11px] uppercase tracking-[0.22em] text-[#00008f]">
                <Sparkles size={12} />
                Propuesta para aseguradora
              </div>

              <h1 className="heading-display mt-6 max-w-4xl text-5xl md:text-6xl lg:text-[5.6rem] leading-[0.92] tracking-tight text-[#0a1628]">
                Fisioterapia digital
                <span className="block text-[#00008f]">pensada para tus asegurados</span>
              </h1>

              <p className="mt-6 max-w-2xl text-lg md:text-xl font-light leading-relaxed text-[#0a1628]/70">
                Una experiencia que une tecnología avanzada y atención humana para convertir el cuidado en un servicio
                diario, útil y fácil de usar.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#servicio" className="btn-primary rounded-full border border-transparent">
                  Ver propuesta
                </a>
                <a href="#comunicacion" className="btn-ghost rounded-full">
                  Ver activación
                </a>
              </div>

              <div className="mt-10 grid grid-cols-2 gap-4">
                {heroStats.map((stat) => (
                  <MetricCard key={stat.value} value={stat.value} label={stat.label} />
                ))}
              </div>
            </PageMotion>

            <PageMotion delay={0.08} className="lg:col-span-6">
              <div className="relative overflow-hidden rounded-[2rem] border border-[#0a1628]/10 bg-white shadow-[0_20px_60px_rgba(10,22,40,0.06)]">
                <img
                  src="/images/new-hero-2.png"
                  alt="Fisioterapia digital para aseguradoras"
                  className="h-[520px] w-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-white/45 via-white/5 to-transparent" />
              </div>
            </PageMotion>
          </div>
        </section>

        <section id="servicio" className="mx-auto max-w-[1440px] px-5 lg:px-10 py-10 lg:py-20">
          <PageMotion className="max-w-4xl">
            <div className="section-label mb-5">Servicio</div>
            <h2 className="heading-display text-4xl md:text-5xl lg:text-[4.8rem] leading-[0.92] tracking-tight text-[#0a1628]">
              Tres capas que hacen que el cuidado sea visible
            </h2>
            <p className="mt-6 text-lg md:text-xl font-light leading-relaxed text-[#0a1628]/70">
              Prevención, soporte inteligente y acompañamiento humano se combinan para que la propuesta sea clara,
              elegante y comercialmente fácil de explicar.
            </p>
          </PageMotion>

          <div className="mt-10 grid lg:grid-cols-3 gap-5">
            {serviceCards.map((card, index) => (
              <PageMotion key={card.title} delay={index * 0.05}>
                <ContentCard title={card.title} body={card.body} icon={card.icon} />
              </PageMotion>
            ))}
          </div>

          <div className="mt-6 grid lg:grid-cols-[1.1fr_0.9fr] gap-5">
            <PageMotion className="rounded-[2rem] border border-[#0a1628]/10 bg-white p-6 lg:p-8 shadow-[0_10px_30px_rgba(10,22,40,0.04)]">
              <div className="section-label mb-5">Human & technology</div>
              <h3 className="heading-display text-3xl md:text-4xl text-[#0a1628] leading-tight">
                Donde la tecnología apoya al equipo humano
              </h3>
              <p className="mt-4 max-w-2xl text-[#0a1628]/70 font-light leading-relaxed">
                La experiencia se adapta al avance de cada persona para que la personalización no sea una promesa,
                sino una parte visible del servicio.
              </p>

              <div className="mt-6 grid sm:grid-cols-3 gap-4">
                {pillars.map((pillar) => (
                  <div key={pillar.title} className="rounded-[1.35rem] border border-[#0a1628]/10 bg-[#f4f7fb] p-4">
                    <div className="text-sm font-medium text-[#00008f]">{pillar.title}</div>
                    <p className="mt-2 text-sm leading-relaxed text-[#0a1628]/70 font-light">{pillar.body}</p>
                  </div>
                ))}
              </div>
            </PageMotion>

            <PageMotion delay={0.08} className="overflow-hidden rounded-[2rem] border border-[#0a1628]/10 bg-white shadow-[0_10px_30px_rgba(10,22,40,0.04)]">
              <div className="grid sm:grid-cols-2 h-full">
                <img src="/images/hero-tech.png" alt="Seguimiento digital" className="h-full min-h-[280px] object-cover" />
                <div className="bg-white p-6 lg:p-8 flex flex-col justify-between">
                  <div>
                    <div className="text-[11px] uppercase tracking-[0.24em] text-[#0a1628]/45">Plataforma</div>
                    <h3 className="mt-3 text-2xl font-medium text-[#0a1628]">Soporte inteligente para cada sesión</h3>
                    <p className="mt-4 text-sm md:text-[15px] leading-relaxed text-[#0a1628]/70 font-light">
                      El asistente digital ayuda a mantener el ritmo, ajustar la dificultad y sostener la constancia sin
                      perder cercanía.
                    </p>
                  </div>
                  <div className="mt-6 grid gap-3">
                    {['Contenido adaptado al progreso', 'Seguimiento visual de movimiento', 'Recordatorios y motivación diaria'].map(
                      (item) => (
                        <div key={item} className="flex items-center gap-3 rounded-2xl border border-[#0a1628]/10 bg-[#f4f7fb] px-4 py-3">
                          <CheckCircle2 className="h-4 w-4 text-[#00008f] shrink-0" />
                          <span className="text-sm text-[#0a1628]/70 font-light">{item}</span>
                        </div>
                      ),
                    )}
                  </div>
                </div>
              </div>
            </PageMotion>
          </div>
        </section>

        <section id="prevencion" className="mx-auto max-w-[1440px] px-5 lg:px-10 py-10 lg:py-20">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            <PageMotion className="lg:col-span-6">
              <div className="inline-flex items-center gap-3 rounded-full border border-[#00008f]/15 bg-[#eef3ff] px-4 py-2 text-[11px] uppercase tracking-[0.22em] text-[#00008f]">
                <Sparkles size={12} />
                Prevención y bienestar
              </div>

              <h2 className="heading-display mt-6 max-w-4xl text-5xl md:text-6xl lg:text-[5.6rem] leading-[0.92] tracking-tight text-[#0a1628]">
                Una propuesta activa para cuidar mejor cada día
              </h2>

              <p className="mt-6 max-w-2xl text-lg md:text-xl font-light leading-relaxed text-[#0a1628]/70">
                Unimos la cercanía humana con el enfoque preventivo y cotidiano para crear una experiencia que el
                asegurado entiende, usa y asocia al valor real del seguro.
              </p>
            </PageMotion>

            <PageMotion delay={0.08} className="lg:col-span-6">
              <div className="relative overflow-hidden rounded-[2rem] border border-[#0a1628]/10 bg-white shadow-[0_20px_60px_rgba(10,22,40,0.06)]">
                <img
                  src="/images/hero-medicus-fisio-tech.png"
                  alt="Prevención y bienestar digital"
                  className="h-[520px] w-full object-cover object-center"
                />
              </div>
            </PageMotion>
          </div>

          <SectionHeader
            eyebrow="Desde el objetivo al bienestar"
            title="Una lógica 360º para anticipar, acompañar y sostener el uso"
            description="La combinación de prevención, bienestar y acompañamiento convierte la experiencia en una parte útil de la vida diaria del asegurado."
          />

          <div className="mt-10 grid md:grid-cols-3 gap-5">
            {[
              {
                title: 'Prevención',
                body: 'Programas personalizados para anticipar molestias, reforzar hábitos y mejorar la calidad de vida antes de que aparezca el problema.',
              },
              {
                title: 'Bienestar diario',
                body: 'Una experiencia pensada para usarse de forma recurrente, con valor claro en la rutina y no solo en momentos puntuales.',
              },
              {
                title: 'Hábitos sostenibles',
                body: 'Educación continua, seguimiento y motivación para convertir pequeñas acciones en mejoras estables en el tiempo.',
              },
            ].map((item, index) => (
              <PageMotion key={item.title} delay={index * 0.05}>
                <ContentCard title={item.title} body={item.body} icon={<ArrowUpRight className="h-5 w-5" />} />
              </PageMotion>
            ))}
          </div>

          <div className="mt-6 grid lg:grid-cols-2 gap-5">
            <PageMotion className="rounded-[2rem] border border-[#0a1628]/10 bg-white p-6 lg:p-8 shadow-[0_10px_30px_rgba(10,22,40,0.04)]">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-2xl bg-[#eef3ff] border border-[#00008f]/15 flex items-center justify-center text-[#00008f]">
                  <HeartHandshake className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-[0.24em] text-[#00008f]">Capa humana</div>
                  <div className="text-sm text-[#0a1628]/45 font-light">La cercanía que sostiene la adherencia</div>
                </div>
              </div>
              <div className="space-y-4">
                {[
                  'Videollamadas con fisioterapeutas para valoraciones personalizadas.',
                  'Chat directo para resolver dudas, ajustar objetivos y sostener la adherencia.',
                  'Acompañamiento humano para que el asegurado se sienta guiado en cada paso.',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-2xl border border-[#0a1628]/10 bg-[#f4f7fb] px-4 py-3">
                    <ShieldCheck className="mt-0.5 h-4 w-4 text-[#00008f] shrink-0" />
                    <span className="text-sm md:text-[15px] leading-relaxed text-[#0a1628]/72 font-light">{item}</span>
                  </div>
                ))}
              </div>
            </PageMotion>

            <PageMotion delay={0.08} className="rounded-[2rem] border border-[#0a1628]/10 bg-white p-6 lg:p-8 shadow-[0_10px_30px_rgba(10,22,40,0.04)]">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-2xl bg-[#eef3ff] border border-[#00008f]/15 flex items-center justify-center text-[#00008f]">
                  <ScanSearch className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-[0.24em] text-[#00008f]">Capa digital</div>
                  <div className="text-sm text-[#0a1628]/45 font-light">Precisión y personalización en cada sesión</div>
                </div>
              </div>
              <div className="space-y-4">
                {[
                  'Valoraciones con IA para adaptar el contenido al estado real de la persona.',
                  'Corrección en tiempo real para mejorar la ejecución y reducir errores.',
                  'Experiencia digital precisa, clara y cercana para hacer el cuidado más fácil.',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-2xl border border-[#0a1628]/10 bg-[#f4f7fb] px-4 py-3">
                    <Sparkles className="mt-0.5 h-4 w-4 text-[#00008f] shrink-0" />
                    <span className="text-sm md:text-[15px] leading-relaxed text-[#0a1628]/72 font-light">{item}</span>
                  </div>
                ))}
              </div>
            </PageMotion>
          </div>
        </section>

        <section className="mx-auto max-w-[1440px] px-5 lg:px-10 py-4 lg:py-8">
          <div className="grid lg:grid-cols-3 gap-5">
            {strategicPoints.map((point) => (
              <PageMotion key={point.title}>
                <div className="rounded-[1.75rem] border border-[#0a1628]/10 bg-white p-6 lg:p-7 h-full shadow-[0_10px_30px_rgba(10,22,40,0.04)]">
                  <div className="text-[11px] uppercase tracking-[0.24em] text-[#00008f]">Valor</div>
                  <h3 className="mt-4 text-2xl font-medium text-[#0a1628]">{point.title}</h3>
                  <p className="mt-4 text-sm md:text-[15px] leading-relaxed text-[#0a1628]/70 font-light">{point.body}</p>
                </div>
              </PageMotion>
            ))}
          </div>
        </section>

        <section id="fisioterapia" className="mx-auto max-w-[1440px] px-5 lg:px-10 py-10 lg:py-20">
          <SectionHeader
            eyebrow="Fisioterapia"
            title="FisifyStudio para fisioterapeutas"
            description="Una plataforma para enviar programas personalizados a los pacientes de una forma sencilla y ofrecer un servicio más completo, que complementa la consulta presencial con terapia activa desde casa."
          />

          <div className="mt-10 grid lg:grid-cols-12 gap-5 items-start">
            <PageMotion className="lg:col-span-5 pt-3 lg:pt-6">
              <div className="inline-flex items-center gap-3 rounded-full border border-[#00008f]/15 bg-[#eef3ff] px-4 py-2 text-[11px] uppercase tracking-[0.22em] text-[#00008f]">
                <Stethoscope size={12} />
                Terapia híbrida
              </div>

              <h3 className="heading-display mt-6 max-w-4xl text-4xl md:text-5xl lg:text-[4.2rem] leading-[0.92] tracking-tight text-[#0a1628]">
                Consulta + casa + seguimiento
              </h3>

              <p className="mt-6 max-w-2xl text-lg md:text-xl font-light leading-relaxed text-[#0a1628]/70">
                La sesión presencial gana continuidad, y el profesional puede sostener el plan sin multiplicar complejidad operativa.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {['Consulta + casa', 'Terapia activa', 'Seguimiento simple'].map((item) => (
                  <span key={item} className="rounded-full border border-[#0a1628]/10 bg-white px-4 py-2 text-sm text-[#0a1628]/75">
                    {item}
                  </span>
                ))}
              </div>
            </PageMotion>

            <PageMotion delay={0.08} className="lg:col-span-7">
              <div className="rounded-[2rem] border border-[#0a1628]/10 bg-white p-4 lg:p-5 shadow-[0_20px_60px_rgba(10,22,40,0.06)]">
                <img
                  src="/images/kinesiologia-hibrida-2.png"
                  alt="FisifyStudio para fisioterapia"
                  className="h-auto w-full object-contain object-center"
                />
              </div>
            </PageMotion>
          </div>

          <div className="mt-10 grid lg:grid-cols-3 gap-5">
            {physiotherapyCards.map((item, index) => (
              <PageMotion key={item.title} delay={index * 0.05}>
                <ContentCard title={item.title} body={item.body} icon={<ArrowRight className="h-5 w-5" />} />
              </PageMotion>
            ))}
          </div>

          <div className="mt-6 grid lg:grid-cols-2 gap-5">
            <PageMotion className="rounded-[2rem] border border-[#0a1628]/10 bg-white p-6 lg:p-8 shadow-[0_10px_30px_rgba(10,22,40,0.04)]">
              <div className="text-[11px] uppercase tracking-[0.24em] text-[#0a1628]/55 mb-4">Cómo funciona</div>
              <h3 className="heading-display text-3xl md:text-4xl text-[#0a1628] leading-tight">
                Una secuencia simple que aprovecha mejor cada sesión
              </h3>
              <div className="mt-6 grid gap-4">
                {physiotherapyWorkflow.map((step, index) => (
                  <div key={step.title} className="rounded-[1.35rem] border border-[#0a1628]/10 bg-[#f4f7fb] p-4 lg:p-5">
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-[#00008f]/15 bg-[#eef3ff] text-sm font-medium text-[#00008f]">
                        {index + 1}
                      </span>
                      <h4 className="text-xl font-medium text-[#0a1628]">{step.title.slice(3)}</h4>
                    </div>
                    <p className="mt-4 text-sm md:text-[15px] leading-relaxed text-[#0a1628]/70 font-light">{step.body}</p>
                  </div>
                ))}
              </div>
            </PageMotion>

            <PageMotion delay={0.08} className="rounded-[2rem] border border-[#0a1628]/10 bg-white p-6 lg:p-8 shadow-[0_10px_30px_rgba(10,22,40,0.04)]">
              <div className="text-[11px] uppercase tracking-[0.24em] text-[#0a1628]/55 mb-4">Impacto medible</div>
              <h3 className="heading-display text-3xl md:text-4xl text-[#0a1628] leading-tight">
                La propuesta se sostiene en eficiencia, uso y cobertura
              </h3>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {physiotherapyMetrics.map((metric) => (
                  <div key={metric.value} className="rounded-[1.35rem] border border-[#0a1628]/10 bg-[#f4f7fb] p-4">
                    <div className="stat-value text-3xl">{metric.value}</div>
                    <p className="mt-2 text-sm md:text-[15px] leading-relaxed text-[#0a1628]/70 font-light">{metric.label}</p>
                  </div>
                ))}
              </div>
            </PageMotion>
          </div>
        </section>

        <section id="planes" className="mx-auto max-w-[1440px] px-5 lg:px-10 py-10 lg:py-20">
          <PageMotion className="max-w-4xl">
            <div className="section-label mb-5">HSBC · Planes</div>
            <h2 className="heading-display text-5xl md:text-6xl lg:text-[5.2rem] leading-[0.92] tracking-tight text-[#0a1628]">
              Dos niveles de servicio
              <br />
              para acompañar cada uso
            </h2>
            <p className="mt-6 max-w-3xl text-lg md:text-xl font-light leading-relaxed text-[#0a1628]/70">
              La propuesta se organiza en dos planes claros, con una lectura sencilla para la aseguradora y para el canal. La estructura mantiene la lógica de la referencia HSBC, pero encaja con el lenguaje visual actual de esta presentación.
            </p>
          </PageMotion>

          <div className="mt-10 grid lg:grid-cols-2 gap-6 mb-10">
            <PageMotion className="rounded-[2rem] border border-[#0a1628]/10 bg-white p-6 lg:p-8 shadow-[0_10px_30px_rgba(10,22,40,0.04)]">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-2xl bg-[#eef3ff] border border-[#00008f]/15 flex items-center justify-center text-[#00008f]">
                  <BadgeCheck size={18} />
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-[0.24em] text-[#00008f] font-medium">Plan esencial</div>
                  <div className="text-sm text-[#0a1628]/55 font-light">Modelo de gestión + inteligencia de datos</div>
                </div>
              </div>

              <div className="grid gap-3 mb-6">
                {hsbcEssentialPlan.map((item) => (
                  <div key={item} className="rounded-2xl border border-[#0a1628]/10 bg-[#f4f7fb] px-4 py-3 text-[#0a1628]/75 font-light text-sm">
                    {item}
                  </div>
                ))}
              </div>

              <div className="rounded-2xl border border-[#00008f]/15 bg-[#eef3ff] p-4 mb-5">
                <div className="text-xs uppercase tracking-[0.18em] text-[#00008f] mb-2">Lectura del plan</div>
                <div className="text-3xl font-light text-[#0a1628]">Entrada flexible</div>
                <p className="text-xs text-[#0a1628]/50 mt-2">Una base clara para activar el servicio sin complejidad comercial.</p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {hsbcPricing.map((tier) => (
                  <div key={tier} className="rounded-2xl border border-[#0a1628]/10 bg-white p-3">
                    <div className="text-[10px] uppercase tracking-[0.18em] text-[#0a1628]/40 mb-2">{tier}</div>
                    <div className="text-sm text-[#00008f] font-medium">Plan esencial</div>
                  </div>
                ))}
              </div>
            </PageMotion>

            <PageMotion delay={0.08} className="rounded-[2rem] border border-[#0a1628]/10 bg-white p-6 lg:p-8 shadow-[0_10px_30px_rgba(10,22,40,0.04)]">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-2xl bg-[#eef3ff] border border-[#00008f]/15 flex items-center justify-center text-[#00008f]">
                  <DollarSign size={18} />
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-[0.24em] text-[#00008f] font-medium">Plan avanzado</div>
                  <div className="text-sm text-[#0a1628]/55 font-light">Plan esencial + seguimiento proactivo</div>
                </div>
              </div>

              <div className="grid gap-3 mb-6">
                {hsbcAdvancedPlan.map((item) => (
                  <div key={item} className="rounded-2xl border border-[#0a1628]/10 bg-[#f4f7fb] px-4 py-3 text-[#0a1628]/75 font-light text-sm">
                    {item}
                  </div>
                ))}
              </div>

              <div className="rounded-2xl border border-[#00008f]/15 bg-[#eef3ff] p-4 mb-5">
                <div className="text-xs uppercase tracking-[0.18em] text-[#00008f] mb-2">Lectura del plan</div>
                <div className="text-3xl font-light text-[#0a1628]">Cobertura avanzada</div>
                <p className="text-xs text-[#0a1628]/50 mt-2">Más seguimiento, más canal y más capacidad de activación.</p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {hsbcPricing.map((tier) => (
                  <div key={tier} className="rounded-2xl border border-[#0a1628]/10 bg-white p-3">
                    <div className="text-[10px] uppercase tracking-[0.18em] text-[#0a1628]/40 mb-2">{tier}</div>
                    <div className="text-sm text-[#00008f] font-medium">Plan avanzado</div>
                  </div>
                ))}
              </div>
            </PageMotion>
          </div>

          <PageMotion className="rounded-[2rem] border border-[#0a1628]/10 bg-white p-6 lg:p-8 shadow-[0_10px_30px_rgba(10,22,40,0.04)]">
            <div className="flex items-center gap-4 mb-5">
              <div className="w-10 h-10 rounded-2xl bg-[#eef3ff] border border-[#00008f]/15 flex items-center justify-center text-[#00008f] flex-shrink-0">
                <Users size={18} />
              </div>
              <div>
                <div className="text-[11px] uppercase tracking-[0.24em] text-[#00008f] font-medium">Lectura ejecutiva</div>
                <div className="text-sm text-[#0a1628]/55 font-light">Más valor en producto, más claridad en negocio</div>
              </div>
            </div>
            <p className="text-[#0a1628]/70 font-light leading-relaxed max-w-5xl">
              El objetivo no es sumar una funcionalidad aislada, sino convertir la fisioterapia digital en un servicio fácil de explicar, fácil de contratar y fácil de usar, para que la aseguradora pueda mostrar valor de forma clara en cada etapa del recorrido.
            </p>
          </PageMotion>
        </section>

        <section id="producto" className="mx-auto max-w-[1440px] px-5 lg:px-10 py-10 lg:py-20">
          <SectionHeader
            eyebrow="Producto"
            title="Tres capacidades que consolidan el modelo"
            description="La propuesta combina clínica, acompañamiento humano y herramientas de adherencia para mejorar resultados y elevar la experiencia del asegurado."
          />

          <div className="mt-10 grid gap-8">
            {developments.map((dev, devIdx) => (
              <PageMotion key={dev.num} delay={devIdx * 0.05} className="rounded-[2rem] border border-[#0a1628]/10 bg-white p-6 lg:p-8 shadow-[0_10px_30px_rgba(10,22,40,0.04)]">
                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-[11px] uppercase tracking-[0.3em] text-[#00008f]">{dev.num}</span>
                    <div className="h-px flex-1 bg-[#0a1628]/10" />
                  </div>
                  <div className="flex items-center gap-3 mb-3 text-[#00008f]">
                    {dev.icon}
                    <span className="text-xs uppercase tracking-[0.24em]">Capacidad</span>
                  </div>
                  <h3 className="heading-display text-4xl md:text-5xl text-[#0a1628] leading-tight">{dev.title}</h3>
                  <p className="mt-2 text-sm font-light text-[#0a1628]/55">{dev.subtitle}</p>
                  <p className="mt-4 max-w-3xl text-sm md:text-[15px] font-light leading-relaxed text-[#0a1628]/75">
                    {dev.body}
                  </p>
                </div>

                {'images' in dev && dev.images ? (
                  <div className="grid md:grid-cols-2 gap-5">
                    {dev.images.map((src) => (
                      <div key={src} className="overflow-hidden rounded-[1.5rem] border border-[#0a1628]/10 bg-[#f4f7fb]">
                        <img src={src} alt={dev.title} className="h-full w-full object-cover" />
                      </div>
                    ))}
                  </div>
                ) : null}

                {dev.title === 'One-to-One' && (
                  <div className="mt-6 grid lg:grid-cols-[1.1fr_0.9fr] gap-5">
                    <div className="rounded-[1.5rem] border border-[#0a1628]/10 bg-[#f4f7fb] p-5 lg:p-6">
                      <div className="text-[11px] uppercase tracking-[0.24em] text-[#0a1628]/55 mb-3">Proceso</div>
                      <div className="grid gap-3">
                        {dev.process?.map((step) => (
                          <div key={step} className="rounded-2xl border border-[#0a1628]/10 bg-white px-4 py-3 text-sm text-[#0a1628]/75 font-light">
                            {step}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="grid gap-5 md:grid-cols-2">
                      {dev.images?.map((src) => (
                        <div key={src} className="overflow-hidden rounded-[1.5rem] border border-[#0a1628]/10 bg-[#f4f7fb]">
                          <img src={src} alt={dev.title} className="h-full w-full object-cover" />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {dev.title === 'BodyOS' && (
                  <div className="mt-6 space-y-5">
                    <div className="rounded-[1.5rem] border border-[#0a1628]/10 bg-[#f4f7fb] p-5 lg:p-6">
                      <div className="text-[11px] uppercase tracking-[0.24em] text-[#0a1628]/55 mb-3">Prevención personalizada</div>
                      <div className="space-y-3">
                        {[
                          'Screening integral del estado físico y funcional.',
                          'Identificación de riesgos específicos y generación de planes adaptados.',
                          'Integración con datos de uso y hábitos para afinar la prevención.',
                        ].map((item) => (
                          <div key={item} className="rounded-2xl border border-[#0a1628]/10 bg-white px-4 py-3 text-sm text-[#0a1628]/75 font-light">
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-5">
                      <div className="overflow-hidden rounded-[1.5rem] border border-[#0a1628]/10 bg-[#f4f7fb]">
                        <img src={dev.showcase?.[0]} alt={dev.title} className="h-full w-full object-cover" />
                      </div>
                      <div className="grid gap-4">
                        {dev.videos?.map((video) => (
                          <div key={video.src} className="rounded-[1.5rem] border border-[#0a1628]/10 bg-white p-4 shadow-[0_10px_30px_rgba(10,22,40,0.04)]">
                            <div className="overflow-hidden rounded-[1.25rem] border border-[#0a1628]/10 bg-black">
                              <video src={video.src} controls className="w-full h-full" />
                            </div>
                            <div className="mt-3">
                              <div className="text-[11px] uppercase tracking-[0.24em] text-[#00008f]">{video.label}</div>
                              <p className="mt-2 text-sm font-light leading-relaxed text-[#0a1628]/70">{video.body}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {dev.title === 'Movimiento guiado con visión artificial' && (
                  <div className="mt-6 space-y-5">
                    <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-5">
                      <div className="overflow-hidden rounded-[1.5rem] border border-[#0a1628]/10 bg-[#f4f7fb]">
                        <img src={dev.showcase?.[0]} alt={dev.title} className="h-full w-full object-cover" />
                      </div>
                      <div className="rounded-[1.5rem] border border-[#0a1628]/10 bg-[#f4f7fb] p-5 lg:p-6">
                        <div className="text-[11px] uppercase tracking-[0.24em] text-[#0a1628]/55 mb-3">BodyOS</div>
                        <div className="overflow-hidden rounded-[1.25rem] border border-[#0a1628]/10">
                          <video src={dev.video} controls className="w-full h-full" />
                        </div>
                      </div>
                    </div>
                    <div className="rounded-[1.5rem] border border-[#0a1628]/10 bg-[#f4f7fb] p-5 lg:p-6">
                      <div className="text-[11px] uppercase tracking-[0.24em] text-[#0a1628]/55 mb-3">Corrección en tiempo real</div>
                      <div className="grid gap-3 md:grid-cols-3">
                        {[
                          'Guía al asegurado mientras realiza el ejercicio.',
                          'Detecta errores de ejecución y sugiere correcciones claras.',
                          'Reduce el riesgo de lesión y mejora la calidad de la recuperación.',
                        ].map((item) => (
                          <div key={item} className="rounded-2xl border border-[#0a1628]/10 bg-white px-4 py-3 text-sm text-[#0a1628]/75 font-light">
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </PageMotion>
            ))}
          </div>

          <PageMotion className="mt-8 rounded-[2rem] border border-[#dbe7ff]/35 bg-[#eef3ff] p-6 lg:p-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-white/70 border border-[#00008f]/15 flex items-center justify-center text-[#00008f] flex-shrink-0">
                <PhoneCall size={20} />
              </div>
              <div>
                <div className="text-[11px] uppercase tracking-[0.22em] text-[#00008f] font-medium mb-3">Cierre ejecutivo</div>
                <h3 className="heading-display text-2xl lg:text-3xl text-[#0a1628] tracking-tight">
                  Cuida el activo más importante de tu aseguradora.
                </h3>
                <p className="text-[#0a1628]/70 font-light leading-relaxed mt-4 max-w-4xl">
                  Una combinación de experiencia humana, evidencia clínica y capacidad operativa que convierte la fisioterapia digital en una ventaja
                  para el asegurado y para el negocio.
                </p>
              </div>
            </div>
          </PageMotion>
        </section>

        <section id="comunicacion" className="mx-auto max-w-[1440px] px-5 lg:px-10 py-10 lg:py-20">
          <SectionHeader
            eyebrow="Comunicación"
            title="Tres fases · 12 meses"
            description="Cada fase tiene un objetivo claro y un set de actividades concretas. El cronograma se solapa intencionalmente para que el ritmo nunca se rompa."
          />

          <div className="mt-10 grid gap-5 xl:grid-cols-3">
            {communicationPhases.map((phase, index) => (
              <PageMotion key={phase.id} delay={index * 0.05}>
                <div className="rounded-[1.75rem] border border-[#0a1628]/10 bg-white p-6 lg:p-7 shadow-[0_10px_30px_rgba(10,22,40,0.04)] h-full">
                  <div className="text-[11px] uppercase tracking-[0.24em] text-[#0a1628]/45">Fase 0{phase.id}</div>
                  <div className="mt-2 text-4xl font-serif italic text-[#0a1628]" style={{ color: '#00008f' }}>
                    {String(phase.id).padStart(2, '0')}
                  </div>
                  <h3 className="mt-4 text-2xl font-medium text-[#0a1628]">{phase.label}</h3>
                  <div className="mt-3 text-sm font-medium text-[#00008f]">{phase.months}</div>
                  <p className="mt-4 text-sm leading-relaxed text-[#0a1628]/70 font-light">{phase.summary}</p>

                  <div className="mt-5 space-y-3">
                    {phase.actions.map((action) => (
                      <div key={action} className="rounded-2xl border border-[#0a1628]/10 bg-[#f4f7fb] px-4 py-3 text-sm text-[#0a1628]/75 font-light">
                        {action}
                      </div>
                    ))}
                  </div>
                </div>
              </PageMotion>
            ))}
          </div>

          <div className="mt-8 grid lg:grid-cols-3 gap-5">
            {[
              {
                eyebrow: 'Activación',
                title: 'Lanzamiento con el equipo comercial',
                body: 'Kickoff con stakeholders de la aseguradora para alinear universo, KPIs y expectativas.',
              },
              {
                eyebrow: 'Adherencia',
                title: 'Píldoras quincenales',
                body: 'Vídeos didácticos con CTA directo, newsletters mensuales y webinars para sostener el uso.',
              },
              {
                eyebrow: 'Refuerzo',
                title: 'Branding por canales propios',
                body: 'Publicación de contenido educativo a través de los canales de la aseguradora para mantener presencia.',
              },
            ].map((item, index) => (
              <PageMotion key={item.title} delay={index * 0.05}>
                <ContentCard
                  title={item.title}
                  body={item.body}
                  icon={<span className="text-[11px] uppercase tracking-[0.2em] text-[#00008f]">{item.eyebrow}</span>}
                />
              </PageMotion>
            ))}
          </div>
        </section>

      </main>

      <footer className="border-t border-[#0a1628]/10 bg-white">
        <div className="mx-auto max-w-[1440px] px-5 lg:px-10 py-8 lg:py-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <span className="h-9 w-9 rounded-2xl border border-[#0a1628]/10 bg-white grid place-items-center overflow-hidden">
              <img src="/images/fisify-logo.svg" alt="Fisify" className="h-6 w-6 object-contain" />
            </span>
            <div className="text-sm text-[#0a1628]/70 font-light">Aseguradora · Fisioterapia digital para aseguradoras</div>
          </div>
          <div className="text-xs uppercase tracking-[0.24em] text-[#0a1628]/40">
            Prevención · Fisioterapia · Acompañamiento humano
          </div>
        </div>
      </footer>
    </div>
  )
}
