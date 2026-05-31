import {
  python,
  go,
  node as nodejs,
  typescript,
  react,
  reactnative as reactNative,
  nextjsIcon as nextJs,
  MongoDB as mongodb,
  postgres,
  express,
  mysql as mySql,
  Tailwind as tailwind,
  javascript,
  aws,
  kubernetes as kubernetest,
  docker,
  actions,
  redis,
  nginx,
} from "../assets/icons";

const devSKills = {
  categories: [
    {
      title: "Languages & Frontend",
      skills: [
        { name: "JavaScript", icon: javascript },
        { name: "TypeScript", icon: typescript },
        { name: "Go", icon: go },
        { name: "Python", icon: python },
        { name: "React", icon: react },
        { name: "Next.js", icon: nextJs },
        { name: "Tailwind", icon: tailwind },
      ],
    },
    {
      title: "Backend & Data",
      skills: [
        { name: "Node.js", icon: nodejs },
        { name: "Express", icon: express },
        { name: "REST APIs", icon: express },
        { name: "Postgres", icon: postgres },
        { name: "MySQL", icon: mySql },
        { name: "Redis", icon: redis },
        { name: "MongoDB", icon: mongodb },
      ],
    },
    {
      title: "DevOps & Infra",
      skills: [
        { name: "Docker", icon: docker },
        { name: "AWS", icon: aws },
        { name: "Nginx", icon: nginx },
        { name: "Github Actions", icon: actions },
        { name: "Kubernetes", icon: kubernetest },
        { name: "React Native", icon: reactNative },
        { name: "Deso Integration", icon: aws },
      ],
    },
  ],
};

export default devSKills;
