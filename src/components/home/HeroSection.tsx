import ColorwavesTitle from "../ColorwavesTitle";

type HeroSectionProps = {
  onBrowseLibrary: () => void;
};

export default function HeroSection({ onBrowseLibrary }: HeroSectionProps) {
  return (
    <section
      id="home"
      className="grid min-h-[calc(100vh-10rem)] place-items-center px-4 py-16"
      style={{ minHeight: "calc(100vh - 10rem)" }}>
      <div className="mx-auto grid w-full max-w-6xl place-items-center">
        <div className="mx-auto flex w-full max-w-4xl flex-col items-center text-center">
          <span className="font-display items-center badge badge-outline border-base-300 px-4 py-4 text-[0.8rem] uppercase tracking-[0.15em] text-base-content">
            Immersive sound by color
          </span>
          <ColorwavesTitle className="mx-auto mt-6 w-fit text-center" />
          <p className="font-body mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-base-content">
            Learn what white, pink, brown, black, and other noise labels actually mean, compare how they sound, and
            separate research-backed use cases from internet folklore.
          </p>
          <div className="mt-8 flex justify-center">
            <button className="btn btn-primary btn-wide" onClick={onBrowseLibrary}>
              Browse the library
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
