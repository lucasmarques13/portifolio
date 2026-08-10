import { useState, useEffect, useRef } from "react";
import { ArrowRight, ExternalLink, X as CloseIcon, Menu, Github } from "lucide-react";

interface Project {
  id: number;
  date: string;
  type: string;
  name: string;
  description: string;
  technologies: string[];
  year: string;
  link: string;
  code: string | null;
}

const projects: Project[] = [
  {
    id: 1,
    date: "Ago.2024",
    type: "Delivery Site / Dev & Design",
    name: "Anjos Café",
    description:
      "Site completo para delivery de café artesanal, com cardápio interativo, sistema de pedidos e identidade visual desenvolvida do zero no Figma.",
    technologies: ["HTML", "CSS", "JavaScript", "Figma"],
    year: "2024",
    link: "#",
    code: "#",
  },
  {
    id: 2,
    date: "Jun.2024",
    type: "Site Flex / Dev",
    name: "Site Flex",
    description:
      "Landing page responsiva para academia fitness com seções de serviços, planos de assinatura e formulário de contato integrado.",
    technologies: ["HTML", "CSS", "JavaScript"],
    year: "2024",
    link: "#",
    code: "#",
  },
  {
    id: 3,
    date: "Jul.2024",
    type: "Delivery Site / Design",
    name: "Food Dash",
    description:
      "Plataforma de delivery com interface moderna, filtros por categoria de alimento, carrinho de compras e fluxo de finalização de pedido.",
    technologies: ["HTML", "CSS", "JavaScript", "Figma"],
    year: "2024",
    link: "#",
    code: null,
  },
  {
    id: 4,
    date: "Jul.2024",
    type: "Delivery Site / Design",
    name: "Massas Lili",
    description:
      "Site institucional e cardápio digital para restaurante italiano artesanal, com galeria de pratos, história da marca e reserva de mesas.",
    technologies: ["HTML", "CSS", "Figma"],
    year: "2024",
    link: "#",
    code: null,
  },
];

function Waves() {
  return (
    <div
      className="absolute bottom-0 left-0 right-0 pointer-events-none"
      style={{ height: "46%" }}
    >
      <svg
        viewBox="0 0 1440 420"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="w-full h-full"
        aria-hidden="true"
      >
        {/* background fill so no white bleeds through */}
        <rect width="1440" height="420" fill="#231462" />
        <path
          d="M0,260 C180,190 380,310 620,248 C840,188 1020,290 1220,232 C1340,196 1400,255 1440,244 L1440,420 L0,420 Z"
          fill="rgba(55,32,115,0.9)"
        />
        <path
          d="M0,292 C160,248 340,328 560,284 C780,240 960,312 1160,270 C1300,240 1385,286 1440,276 L1440,420 L0,420 Z"
          fill="rgba(80,52,145,0.75)"
        />
        <path
          d="M0,316 C200,278 380,352 590,316 C790,280 990,348 1190,308 C1322,278 1400,320 1440,312 L1440,420 L0,420 Z"
          fill="rgba(110,78,168,0.62)"
        />
        <path
          d="M0,342 C188,310 360,372 572,342 C768,312 970,366 1172,334 C1316,310 1402,348 1440,340 L1440,420 L0,420 Z"
          fill="rgba(140,105,192,0.50)"
        />
        <path
          d="M0,364 C172,344 348,382 558,362 C758,342 958,378 1158,358 C1310,342 1404,368 1440,362 L1440,420 L0,420 Z"
          fill="rgba(168,138,210,0.38)"
        />
        <path
          d="M0,382 C160,366 342,396 552,378 C752,360 952,392 1152,374 C1308,360 1406,384 1440,378 L1440,420 L0,420 Z"
          fill="rgba(190,162,225,0.28)"
        />
      </svg>
    </div>
  );
}

