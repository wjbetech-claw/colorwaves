import ColorwavesTitle from "../ColorwavesTitle";

type HeroSectionProps = {
  onViewExample: () => void;
};

export default function HeroSection({ onViewExample }: HeroSectionProps) {
  return (
    <section id="home" className="hero min-h-screen px-4 py-16">
      <div className="hero-content w-full max-w-6xl text-center">
        <div>
          <span className="font-display items-center badge badge-outline border-base-300 px-4 py-4 text-[0.8rem] uppercase tracking-[0.15em] text-base-content">
            Immersive sound by color
          </span>
          <ColorwavesTitle className="mt-6" />
          <p className="font-body mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-base-content">
            A clean and modern listening experience where each tone has a visual identity. Discover how color can shape
            focus, mood, and atmosphere.
          </p>
          <button className="btn btn-primary btn-wide mt-8" onClick={onViewExample}>
            Explore the science
          </button>
        </div>
      </div>
    </section>
  );
}
