/*===================

==== AppCreative2 dummy data list ====

- Navbar
- Banner
- Why Choose Us
- Analytics Tool
- Ever Need
- Testimonial
- Wallet Experience
- Technology Community
- Pricing
- FAQ's
- CTA
- Footer Top
- Footer

====================*/

import instagramButton from "common/assets/image/appCreativeTwo/insta-button.svg";
import whatsappButton from "common/assets/image/appCreativeTwo/whatsapp-button.svg";
import icon1 from "common/assets/image/appCreativeTwo/icons/1.png";
import icon2 from "common/assets/image/appCreativeTwo/icons/2.png";
import icon3 from "common/assets/image/appCreativeTwo/icons/3.png";
import icon4 from "common/assets/image/appCreativeTwo/icons/4.png";
import walletIcon1 from "common/assets/image/appCreativeTwo/icons/8.png";
import walletIcon2 from "common/assets/image/appCreativeTwo/icons/7.png";
import walletIcon3 from "common/assets/image/appCreativeTwo/icons/6.png";
import walletIcon4 from "common/assets/image/appCreativeTwo/icons/5.png";
import cards from "common/assets/image/appCreativeTwo/icons/cards.png";
import doc from "common/assets/image/appCreativeTwo/icons/doc.png";
import grid from "common/assets/image/appCreativeTwo/icons/grid.png";
import layout from "common/assets/image/appCreativeTwo/icons/layout.png";
import loop from "common/assets/image/appCreativeTwo/icons/loop.png";
import shape from "common/assets/image/appCreativeTwo/icons/shape.png";
import sidebar from "common/assets/image/appCreativeTwo/icons/sidebar.png";
import smartphone from "common/assets/image/appCreativeTwo/icons/smartphone.png";
import technologyImage from "common/assets/image/appCreativeTwo/technology.png";
import { default as testimonial2 } from "common/assets/image/appCreativeTwo/testimonial/client-2.png";
import { default as testimonial1 } from "common/assets/image/appCreativeTwo/testimonial/client.png";
import { default as testimonial2Logo } from "common/assets/image/appCreativeTwo/testimonial/logo-2.png";
import { default as testimonial1Logo } from "common/assets/image/appCreativeTwo/testimonial/logo.png";
import walletImage from "common/assets/image/appCreativeTwo/wallet-experience.webp";
import dribbble from "common/assets/image/webAppCreative/icons/dribbble.png";
import facebook from "common/assets/image/webAppCreative/icons/facebook.png";
import twitter from "common/assets/image/webAppCreative/icons/twitter.png";
import siteLogo from "common/assets/image/appCreativeTwo/logo.png";

/* ------------------------------------ */
// Navbar data section
/* ------------------------------------ */
export const menu_items = [
  {
    label: "In??cio",
    path: "#home",
    offset: "70",
    id: 1,
  },
  {
    label: "Sobre n??s",
    path: "#about",
    offset: "70",
    id: 2,
  },
  {
    label: "Nossos clientes",
    path: "#testimonial",
    offset: "70",
    id: 3,
  },
  // {
  //   label: "Pricing",
  //   path: "#pricing",
  //   offset: "70",
  //   id: 4,
  // },
  {
    label: "Fale conosco",
    path: "#cta",
    offset: "70",
    id: 5,
  },
];

/* ------------------------------------ */
// Banner data section
/* ------------------------------------ */
export const bannerData = {
  news: "NEWS",
  newsLabel: "We have updated our term & condition policy",
  title: "Sites, Apps e Softwares sob medida.",
  text: "Somos uma f??brica de software que vai al??m da entrega de funcionalidades. Estamos comprometidos com o impacto positivo dos projetos digitais que desenvolvemos.",
  button: [
    {
      id: 1,
      title: "Whatsapp Button",
      thumb: whatsappButton,
      link: "https://wa.me/+556596333873",
    },
    {
      id: 2,
      title: "Instagram Button",
      thumb: instagramButton,
      link: "https://www.instagram.com/fabricadoapp/",
    },
  ],
};

