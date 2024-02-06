export default function Hero() {
  return (
    <div className="hero m-auto min-h-screen w-10/12 bg-base-100">
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
          src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
          className="max-w-lg"
        />
      </div>
    </div>
  );
}
