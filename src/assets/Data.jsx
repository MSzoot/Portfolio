import KDCphoto from "../imgs/KDC.webp";
import Nutricraft from "../imgs/Nutricraft.webp";
import Coming from "../imgs/Coming.webp";
import Portfolio from "../imgs/Portfolio.webp";

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
    title: "Marcinszot.com",
    desc: "This personal portfolio website showcases a sleek, minimalistic design. Built with React, it supports dark and light theme. The site is fully responsive, performance-optimized, and adheres to best coding practices.",
    tStack: ["html", "css", "javascript", "react", "tailwind", "daisyui"],
    picture: Portfolio,
    link: "https://marcinszoot.netlify.app/",
    git: "https://github.com/MSzoot/Portfolio",
    finished: true,
  },
  {
    title: "HuryUpGift.com - Comming Soon",
    desc: "HurryUpGift is a React application designed to help users find the perfect gift for any occasion. By selecting a person and providing a brief description, such as 'cat-loving nerd', users receive AI-generated gift suggestions tailored to the recipient's personality. The app leverages the Amazon affiliate program for seamless purchasing and revenue generation. With its personalized approach, HurryUpGift simplifies gift shopping and ensures that users find the ideal present quickly and easily.",
    tStack: ["html", "css", "javascript", "react"],
    picture: Coming,
    link: "soon...",
    git: "soon.",
    finished: false,
  },
];

export default data;
