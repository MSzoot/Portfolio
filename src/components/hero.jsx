import msphoto from "../imgs/msv1.jpeg";
/* eslint-disable react/no-unescaped-entities */
export default function Hero() {
  return (
    <div className="hero mx-auto min-h-screen w-10/12 bg-base-100">
      <div className="hero-content flex-col-reverse gap-10 text-center md:text-left lg:flex-row">
        <div className="md:w-6/12">
          <h1 className="text-5xl font-bold ">Hi!</h1>
          <p className="py-6">
            I'm Martin, an IT technician based in Ipswich UK with an enduring
            passion for all things related to computer tinkering. Recently, I've
            discovered a new passion: coding. This exciting journey has ignited
            my creativity and fueled my drive to excel in the realm of
            programming.
          </p>
          <button className="btn-primary btn">Contact me </button>
        </div>
        <img src={msphoto} className="mt-10 max-w-md" />
      </div>
    </div>
  );
}