function FrameBorder() {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-30"
      style={{ padding: "26px" }}
      aria-hidden="true"
    >
      <div className="relative w-full h-full">
        {/* Main frame */}
        <div
          className="absolute inset-0"
          style={{ border: "1px solid rgba(255,255,255,0.28)" }}
        />

        {/* Top-left corner solid bracket */}
        <div
          className="absolute top-0 left-0"
          style={{
            width: 28,
            height: 28,
            borderTop: "2px solid rgba(255,255,255,0.7)",
            borderLeft: "2px solid rgba(255,255,255,0.7)",
          }}
        />

        {/* Top-right dashed bracket + corner dot */}
        <div className="absolute top-0 right-0" style={{ width: 56, height: 56 }}>
          <div
            className="absolute"
            style={{
              inset: 0,
              borderTop: "1px dashed rgba(255,255,255,0.5)",
              borderRight: "1px dashed rgba(255,255,255,0.5)",
            }}
          />
          {/* Inner dashed bracket offset */}
          <div
            className="absolute"
            style={{
              top: 9,
              right: 9,
              width: 34,
              height: 34,
              borderTop: "1px dashed rgba(255,255,255,0.3)",
              borderRight: "1px dashed rgba(255,255,255,0.3)",
            }}
          />
          {/* Corner solid square */}
          <div
            className="absolute top-0 right-0"
            style={{ width: 7, height: 7, background: "rgba(255,255,255,0.7)" }}
          />
        </div>

        {/* Bottom-left tick marks */}
        <div
          className="absolute left-0 flex flex-col gap-2.5"
          style={{ bottom: "30%" }}
        >
          <div
            style={{ width: 14, height: 1, background: "rgba(255,255,255,0.4)" }}
          />
          <div
            style={{ width: 14, height: 1, background: "rgba(255,255,255,0.4)" }}
          />
        </div>

        {/* Bottom-right corner solid bracket */}
        <div
          className="absolute bottom-0 right-0"
          style={{
            width: 28,
            height: 28,
            borderBottom: "2px solid rgba(255,255,255,0.7)",
            borderRight: "2px solid rgba(255,255,255,0.7)",
          }}
        />
      </div>
    </div>
  );
}

