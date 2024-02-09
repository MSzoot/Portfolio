export default function Hero() {
  return (
    <div className="hero mx-auto min-h-screen w-10/12 bg-base-100">
      <div className="hero-content flex-col-reverse gap-10 text-center md:flex-row md:text-left">
        <div className="md:w-6/12">
          <h1 className="text-5xl font-bold ">Hi!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn-primary btn">Contact me </button>
        </div>
        <img
          src="/public/17074059682304nh1lou0.png"
          className="mt-10 max-w-sm"
        />
      </div>
    </div>
  );
}
