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
import businessDirectIcon from "../assets/images/businessDirectIcon.png"
import bdImage1 from "../assets/images/bdImage1.png"
import bdImage2 from "../assets/images/bdImage2.png"
import bdImage3 from "../assets/images/bdImage3.png"
import bdImage4 from "../assets/images/bdImage4.png"
import bdImage5 from "../assets/images/bdImage5.png"


const projects = [
    {
        title: "Deso Domains Auction",
        type: "site",
        url: "https://name-swap.vercel.app",
        image: desoDomains,
        alt: "Deso Domain Auction",
        description: "Built from scratch with a modern design, DesoDomains.xyz is the most advanced auction platform on the deso blockchain that allows exchanging of domains names through instant transfers or auction of extensible duration.",
        stack: [
            {
                name: "Next Js",
                icon: nextJs
            }, {
                name: "Express JS",
                icon: express
            },{
                name: "Tailwind",
                icon: tailwind
            },
        ],

    },
    
    {
        title: "Snappy Chat",
        type: "site",
        image: ProjectImage2,
        url: "https://chat-on-snappy.netlify.app/login",
        gitRepo: "https://github.com/ZaelTesfaye/Chat-App",
        alt: "Chat application",
        description: "A chat app that uses web socket connection to enable real time chat among users.",
        stack: [
            {
                name: "React",
                icon: react
            }, {
                name: "Node JS",
                icon: nodejs
            },
            {
                name: "Express JS",
                icon: express
            }, {
                name: "MongoDB",
                icon: mongodb
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
        url: "https://next-market-place.vercel.app/",
        gitRepo: "https://github.com/ZaelTesfaye/Next-Market-place",
        alt: "Real estate Marketplace app",
        description: "Real-estate market platform that allows users to post, edit and access properties for sell and rent in one place.",
        stack: [
            {
                name: "Next Js",
                icon: nextJs
            }, {
                name: "Supabase",
                icon: supabase
            },{
                name: "Tailwind",
                icon: tailwind
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
        description: "A cross platform mobile app that serves as one place to access details & rating of local businesses and for " +
            "business owners to post and manage their businesses.",
        stack: [
            {
                name: "React Native",
                icon: reactNative
            }, {
                name: "Firebase",
                icon: firebase
            },

        ],
        credentials: {
            username: "Google Sign in",
            password: "Google Sign in",
        },
        preview: {
            previewPath: "business-directory",
            previewImages: [bdImage1, bdImage2, bdImage3, bdImage4, bdImage5],
            previewIcon: businessDirectIcon,
            previewDescription: "Business Directory is your go-to mobile app for discovering local businesses in your area! Whether you're looking for the best coffee shop, reliable service providers, or unique stores, our app helps you find businesses nearby with ease. With access to detailed information, ratings, and reviews from real customers, you can make informed decisions when choosing where to shop, dine, or hire services. With Business Directory, the best of your local community is just a tap away. Whether you're a customer looking for the best spots in town or a business owner wanting to connect with potential clients, our app brings everyone together in one easy-to-use platform.\n" +
                "\n" +
                " Download Business Directory today and get access to all the local businesses around you!\n" +
                "\n"
        }

    }
]
export default projects;