/* ------------------------------------ */
// Why Choose Us data section
/* ------------------------------------ */
export const whyChooseUs = [
  {
    id: 1,
    icon: icon1,
    title: "Crian????o de Sites",
    text: `Sites, lojas virtuais, portal de not??cias, blog, landing page e muito mais???`,
    linkLabel: "Conhe??a",
    link: "#",
  },
  {
    id: 2,
    icon: icon2,
    title: "Aplicativo e Sistemas",
    text: `iOS e Android, desenvolvidos em linguagem nativa, com alta performance, design customizado e excelentes n??veis de funcionalidade e interatividade.`,
    linkLabel: "Entrar",
    link: "#",
  },
  {
    id: 3,
    icon: icon3,
    title: "Suporte T??cnico",
    text: `Suporte para Sites e Sistemas.`,
    linkLabel: "Saiba mais",
    link: "#",
  },
  {
    id: 4,
    icon: icon4,
    title: "Projetos sob Demanda",
    text: `Desenvolvemos solu????es consistentes e inovadoras que se encaixam no seu neg??cio. Ofere??a para os seus clientes uma experi??ncia digital de qualidade e saia na frente nessa corrida!`,
    linkLabel: "Fale com a gente",
    link: "#",
  },
];

/* ------------------------------------ */
// Analytics Tool data section
/* ------------------------------------ */
export const analyticsTool = {
  slogan: "Tecnologias da Fabrica de App",
  title: "Quais tecnologias utilizamos em nossos projetos?",
  desc: `Trabalhamos com desenvolvimento de tecnologias e linguagens de programa????o, nas melhores e principais plataformas e interfaces dispon??veis.`,
  features: ["iOS < iPhone e iPad >", "Android < Google >", "Web < Desktop >"],
  button: {
    link: "#",
    label: "Est?? em d??vidas? Fale com um especialista!",
  },
};

/* ------------------------------------ */
// Ever Need data section
/* ------------------------------------ */
export const everNeed = [
  {
    id: 1,
    icon: cards,
    title: "Design",
    background: "rgba(240, 64, 55, 0.097195)",
  },
  {
    id: 2,
    icon: loop,
    title: "Prototipa????o",
    background: "rgba(84, 84, 212, 0.1)",
  },
  {
    id: 3,
    icon: smartphone,
    title: "Interatividade",
    background: "rgba(254, 220, 90, 0.1)",
  },
  {
    id: 4,
    icon: sidebar,
    title: "Seguran??a",
    background: "rgba(84, 84, 212, 0.1)",
  },
  {
    id: 5,
    icon: grid,
    title: "Otimiza????o",
    background: "rgba(240, 64, 55, 0.1)",
  },
  {
    id: 6,
    icon: grid,
    title: "Performance",
    background: "rgba(240, 64, 55, 0.1)",
  },
  {
    id: 7,
    icon: shape,
    title: "Upgrades",
    background: "rgba(119, 191, 65, 0.1)",
  },
  {
    id: 8,
    icon: loop,
    title: "Gest??o",
    background: "rgba(240, 64, 55, 0.1)",
  },
  {
    id: 9,
    icon: doc,
    title: "Integra????o",
    background: "rgba(84, 84, 212, 0.1)",
  },
  {
    id: 10,
    icon: cards,
    title: "Criatividade",
    background: "rgba(84, 84, 212, 0.1)",
  },
  {
    id: 11,
    icon: sidebar,
    title: "Agilidade",
    background: "rgba(84, 84, 212, 0.1)",
  },
  {
    id: 12,
    icon: shape,
    title: "Estabilidade",
    background: "rgba(84, 84, 212, 0.1)",
  },
];

