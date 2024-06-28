import msphoto from "../imgs/msv1-removebg.png";
/* eslint-disable react/no-unescaped-entities */
export default function Hero() {
  return (
    <div className="hero mx-auto min-h-screen bg-base-100 lg:w-10/12">
      <div className="hero-content flex-col-reverse gap-10 text-center md:text-left lg:flex-row">
        <div className="w-10/12">
          <h1 className="text-5xl font-bold">Hello!</h1>
          <p className="py-6">
            I'm Martin, a front-end developer from Ipswich. My interest is
            deeply rooted in all things related to computer tinkering. Formerly
            an IT technician focused on hardware, I recently began expanding my
            skills, one of which was coding, and it has quickly become a true
            passion of mine. This journey has ignited my creativity and fueled
            my drive to excel in the realm of programming.
          </p>
          <a className="btn-primary btn" href="#contact">
            Contact me
          </a>
        </div>
        <img src={msphoto} className="mt-10 max-w-xs md:max-w-md" />
      </div>
    </div>
  );
}
