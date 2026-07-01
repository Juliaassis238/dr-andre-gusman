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
    whatsapp: "+5515997647172",
    whatsappDisplay: "+55 15 99764-7172",
    phoneHref: "tel:+5515997647172",
    whatsappHref:
      "https://wa.me/5515997647172?text=Ol%C3%A1%2C%20encontrei%20o%20site%20e%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o.",
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
    "Na Clínica Odontológica Dr. André Gusman & Equipe — Odontologia Avançada, em Sorocaba (SP), oferecemos atendimento humanizado e seguro em cirurgias odontológicas, urgências 24h e tratamentos que unem tecnologia, técnica e acolhimento para transformar sorrisos com excelência.",
};

export type Procedure = {
  slug: string;
  name: string;
  short: string;
  description: string;
};

export const procedures: Procedure[] = [
  {
    slug: "limpeza-profilaxia",
    name: "Limpeza / Profilaxia",
    short: "Manutenção preventiva da saúde bucal.",
    description:
      "Remoção profissional de placa e tártaro para manter a saúde e o brilho do seu sorriso, com orientação individual de cuidados diários.",
  },
  {
    slug: "extracao-de-siso",
    name: "Extração de siso",
    short: "Cirurgia segura para dentes do siso.",
    description:
      "Avaliação por imagem, planejamento cirúrgico e remoção de terceiros molares com protocolo de conforto e recuperação acompanhada.",
  },
  {
    slug: "urgencia-odontologica",
    name: "Urgência odontológica",
    short: "Atendimento 24 horas, todos os dias.",
    description:
      "A dor de dente não espera. Atendimento imediato para traumas, dores agudas e infecções, disponível 24 horas, incluindo finais de semana e feriados.",
  },
  {
    slug: "endodontia",
    name: "Tratamento / Retratamento de canal",
    short: "Endodontia com precisão e conforto.",
    description:
      "Tratamento e retratamento de canal com tecnologia rotatória e controle de dor, preservando o dente natural sempre que possível.",
  },
  {
    slug: "extracao-simples",
    name: "Extração de dente simples",
    short: "Quando a preservação não é possível.",
    description:
      "Em casos onde a preservação do dente não é indicada, realizamos a extração com técnica minimamente invasiva e planejamento de reabilitação.",
  },
  {
    slug: "dentistica",
    name: "Restauração simples e complexa",
    short: "Dentística estética e funcional.",
    description:
      "Restaurações em resina e cerâmica que devolvem forma, função e naturalidade ao sorriso, com atenção milimétrica à cor e à textura.",
  },
  {
    slug: "clareamento-dental",
    name: "Clareamento dental",
    short: "Seu sorriso, seu cartão de visita.",
    description:
      "Protocolos de clareamento supervisionado, em consultório ou caseiro, com resultados previsíveis e seguros para o esmalte.",
  },
  {
    slug: "odontopediatria",
    name: "Odontopediatria",
    short: "Cuidado especial para os pequenos.",
    description:
      "Atendimento acolhedor e lúdico para crianças, construindo desde cedo uma relação de confiança com o cuidado bucal.",
  },
  {
    slug: "protese",
    name: "Próteses dentárias",
    short: "Reabilitação funcional e estética.",
    description:
      "Próteses fixas e removíveis planejadas para devolver mastigação, fala e estética com naturalidade e durabilidade.",
  },
  {
    slug: "bruxismo-dtm",
    name: "Bruxismo e DTM",
    short: "Diagnóstico e tratamento da ATM.",
    description:
      "Avaliação da articulação temporomandibular e da musculatura orofacial, com placas e terapias para aliviar dor e proteger o sorriso.",
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
