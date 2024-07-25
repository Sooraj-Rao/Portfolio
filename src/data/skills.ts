import {
  SiExpress,
  SiSocketdotio,
  SiPrisma,
  SiNextdotjs,
  SiFlask,
  SiFirebase,
  SiMongoose,
  SiMysql,
  SiRedis,
  SiFlutter,
  SiTreyarch,
} from "react-icons/si";
import {
  FramerMotionIcon,
  ReactRouterDomIcon,
  VitePwaIcon,
} from "@/component/icons";
import { type SkillsShowcaseProps } from "@/component/skills/skills-showcase";

// Languages
import HtmlSvg from "../../public/icons/html.svg";
import CsssSvg from "../../public/icons/css.svg";
import SassSvg from "../../public/icons/sass.svg";
import JavascriptSvg from "../../public/icons/javascript.svg";
import TypescriptSvg from "../../public/icons/typescript.svg";
import PythonSvg from "../../public/icons/python.svg";

// Libraries
import ReactjsSvg from "../../public/icons/reactjs.svg";
import SolidjsSvg from "../../public/icons/solidjs.svg";
import ReduxSvg from "../../public/icons/redux.svg";
import TailwindcssSvg from "../../public/icons/tailwindcss.svg";
import MuiSvg from "../../public/icons/mui.svg";
import ViteSvg from "../../public/icons/vite.svg";

// Backend
import NodejsSvg from "../../public/icons/nodejs.svg";

// Database and ORMS
import MongoDBSvg from "../../public/icons/mongodb.svg";
import PostgressSvg from "../../public/icons/postgresql.svg";

// Tools and Tech
import GitSvg from "../../public/icons/git.svg";
import DockerSvg from "../../public/icons/docker.svg";
import AwsSvg from "../../public/icons/aws.svg";
import PostmanSvg from "../../public/icons/postman.svg";
import { FaJava } from "react-icons/fa";

export const SKILLS_DATA: SkillsShowcaseProps["skills"] = [
  {
    sectionName: "Languages",
    skills: [
      // {
      //   name: "HTML",
      //   icon: HtmlSvg,
      // },
      // {
      //   name: "CSS",
      //   icon: CsssSvg,
      // },
      // {
      //   name: "SASS",
      //   icon: SassSvg,
      // },
      {
        name: "Javascript",
        icon: JavascriptSvg,
      },
      // {
      //   name: "Java",
      //   icon: FaJava,
      // },
      {
        name: "Typescript",
        icon: TypescriptSvg,
      },
    ],
  },
  {
    sectionName: "Libraries and Frameworks",
    skills: [
      {
        name: "Reactjs",
        icon: ReactjsSvg,
      },
      {
        name: "Nextjs",
        icon: SiNextdotjs,
      },
      // {
      //   name: "Solidjs",
      //   icon: SolidjsSvg,
      // },
      // {
      //   name: "React Router Dom",
      //   icon: ReactRouterDomIcon,
      // },
      {
        name: "Redux",
        icon: ReduxSvg,
      },
      {
        name: "Tailwindcss",
        icon: TailwindcssSvg,
      },
      // {
      //   name: "MUI",
      //   icon: MuiSvg,
      // },
      // {
      //   name: "Framer motion",
      //   icon: FramerMotionIcon,
      // },
      // {
      //   name: "Vite",
      //   icon: ViteSvg,
      // },
      // {
      //   name:'Zustand',
      //   icon:SiTreyarch
      // }
      // {
      //   name: "Vite PWA",
      //   icon: VitePwaIcon,
      // },
    ],
  },
  {
    sectionName: "Backend",
    skills: [
      {
        name: "Nodejs",
        icon: NodejsSvg,
      },
      {
        name: "Express",
        icon: SiExpress,
      },
      {
        name: "Socket.io",
        icon: SiSocketdotio,
      },
      {
        name: "Firebase",
        icon: SiFirebase,
      },
    ],
  },
  {
    sectionName: "Databases and ORMs",
    skills: [
      {
        name: "MongoDB",
        icon: MongoDBSvg,
      },
      {
        name: "MySql",
        icon: SiMysql,
      },
      // {
      //   name: "Postgress",
      //   icon: PostgressSvg,
      // },
      {
        name: "Redis",
        icon: SiRedis,
      },
      {
        name: "Mongoose",
        icon: SiMongoose,
      },
    ],
  },
  {
    sectionName: "Tools and Technologies",
    skills: [
      {
        name: "Git",
        icon: GitSvg,
      },
      // {
      //   name: "Docker",
      //   icon: DockerSvg,
      // },
      {
        name: "AWS",
        icon: AwsSvg,
      },
      {
        name: "Postman",
        icon: PostmanSvg,
      },
    ],
  },
  {
    sectionName: "App Develepment",
    skills: [
      // {
      //   name: "Flutter",
      //   icon: SiFlutter,
      // },
      {
        name: "React-Native",
        icon: ReactjsSvg,
      },
    ],
  },
];
