import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  c,
  python,
  julia,
  matlab,
  staad_pro
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Android Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Competitive Programmer",
    icon: creator,
  },
];

const technologies = [
  
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  
   {
    name: "Matlab",
    icon: matlab,
  },
   {
    name: "Python",
    icon: python,
  },
  {
    name: "C++",
    icon: c,
  },
  {
    name: "Julia",
    icon: julia,
  },
  {
    name: "Staad Pro",
    icon: staad_pro,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  }
];

const experiences = [
  {
    title: "Frontend Developer",
    company_name: "NIC_MoWCD",
    icon: starbucks,
    iconBg: "#383E56",
    date: "May 2022 - July 2022",
    points: [
      "Developed and maintained the frontend of the Mission Vatsalya Portal, a web portal for the welfare of children in difficult circumstances.",
      "Implemented new features and bug fixes.",
      "Collaborated with other interns and engineers to deliver high- quality work.",
    ],
  },
  {
    title: "Assistant Coordinator",
    company_name: "Alumni Cell IIT Bhubaneswar",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Aug 2022 - May 2023",
    points: [
      "Conducting and heading the events done for the Alumni's",
      "Designing the YearBook for the passouts of IIT Bhubaneswar using Canva",
      "Maintaining the social media handles of the Alumni Cell and as well as the website",
    ],
  },
   {
    title: "Executive Member",
    company_name: "Alumni Cell IIT Bhubaneswar",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "May 2022 - Present",
    points: [
      "Leading and Guiding a team of 20 members",
      "Conducting and heading the events done for the Alumni's",
      "Designing the YearBook for the passouts of IIT Bhubaneswar using Canva",
      "Maintaining the social media handles of the Alumni Cell and as well as the website",
    ],
  }
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Mohr Circle App",
    description:
      "Designed a web application to support civil engineering students in swiftly creating Mohr circles and assessing stress distribution on a specimen from varying angles. The app significantly accelerates a process that would otherwise demand 5-10 minutes manually, providing students with a valuable time-saving tool for prompt stress data analysis. This app I made under guidance of my Professor Dr. Md Masiur Rahaman",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://mohrcirclevisualizersif.netlify.app/",
  },
  {
    name: "Cafe Chai Nashta",
    description:
      "Developed a unique restaurant website that introduces individualized sites for distinct tables within the establishment. Customers can scan the specific QR code for their table to access the web-based menu, place orders directly, and enable the restaurant owner to precisely identify the originating table. This innovation not only grants patrons the convenience of autonomous ordering but also empowers restaurant owners to streamline order tracking efficiently.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
      {
        name: "node.js",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      }
    ],
    image: jobit,
    source_code_link: "https://cafej-chai-nashta-ui.vercel.app/",
  }
];

export { services, technologies, experiences, testimonials, projects };
