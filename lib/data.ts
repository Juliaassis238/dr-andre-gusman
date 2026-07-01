// Dados reais do consultório — fonte única da verdade para todo o site.
// Edite este arquivo para atualizar informações em todas as páginas de uma vez.

export const clinic = {
  doctorName: "Dr. André Gusman",
  clinicName: "Dr. André Gusman & Equipe",
  tagline: "Odontologia Avançada",
  city: "Sorocaba",
  state: "SP",
  address: {
    line1: "R. Prof. Toledo, 264",
    line2: "Centro, Sorocaba - SP",
    zip: "18035-110",
    country: "Brasil",
    full: "R. Prof. Toledo, 264 - Centro, Sorocaba - SP, 18035-110, Brasil",
    mapsShareUrl: "https://maps.app.goo.gl/U2oXU1tum4g5gVXQA",
    mapsEmbedQuery: "R. Prof. Toledo, 264 - Centro, Sorocaba - SP, 18035-110",
  },
  contact: {
    email: "dr.andregusman@gmail.com",
    whatsapp: "+5515991574343",
    whatsappDisplay: "+55 15 99157-4343",
    phoneHref: "tel:+5515991574343",
    whatsappHref:
      "https://wa.me/5515991574343?text=Olá, encontrei o site e gostaria de agendar uma avaliação.",
  },
  social: {
    instagram: {
      handle: "@dr.andregusman",
      url: "https://instagram.com/dr.andregusman",
      followers: "1.073 seguidores",
    },
    facebook: {
      handle: "Dr. André Gusman & Equipe",
      url: "https://facebook.com/",
    },
  },
  hours: {
    weekdays: "Segunda a sexta · 07:00 – 18:30",
    urgency: "Urgência odontológica 24 horas",
  },
  about:
    "Dr. André Gusman é um cirurgião-dentista formado pela UNISO, com vasta experiência em diversas áreas da odontologia, como urgências 24h e procedimentos cirúrgicos, além de limpezas, clareamento, restaurações e tratamento de canal. Seu objetivo é proporcionar um atendimento humanizado e seguro, utilizando tecnologia de ponta para garantir os melhores resultados para seus pacientes.",
};

export type Procedure = {
  slug: string;
  name: string;
  short: string;
  description: string;
  image?: string;
};

export const procedures: Procedure[] = [
  {
    slug: "clareamento-dental",
    name: "Clareamento dental",
    short: "Seu sorriso, seu cartão de visita.",
    description: "Realce o brilho do seu sorriso com procedimentos seguros e eficazes.",
    image: "/images/service-1-clareamento.png",
  },
  {
    slug: "odontopediatria",
    name: "Odontopediatria",
    short: "Cuidado e carinho para sorrisos que vão durar a vida toda.",
    description: "Atendimento especializado para crianças em um ambiente acolhedor, seguro e preparado para elas.",
    image: "/images/service-2-odontopediatria.png",
  },
  {
    slug: "endodontia",
    name: "Tratamento de Canal",
    short: "Tecnologia e conforto no seu tratamento.",
    description: "Tratamento endodôntico para salvar seu dente com conforto, segurança e tecnologia de ponta.",
    image: "/images/service-3-canal.png",
  },
  {
    slug: "protese",
    name: "Próteses Dentárias",
    short: "Soluções personalizadas para restaurar estética e funcionalidade.",
    description: "Devolvemos o prazer de sorrir com segurança através de materiais de alta qualidade e resultados naturais.",
    image: "/images/service-4-protese.png",
  },
  {
    slug: "cirurgia-oral",
    name: "Cirurgia Oral",
    short: "Extrações e procedimentos cirúrgicos com precisão.",
    description: "Extrações de sisos, canal tratado, de simples a complexa com segurança e precisão.",
    image: "/images/service-5-cirurgia.png",
  },
];

