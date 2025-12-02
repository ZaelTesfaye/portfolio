import ProjectImage1 from "../assets/images/project2.png";
import nextJs from "../assets/images/nextjs-icon.png";
import supabase from "../assets/images/Supabase.png";
import tailwind from "../assets/images/Tailwind.png";
import ProjectImage2 from "../assets/images/project1.png";
import react from "../assets/images/react.png";
import nodejs from "../assets/images/node.png";
import desoDomains from "../assets/images/desoDomains.png";
import express from "../assets/images/express.png";
import mongodb from "../assets/images/MongoDB.png";
import ProjectImage3 from "../assets/images/project3.png";
import reactNative from "../assets/images/reactnative.png";
import firebase from "../assets/images/firebase.png";
import businessDirectIcon from "../assets/images/businessDirectIcon.png";
import bdImage1 from "../assets/images/bdImage1.png";
import bdImage2 from "../assets/images/bdImage2.png";
import bdImage3 from "../assets/images/bdImage3.png";
import bdImage4 from "../assets/images/bdImage4.png";
import bdImage5 from "../assets/images/bdImage5.png";
import taskFlowImage from "../assets/images/task-flow.png";
import redis from "../assets/images/redis.png";
import bullMq from "../assets/images/bullMq.ico";
import nginx from "../assets/images/nginx.svg";
import aws from "../assets/images/aws.png";
import docker from "../assets/images/docker.png";
import postgres from "../assets/images/postgres.png";
import actions from "../assets/images/actions.png";
import socket from "../assets/images/socket-io.png";

