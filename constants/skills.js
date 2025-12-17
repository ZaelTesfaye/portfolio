import {
  node as nodejs,
  typescript,
  react,
  reactnative as reactNative,
  nextjsIcon as nextJs,
  MongoDB as mongodb,
  firebase,
  postgres,
  Supabase as supabase,
  express,
  mysql as mySql,
  Tailwind as tailwind,
  cpp,
  java,
  javascript,
  git,
  aws,
  terraform,
  ansible,
  kubernetes as kubernetest,
  docker,
  actions,
  azure,
} from "../assets/icons";

const devSKills = {
  categories: [
    {
      title: "Frontend Dev't With",
      skills: [
        { name: "React", icon: react },
        { name: "Next.js", icon: nextJs },
        { name: "React Native", icon: react },
        { name: "TypeScript", icon: typescript },
        { name: "Tailwind", icon: tailwind },
      ],
    },
    {
      title: "Backend Dev't With",
      skills: [
        { name: "Node.js", icon: nodejs },
        { name: "Express", icon: express },
        { name: "MongoDB", icon: mongodb },
        { name: "MySQL", icon: mySql },
        { name: "Firebase", icon: firebase },
        { name: "Postgres", icon: postgres },
      ],
    },
    {
      title: "DevOps",
      skills: [
        { name: "Docker", icon: docker },
        { name: "AWS", icon: aws },
        { name: "Github Actions", icon: actions },
        { name: "Kubernetes", icon: kubernetest },
        // { name: 'Azure', icon: azure },
        { name: "Terraform", icon: terraform },
      ],
    },
  ],
};

export default devSKills;
