import {
  HERO_IMAGE_ABSOLUTE,
  INSTAGRAM_URL,
  LOGO_IMAGE_ABSOLUTE,
  OG_IMAGE_ALT,
  PHONE_NUMBER,
  SEO_DESCRIPTION,
  SEO_TITLE,
  SITE_NAME,
  SITE_URL,
} from "@/app/lib/seo";

const personId = `${SITE_URL}/#juliane-duarte`;
const psychologistId = `${SITE_URL}/#psychologist`;
const organizationId = `${SITE_URL}/#organization`;
const websiteId = `${SITE_URL}/#website`;
const webpageId = `${SITE_URL}/#webpage`;

const serviceNames = [
  "Atendimento psicológico online",
  "Psicoterapia para adolescentes",
  "Psicoterapia para adultos",
  "Terapia Cognitivo-Comportamental",
  "Acompanhamento para ansiedade",
  "Acompanhamento para depressão",
  "Dependência química e prevenção de recaídas",
  "Orientação em conflitos emocionais e relacionamentos",
];

function JsonLdScript({ id, data }: { id: string; data: object }) {
  return (
    <script
      id={id}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}

export function SeoJsonLd() {
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": personId,
    name: "Juliane Duarte",
    jobTitle: "Psicóloga Clínica",
    url: SITE_URL,
    image: HERO_IMAGE_ABSOLUTE,
    sameAs: [INSTAGRAM_URL],
    telephone: PHONE_NUMBER,
    knowsAbout: [
      "Neuropsicologia Clínica",
      "Terapia Cognitivo-Comportamental",
      "Psicopatologia",
      "Ansiedade",
      "Depressão",
      "Dependência química",
      "Relacionamentos",
      "Autoconhecimento",
    ],
    worksFor: {
      "@type": "Organization",
      "@id": organizationId,
      name: SITE_NAME,
      url: SITE_URL,
    },
  };

  const psychologist = {
    "@context": "https://schema.org",
    "@type": "Psychologist",
    "@id": psychologistId,
    name: SITE_NAME,
    url: SITE_URL,
    telephone: PHONE_NUMBER,
    image: HERO_IMAGE_ABSOLUTE,
    logo: LOGO_IMAGE_ABSOLUTE,
    priceRange: "$$",
    areaServed: {
      "@type": "Country",
      name: "Brasil",
    },
    availableService: serviceNames.map((name) => ({
      "@type": "Service",
      name,
      areaServed: "Brasil",
      serviceType: "Psicologia online",
    })),
    medicalSpecialty: ["Psychology", "Clinical Psychology", "Neuropsychology"],
    sameAs: [INSTAGRAM_URL],
  };

  const medicalBusiness = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "@id": organizationId,
    name: SITE_NAME,
    url: SITE_URL,
    telephone: PHONE_NUMBER,
    image: HERO_IMAGE_ABSOLUTE,
    logo: LOGO_IMAGE_ABSOLUTE,
    areaServed: "Brasil",
    address: {
      "@type": "PostalAddress",
      addressCountry: "BR",
      addressRegion: "PR",
      addressLocality: "Curitiba",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
        ],
        opens: "08:00",
        closes: "20:00",
        description:
          "Referência informativa para atendimento online, sujeita à disponibilidade de agenda.",
      },
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: PHONE_NUMBER,
      contactType: "customer service",
      areaServed: "BR",
      availableLanguage: "Portuguese",
    },
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": websiteId,
    name: SITE_NAME,
    url: SITE_URL,
    inLanguage: "pt-BR",
  };

  const webpage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": webpageId,
    name: SEO_TITLE,
    url: SITE_URL,
    description: SEO_DESCRIPTION,
    inLanguage: "pt-BR",
    isPartOf: {
      "@id": websiteId,
    },
    about: [
      {
        "@id": personId,
      },
      {
        "@id": psychologistId,
      },
    ],
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: HERO_IMAGE_ABSOLUTE,
      width: 1200,
      height: 630,
      caption: OG_IMAGE_ALT,
    },
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Como funciona o atendimento psicológico online?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "O atendimento psicológico online é realizado por videochamada, com sigilo, ética profissional e acolhimento. As sessões permitem acompanhamento psicológico com praticidade e privacidade, de qualquer lugar.",
        },
      },
      {
        "@type": "Question",
        name: "A Juliane Duarte atende adolescentes e adultos?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sim. O atendimento psicológico é voltado para adolescentes e adultos, considerando as necessidades emocionais, comportamentais e relacionais de cada fase da vida.",
        },
      },
      {
        "@type": "Question",
        name: "Quais demandas podem ser trabalhadas em terapia?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Podem ser trabalhadas demandas como ansiedade, depressão, dependência química, prevenção de recaídas, conflitos emocionais, relacionamentos, sofrimento psíquico, autoconhecimento e reorganização da vida emocional.",
        },
      },
      {
        "@type": "Question",
        name: "Como agendar atendimento com a Juliane Duarte?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "O agendamento pode ser feito diretamente pelo WhatsApp, pelo número +55 41 98800-2082, ou pelos botões de contato disponíveis no site.",
        },
      },
      {
        "@type": "Question",
        name: "O atendimento segue sigilo profissional?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sim. Todo atendimento psicológico segue os princípios éticos da Psicologia, com sigilo, respeito, confidencialidade e compromisso com cada paciente.",
        },
      },
    ],
  };

  const breadcrumbList = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Psicóloga Online",
        item: `${SITE_URL}/#atendimento`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Juliane Duarte",
        item: `${SITE_URL}/#inicio`,
      },
    ],
  };

  return (
    <>
      <JsonLdScript id="person-json-ld" data={person} />
      <JsonLdScript id="psychologist-json-ld" data={psychologist} />
      <JsonLdScript id="medical-business-json-ld" data={medicalBusiness} />
      <JsonLdScript id="website-json-ld" data={website} />
      <JsonLdScript id="webpage-json-ld" data={webpage} />
      <JsonLdScript id="faq-json-ld" data={faqPage} />
      <JsonLdScript id="breadcrumb-json-ld" data={breadcrumbList} />
    </>
  );
}