/* ------------------------------------ */
// Testimonial data section
/* ------------------------------------ */
export const testimonialData = {
  title: "O que o cliente diz sobre n??s",
  posts: [
    {
      image: testimonial1,
      logo: testimonial1Logo,
      text: "Nossa! A F??brica de App resolveu meus problema, eu precisava de um e-commerce no nicho de Pet, eles me atenderam super bem e o melhor, com valores super acess??veis.",
      name: "Mariana Dilena",
      designation: "Head of Design",
      rating: 5,
      button: {
        link: "#",
        label: "Saiba mais",
      },
    },
    {
      image: testimonial2,
      logo: testimonial2Logo,
      text: "Estava com problemas de lentid??o em meu sistema, entrei em contato com a Fabrica de App, logo me responderam, marcaram uma reuni??o para o entendimento e diagn??stico, em menos de 2 meses j?? estou com meu novo sistema, com v??rios clientes acessando.",
      name: "Jonathan Taylor",
      designation: "Head of Communication",
      rating: 4,
      button: {
        link: "#",
        label: "Saiba mais",
      },
    },
  ],
};

/* ------------------------------------ */
// Wallet Experience data section
/* ------------------------------------ */
export const walletExperience = {
  slogan: "",
  title: "Oque nos torna ??nico?",
  // desc: `Pick one of our stock themes, or create your custom theme with the most advanced theme editor on any online survey building tool.`,
  thumb: walletImage,
  features: [
    {
      id: 1,
      icon: walletIcon1,
      title: "Imers??o",
      content:
        "Entendendo como seu neg??cio funciona, assim obtemos informa????es valiosas para o projeto.",
    },
    {
      id: 2,
      icon: walletIcon2,
      title: "Cronograma completo de etapas",
      content:
        "Logo no in??cio do projeto, teremos um cronograma com todas as etapas do projeto. Incluindo: Entregas, pontos de contato e reuni??es.",
    },
    {
      id: 2,
      icon: walletIcon3,
      title: "Boas pr??ticas e as melhores ferramentas",
      content:
        "Trabalhamos com excelentes ferramentas que possibilitam a implementa????o de metodologias ??geis em conjunto com boas pr??ticas no setor de tecnologia.",
    },
    {
      id: 2,
      icon: walletIcon4,
      title: "E muito mais...",
      // content:
      //   "Profissionais capacitados e com dedica????o singular a cada projeto.",
    },
  ],
};

/* ------------------------------------ */
// Technology Community data section
/* ------------------------------------ */
export const technologyCommunity = {
  // slogan: "Technology based Community",
  title: "Porque existimos?",
  desc: `Acreditamos que a tecnologia pode ser acess??vel para todos os projetos do futuro e do presente, e n??o apenas nas grandes corpora????es, por isso democratizamos o desenvolvimento de produtos digitais para acelerar a viabilidade do seu neg??cio.
  Somos uma Software House que atrav??s de uma metodologia ??gil e times especializados no conceito LowCode, opera as melhores pr??ticas de desenvolvimento de softwares do mercado, para tirar o seu projeto do papel.`,
  thumb: technologyImage,
  button: {
    label: "Vamos marcar uma conversa",
    link: "#",
  },
};

