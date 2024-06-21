import { ProjectCardProps } from "@/component/projects/project-card";
import { type ProjectShowcaseListItem } from "@/component/projects/project-showcase-list";

export const PROJECT_SHOWCASE: ProjectShowcaseListItem[] = [
  {
    index: 0,
    title: "FindMyMechanic",
    href: "/projects",
    tags: ["ReactJS", "Tailwindcss", "ExpressJS", "NodeJS", "Redux"],
    image: "/images/projects/mech.webp",
  },
  {
    index: 1,
    title: "QuickMart",
    href: "/projects",
    tags: ["Reactjs", "Tailwindcss", "Razorpay", "ExpressJS", "NodeJS"],
    image: "/images/projects/cart1.webp",
  },
  {
    index: 2,
    title: "QuickSend",
    href: "/projects",
    tags: ["NextJS", "TypeScript", "Firebase/Cloud", "MongoDB", "Shadcn/Ui"],
    image: "/images/projects/send.webp",
  },
];

export const PROJECTS_CARD: ProjectCardProps[] = [
  {
    name: "Mechanic Shop Finder",
    favicon: "/images/projects/logos/jsontree.ico",
    imageUrl: [
      "/images/projects/mech.webp",
      "/images/projects/mech3.webp",
      "/images/projects/mech2.webp",
      "/images/projects/mech1.webp",
    ],
    description:
      "The Mechanic Shop Finder project, developed with MERN stack and Redux, simplifies locating mechanic shops. It utilizes React for UI, MongoDB for data storage, and Express.js with Node.js for backend functionality, ensuring seamless user experience.",
    sourceCodeHref: "https://github.com/Sooraj-Rao/FindMyMechanic",
    liveWebsiteHref: "https://find-my-mechanic.vercel.app/",
    tags: ["React", "ExpressJS", "NodeJS", "MongoDB", "Redux", "Framer Motion"],
  },
  {
    name: "Quick Send",
    favicon: "/images/projects/logos/manygames.ico",
    imageUrl: [
      "/images/projects/send.webp",
      "/images/projects/send6.webp",
      "/images/projects/send5.webp",
      "/images/projects/send4.webp",
      "/images/projects/send3.webp",
      "/images/projects/send2.webp",
      "/images/projects/send1.webp",
    ],
    description:
      " Need to share files in a flash? You're in the right place. Our website makes it easy, fast, and simple – no lengthy authentication or login required. Just upload and share. It's that easy",
    sourceCodeHref: "https://github.com/Sooraj-Rao/Quicksend",
    liveWebsiteHref: "https://srj-quicksend.vercel.app/",
    tags: ["NextJS", "TypeScript", "Firebase/Cloud", "MongoDB", "Shadcn/Ui"],
    
  },
  // {
  //   name: "File Converter",
  //   favicon: "/images/projects/logos/manygames.ico",
  //   imageUrl: [
  //     "/images/projects/conv.png",
  //     "/images/projects/con2.png",
  //     "/images/projects/con3.png",
  //   ],
  //   description:
  //     "The file converter app, developed with Next.js and TypeScript, empowers users to effortlessly convert unlimited files with instant download capabilities. Leveraging Next.js for seamless client-side rendering, TypeScript for type safety, and efficient file handling, users can convert various file formats with ease and download the converted files instantly.",
  //   sourceCodeHref: "https://github.com/Sooraj-Rao/Convertio",
  //   liveWebsiteHref: "https://convertio-sooraj-rao.vercel.app/",
  // },

  {
    name: "URL Shortener",
    favicon: "/favicon.ico",
    imageUrl: [
      "/images/projects/url.webp",
      "/images/projects/url3.webp",
      "/images/projects/url2.webp",
      "/images/projects/url1.webp",
    ],
    description:
      "A MERN stack URL shortener efficiently converts long URLs into Short. Built with MongoDB, Express.js, React.js, and Node.js, it offers seamless link generation and redirection, enhancing user accessibility and web navigation.",
    sourceCodeHref: "https://github.com/Sooraj-Rao/URL-shortner",
    liveWebsiteHref: "https://srj-quicklink.vercel.app/",
    tags: ["React", "NodeJS", "ExpressJS", "MongoDB", "Shadcn/Ui"],
   
  },
  {
    name: "QuickMart (E-Commerce)",
    favicon: "/images/projects/logos/kanban.ico",
    imageUrl: [
      "/images/projects/cart1.webp",
      "/images/projects/cart.webp",
      "/images/projects/cart2.webp",
      "/images/projects/cart3.webp",
      "/images/projects/cart4.webp",
    ],
    description:
      "This e-commerce platform leverages the MERN stack alongside Zustand for state management and Razorpay for secure transactions. With React powering the dynamic user interface, MongoDB handling data storage, and Express.js with Node.js ensuring backend functionality, it delivers a seamless shopping experience.",
    sourceCodeHref: "https://github.com/Sooraj-Rao/E-commerce",
    liveWebsiteHref: "https://srj-quickmart.vercel.app/",
    tags: [
      "React",
      "NodeJS",
      "RazorPay",
      "Zustand",
      "Cloudinary",
      "MongoDB",
      "ExpressJS",
    ],
  },
];
