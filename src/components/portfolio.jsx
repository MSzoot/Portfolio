import Cards from "./cards";

export default function Portfolio() {
  return (
    <div className="mx-auto mt-32 w-10/12" id="projects">
      <h2 className="mb-10 text-center text-4xl font-bold">Projects</h2>
      <p className="mb-10 text-center">
        These projects highlight my skills and creativity, showcasing the work
        I'm most proud of. Additional smaller learning projects can be found on
        my GitHub.
      </p>
      <div className="grid justify-center gap-12 lg:grid-cols-2">{Cards}</div>
    </div>
  );
}