/* ------------------------------------ */
// Pricing data section
/* ------------------------------------ */
export const pricing = {
  slogan: "Meet exciting Pricing Plans",
  title:
    "Create custom landing pages with us so that converts more visitors than any website.",
  save: "Save 25%",
  currency: "$",
  plans: {
    monthly: [
      {
        id: 1,
        title: "Starter Plan",
        description: "Per user",
        price: 19,
        period: "mo",
        button: {
          label: "Start 14 Days Free Trial",
          link: "#",
        },
        features: [
          {
            id: 1,
            text: "Unlimited Connections",
          },
          {
            id: 2,
            text: "Basic Actions & Triggers",
          },
          {
            id: 3,
            text: "Draft Payments",
          },
          {
            id: 4,
            text: "Unlimited Flows & Supports",
          },
          {
            id: 5,
            text: "Lifetime updates",
          },
        ],
      },
      {
        id: 2,
        title: "Business Plan",
        description: "Per user",
        price: 49,
        period: "mo",
        button: {
          label: "Start 14 Days Free Trial",
          link: "#",
        },
        features: [
          {
            id: 1,
            text: "Unlimited Connections",
          },
          {
            id: 2,
            text: "Basic Actions & Triggers",
          },
          {
            id: 3,
            text: "Draft Payments",
          },
          {
            id: 4,
            text: "Unlimited Flows & Supports",
          },
          {
            id: 5,
            text: "Lifetime updates",
          },
        ],
      },
    ],
    yearly: [
      {
        id: 1,
        title: "Starter Plan",
        description: "Per user",
        price: Math.floor(19 * 12),
        period: "yr",
        button: {
          label: "Start 14 Days Free Trial",
          link: "#",
        },
        features: [
          {
            id: 1,
            text: "Unlimited Connections",
          },
          {
            id: 2,
            text: "Basic Actions & Triggers",
          },
          {
            id: 3,
            text: "Draft Payments",
          },
          {
            id: 4,
            text: "Unlimited Flows & Supports",
          },
          {
            id: 5,
            text: "Lifetime updates",
          },
        ],
      },
      {
        id: 2,
        title: "Business Plan",
        description: "Per user",
        price: Math.floor(49 * 12),
        period: "yr",
        button: {
          label: "Start 14 Days Free Trial",
          link: "#",
        },
        features: [
          {
            id: 1,
            text: "Unlimited Connections",
          },
          {
            id: 2,
            text: "Basic Actions & Triggers",
          },
          {
            id: 3,
            text: "Draft Payments",
          },
          {
            id: 4,
            text: "Unlimited Flows & Supports",
          },
          {
            id: 5,
            text: "Lifetime updates",
          },
        ],
      },
    ],
  },
};

/* ------------------------------------ */
// FAQ's data section
/* ------------------------------------ */
export const faqs = [
  {
    id: 1,
    title: "O que ?? uma f??brica de software",
    description: `F??brica de Software ?? uma empresa especializada no desenvolvimento de projetos de software customizados. Dependendo do modelo da empresa, ela pode ser especializada apenas em desenvolvimento de sistemas, como aplicativos, portais ou e-commerces. H?? f??bricas de software, como a Fabrica do App, que atuam no desenvolvimento de todas estas solu????es digitais.`,
  },
  {
    id: 2,
    title: "Quais s??o os servi??os de uma f??brica de software",
    description: `A F??brica de Software ?? especializada no desenvolvimento de software sob demanda, podendo ter varia????es como:

    Escopo fechado,
    Aloca????o de squads na metodologia ??gil,
    Outsourcing de profissionais,
    Suporte e sustenta????o.`,
  },
  {
    id: 3,
    title: "Como funciona construir um projeto de software sob medida",
    description: `O desenvolvimento de um software sob medida inicia com o entendimento do projeto, atrav??s do mapeamento das funcionalidades e cria????o de um layout (telas). Ap??s o entendimento do esfor??o de tempo e de horas para desenvolver, inicia-se o processo de desenvolvimento, podendo ser em cascata (modelo mais tradicional) ou na metodologia ??gil (modelo mais recente com entregas quinzenais).  Para mais detalhes, confira este artigo de como tirar um projeto de software do papel.`,
  },
  {
    id: 4,
    title: "Quanto custa um software sob medida",
    description: `Um software sob medida poder?? ter varia????es de acordo com a complexidade do projeto e tamb??m o tipo de servi??o que voc?? contrata. Por exemplo, freelancers resolvem solu????es de ajustes, websites ou novos m??dulos em plataformas com investimentos de 5 a 50 mil reais. Enquanto projetos complexos (apps, portais e sistemas), com a contrata????o de uma f??brica de software, podem variar de 120 a 500 mil reais (at?? mais dependendo da complexidade).`,
  },
];

