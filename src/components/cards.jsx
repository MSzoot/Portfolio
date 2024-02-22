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

const iconSize = 22;

const techIcons = {
  html: <SiHtml5 size={iconSize} />,
  css: <SiCss3 size={iconSize} />,
  javascript: <SiJavascript size={iconSize} />,
  react: <SiReact size={iconSize} />,
  daisyui: <SiDaisyui size={iconSize} />,
  tailwind: <SiTailwindcss size={iconSize} />,
};

const Cards = data.map((project, index) => {
  return (
    <div
      className={
        !project.finished
          ? "bg-base card border-2 border-base-300 text-slate-600 shadow-xl "
          : "bg-base card border-2 border-base-300 shadow-xl "
      }
      key={index}
    >
      <figure className={!project.finished ? "grayscale" : null}>
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
                  className="mr-2 flex -translate-x-2 flex-col items-center justify-center"
                  key={index}
                >
                  {icon}
                  <p className="text-xs">{tech}</p>
                </div>
              );
            })}
          </div>
          {project.finished ? (
            <div className="flex w-full items-center justify-end gap-4">
              <a
                href={project.git}
                className="flex items-center justify-center gap-1"
              >
                <SiGithub />
                Source Code
              </a>
              <a href={project.link}>
                <button className="btn-secondary btn">Live project</button>
              </a>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
});

export default Cards;
