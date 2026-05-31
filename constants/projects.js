import {
  nextjsIcon as nextJs,
  Tailwind as tailwind,
  react,
  node as nodejs,
  express,
  MongoDB as mongodb,
  reactnative,
  firebase,
  redis,
  bullMq,
  nginx,
  aws,
  docker,
  postgres,
  actions,
  Supabase as supabase,
  socketIo as socket,
} from "../assets/icons";
import {
  realestateMarket as ProjectImage1,
  snappyChatImg as ProjectImage2,
  desoDomains,
  BusinessDirectoryImg,
  businessDirectIcon,
  bdImage1,
  bdImage2,
  bdImage3,
  bdImage4,
  bdImage5,
  taskFlow,
} from "../assets/images";

const projects = [
  {
    title: "Deso Domains Auction",
    type: "site",
    url: "https://desonames.xyz",
    image: desoDomains,
    alt: "Deso Domain Auction",
    topLink: true,
    fullDescription: [
      "Architected and launched a production domain auction platform on the Deso blockchain with real-time transfers and extensible auction flows.",
      "Implemented backend services with Node.js and Express, PostgreSQL for persistence, Redis for caching, and BullMQ for background processing.",
      "Built a responsive frontend using Next.js and Tailwind CSS and integrated Deso APIs for username/domain operations.",
      "Dockerized the platform and deployed on AWS EC2 with Nginx reverse proxy and automated CI/CD through GitHub Actions.",
    ],
    description:
      "Production blockchain domain auction platform with real-time transfers and extensible bidding.",
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
        name: "Bull MQ",
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
    title: "Task Flow Project Manager",
    type: "site",
    image: taskFlow,
    url: "https://task-flows.tech",
    gitRepo: "https://github.com/ZaelTesfaye/Task-Flow",
    alt: "Task Flow Project Manager app",
    topLink: true,
    description:
      "Multi-role project management platform with Admin, User, and API surfaces and full RBAC.",
    fullDescription: [
      "Designed a three-surface platform: Admin dashboard (Vite/React), User application (Next.js), and a shared Express REST API.",
      "Implemented role-based access control flows for User, Admin, and Super Admin routes.",
      "Containerized all services with Docker and deployed on AWS EC2 behind Nginx for reverse proxy and traffic routing.",
      "Integrated PostgreSQL-backed API services with authentication and validation pipelines suitable for production use.",
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
    topLink: true,
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
    topLink: true,
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
    image: BusinessDirectoryImg,
    url: "https://drive.google.com/file/d/1DBFsw5GAQP-AUv0FvwvgTyaiocXH01iv/view?usp=sharing",
    gitRepo: "https://github.com/ZaelTesfaye/Business-Directory",
    alt: "Business Directory app",
    topLink: true,
    description:
      "Cross-platform mobile app for local business discovery and owner self-service listing management.",
    fullDescription: [
      "Developed a React Native mobile app that helps users discover local businesses, view ratings, and access contact information.",
      "Implemented owner-facing listing workflows and core data flows for iOS and Android clients.",
      "Integrated Firebase for authentication and managed app data services.",
    ],
    stack: [
      {
        name: "React Native",
        icon: reactnative,
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