/* ------------------------------------ */
// CTA data section
/* ------------------------------------ */
export const callToAction = {
  title: "Ainda ficou com d??vidas?",
  content:
    "Estamos prontos para atende-lo, vamos marcar uma conversa para entendermos mais sobre o seu neg??cio?",
  button: {
    label: "Quero entender melhor",
    link: "#",
  },
  // info: "No credit card required",
};

/* ------------------------------------ */
// Footer Top data section
/* ------------------------------------ */
export const footerTop = {
  about: {
    logo: siteLogo,
    text: `Somos movidos pelo desejo de mudan??a, da inova????o, de fazer diferente. Queremos entregar valor e realiza????es nos projetos de software que desenvolvemos. Com nossa cultura e um time preparado, descomplicamos a inova????o atrav??s das metodologias mais recentes de desenvolvimento.`,
  },
  widgets: [
    // {
    //   id: 2,
    //   title: "About Us",
    //   list: [
    //     {
    //       id: 1,
    //       title: "Support Center",
    //       link: "#",
    //     },
    //     {
    //       id: 2,
    //       title: "Customer Support",
    //       link: "#",
    //     },
    //     {
    //       id: 3,
    //       title: "About Us",
    //       link: "#",
    //     },
    //     {
    //       id: 4,
    //       title: "Copyright",
    //       link: "#",
    //     },
    //     {
    //       id: 5,
    //       title: "Popular Campaign",
    //       link: "#",
    //     },
    //   ],
    // },
    // {
    //   id: 3,
    //   title: "Our Information",
    //   list: [
    //     {
    //       id: 1,
    //       title: "Return Policy ",
    //       link: "#",
    //     },
    //     {
    //       id: 2,
    //       title: "Privacy Policy",
    //       link: "#",
    //     },
    //     {
    //       id: 3,
    //       title: "Terms & Conditions",
    //       link: "#",
    //     },
    //     {
    //       id: 4,
    //       title: "Site Map",
    //       link: "#",
    //     },
    //     {
    //       id: 5,
    //       title: "Store Hours",
    //       link: "#",
    //     },
    //   ],
    // },
    // {
    //   id: 4,
    //   title: "My Account",
    //   list: [
    //     {
    //       id: 1,
    //       title: "Press inquiries",
    //       link: "#",
    //     },
    //     {
    //       id: 2,
    //       title: "Social media ",
    //       link: "#",
    //     },
    //     {
    //       id: 3,
    //       title: "directories",
    //       link: "#",
    //     },
    //     {
    //       id: 4,
    //       title: "Images & B-roll",
    //       link: "#",
    //     },
    //     {
    //       id: 5,
    //       title: "Permissions",
    //       link: "#",
    //     },
    //   ],
    // },
  ],
  contactInfo: {
    title: "Informa????es para contato",
    address: `Av. Miguel S??til, Santa Rosa - 72`,
    phone: `+55 (65) 9 92220-6152 | +55 (65) 9 9633-3873`,
    // openingTime: `7 Days - 8am - 10pm`,
    email: `suporte@fabridadoapp.com`,
  },
};

/* ------------------------------------ */
// Footer data section
/* ------------------------------------ */
export const footer = {
  copyright: `Copyright ?? 2022 Fabrica do App. Todos os direitos reservados`,
  nav: [
    {
      id: 1,
      title: "Suporte",
      link: "#",
    },
    // {
    //   id: 2,
    //   title: "Hiring",
    //   link: "#",
    // },
    {
      id: 3,
      title: "Privacidade",
      link: "#",
    },
    {
      id: 4,
      title: "Termos",
      link: "#",
    },
  ],
  // socialLinks: [
  //   {
  //     id: 1,
  //     link: "http://facebook.com",
  //     icon: facebook,
  //     label: "Facebook",
  //   },
  //   {
  //     id: 2,
  //     link: "http://twitter.com",
  //     icon: twitter,
  //     label: "Twitter",
  //   },
  //   {
  //     id: 3,
  //     link: "http://dribbble.com",
  //     icon: dribbble,
  //     label: "Dribbble",
  //   },
  // ],
};
