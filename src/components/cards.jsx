import data from "../assets/Data";
import {
  SiDaisyui,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiGithub,
} from "react-icons/si";

const iSize = 30;

const techIcons = {
  html: <SiHtml5 size={iSize} />,
  css: <SiCss3 size={iSize} />,
  javascript: <SiJavascript size={iSize} />,
  react: <SiReact size={iSize} />,
  daisyui: <SiDaisyui size={iSize} />,
  tailwind: <SiTailwindcss size={iSize} />,
};

const Cards = data.map((project, index) => {
  return (
    <div className="card bg-base-300 shadow-xl " key={index}>
      <figure>
        <img
          src="https://daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg"
          alt="Album"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{project.title}</h2>
        <p>{project.desc}</p>
        <div className="justify-left card-actions">
          <div className="flex items-center justify-center gap-1 p-1 px-2 ">
            {project.tStack.map((tech, index) => {
              const icon = techIcons[tech];
              return (
                <div
                  className="mr-2 flex flex-col items-center justify-center"
                  key={index}
                >
                  {icon}
                  <p className="text-xs">{tech}</p>
                </div>
              );
            })}
          </div>
          <div className="flex w-full items-center justify-end gap-4">
            <a
              href="www.github.com"
              className="flex items-center justify-center gap-1"
            >
              <SiGithub />
              Source Code
            </a>
            <button className="btn-secondary btn">Live project</button>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Cards;
