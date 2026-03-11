import React from "react";
import ExampleSoundCard from "./ExampleSoundCard";

export default function ExampleSection() {
  return (
    <section id="example" className="min-h-screen px-4 py-16">
      <div className="mx-auto flex min-h-screen w-full max-w-6xl items-center justify-center">
        <div className="w-full text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-primary md:text-4xl">
            Hear the featured sound profile
          </h2>
          <p className="font-body mx-auto mt-3 max-w-2xl leading-relaxed text-base-content">
            This third full-screen section is your live product preview: one polished card, no clutter.
          </p>
          <div className="mx-auto mt-8 max-w-2xl text-left">
            <ExampleSoundCard />
          </div>
        </div>
      </div>
    </section>
  );
}