export default function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [formSuccess, setFormSuccess] = useState(false);

  const homeRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  const sections = [
    { id: "home", ref: homeRef, label: "Página Inicial" },
    { id: "about", ref: aboutRef, label: "Informações" },
    { id: "projects", ref: projectsRef, label: "Projetos" },
    { id: "contact", ref: contactRef, label: "Contato" },
  ];

  useEffect(() => {
    const observers = sections.map(({ id, ref }) => {
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { threshold: 0.35 }
      );
      if (ref.current) obs.observe(ref.current);
      return obs;
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const scrollTo = (id: string) => {
    const ref = sections.find((s) => s.id === id)?.ref;
    if (!ref?.current) return;

    const el = ref.current as HTMLElement;
    const headerOffset = 72;
    const top = window.scrollY + el.getBoundingClientRect().top - headerOffset;

    // Close menu immediately so overlay doesn't block navigation
    setMenuOpen(false);
    document.body.style.overflow = "";

    // Try native smooth first
    try {
      window.scrollTo({ top, behavior: 'smooth' });
      return;
    } catch (e) {
      // fallback to JS easing animation if smooth behavior not supported
    }

    // JS fallback smooth scroll (easeInOutQuad)
    const start = window.scrollY;
    const distance = top - start;
    const duration = 480;
    let startTime: number | null = null;

    function easeInOutQuad(t: number) {
      return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    }

    function step(timestamp: number) {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeInOutQuad(progress);
      window.scrollTo(0, start + distance * eased);
      if (elapsed < duration) requestAnimationFrame(step);
    }

    requestAnimationFrame(step);
  };

  const validate = () => {
    const errors: Record<string, string> = {};
    if (!formData.name.trim()) errors.name = "Nome obrigatório";
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      errors.email = "E-mail inválido";
    if (!formData.subject.trim()) errors.subject = "Assunto obrigatório";
    if (!formData.message.trim()) errors.message = "Mensagem obrigatória";
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setFormSuccess(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setFormSuccess(false), 6000);
    }
  };

  const inputBase =
    "w-full px-4 py-3 text-sm text-white placeholder-white/40 outline-none focus:ring-1 focus:ring-white/40 transition-all duration-200";
  const inputStyle = { background: "rgba(255,255,255,0.11)", border: "none", borderRadius: 2 };

  return (
    <div
      className="relative min-h-screen overflow-x-hidden"
      style={{ fontFamily: "'Outfit', sans-serif", background: "#231462" }}
    >
      <FrameBorder />

      {/* ── Fixed left sidebar (desktop) ── */}
      <aside className="fixed left-0 top-0 bottom-0 z-20 hidden lg:flex flex-col justify-between py-14 px-10 w-52">
        <div>
          <div className="mb-12">
            <h1
              className="text-[1.6rem] font-light text-white leading-tight tracking-wide"
              style={{ letterSpacing: "0.01em" }}
            >
              Lucas Marques
            </h1>
            <p className="text-[0.65rem] font-semibold text-white/55 uppercase tracking-[0.22em] mt-1.5">
              Designer &amp; Developer
            </p>
          </div>

          <nav aria-label="Menu principal">
            <ul className="flex flex-col gap-3.5">
              {sections.map(({ id, label }) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollTo(id);
                    }}
                    aria-current={activeSection === id ? "page" : undefined}
                    className={`flex items-center gap-2.5 text-[0.8rem] transition-all duration-300 ${
                      activeSection === id
                        ? "text-white"
                        : "text-white/40 hover:text-white/75"
                    }`}
                  >
                    <span
                      className={`flex-shrink-0 rounded-full transition-all duration-300 ${
                        activeSection === id
                          ? "bg-white w-1.5 h-1.5"
                          : "bg-white/25 w-1 h-1"
                      }`}
                    />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </aside>

      {/* ── Mobile header — only hamburger, name lives in hero ── */}
      <header className="fixed top-0 right-0 z-50 lg:hidden flex items-center justify-end px-8 pt-9 pb-4">
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          className="text-white/70 hover:text-white transition-colors p-1"
        >
          {menuOpen ? <CloseIcon size={20} /> : <Menu size={20} />}
        </button>
      </header>

      {/* ── Mobile menu overlay ── */}
      <div
        className={`fixed inset-0 z-40 lg:hidden flex flex-col items-center justify-center transition-all duration-300 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{ background: "rgba(20, 10, 62, 0.97)", zIndex: 9999, pointerEvents: menuOpen ? 'auto' : 'none' }}
      >
        <nav aria-label="Menu móvel">
          <ul className="flex flex-col gap-6 items-start px-8">
            {sections.map(({ id, label }) => (
              <li key={id} className="w-full">
                <button
                  type="button"
                  onClick={() => scrollTo(id)}
                  aria-current={activeSection === id ? "page" : undefined}
                  className={`w-full text-left text-2xl font-light transition-colors flex items-center gap-4 px-2 py-1 ${
                    activeSection === id
                      ? "text-white"
                      : "text-white/60 hover:text-white/90"
                  }`}
                >
                  <span
                    className={`flex-shrink-0 rounded-full transition-all duration-300 ${
                      activeSection === id ? "bg-white w-2 h-2" : "bg-white/25 w-1.5 h-1.5"
                    }`}
                  />
                  <span>{label}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* ── Main scrollable content ── */}
      <main className="lg:ml-52">
        {/* ────────── HOME ────────── */}
        <section
          ref={homeRef}
          id="home"
          className="relative min-h-screen flex flex-col justify-center overflow-hidden px-8 lg:px-16 pt-16 lg:pt-0 pb-0"
        >
          <div className="relative z-10 max-w-lg">
            <p
              className="text-[0.62rem] text-white/35 uppercase tracking-[0.32em] mb-7"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Portfólio — 2026
            </p>
            <h2
              className="font-light text-white leading-[1.0] tracking-tight mb-5"
              style={{ fontSize: "clamp(3rem, 8vw, 5.5rem)" }}
            >
              Lucas<br />Marques
            </h2>
            <p className="text-[0.65rem] font-bold text-white/50 uppercase tracking-[0.25em] mb-9">
              Designer &amp; Developer
            </p>
            <p className="text-sm text-white/55 max-w-xs leading-relaxed mb-10">
              Transformo ideias em experiências digitais através de design e desenvolvimento.
            </p>
            <button
              onClick={() => scrollTo("projects")}
              className="group inline-flex items-center gap-3 text-[0.8rem] text-white/60 hover:text-white transition-all duration-300"
              style={{ border: "1px solid rgba(255,255,255,0.22)", padding: "10px 22px" }}
            >
              Ver projetos
              <ArrowRight
                size={13}
                className="group-hover:translate-x-1 transition-transform duration-300"
              />
            </button>
          </div>

          {/* Social links — desktop */}
          <div className="absolute right-10 lg:right-16 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-3.5 z-10">
            {[
              { label: "Instagram", href: "#" },
              { label: "LinkedIn", href: "#" },
            ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-[0.72rem] text-white/35 hover:text-white/75 transition-colors duration-200"
              >
                {label}
                <ExternalLink size={9} />
              </a>
            ))}
          </div>

          <Waves />
        </section>

        

        {/* ────────── ABOUT ────────── */}
        <section
          ref={aboutRef}
          id="about"
          className="relative min-h-screen flex flex-col justify-center overflow-hidden px-8 lg:px-16 pt-16 lg:pt-0 pb-0"
        >
          <div className="relative z-10 w-full flex justify-end">
            <div
              className="relative w-full max-w-sm lg:max-w-md"
              style={{ border: "1px solid rgba(255,255,255,0.32)", padding: "32px" }}
            >
              {/* Corner bracket decorations */}
              <div
                className="absolute"
                style={{
                  top: -10,
                  left: -10,
                  width: 18,
                  height: 18,
                  borderTop: "1px dashed rgba(255,255,255,0.5)",
                  borderLeft: "1px dashed rgba(255,255,255,0.5)",
                }}
              />
              <div
                className="absolute"
                style={{
                  bottom: -10,
                  right: -10,
                  width: 18,
                  height: 18,
                  borderBottom: "1px dashed rgba(255,255,255,0.5)",
                  borderRight: "1px dashed rgba(255,255,255,0.5)",
                }}
              />

              <p className="text-[0.82rem] text-white/65 leading-relaxed mb-4">
                Nascido em 2007 em Belo Horizonte MG, Brasil.
              </p>
              <p className="text-[0.82rem] text-white/65 leading-relaxed mb-4">
                Sou estudante de Tecnologia da Informação e desenvolvedor em formação,
                apaixonado por design, programação e criação de experiências digitais.
              </p>
              <p className="text-[0.82rem] text-white/65 leading-relaxed mb-7">
                Busco unir criatividade e tecnologia para desenvolver interfaces modernas,
                funcionais e marcantes.
              </p>

              <div
                className="pt-5 mb-5"
                style={{ borderTop: "1px solid rgba(255,255,255,0.12)" }}
              >
                <p className="text-[0.6rem] text-white/35 uppercase tracking-[0.22em] mb-1.5">
                  Curso
                </p>
                <p className="text-[0.82rem] text-white/80">
                  Técnico em TI — Cotemig Floresta
                </p>
              </div>

              <div>
                <p className="text-[0.6rem] text-white/35 uppercase tracking-[0.22em] mb-3">
                  Tecnologias
                </p>
                <div className="flex flex-wrap gap-2">
                  {["HTML", "CSS", "JavaScript", "C#", "SQL", "Git", "Figma"].map((tech) => (
                    <span
                      key={tech}
                      className="text-[0.72rem] text-white/55 hover:text-white/90 hover:border-white/45 transition-all duration-200 cursor-default px-2.5 py-1"
                      style={{ border: "1px solid rgba(255,255,255,0.2)" }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <Waves />
        </section>

        {/* ────────── PROJECTS ────────── */}
        <section
          ref={projectsRef}
          id="projects"
          className="relative min-h-screen flex flex-col justify-center overflow-hidden px-8 lg:px-16 pt-16 lg:pt-0 pb-0"
        >
          <div className="relative z-10 w-full">
            <div className="ml-auto max-w-2xl">
              {projects.map((project) => (
                <button
                  key={project.id}
                  onClick={() => setSelectedProject(project)}
                  className="group w-full flex flex-col lg:flex-row lg:items-baseline lg:justify-between gap-2 lg:gap-8 py-5 text-left transition-all duration-300 hover:pl-2"
                  style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderBottomColor =
                      "rgba(255,255,255,0.3)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderBottomColor =
                      "rgba(255,255,255,0.1)";
                  }}
                >
                  <span
                    className="text-[0.68rem] text-white/32 flex-shrink-0"
                    style={{ fontFamily: "'Outfit', monospace", letterSpacing: "0.04em" }}
                  >
                    {project.date} / {project.type}
                  </span>
                  <span
                    className="font-light text-white/75 group-hover:text-white transition-all duration-300 group-hover:tracking-wider"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "clamp(1.6rem, 4vw, 2.6rem)",
                    }}
                  >
                    {project.name}
                  </span>
                </button>
              ))}
            </div>
          </div>
          <Waves />
        </section>

        {/* ────────── CONTACT ────────── */}
        <section
          ref={contactRef}
          id="contact"
          className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 lg:px-16 pt-28 lg:pt-0 pb-0"
        >
          <div className="relative z-10 w-full max-w-md">
            <div
              className="relative"
              style={{ border: "1px solid rgba(255,255,255,0.38)", padding: "36px 32px" }}
            >
              {/* Corner decorations */}
              {[
                { top: -8, left: -8, style: { borderTop: "1.5px solid white", borderLeft: "1.5px solid white" } },
                {
                  top: -8,
                  right: -8,
                  style: {
                    borderTop: "1px dashed rgba(255,255,255,0.5)",
                    borderRight: "1px dashed rgba(255,255,255,0.5)",
                  },
                },
                { bottom: -8, left: -8, style: { borderBottom: "1.5px solid white", borderLeft: "1.5px solid white" } },
                {
                  bottom: -8,
                  right: -8,
                  style: {
                    borderBottom: "1px dashed rgba(255,255,255,0.5)",
                    borderRight: "1px dashed rgba(255,255,255,0.5)",
                  },
                },
              ].map((corner, i) => (
                <div
                  key={i}
                  className="absolute"
                  style={{ width: 20, height: 20, ...corner }}
                />
              ))}

              <h2 className="text-[0.9rem] font-medium text-white text-center mb-8 tracking-wide">
                Entre em contato comigo!
              </h2>

              {formSuccess ? (
                <div className="text-center py-10">
                  <p className="text-white/85 text-sm mb-2">
                    Mensagem enviada com sucesso!
                  </p>
                  <p className="text-white/40 text-xs">Em breve entrarei em contato.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-3">
                  <div>
                    <label htmlFor="contact-name" className="sr-only">
                      Nome completo
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      placeholder="Nome completo"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`${inputBase} ${formErrors.name ? "ring-1 ring-red-400/60" : ""}`}
                      style={inputStyle}
                    />
                    {formErrors.name && (
                      <p className="text-red-400/70 text-xs mt-1">{formErrors.name}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="sr-only">
                      E-mail
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      placeholder="E-mail"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`${inputBase} ${formErrors.email ? "ring-1 ring-red-400/60" : ""}`}
                      style={inputStyle}
                    />
                    {formErrors.email && (
                      <p className="text-red-400/70 text-xs mt-1">{formErrors.email}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="contact-subject" className="sr-only">
                      Assunto
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      placeholder="Assunto"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className={`${inputBase} ${formErrors.subject ? "ring-1 ring-red-400/60" : ""}`}
                      style={inputStyle}
                    />
                    {formErrors.subject && (
                      <p className="text-red-400/70 text-xs mt-1">{formErrors.subject}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="sr-only">
                      Mensagem
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      placeholder="Escreva mais sobre"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className={`${inputBase} resize-none ${
                        formErrors.message ? "ring-1 ring-red-400/60" : ""
                      }`}
                      style={inputStyle}
                    />
                    {formErrors.message && (
                      <p className="text-red-400/70 text-xs mt-1">{formErrors.message}</p>
                    )}
                  </div>

                  <div className="flex justify-center pt-2">
                    <button
                      type="submit"
                      className="px-12 py-3 text-[0.82rem] text-white/75 hover:text-white transition-all duration-200"
                      style={{
                        background: "rgba(255,255,255,0.15)",
                        borderRadius: 2,
                        minWidth: 120,
                      }}
                    >
                      Enviar
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Social links */}
            <div className="flex flex-wrap justify-center gap-5 mt-8">
              {[
                { label: "Instagram", href: "#" },
                { label: "LinkedIn", href: "#" },
                { label: "GitHub", href: "#" },
                { label: "E-mail", href: "#" },
              ].map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-[0.72rem] text-white/35 hover:text-white/75 transition-colors duration-200"
                >
                  {label}
                  <ExternalLink size={9} />
                </a>
              ))}
            </div>
          </div>
          <Waves />
        </section>
      </main>

      {/* ── Project modal ── */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-40 flex items-center justify-center p-6"
          style={{ background: "rgba(14, 6, 48, 0.94)" }}
          onClick={(e) => {
            if (e.target === e.currentTarget) setSelectedProject(null);
          }}
          role="dialog"
          aria-modal="true"
          aria-label={`Detalhes — ${selectedProject.name}`}
        >
          <div
            className="relative w-full max-w-lg"
            style={{
              border: "1px solid rgba(255,255,255,0.3)",
              background: "#231462",
              padding: "36px 32px",
            }}
          >
            {/* Corner decoration */}
            <div
              className="absolute top-0 right-0"
              style={{
                width: 44,
                height: 44,
                borderTop: "1px dashed rgba(255,255,255,0.4)",
                borderRight: "1px dashed rgba(255,255,255,0.4)",
              }}
            />

            <button
              onClick={() => setSelectedProject(null)}
              aria-label="Fechar"
              className="absolute top-4 right-4 text-white/35 hover:text-white transition-colors"
            >
              <CloseIcon size={16} />
            </button>

            <p
              className="text-[0.67rem] text-white/32 mb-2"
              style={{ letterSpacing: "0.06em" }}
            >
              {selectedProject.date} / {selectedProject.type}
            </p>
            <h3
              className="text-3xl font-light text-white mb-5"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {selectedProject.name}
            </h3>
            <p className="text-[0.82rem] text-white/60 leading-relaxed mb-7">
              {selectedProject.description}
            </p>

            <div className="mb-6">
              <p className="text-[0.6rem] text-white/30 uppercase tracking-[0.22em] mb-2.5">
                Tecnologias
              </p>
              <div className="flex flex-wrap gap-2">
                {selectedProject.technologies.map((t) => (
                  <span
                    key={t}
                    className="text-[0.72rem] text-white/55 px-2.5 py-1"
                    style={{ border: "1px solid rgba(255,255,255,0.2)" }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div
              className="flex gap-3 pt-5"
              style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}
            >
              <a
                href={selectedProject.link}
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[0.75rem] text-white/55 hover:text-white transition-all duration-200 px-4 py-2"
                style={{ border: "1px solid rgba(255,255,255,0.22)" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.55)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.22)";
                }}
              >
                Ver projeto
                <ExternalLink size={10} />
              </a>
              {selectedProject.code && (
                <a
                  href={selectedProject.code}
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[0.75rem] text-white/55 hover:text-white transition-all duration-200 px-4 py-2"
                  style={{ border: "1px solid rgba(255,255,255,0.22)" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.55)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.22)";
                  }}
                >
                  Código
                  <Github size={10} />
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
