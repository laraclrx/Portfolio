export const personalInfo = {
  name: "Ana Clara Fischer",
  fullName: "Ana Clara Fischer de Souza",
  title: "Técnica em Informática para a Internet em formação",
  institution: "IFAC - Instituto Federal do Acre",
  age: 18,
  year: "3º Ano (Concluinte)",
  course: "Técnico Integrado em Informática para a Internet",
  location: "Acre, Brasil",
  bio: "Estudante apaixonada por tecnologia, desenvolvimento web e música. No 3º ano do IFAC, combino a dedicação aos estudos técnicos com criatividade, sensibilidade visual e foco em soluções funcionais e limpas.",
  status: "Disponível para estágios, projetos juniores e novas oportunidades",
  email: "anaclara.fischer.dev@gmail.com",
  whatsapp: "+55 (68) 99999-9999", // placeholder configurável
  instagram: "https://instagram.com",
  instagramUser: "@anaclara.fischer",
  linkedin: "https://linkedin.com",
  github: "https://github.com",
  photo: "/images/ana-clara.jpg"
};

export const playlistTracks = [
  { id: "sobre", title: "Faixa 01: Sobre Mim", subtitle: "Quem sou eu & Minha essência", duration: "03:15" },
  { id: "formacao", title: "Faixa 02: Formação no IFAC", subtitle: "A base técnica e acadêmica", duration: "04:20" },
  { id: "certificados", title: "Faixa 03: Certificações", subtitle: "Excel & PowerPoint Avançados", duration: "03:45" },
  { id: "habilidades", title: "Faixa 04: Habilidades", subtitle: "Sintonia entre Web e Dados", duration: "02:50" },
  { id: "projetos", title: "Faixa 05: Projetos", subtitle: "Repertório e Criações Práticas", duration: "04:10" },
  { id: "contato", title: "Faixa 06: Sintonia Direta", subtitle: "Vamos criar algo juntos?", duration: "02:30" }
];

export const skillsData = {
  web: [
    { name: "HTML5 Semântico", level: 85, desc: "Estruturação limpa, acessível e orientada a boas práticas" },
    { name: "CSS3 & Estilização Moderna", level: 80, desc: "Layouts flexbox, grid, responsividade e Tailwind" },
    { name: "JavaScript (ES6+)", level: 70, desc: "Manipulação de DOM, funções assíncronas e lógica web" },
    { name: "React & Vite", level: 65, desc: "Componentização, hooks modernos e interfaces reativas" },
    { name: "Design Responsivo (Mobile First)", level: 85, desc: "Adaptação consistente para celulares, tablets e desktops" }
  ],
  tools: [
    { name: "Microsoft Excel Avançado", level: 92, desc: "Funções dinâmicas, PROCV, tabelas dinâmicas e análise" },
    { name: "Microsoft PowerPoint Avançado", level: 90, desc: "Apresentações executivas, timing de animações e layout" },
    { name: "Lógica de Programação & Algoritmos", level: 80, desc: "Resolução estruturada de problemas no IFAC" },
    { name: "Redes & Fundamentos da Internet", level: 75, desc: "Arquitetura cliente-servidor, protocolos e infraestrutura web" },
    { name: "Git & Versionamento", level: 65, desc: "Controle de versão básico e colaboração em repositórios" }
  ],
  soft: [
    { title: "Ritmo & Dedicação", desc: "Assim como na música, mantenho constância, treino diário e atenção aos detalhes em cada código." },
    { title: "Comunicação Clara", desc: "Habilidade de sintetizar ideias complexas em apresentações atraentes e relatórios compreensíveis." },
    { title: "Espírito Colaborativo", desc: "Experiência de trabalho em grupo nos projetos acadêmicos e laboratoriais do IFAC." },
    { title: "Aprendizado Contínuo", desc: "Iniciativa para buscar certificações complementares e aprender novas tecnologias com rapidez." }
  ]
};

export const educationData = {
  school: "Instituto Federal de Educação, Ciência e Tecnologia do Acre (IFAC)",
  course: "Curso Técnico em Informática para a Internet Integrado ao Ensino Médio",
  period: "2023 - Presente (3º Ano / Conclusão)",
  status: "Em fase de conclusão",
  highlights: [
    "Formação sólida que une o ensino médio de excelência à formação técnica profissionalizante.",
    "Desenvolvimento prático em laboratórios de informática com foco em padrões web mundiais.",
    "Estudo aprofundado de programação para a web, banco de dados, redes e segurança básica.",
    "Participação ativa na comunidade escolar do IFAC com dedicação e disciplina."
  ]
};

export const projectsData = [
  {
    id: 1,
    title: "Portfólio Pessoal com Estética Musical",
    category: "Desenvolvimento Web / React",
    description: "Aplicação web desenvolvida com React, Vite, Tailwind CSS e Framer Motion. Apresenta design limpo em tons carmim com elementos visuais de vinil, equalizador de som e microinterações animadas.",
    techs: ["React", "Vite", "Tailwind CSS", "Framer Motion"],
    demoUrl: "#",
    badge: "Destaque"
  },
  {
    id: 2,
    title: "Projetos de Prática Web do IFAC",
    category: "Projetos Acadêmicos",
    description: "Desenvolvimento de páginas e aplicações didáticas explorando semântica HTML5, folhas de estilo CSS3 responsivas e manipulação dinâmica de elementos com JavaScript.",
    techs: ["HTML5", "CSS3", "JavaScript", "IFAC Labs"],
    demoUrl: "#",
    badge: "Acadêmico"
  },
  {
    id: 3,
    title: "Modelos Analíticos & Automação em Excel",
    category: "Análise de Dados & Produtividade",
    description: "Estruturação de planilhas dinâmicas com aplicação de fórmulas avançadas, consolidação de indicadores, relatórios resumidos e tabelas dinâmicas inteligentes.",
    techs: ["Excel Avançado", "Tabelas Dinâmicas", "Modelagem", "Gráficos"],
    demoUrl: "#",
    badge: "Certificado"
  },
  {
    id: 4,
    title: "Apresentações Multimídia & Storytelling",
    category: "Design & Comunicação Visual",
    description: "Criação de conjuntos de slides com hierarquia visual precisa, animações cadenciadas e design elegante com PowerPoint Avançado para apresentação de projetos e propostas.",
    techs: ["PowerPoint 2016", "Design Visual", "Animações", "Pitch"],
    demoUrl: "#",
    badge: "Certificado"
  }
];
