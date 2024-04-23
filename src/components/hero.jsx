import msphoto from "../imgs/msv1.jpeg";
/* eslint-disable react/no-unescaped-entities */
export default function Hero() {
  return (
    <div className="hero min-h-screen bg-base-100">
      <div className="hero-content flex-col-reverse gap-10 text-center md:text-left lg:flex-row">
        <div className="w-10/12">
          <h1 className="text-5xl font-bold">Hello!</h1>
          <p className="py-6">
            I'm Martin, an IT technician based in Ipswich UK with an enduring
            passion for all things related to computer tinkering. Recently, I've
            discovered a new passion: coding. This exciting journey has ignited
            my creativity and fueled my drive to excel in the realm of
            programming.
          </p>
          <a className="btn-primary btn" href="#contact">
            Contact me{" "}
          </a>
        </div>
        <img src={msphoto} className="mt-10 max-w-xs md:max-w-md" />
      </div>
    </div>
  );
}
