export default function AboutSection() {
  return (
    <section className="flex flex-col lg:flex-row">
      <div className="w-full lg:w-1/3">
        <img
          src="/images/image-about-dark.jpg"
          alt="Dark furniture"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-full lg:w-1/3 p-16 flex flex-col justify-center">
        <h3 className="text-lg font-bold uppercase tracking-widest mb-4">
          About our furniture
        </h3>
        <p className="text-gray-400">
          Our multifunctional collection blends design and function to suit your
          individual taste. Make each room unique, or pick a cohesive theme that
          best express your interests and what inspires you. Find the furniture
          pieces you need, from traditional to contemporary styles or anything
          in between. Product specialists are available to help you create your
          dream space.
        </p>
      </div>
      <div className="w-full lg:w-1/3">
        <img
          src="/images/image-about-light.jpg"
          alt="Light furniture"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
}
