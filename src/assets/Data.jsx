import KDCphoto from "../imgs/KDC.png";
import Nutricraft from "../imgs/Nutricraft.png";
import Coming from "../imgs/Coming.jpg";

const data = [
  {
    title: "Kesgrave Dental Care",
    desc: "Website I crafted for a local dental practice. KDC it's fully responsive, with engaging animations and excellent performance. The site is designed in accordance with the branding manual of the brand.",
    tStack: ["html", "css", "javascript", "bootstrap"],
    picture: KDCphoto,
    link: "https://kesgravedentalcare.com/",
    git: "https://github.com/MSzoot/Kesgrave-Dental-Care",
    finished: true,
  },
  {
    title: "NutriCraft AI",
    desc: "Nuticraft AI is an React application aimed at offering users a straightforward one-day diet plan. It collects data regarding the user's weight, height, and activity level, then computes their daily nutritional requirements, taking into account their dietary preferences and favorite ingredients. With this data, it generates personalized daily meal plans using the capabilities of OpenAI. These plans are customized to fulfill users' nutritional needs and support them in reaching their wellness objectives.",
    tStack: ["html", "css", "javascript", "react", "tailwind", "daisyui"],
    picture: Nutricraft,
    link: "https://nutricraftai.netlify.app/",
    git: "https://github.com/MSzoot/NutriCraft-Ai",
    finished: true,
  },
  {
    title: "Cooming soon - ",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ex nam iste corporis! Autem dolore iusto ab laudantium ipsam explicabo, ratione accusantium hic, voluptatem molestias similique ducimus. Suscipit, rerum voluptate.",
    tStack: ["html", "css", "javascript", "react"],
    picture: Coming,
    link: "soon...",
    git: "soon.",
    finished: false,
  },
];

export default data;
