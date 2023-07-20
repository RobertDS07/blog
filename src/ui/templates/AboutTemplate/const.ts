const WORK_CONTENT = [
  {
    startedAt: new Date("2022-01-06"),
    exitedAt: new Date("2023-01-06"),
    companyName: "Juntos Somos Mais",
    position: "Engenheiro Full Stack Pleno",
    technologiesUsed: [
      "React JS",
      "React Native",
      "Nest JS",
      "Node JS",
      "Next JS",
      "AWS",
    ],
    overview:
      "Contribuí significativamente para o desenvolvimento de um novo produto, liderando a arquitetura junto com a equipe. Participei ativamente da criação do nosso boilerplate para os novos serviços que estavam por vir. Além disso, tive participação na arquitetura de banco de dados e serviços, migrando de uma API monolítica para uma arquitetura modular, sempre lidando com a compatibilidade dos serviços existentes. Desempenhei um papel fundamental na estruturação da engenharia, introduzindo revisão de código, boas práticas e melhorias nos processos. Também ofereci ajuda fundamental na estruturação e criação das histórias e prazos para a unificação de nossos produtos.",
  },
  {
    startedAt: new Date("2021-01-08"),
    exitedAt: new Date("2022-01-06"),
    companyName: "Doctor Web",
    position: "Desenvolvedor React Pleno",
    technologiesUsed: [
      "React JS",
      "React Native",
      "Next JS",
      "Styled Components",
    ],
    overview:
      "Iniciei trabalhando com React e propus melhorias significativas para nossos projetos, aplicadas em grande parte deles. Introduzi uma cultura de revisão de código na empresa, estabelecendo boas práticas e modelos iniciais. Além disso, concluí um último projeto de desenvolvimento de um site em NextJs antes de deixar a empresa.",
  },
  {
    startedAt: new Date("2020-01-11"),
    exitedAt: new Date("2021-01-08"),
    companyName: "Lean Comapany Digital",
    position: "Desenvolvedor Full Stack Júnior",
    technologiesUsed: [
      "React JS",
      "Material-UI",
      "Python",
      "Flask",
      "Dart",
      "Flutter",
    ],
    overview:
      "Atuei como o principal desenvolvedor em projetos, colaborando com dois desenvolvedores sêniors, desenvolvendo habilidades em Python e assumindo a responsabilidade pela manutenção e criação de funcionalidades no back-end. Liderei um projeto de desenvolvimento de um aplicativo em Flutter, onde aprendi a linguagem Dart. Além disso, solicitei e obtive um prazo adicional para refatorar o back-end em FeathersJs, garantindo um código de alta qualidade.",
  },
  {
    startedAt: new Date("2022-01-10"),
    exitedAt: new Date("2023-01-06"),
    companyName: "Freelances",
    position: "Tech Lead e Desenvolvedor Front End",
    technologiesUsed: ["React JS", "React Native"],
    overview:
      "Atuei como Tech Lead, organizando sprints para uma equipe de desenvolvedores juniores, selecionando tecnologias para projetos e coordenando o desenvolvimento das atividades. Além disso, ofereci consultoria, revisando uma codebase e entregando relatórios com sugestões de melhorias para otimizar a qualidade do código. Também desenvolvi projetos como desenvolvedor front-end, aplicando minhas habilidades e expertise para criar interfaces atraentes e funcionais.",
  },
];

const EXPERIENCES_CONTENT = [
  {
    projectName: "DataLeader",
    technologiesUsed: ["Python", "Flask"],
    overview:
      "Aprendi Python para trabalhar na API do projeto, desenvolvida em Flask.",
  },
  {
    projectName: "DataLeader",
    technologiesUsed: ["JavaScript", "ReactJS", "Material-UI"],
    overview:
      "Realizei a manutenção e adição de funcionalidades no frontend do projeto, desenvolvido em React com Material-UI, enfrentando desafios como implementação de calendários e agendamentos.",
  },
  {
    projectName: "Timenote",
    technologiesUsed: ["Typescript", "FeathersJS"],
    overview:
      "Iniciei o desenvolvimento de uma API com FeathersJs para o projeto Timenote, aplicando boas práticas de desenvolvimento de APIs REST.",
  },
  {
    projectName: "Timenote",
    technologiesUsed: ["JavaScript", "ReactJS", "Material-UI"],
    overview:
      "Iniciei o desenvolvimento de um painel administrativo em ReactJs para o projeto, utilizando Material-UI e Styled Components.",
  },
  {
    projectName: "Timenote",
    technologiesUsed: ["Dart", "Flutter"],
    overview:
      "Iniciei o desenvolvimento de um aplicativo em Flutter para o projeto, aprendendo Flutter especificamente para essa finalidade",
  },
  {
    projectName: "Bassi.Marfrig",
    technologiesUsed: ["Typescript", "ReactJS", "React Native"],
    overview:
      "Desenvolvi funcionalidades e realizei a manutenção no frontend, além de contribuir para a refatoração dos projetos, aplicando boas práticas e padrões.",
  },
  {
    projectName: "Farmazon",
    technologiesUsed: ["Typescript", "ReactJS", "React Native"],
    overview:
      "Desenvolvi funcionalidades e realizei a manutenção no frontend, além de contribuir para a refatoração dos projetos, aplicando boas práticas e padrões.",
  },
  {
    projectName: "SOL Copérnico",
    technologiesUsed: ["Typescript", "NextJS"],
    overview: "Criei um novo website em NextJs para um cliente.",
  },
  {
    projectName: "Triider",
    technologiesUsed: [
      "TypeScript",
      "JavaScript",
      "ReactJs",
      "React Native",
      "NextJS",
      "Angular",
      "AngularJS",
    ],
    overview:
      "Criei e realizei a manutenção de todos os projetos front-end, implementando fluxo de atualização de token em todas as aplicações. Trabalhei com legados sem medo de modificá-los.",
  },
  {
    projectName: "Triider",
    technologiesUsed: ["TypeScript", "JavaScript", "NodeJS (v12)", "NestJS"],
    overview: `Realizei a manutenção e o desenvolvimento de
funcionalidades na API monolítica, participando da criação e arquitetura
de novos serviços, incluindo a criação de filas SQS, lambdas, etc.
Colaborei na criação de boilerplates para os novos serviços,
estabelecendo padrões para nossas APIs, além de criar boilerplates
para issues a fim de mapear dívidas técnicas. Também participei do
desenvolvimento de várias funcionalidades, incluindo um logger que
rastreava toda a jornada de uma requisição na API, facilitando o
trabalho de rastreamento e depuração.`,
  },
  {
    projectName: "POC",
    technologiesUsed: ["JavaScript", "ReactJS"],
    overview:
      "Fui contratado para revisar todo o código de um projeto em POC, permitindo que seus desenvolvedores seguissem as melhores práticas para criar um software escalável. Também organizei tarefas e histórias, ajudando a gerenciar o backlog do projeto.",
  },
  {
    projectName: "POC",
    technologiesUsed: ["JavaScript", "React Native"],
    overview: `Fui contratado para concluir parte de um projeto POC.`,
  },
];

export { WORK_CONTENT, EXPERIENCES_CONTENT };
