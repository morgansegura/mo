import React from "react"
import {
    FcMultipleDevices,
    FcCommandLine,
    FcComboChart,
    FcStatistics,
    FcWorkflow,
    FcMindMap,
    FcFlowChart,
    FcRadarPlot,
    FcOrgUnit,
} from "react-icons/fc"
import {
    SiTailwindcss,
    SiGatsby,
    SiNuxtDotJs,
    SiGraphql,
    SiGit,
    SiVisualstudio,
    SiNetlify,
} from "react-icons/si"
import { FaLaravel, FaVuejs, FaReact, FaSass, FaNodeJs } from "react-icons/fa"
import { AiOutlineCoffee, AiOutlineRead } from "react-icons/ai"
export const skills = [
    {
        title: "UX/UI Theory and Design",
        icon: <FcMultipleDevices className="mr-3 w-8 h-8" />,
        body:
            "Pellentesque pellentesque, ipsum sit amet auctor accumsan, odio tortor bibendum massa, sit amet ultricies ex lectus scelerisque nibh. Ut non sodales odio.",
    },
    {
        title: "Full Stack Development",
        icon: <FcCommandLine className="mr-3 w-8 h-8" />,
        body:
            "Pellentesque pellentesque, ipsum sit amet auctor accumsan, odio tortor bibendum massa, sit amet ultricies ex lectus scelerisque nibh. Ut non sodales odio.",
    },
    {
        title: "Experience Testing & Analytics",
        icon: <FcComboChart className="mr-3 w-8 h-8" />,
        body:
            "Pellentesque pellentesque, ipsum sit amet auctor accumsan, odio tortor bibendum massa, sit amet ultricies ex lectus scelerisque nibh. Ut non sodales odio.",
    },
    {
        title: "SEO & Marketing",
        icon: <FcStatistics className="mr-3 w-8 h-8" />,
        body:
            "Pellentesque pellentesque, ipsum sit amet auctor accumsan, odio tortor bibendum massa, sit amet ultricies ex lectus scelerisque nibh. Ut non sodales odio.",
    },
]

export const devGoals = [
    {
        title: "[MERN] Full Stack development",
        icon: <FcWorkflow className="mr-3 w-8 h-8" />,
        body:
            "Throughout my career I have always had a desire to level up in an area where I know that I can be more valuable as a developer. I have been studying in VanillaJS, NodeJS, ReactJS, GraphQL, MongoDB... full-time in an effort to master the MERN Stack. In all honesty, I love working with Javascript and I prefer React to Vue.js and Angular, however I will be working more with each of the three powerhouse frameworks over the course of 2021.",
    },
    {
        title: "Machine Learning with Python",
        icon: <FcMindMap className="mr-3 w-8 h-8" />,
        body:
            "Machine learning is the future! An ambition of mine is to learn and eventually utilize Python in my upcoming products and services. It will be a challenge, but I am am an adventure seeker and ",
    },
]

export const interests = [
    {
        title: "Automation & Test Driven Design",
        icon: <FcFlowChart className="mr-3 w-8 h-8" />,
        body:
            "While I do have some experience with Cypress and Jest for testing, my ultimate goal is to be a Test Driven Design Guru. Every component and each section of an application should be accounted for and in working order before ever reaching the end user. Ultimately, I plan to set aside time over the course of the next six months to better properly be a true TDD Developer.",
    },
    {
        title: "Machine Learning with Python",
        icon: <FcMindMap className="mr-3 w-8 h-8" />,
        body:
            "Machine learning is the future! An ambition of mine is to learn and eventually utilize Python in my upcoming products and services. It will be a challenge, but I am am an adventure seeker and love learning anything and everything in the tech. Unfortunately, there are only 24 hours in a day.",
    },
    {
        title: "Blockchain Programming",
        icon: <FcRadarPlot className="mr-3 w-8 h-8" />,
        body:
            "If I am being honest, I do not really know much about Blockchain programming, however I love learning and I will be studying this craft and at the very least build a few programs in the future.",
    },
    {
        title: "Dev Ops",
        icon: <FcOrgUnit className="mr-3 w-8 h-8" />,
        body:
            "Although I do have a Master's Degree in Information Systems, and I do work with tools such as Docker, AWS, Google Cloud, etc., there are still so many technologies that I'd like to get my hands on to build a greater depth of knowledge in Dev Ops.",
    },
]
export const designGoals = [
    {
        title: "Design for AI",
        icon: <FcWorkflow className="mr-3 w-8 h-8" />,
        body:
            "Have you ever watched CSI Las Vegas and laughed out loud at the interfaces and fake typing that go on while they are figuring out `who done it?` Well, the times are catching up with Sci-fi. Data based AI will be integrated into almost every product imaginable and I can't wait to take part.",
    },
    {
        title: "Behavioral Design",
        icon: <FcMindMap className="mr-3 w-8 h-8" />,
        body:
            "Design is much much more than just art, it's Science as well and learning the behaviors and habits of Internet Surfers is a huge treasure trove for marketers",
    },
]
export const technology = [
    {
        url: "#",
        icon: <FaSass className="sass w-20 h-20" />,
        caption: "Sass",
    },
    {
        url: "#",
        icon: <SiTailwindcss className="tailwind w-20 h-20" />,
        caption: "Tailwind",
    },
    {
        url: "#",
        icon: <FaReact className="react w-20 h-20" />,
        caption: "React",
    },
    {
        url: "#",
        icon: <SiGatsby className="gatsby w-20 h-20" />,
        caption: "Gatsby",
    },
    {
        url: "#",
        icon: <FaVuejs className="vue w-20 h-20" />,
        caption: "Vue",
    },
    {
        url: "#",
        icon: <SiNuxtDotJs className="nuxt w-20 h-20" />,
        caption: "Nuxt",
    },
    {
        url: "#",
        icon: <FaLaravel className="laravel w-20 h-20" />,
        caption: "Laravel",
    },
    {
        url: "#",
        icon: <FaNodeJs className="node w-20 h-20" />,
        caption: "Node",
    },
    {
        url: "#",
        icon: <SiGraphql className="graphql w-20 h-20" />,
        caption: "GraphQl",
    },
    {
        url: "#",
        icon: <SiGit className="git w-20 h-20" />,
        caption: "Git",
    },
    {
        url: "#",
        icon: <SiVisualstudio className="vscode w-20 h-20" />,
        caption: "vscode",
    },
    {
        url: "#",
        icon: <SiNetlify className="netlify w-20 h-20" />,
        caption: "netlify",
    },
]
export const menuList = [
    {
        id: "about",
        title: "",
        label: "About",
        path: "/",
        icon: <AiOutlineCoffee />,
    },
    {
        id: "blog",
        title: "",
        label: "Blog",
        path: "/blog",
        icon: <AiOutlineRead />,
    },
]
