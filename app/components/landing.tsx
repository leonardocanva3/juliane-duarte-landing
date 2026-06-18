import Image from "next/image";
import { INSTAGRAM_URL, PATIENT_AREA_URL, WHATSAPP_URL } from "@/app/lib/site";

const navItems = [
  ["Início", "#inicio"],
  ["Experiência", "#experiencia"],
  ["Quem sou", "#quem-sou"],
  ["Atendimento", "#atendimento"],
  ["Área do Paciente", "#area-do-paciente"],
  ["Contato", "#contato"],
] as const;

const authority = [
  "Neuropsicologia Clínica",
  "Terapia Cognitivo-Comportamental",
  "Psicopatologia",
  "Atendimento para adolescentes e adultos",
];

const differentials = [
  {
    title: "Atendimento Humanizado",
    text: "Um espaço seguro, acolhedor e respeitoso para compreender sua história e desenvolver estratégias de cuidado emocional.",
  },
  {
    title: "Atendimento 100% Online",
    text: "Sessões realizadas com conforto, privacidade e praticidade, permitindo acompanhamento psicológico de qualquer lugar.",
  },
  {
    title: "Sigilo e Ética Profissional",
    text: "Todo atendimento é conduzido de acordo com os princípios éticos da Psicologia, garantindo confidencialidade, respeito e compromisso com cada paciente.",
  },
];

const audience = [
  "Adolescentes em fase de mudanças, conflitos emocionais e desafios comportamentais",
  "Adultos que enfrentam ansiedade, depressão, sofrimento emocional ou dificuldades nos relacionamentos",
  "Pessoas que desejam desenvolver autoconhecimento e aprender formas mais saudáveis de lidar com a vida",
  "Casos que necessitam de acompanhamento estruturado e baseado em evidências",
];

const demands = [
  "Ansiedade",
  "Depressão",
  "Dependência química",
  "Prevenção de recaídas",
  "Dificuldades emocionais",
  "Conflitos afetivos e relacionamentos",
  "Sofrimento psíquico",
  "Questões comportamentais",
  "Autoconhecimento",
  "Reorganização da vida emocional",
];

function WhatsAppIcon({ className = "size-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" aria-hidden>
      <path
        d="M16 3.5A12.4 12.4 0 0 0 5.4 22.4L4 28l5.8-1.5A12.5 12.5 0 1 0 16 3.5Z"
        fill="currentColor"
      />
      <path
        d="M22.9 19.3c-.4 1.2-2 2.1-3 2.2-.8.1-1.9.1-3.1-.4-2.7-.9-5-3.2-6.2-5.3-.9-1.5-1.2-3-.6-4.2.3-.7.8-1.1 1.2-1.1h.9c.3 0 .6 0 .8.6.3.7 1 2.5 1.1 2.7.1.2.1.5 0 .7-.2.4-.4.6-.7.9-.2.2-.4.4-.2.8.3.7 1 1.6 1.8 2.2.9.8 1.7 1 2.2 1.2.3.1.6.1.8-.1.3-.4.9-1.1 1.1-1.5.2-.3.5-.3.8-.2.3.1 2.1 1 2.5 1.2.4.2.7.3.8.5Z"
        fill="#fff"
      />
    </svg>
  );
}

function InstagramIcon({ className = "size-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <circle cx="12" cy="12" r="4.1" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.2" cy="6.8" r="1.2" fill="currentColor" />
    </svg>
  );
}

function CTAButton({
  children,
  variant = "primary",
  href = WHATSAPP_URL,
  wide = false,
}: {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "light" | "outlineLight";
  href?: string;
  wide?: boolean;
}) {
  const classes = {
    primary:
      "bg-[#18384A] text-white shadow-[0_22px_48px_rgba(24,56,74,0.28)] hover:-translate-y-0.5 hover:bg-[#102d3d]",
    secondary:
      "border border-[#18384A]/18 bg-white/85 text-[#18384A] shadow-[0_16px_34px_rgba(24,56,74,0.08)] hover:-translate-y-0.5 hover:border-[#18384A]/35 hover:bg-white",
    light:
      "bg-white text-[#18384A] shadow-[0_22px_44px_rgba(0,0,0,0.22)] hover:-translate-y-0.5 hover:bg-[#F7EEE9]",
    outlineLight:
      "border border-white/30 bg-white/8 text-white hover:-translate-y-0.5 hover:bg-white/14",
  };

  return (
    <a
      className={`inline-flex min-h-16 items-center justify-center gap-3.5 rounded-full px-8 text-base font-black tracking-[0.01em] transition duration-300 sm:min-h-18 sm:px-10 sm:text-lg ${
        wide ? "w-full sm:w-auto" : ""
      } ${classes[variant]}`}
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
    >
      {variant !== "secondary" && variant !== "outlineLight" ? (
        <WhatsAppIcon className="size-6 text-[#21C063]" />
      ) : null}
      {children}
    </a>
  );
}

