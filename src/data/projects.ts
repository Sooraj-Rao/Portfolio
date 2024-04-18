import { type ProjectCardProps } from "@/component/projects/project-card";
import { type ProjectShowcaseListItem } from "@/component/projects/project-showcase-list";
// import { siteMetadata } from "@/data/siteMetaData.mjs";

export const PROJECT_SHOWCASE: ProjectShowcaseListItem[] = [
  {
    index: 0,
    title: "FindMyMechanic",
    href: "/projects",
    tags: ["ReactJS", "Tailwindcss", "ExpressJS", "NodeJS", "Redux"],
    image: "/images/projects/mech.png",
  },
  {
    index: 1,
    title: "QuickMart",
    href: "/projects",
    tags: ["Reactjs", "Tailwindcss", "Razorpay", "ExpressJS", "NodeJS"],
    image: "/images/projects/cart1.png",
  },
  {
    index: 2,
    title: "FileConverter",
    href: "/projects",
    tags: ["ReactJS", "Tailwindcss", "Shadcn/ui", "Vercel", "Zustand"],
    image: "/images/projects/conv.png",
  },
];

export const PROJECTS_CARD: ProjectCardProps[] = [
  {
    name: "Mechanic Shop Finder",
    favicon: "/images/projects/logos/jsontree.ico",
    imageUrl: [
      "/images/projects/mech.png",
      "/images/projects/mech2.png",
      "/images/projects/mech3.png",
      "/images/projects/mech4.png",
    ],
    description:
      "Visualize JSON data format in form of a tree or graph. Application is made using Nextjs, Tailwindcss and Monaco Editor. Design image can be downloaded from this app.",
    sourceCodeHref: "https://github.com/Sooraj-Rao/FindMyMechanic",
    liveWebsiteHref: "https://find-my-mechanic.vercel.app/",
  },
  {
    name: "QuickMart (E-Commerce)",
    favicon: "/images/projects/logos/kanban.ico",
    imageUrl: [
      "/images/projects/cart1.png",
      "/images/projects/cart.png",
      "/images/projects/cart2.png",
      "/images/projects/cart3.png",
      "/images/projects/cart4.png",
    ],
    description:
      "Keep track of projects and tasks in different categories. Drag and drop card from tables. Assign user and priority to task and many more features. This app is made using Reactjs, Typescript, Tailwindcss and React-beautiful-dnd library.",
    sourceCodeHref: "https://github.com/Sooraj-Rao/E-commerce",
    liveWebsiteHref: "https://srj-quickmart.vercel.app/",
  },
  {
    name: "File Converter",
    favicon: "/images/projects/logos/manygames.ico",
    imageUrl: [
      "/images/projects/conv.png",
      "/images/projects/con2.png",
      "/images/projects/con3.png",
    ],
    description:
      "Many short and fun games using Reactjs, Typescript and Tailwindcss with collaboration with other developers",
    sourceCodeHref: "https://github.com/Sooraj-Rao/Convertio",
    liveWebsiteHref: "https://convertio-sooraj-rao.vercel.app/",
  },
  {
    name: "URL Shortener",
    favicon: "/favicon.ico",
    imageUrl: [
      "/images/projects/url3.png",
      "/images/projects/url.png",
      "/images/projects/url1.png",
      "/images/projects/url2.png",
    ],
    description:
      "My personal portfolio website made using Nextjs, tailwindcss and framer motion.",
    sourceCodeHref: "https://github.com/Sooraj-Rao/URL-shortner",
    liveWebsiteHref: "https://srj-url-shortner.vercel.app/",
  },
  // {
  //   name: "Covid Tracker",
  //   favicon: "/images/projects/logos/covidtracker.ico",
  //   imageUrl: [
  //     "/images/projects/covidTracker.webp",
  //     "/images/projects/covidTrackerMap.webp",
  //     "/images/projects/covidTrackerTable.webp",
  //   ],
  //   description:
  //     "Get latest covid related stats in a table where user can filter using country and cases. It also has a map which show every countries data for quick view. It uses an open source api (disease.sh). Made using Reactjs, Javascript and MUI",
  //   sourceCodeHref: "https://github.com/BUMBAIYA/CovidTracker",
  //   liveWebsiteHref: "https://bumbaiya.github.io/CovidTracker",
  // },
  // {
  //   name: "Stock predictor",
  //   favicon: "/images/projects/logos/stockpredictor.ico",
  //   imageUrl: [
  //     "/images/projects/stockPredictor.webp",
  //     "/images/projects/stockPredictorCandleChart.webp",
  //     "/images/projects/stockPredictorCompareChart.webp",
  //     "/images/projects/stockPredictorLineChart.webp",
  //   ],
  //   description:
  //     "Get prediction of opening and closing price of stocks price. Frontend is made using Reactjs and backend is made using Flask and Machine learning model are trained using Tensorflow",
  //   sourceCodeHref: "https://github.com/Rohrschachh/Stock-Market-Predictor",
  // },
];
