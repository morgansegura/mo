import React from "react"
import {
    FcMultipleDevices,
    FcCommandLine,
    FcComboChart,
    FcStatistics,
    FcWorkflow,
    FcMindMap,
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

export const interests = [
    {
        title: "Automation & Test Driven Design",
        icon: <FcWorkflow className="mr-3 w-8 h-8" />,
        body:
            "While I do have some experience with Cypress and Jest for testing, my ultimate goal is to be a Test Driven Design Guru. Every component and each section of an application should be accounted for and in working order before ever reaching the end user. Ultimately, I plan to set aside time over the course of the next six months to better properly be a true TDD Developer.",
    },
    {
        title: "Machine Learning",
        icon: <FcMindMap className="mr-3 w-8 h-8" />,
        body:
            "Machine learning is the future! An ambition of mine is to learn and eventually utilize Python in my upcoming products and services. It will be a challenge, but I am am an adventure seeker and ",
    },
]
export const currents = [
    {
        title: "Full Stack Development",
        icon: <FcWorkflow className="mr-3 w-8 h-8" />,
        body:
            "I have decided to switch stacks. I have been using PHP, Laravel and Vue.jsI have been working diligently on full stack developement with React and GraphQL with Node and MongoDB. To be frank, I love React! I have dedicated my ",
    },
    {
        title: "Machine Learning",
        icon: <FcMindMap className="mr-3 w-8 h-8" />,
        body:
            "Machine learning is the future! An ambition of mine is to become learn and eventually utilize Python in my upcoming products and services.",
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