function SectionIntro({
  eyebrow,
  title,
  text,
  light = false,
  align = "center",
}: {
  eyebrow: string;
  title: string;
  text?: string;
  light?: boolean;
  align?: "center" | "left";
}) {
  return (
    <div className={`${align === "center" ? "mx-auto text-center" : ""} max-w-4xl`}>
      <div
        className={`text-sm font-extrabold uppercase tracking-[0.26em] ${
          light ? "text-[#E8B7C7]" : "text-[#C9A46A]"
        }`}
      >
        {eyebrow}
      </div>
      <h2
        className={`mt-5 text-4xl font-black leading-[1.04] sm:text-5xl lg:text-6xl ${
          light ? "text-white" : "text-[#18384A]"
        }`}
      >
        {title}
      </h2>
      {text ? (
        <p
          className={`mt-7 text-lg leading-9 sm:text-xl sm:leading-10 ${
            light ? "text-white/80" : "text-[#34404A]/82"
          }`}
        >
          {text}
        </p>
      ) : null}
    </div>
  );
}

function FramedImage({
  src,
  alt,
  className,
  priority = false,
  objectPosition = "center",
  sizes = "(max-width: 768px) 100vw, 50vw",
}: {
  src: string;
  alt: string;
  className: string;
  priority?: boolean;
  objectPosition?: string;
  sizes?: string;
}) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className="object-cover"
        style={{ objectPosition }}
      />
    </div>
  );
}