export const cases = [
  { 
    title: "Clareamento dental", 
    detail: "Protocolo supervisionado · Resultados visíveis",
    before: "/images/resultado-clareamento-before.png",
    after: "/images/resultado-clareamento-after.png"
  },
  { 
    title: "Restauração estética", 
    detail: "Dentística avançada · Naturalidade e função",
    before: "/images/resultado-restauracao-before.png",
    after: "/images/resultado-restauracao-after.png"
  },
  { 
    title: "Reabilitação com prótese", 
    detail: "Planejamento funcional completo e seguro",
    before: "/images/resultado-protese-before.png",
    after: "/images/resultado-protese-after.png"
  },
];

export const specializations = [
  {
    title: "Cirurgia Oral",
    description:
      "Extrações simples e complexas, sisos inclusos e procedimentos cirúrgicos com planejamento por imagem.",
  },
  {
    title: "Endodontia",
    description:
      "Tratamento e retratamento de canal com tecnologia rotatória, preservando a estrutura dental original.",
  },
  {
    title: "Odontologia Estética",
    description:
      "Clareamento, restaurações e dentística que equilibram naturalidade e precisão técnica.",
  },
  {
    title: "Disfunção Temporomandibular",
    description:
      "Diagnóstico e tratamento de bruxismo e DTM, com foco em conforto e função de longo prazo.",
  },
  {
    title: "Odontopediatria",
    description:
      "Atendimento humanizado para os pacientes mais jovens, do primeiro dente à adolescência.",
  },
  {
    title: "Urgência 24 Horas",
    description:
      "Estrutura de plantão para dor aguda, trauma e infecção — todos os dias, a qualquer hora.",
  },
];

export const timeline = [
  {
    year: "Formação",
    title: "Graduação em Odontologia",
    description:
      "Base científica sólida e primeiros passos em cirurgia, dentística e atendimento clínico.",
  },
  {
    year: "Aprimoramento",
    title: "Especialização em Cirurgia e Endodontia",
    description:
      "Aprofundamento técnico em procedimentos cirúrgicos e tratamento de canal, com foco em conforto do paciente.",
  },
  {
    year: "Consultório Próprio",
    title: "Abertura da clínica em Sorocaba",
    description:
      "Início do atendimento na R. Prof. Toledo, 264, no Centro de Sorocaba, com estrutura própria e equipe dedicada.",
  },
  {
    year: "Expansão",
    title: "Estrutura de urgência 24 horas",
    description:
      "Ampliação do atendimento para cobrir urgências odontológicas a qualquer hora, todos os dias da semana.",
  },
  {
    year: "Hoje",
    title: "Odontologia Avançada",
    description:
      "Mais de mil pacientes acompanhados, unindo tecnologia, técnica e acolhimento em cada sorriso transformado.",
  },
];

export const testimonials = [
  {
    name: "Paciente de urgência",
    rating: 5,
    text: "Fui atendido de madrugada com uma dor forte e o cuidado foi excelente do início ao fim. Recomendo de olhos fechados.",
  },
  {
    name: "Paciente de clareamento",
    rating: 5,
    text: "Resultado natural, sem sensibilidade, e um acompanhamento muito atencioso durante todo o tratamento.",
  },
  {
    name: "Paciente de canal",
    rating: 5,
    text: "Tratamento de canal tranquilo, sem dor, com explicação clara de cada etapa. Profissionalismo do começo ao fim.",
  },
  {
    name: "Mãe de paciente infantil",
    rating: 5,
    text: "Minha filha tinha medo de dentista e saiu sorrindo da consulta. Atendimento pediátrico impecável.",
  },
];

export const contentArticles = [
  {
    title: "Como cuidar do seu sorriso no dia a dia",
    excerpt:
      "Pequenos hábitos que fazem grande diferença na saúde bucal a longo prazo.",
    category: "Prevenção",
  },
  {
    title: "O que esperar de uma extração de siso",
    excerpt:
      "Do planejamento à recuperação: entenda cada etapa do procedimento cirúrgico.",
    category: "Cirurgia",
  },
  {
    title: "Bruxismo: sinais de alerta e tratamento",
    excerpt:
      "Como identificar o hábito de ranger os dentes e proteger sua articulação.",
    category: "DTM",
  },
  {
    title: "Clareamento dental: mitos e verdades",
    excerpt:
      "Separamos fato de ficção sobre um dos procedimentos estéticos mais procurados.",
    category: "Estética",
  },
];
