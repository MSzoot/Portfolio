import data from "../assets/Data";

const icons = {
  html: "src/assets/svg/html-5.svg",
  css: "src/assets/svg/css-3.svg",
  javascript: "src/assets/svg/javascript.svg",
  react: "src/assets/svg/react.svg",
  daisyui: "src/assets/svg/daisyUI.svg",
  tailwind: "src/assets/svg/tailwindcss-icon.svg",
};

const getTechIconPath = (name) => {
  const path = icons[name];
  return path;
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
        <div className="card-actions justify-between">
          <div className="flex items-center justify-center gap-1 rounded-md bg-base-100 p-1 px-2 ">
            {project.tStack.map((tech, techIndex) => {
              return (
                <div
                  className="justify-cente tooltip items-center"
                  data-tip={tech}
                  key={techIndex}
                >
                  <img src={getTechIconPath(tech)} className="w-6"></img>
                </div>
              );
            })}
          </div>
          <div className="flex items-center gap-4">
            <a href="www.github.com" className="">
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