function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#18384A]/8 bg-white/90 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <a href="#inicio" className="flex items-center gap-3">
          <span className="relative grid size-14 place-items-center overflow-hidden rounded-full bg-[#F7EEE9] ring-1 ring-[#E8B7C7]/60">
            <Image
              src="/images/juliane/juliane-logo.png"
              alt="Logotipo Juliane Duarte Psicóloga"
              width={112}
              height={84}
              className="w-12 object-contain"
              priority
            />
          </span>
          <span className="leading-tight">
            <span className="block text-base font-black text-[#18384A]">
              Juliane Duarte
            </span>
            <span className="block text-xs font-semibold uppercase tracking-[0.24em] text-[#34404A]/62">
              Psicóloga
            </span>
          </span>
        </a>
        <nav className="hidden items-center gap-6 text-base font-semibold text-[#34404A]/76 lg:flex">
          {navItems.map(([label, href]) => (
            <a key={href} href={href} className="transition hover:text-[#18384A]">
              {label}
            </a>
          ))}
        </nav>
        <CTAButton>WhatsApp</CTAButton>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section
      id="inicio"
      className="relative isolate min-h-screen overflow-hidden bg-[#F7EEE9] pt-24"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_18%,rgba(232,183,199,0.52),transparent_30%),linear-gradient(125deg,#ffffff_0%,#F7EEE9_46%,#dfeaec_100%)]" />
      <div className="absolute left-0 top-32 -z-10 h-px w-1/2 bg-[#C9A46A]/55" />
      <div className="mx-auto grid min-h-[calc(100vh-96px)] max-w-7xl items-center gap-12 px-4 py-12 sm:px-6 lg:grid-cols-[0.98fr_1.02fr] lg:px-8">
        <div className="animate-rise">
          <div className="text-sm font-extrabold uppercase tracking-[0.28em] text-[#C9A46A]">
            Psicologia online com técnica e acolhimento
          </div>
          <h1 className="mt-6 max-w-4xl text-5xl font-black leading-[0.96] text-[#18384A] sm:text-7xl lg:text-8xl">
            Juliane Duarte
            <span className="mt-5 block text-3xl font-semibold leading-tight text-[#34404A] sm:text-5xl">
              Psicóloga para cuidar da sua saúde mental com profundidade.
            </span>
          </h1>
          <p className="mt-8 max-w-2xl text-xl leading-10 text-[#34404A]/86 sm:text-2xl sm:leading-[1.65]">
            Cuidando da saúde mental com técnica, sensibilidade e respeito à
            sua história.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <CTAButton wide>Agendar atendimento pelo WhatsApp</CTAButton>
            <CTAButton href="#quem-sou" variant="secondary" wide>
              Conheça meu trabalho
            </CTAButton>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {["Atendimento online", "Baseada em evidências", "Sigilo profissional"].map(
              (seal) => (
                <div
                  key={seal}
                  className="rounded-[8px] border border-white/80 bg-white/72 p-5 text-base font-bold text-[#18384A] shadow-[0_18px_45px_rgba(24,56,74,0.08)] backdrop-blur"
                >
                  {seal}
                </div>
              ),
            )}
          </div>
        </div>
        <div className="relative min-h-[620px] w-full animate-rise delay-100 md:min-h-[700px] lg:min-h-[760px]">
          <div className="absolute inset-x-8 bottom-0 top-8 rounded-t-[160px] rounded-b-[8px] bg-[#18384A]" />
          <div className="relative z-10 min-h-[560px] w-full overflow-hidden rounded-t-[170px] rounded-b-[8px] border-[12px] border-white shadow-[0_36px_90px_rgba(24,56,74,0.28)] md:min-h-[680px] lg:min-h-[760px]">
            <Image
              src="/images/juliane/juliane-hero.jpg"
              alt="Juliane Duarte Psicóloga em atendimento psicológico online"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 48vw"
              className="object-cover object-top"
            />
          </div>
          <div className="absolute bottom-0 left-3 right-3 rounded-[8px] border border-white/70 bg-white/92 p-6 shadow-[0_24px_60px_rgba(24,56,74,0.18)] backdrop-blur sm:left-10 sm:right-auto sm:max-w-sm">
            <div className="text-sm font-extrabold uppercase tracking-[0.22em] text-[#C9A46A]">
              Cuidado estruturado
            </div>
            <p className="mt-3 text-lg leading-8 text-[#34404A]">
              Escuta clínica, acolhimento e intervenções baseadas em evidências.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Authority() {
  return (
    <section className="bg-[#18384A] py-8">
      <div className="mx-auto grid max-w-7xl gap-3 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        {authority.map((item) => (
          <div
            key={item}
            className="rounded-[8px] border border-white/12 bg-white/[0.07] p-6 text-center text-lg font-bold leading-7 text-white shadow-[0_18px_42px_rgba(0,0,0,0.12)]"
          >
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}

function CTASection({
  title,
  text,
  variant = "light",
}: {
  title: string;
  text: string;
  variant?: "light" | "dark";
}) {
  const dark = variant === "dark";

  return (
    <section className={dark ? "bg-[#18384A] py-10" : "bg-white py-10"}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={`grid items-center gap-6 rounded-[8px] p-7 shadow-[0_24px_70px_rgba(24,56,74,0.12)] lg:grid-cols-[1fr_auto] lg:p-9 ${
            dark
              ? "border border-white/14 bg-white/[0.06] text-white"
              : "border border-[#E8B7C7]/45 bg-[#F7EEE9] text-[#18384A]"
          }`}
        >
          <div>
            <h2 className="text-3xl font-black leading-tight sm:text-4xl">
              {title}
            </h2>
            <p
              className={`mt-3 text-lg leading-8 sm:text-xl ${
                dark ? "text-white/78" : "text-[#34404A]/80"
              }`}
            >
              {text}
            </p>
          </div>
          <CTAButton variant={dark ? "light" : "primary"} wide>
            Falar com a Juliane agora
          </CTAButton>
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experiencia" className="bg-white py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:px-8">
        <FramedImage
          src="/images/juliane/juliane-biblioteca-1.jpg"
          alt="Psicóloga Juliane Duarte especialista em Neuropsicologia Clínica"
          className="h-[520px] rounded-[8px] shadow-[0_30px_80px_rgba(24,56,74,0.18)] lg:h-[640px]"
          objectPosition="50% 45%"
        />
        <div>
          <SectionIntro
            eyebrow="Experiência"
            title="Atendimento psicológico com base em evidências e direção clínica."
            align="left"
          />
          <p className="mt-8 text-xl leading-10 text-[#34404A]/84 sm:text-2xl sm:leading-[1.65]">
            Atendimento psicológico com base em evidências para auxiliar no
            enfrentamento da ansiedade, depressão, dependência química,
            conflitos emocionais e questões relacionadas aos relacionamentos e à
            saúde mental.
          </p>
          <div className="mt-10">
            <CTAButton>Quero iniciar meu atendimento</CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
}

function Differentials() {
  return (
    <section className="relative overflow-hidden bg-[#F7EEE9] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionIntro
          eyebrow="Diferenciais"
          title="Uma experiência de cuidado segura, ética e acolhedora."
          text="A psicoterapia precisa ser técnica, mas também humana. Cada detalhe do atendimento foi pensado para oferecer clareza, privacidade e confiança."
        />
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {differentials.map((item, index) => (
            <article
              key={item.title}
              className="rounded-[8px] border border-white/80 bg-white p-8 shadow-[0_26px_70px_rgba(24,56,74,0.10)] lg:min-h-[360px]"
            >
              <div className="flex items-center justify-between">
                <span className="text-6xl font-black leading-none text-[#E8B7C7]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="h-px w-20 bg-[#C9A46A]/60" />
              </div>
              <h3 className="mt-8 text-3xl font-black leading-tight text-[#18384A]">
                {item.title}
              </h3>
              <p className="mt-5 text-lg leading-9 text-[#34404A]/82">
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  const paragraphs = [
    "Sou psicóloga e atuo na área clínica, oferecendo atendimento psicológico para adolescentes e adultos.",
    "Tenho especializações em Neuropsicologia Clínica, Terapia Cognitivo-Comportamental (TCC) e Psicopatologia, o que me permite trabalhar com diferentes demandas emocionais e transtornos mentais de forma estruturada e baseada em evidências.",
    "Tenho experiência no manejo de questões como ansiedade, depressão e dependência química, auxiliando no processo de tratamento, prevenção de recaídas e reorganização da vida.",
    "Atualmente, estou me especializando em Sexualidade Humana e Terapia do Esquema, ampliando minha atuação em questões afetivas, relacionamentos e padrões emocionais mais profundos.",
    "Meu trabalho é baseado na escuta, no acolhimento e em intervenções técnicas, buscando ajudar cada pessoa a compreender melhor suas dificuldades e desenvolver estratégias para uma vida mais equilibrada e saudável.",
  ];

  return (
    <section id="quem-sou" className="bg-white py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-16 px-4 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:px-8">
        <div>
          <SectionIntro
            eyebrow="Quem sou"
            title="Formação sólida para acolher histórias complexas com respeito."
            align="left"
          />
          <div className="mt-9 space-y-6 text-lg leading-9 text-[#34404A]/84 sm:text-xl sm:leading-10">
            {paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
        <div className="relative flex flex-col">
          <div className="absolute -inset-5 rounded-[8px] bg-[#F7EEE9]" />
          <FramedImage
            src="/images/juliane/juliane-dsm.png"
            alt="Psicóloga com formação em Terapia Cognitivo-Comportamental e Psicopatologia"
            className="relative h-[620px] rounded-t-[120px] rounded-b-[8px] shadow-[0_34px_90px_rgba(24,56,74,0.22)] lg:h-[680px]"
            objectPosition="50% 35%"
          />
          <div className="relative -mt-10 mx-3 rounded-[8px] border border-white/16 bg-[#18384A] p-7 text-white shadow-[0_28px_70px_rgba(24,56,74,0.28)] sm:mx-8 sm:p-8">
            <div className="text-sm font-extrabold uppercase tracking-[0.24em] text-[#E8B7C7]">
              ATENDIMENTO BASEADO EM EVIDÊNCIAS
            </div>
            <div className="mt-6 grid gap-7 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              <div>
                <h3 className="text-2xl font-black leading-tight text-white">
                  Especializações:
                </h3>
                <ul className="mt-4 space-y-3 text-lg leading-7 text-white/84">
                  <li>Neuropsicologia Clínica</li>
                  <li>Terapia Cognitivo-Comportamental</li>
                  <li>Psicopatologia</li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-black leading-tight text-white">
                  Também atende:
                </h3>
                <ul className="mt-4 space-y-3 text-lg leading-7 text-white/84">
                  <li>Adolescentes e adultos</li>
                  <li>Ansiedade e depressão</li>
                  <li>Relacionamentos e conflitos emocionais</li>
                  <li>Dependência química e prevenção de recaídas</li>
                </ul>
              </div>
            </div>
            <div className="mt-8">
              <CTAButton variant="light" wide>
                Falar com a Juliane no WhatsApp
              </CTAButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AudienceAndDemands() {
  return (
    <section id="atendimento" className="bg-[#18384A] py-24 text-white sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionIntro
          eyebrow="Atendimento"
          title="Para adolescentes, adultos e pessoas que buscam reorganizar a vida emocional."
          text="Atendimento psicológico para adolescentes e adultos. A psicoterapia é um espaço seguro para compreender emoções, pensamentos e comportamentos, promovendo mais equilíbrio, autonomia e qualidade de vida."
          light
        />
        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {audience.map((item) => (
            <div
              key={item}
              className="rounded-[8px] border border-white/12 bg-white/[0.07] p-7 text-lg leading-8 text-white/84 shadow-[0_20px_52px_rgba(0,0,0,0.14)]"
            >
              <span className="mb-5 block h-px w-16 bg-[#E8B7C7]" />
              {item}
            </div>
          ))}
        </div>
        <div className="mt-20">
          <div className="max-w-4xl">
            <div className="text-sm font-extrabold uppercase tracking-[0.26em] text-[#E8B7C7]">
              Demandas trabalhadas
            </div>
            <h2 className="mt-5 text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
              Demandas que podem ser trabalhadas em terapia:
            </h2>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {demands.map((item) => (
              <div
                key={item}
                className="rounded-[8px] border border-white/12 bg-white p-6 text-lg font-black leading-7 text-[#18384A] shadow-[0_24px_60px_rgba(0,0,0,0.18)]"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function WelcomeMessage() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <FramedImage
          src="/images/juliane/juliane-retrato-azul.jpg"
          alt="Atendimento psicológico online para adolescentes e adultos"
          className="h-[540px] rounded-[8px] shadow-[0_30px_80px_rgba(24,56,74,0.18)] lg:h-[680px]"
          objectPosition="50% 45%"
        />
        <div className="rounded-[8px] border border-[#E8B7C7]/50 bg-[#F7EEE9] p-8 shadow-[0_26px_70px_rgba(24,56,74,0.08)] sm:p-12">
          <SectionIntro
            eyebrow="Mensagem de acolhimento"
            title="Buscar ajuda psicológica é um passo de cuidado com você!"
            align="left"
          />
          <div className="mt-8 space-y-6 text-xl leading-10 text-[#34404A]/84">
            <p>
              Nem sempre é fácil lidar sozinho com a ansiedade, o sofrimento
              emocional, os conflitos internos ou os desafios dos
              relacionamentos.
            </p>
            <p>
              A psicoterapia pode ajudar você a compreender melhor sua história,
              fortalecer recursos emocionais e construir caminhos mais saudáveis
              para viver com mais equilíbrio.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function PatientArea() {
  return (
    <section
      id="area-do-paciente"
      className="relative overflow-hidden bg-[#F7EEE9] py-24 sm:py-32"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1fr_1fr] lg:px-8">
        <div>
          <SectionIntro
            eyebrow="Área do Paciente"
            title="Um diferencial tecnológico para acompanhar seu processo com segurança."
            align="left"
          />
          <p className="mt-8 text-xl leading-10 text-[#34404A]/84">
            Após iniciar o acompanhamento, você terá acesso a uma Área do
            Paciente exclusiva, onde poderá consultar orientações, materiais
            enviados durante o processo terapêutico, acompanhar informações
            importantes e acessar recursos disponibilizados pela psicóloga de
            forma prática, segura e organizada.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <CTAButton href={PATIENT_AREA_URL} variant="secondary" wide>
              Acessar Área do Paciente
            </CTAButton>
            <CTAButton wide>Falar com a Juliane agora</CTAButton>
          </div>
        </div>
        <div className="rounded-[8px] border border-white/85 bg-white p-5 shadow-[0_34px_90px_rgba(24,56,74,0.18)] sm:p-7">
          <div className="rounded-[8px] bg-[#18384A] p-6 text-white sm:p-8">
            <div className="flex items-center justify-between border-b border-white/12 pb-6">
              <div>
                <div className="text-sm font-extrabold uppercase tracking-[0.24em] text-[#E8B7C7]">
                  Meu Painel
                </div>
                <h3 className="mt-3 text-3xl font-black">Área do Paciente</h3>
              </div>
              <span className="rounded-full bg-[#E8B7C7] px-4 py-2 text-sm font-black text-[#18384A]">
                Seguro
              </span>
            </div>
            <div className="mt-8 grid gap-4">
              {[
                "Orientações da sessão",
                "Materiais terapêuticos",
                "Recursos importantes",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-[8px] border border-white/12 bg-white/[0.08] p-5 text-lg font-semibold text-white/86"
                >
                  {item}
                </div>
              ))}
            </div>
            <div className="mt-8 rounded-[8px] bg-white p-6 text-[#18384A]">
              <p className="text-2xl font-black">Organização e cuidado</p>
              <p className="mt-3 text-lg leading-8 text-[#34404A]/78">
                Recursos reunidos em um ambiente prático para apoiar o processo
                terapêutico.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section id="contato" className="bg-[#18384A] py-24 text-white sm:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <FramedImage
          src="/images/juliane/juliane-biblioteca-4.jpg"
          alt="Juliane Duarte Psicóloga em ambiente clínico de estudo e acolhimento"
          className="h-[560px] rounded-[8px] shadow-[0_34px_90px_rgba(0,0,0,0.24)] lg:h-[680px]"
          objectPosition="50% 42%"
        />
        <div>
          <div className="text-sm font-extrabold uppercase tracking-[0.26em] text-[#E8B7C7]">
            Contato
          </div>
          <h2 className="mt-5 text-5xl font-black leading-[1.02] sm:text-6xl lg:text-7xl">
            Dê o primeiro passo para cuidar da sua saúde emocional.
          </h2>
          <div className="mt-8 space-y-4 text-xl leading-9 text-white/80">
            <p>Entre em contato diretamente comigo:</p>
            <p>
              <span className="font-bold text-white">WhatsApp:</span> (41)
              98800-2082
            </p>
            <p>
              <span className="font-bold text-white">Instagram:</span>{" "}
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-[#E8B7C7]/70 underline-offset-4"
              >
                @julianeduartepsico
              </a>
            </p>
          </div>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-14 w-full items-center justify-center gap-2.5 rounded-full bg-white px-6 text-sm font-black text-[#18384A] shadow-[0_18px_34px_rgba(0,0,0,0.18)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#F7EEE9] sm:w-auto sm:px-7 sm:text-base"
            >
              <WhatsAppIcon className="size-5 text-[#21C063]" />
              Agendar pelo WhatsApp
            </a>
            <a
              href="#quem-sou"
              className="inline-flex h-14 w-full items-center justify-center rounded-full border border-white/30 bg-white/8 px-6 text-sm font-black text-white transition duration-300 hover:-translate-y-0.5 hover:bg-white/14 sm:w-auto sm:px-7 sm:text-base"
            >
              Rever formação
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-14 w-full items-center justify-center gap-2.5 rounded-full border border-[#E8B7C7]/55 bg-white/5 px-6 text-sm font-black text-white transition duration-300 hover:-translate-y-0.5 hover:border-[#E8B7C7] hover:bg-white/12 sm:w-auto sm:px-7 sm:text-base"
            >
              <InstagramIcon className="size-5 text-[#E8B7C7]" />
              Me siga no Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#102d3d] px-4 py-10 text-white sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 text-base text-white/72 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-xl font-black text-white">Juliane Duarte</p>
          <p>Psicóloga</p>
        </div>
        <div className="flex flex-col gap-2 md:items-end">
          <p>WhatsApp: (41) 98800-2082</p>
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
            Instagram: @julianeduartepsico
          </a>
          <p>© 2026 Juliane Duarte. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-pulse fixed bottom-6 right-5 z-50 inline-flex size-24 items-center justify-center rounded-full bg-white text-[#21C063] shadow-[0_28px_70px_rgba(24,56,74,0.34)] ring-1 ring-[#18384A]/10 transition duration-300 hover:-translate-y-1 hover:scale-105 sm:bottom-8 sm:right-8 sm:h-28 sm:w-32 sm:flex-col sm:gap-1 sm:rounded-[30px]"
      aria-label="Agendar atendimento pelo WhatsApp"
    >
      <WhatsAppIcon className="size-12 sm:size-11" />
      <span className="hidden text-sm font-black leading-none text-[#18384A] sm:block">
        Agendar
      </span>
      <span className="hidden text-sm font-black leading-none text-[#18384A] sm:block">
        WhatsApp
      </span>
    </a>
  );
}

export function LandingPage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Authority />
        <Experience />
        <CTASection
          title="Pronto para conversar com cuidado e privacidade?"
          text="Envie uma mensagem e entenda como iniciar seu atendimento psicológico online."
        />
        <Differentials />
        <CTASection
          title="Seu atendimento pode começar com uma conversa simples."
          text="Fale diretamente com a Juliane pelo WhatsApp."
          variant="dark"
        />
        <About />
        <AudienceAndDemands />
        <WelcomeMessage />
        <PatientArea />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
