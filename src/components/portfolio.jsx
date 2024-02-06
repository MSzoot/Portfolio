import Cards from "./cards";

export default function Portfolio() {
  return (
    <div className="container mx-auto">
      <h2 className="mb-10 text-center text-2xl font-bold">Projects</h2>
      <div className="m-auto grid w-10/12 gap-12 md:grid-cols-2">{Cards}</div>
    </div>
  );
}
