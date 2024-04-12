import KDCphoto from "../imgs/KDC.png";
import Nutricraft from "../imgs/Nutricraft.png";
import Coming from "../imgs/Coming.jpg";

const data = [
  {
    title: "Kesgrave Dental Care",
    desc: "KDC is a website crafted for a local dental practice. This multipage platform is not only fully responsive but also boasts captivating animations. Website is designed in accordance with the branding manual of KCD.",
    tStack: ["html", "css", "javascript", "bootstrap"],
    picture: KDCphoto,
    link: "https://kesgravedentalcare.com/",
    git: "https://github.com/MSzoot/Kesgrave-Dental-Care",
    finished: true,
  },
  {
    title: "NutriCraft AI",
    desc: "Nuticraft AI is a sophisticated React application designed to gather user data, including their dietary preferences and favorite ingredients. With this information in hand, it crafts personalized daily meal plan using the power of OpenAI. These plans are tailored to meet the user's nutritional needs and assist them in achieving their wellness goals.",
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