const projects = [
  {
    title: "Deso Domains Auction",
    type: "site",
    url: "https://name-swap.vercel.app",
    image: desoDomains,
    alt: "Deso Domain Auction",
    fullDescription: [
      "Designed & Built from scratch an advanced domain auction platform on the deso blockchain that allows exchanging of domains names through instant transfers or an extensible auction.",
      "Domains are the most valuable assets on the blockchain, serving as a shorter representation for wallet addresses, a username for Deso based social medias and a ticker for Deso based tokens, yet had no way for exchanging them.",
      "The platform enables users to buy and sell usernames through instant transfers or through an auction where users bid on a doamin for a period of time with an option to extend it with each bid.",
      "Built with Next Js for the frotnend with Tailwind for styling and Node/Express for the backend with Redis for caching and Bull MQ for handling background jobs.",
    ],
    description:
      "Designed & Built from scratch an advanced domain auction platform on the deso blockchain.",
    stack: [
      {
        name: "Next Js",
        icon: nextJs,
      },
      {
        name: "Express JS",
        icon: express,
      },
      {
        name: "Postgres",
        icon: postgres,
      },
      {
        name: "Tailwind",
        icon: tailwind,
      },
      {
        name: "Redis",
        icon: redis,
      },
      {
        name: "Blull MQ",
        icon: bullMq,
      },
      {
        name: "AWS",
        icon: aws,
      },
      {
        name: "Docker",
        icon: docker,
      },
      {
        name: "Github Actions",
        icon: actions,
      },
    ],
  },

  {
    title: "Task Flow Project Managerp",
    type: "site",
    image: taskFlowImage,
    url: "https://task-flow-lovat-seven.vercel.app/dashboard/",
    gitRepo: "https://github.com/ZaelTesfaye/Task-Flow",
    alt: "Task Flow Project Manager app",
    description:
      "A project management app that helps teams assign & manage tasks and collaborate on projects effectively.",
    fullDescription: [
      "A project management web app that helps teams assign & manage tasks and collaborate on projects effectively.",
      "The project has 3 main sections, Admin Site built with vite/react, User Site built with nextJs & Backend API with Express JS with  role based access (User, Admin, & Super-Admin) all built with industry standard practices. ",
      "Containerized with docker and Depoyed to AWS EC2 with nginx infront of it for load balancing and reverse proxy.",
      "The user site leverages Next.js for server-side rendering, routing, and SEO optimization, with Tailwind CSS for responsive design, Zustand for lightweight state management, and custom hooks for data fetching and modals",
      "The backend API, built with Express.js, incorporates Prisma ORM for type-safe database interactions with PostgreSQL, JWT-based authentication , CORS handling, and structured routes Role-based access control ensures secure endpoint, with validation schemas using Joi",
    ],
    stack: [
      {
        name: "React",
        icon: react,
      },
      {
        name: "Next Js",
        icon: nextJs,
      },
      {
        name: "Nginx",
        icon: nginx,
      },
      {
        name: "Docker",
        icon: docker,
      },
      {
        name: "Express",
        icon: express,
      },
      {
        name: "Postgres",
        icon: postgres,
      },
      {
        name: "Aws",
        icon: aws,
      },
      {
        name: "Github Actions",
        icon: actions,
      },
    ],
    credentials: {
      username: "teszael14@gmail.com",
      password: "test",
    },
  },
  {
    title: "Snappy Chat",
    type: "site",
    image: ProjectImage2,
    url: "https://chat-on-snappy.netlify.app/login",
    gitRepo: "https://github.com/ZaelTesfaye/Chat-App",
    alt: "Chat application",
    description:
      "A chat app that uses web socket connection to enable real time chat among users.",
    fullDescription: [
      "A simple chat app that uses web socket connection to enable real time chat among users with Google & Email authentication.",
      "Built with React for the frontend and Node JS with Express for the backend and MongoDB for storing user data.",
      "Uses web socket connection for real-time communication, an event driven protocol for real-time communication",
    ],
    stack: [
      {
        name: "React",
        icon: react,
      },
      {
        name: "Node JS",
        icon: nodejs,
      },
      {
        name: "Express JS",
        icon: express,
      },
      {
        name: "Socket-Io",
        icon: socket,
      },
      {
        name: "MongoDB",
        icon: mongodb,
      },
    ],
    credentials: {
      username: "test",
      password: "test",
    },
  },
  {
    title: "Real estate Marketplace",
    type: "site",
    image: ProjectImage1,
    url: "https://next-market-placell.vercel.app/",
    gitRepo: "https://github.com/ZaelTesfaye/Next-Market-place",
    alt: "Real estate Marketplace app",
    description:
      "Real-estate market platform that allows users to post, edit and access properties for sell and rent in one place.",
    fullDescription: [
      "Real-estate market platform that allows users to post, edit and access properties for sell and rent in one place.",
      "Built with Next Js for the frontend and Supabase for authentication and Postgres database.",
    ],
    stack: [
      {
        name: "Next Js",
        icon: nextJs,
      },
      {
        name: "Supabase",
        icon: supabase,
      },
      {
        name: "Tailwind",
        icon: tailwind,
      },
    ],
    credentials: {
      username: "teszael14@gmail.com",
      password: "test",
    },
  },
  {
    title: "Business Directory",

    type: "app",
    image: ProjectImage3,
    url: "https://drive.google.com/file/d/1DBFsw5GAQP-AUv0FvwvgTyaiocXH01iv/view?usp=sharing",
    gitRepo: "https://github.com/ZaelTesfaye/Business-Directory",
    alt: "Business Directory app",
    description:
      "A cross platform mobile app that serves as one place to access details & rating of local businesses and for business owners to promote their businesses.",
    fullDescription: [
      "A cross platform mobile app, that serves as one place to access details & rating of local businesses and for business owners to promote their businesses.",
      "Built with React Native for cross platform compatiblity &  Firebase for authentication and database.",
    ],
    stack: [
      {
        name: "React Native",
        icon: react,
      },
      {
        name: "Firebase",
        icon: firebase,
      },
    ],
    preview: {
      previewPath: "business-directory",
      previewImages: [bdImage1, bdImage2, bdImage3, bdImage4, bdImage5],
      previewIcon: businessDirectIcon,
      previewDescription:
        "Business Directory is your go-to mobile app for discovering local businesses in your area! Whether you're looking for the best coffee shop, reliable service providers, or unique stores, our app helps you find businesses nearby with ease. With access to detailed information, ratings, and reviews from real customers, you can make informed decisions when choosing where to shop, dine, or hire services. With Business Directory, the best of your local community is just a tap away. Whether you're a customer looking for the best spots in town or a business owner wanting to connect with potential clients, our app brings everyone together in one easy-to-use platform.\n" +
        "\n" +
        " Download Business Directory today and get access to all the local businesses around you!\n" +
        "\n",
    },
  },
];
export default projects;
