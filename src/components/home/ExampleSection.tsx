import React from "react";
import ExampleSoundCard from "./ExampleSoundCard";

export default function ExampleSection() {
  return (
    <section id="example" className="min-h-screen px-4 py-16">
      <div className="mx-auto flex min-h-screen w-full max-w-6xl items-center justify-center">
        <div className="w-full text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-primary md:text-4xl">
            Compare real generated noise colors
          </h2>
          <p className="font-body mx-auto mt-3 max-w-2xl leading-relaxed text-base-content">
            Instead of a stock ambient clip, this demo renders the noise curve in your browser so casual listeners can
            hear how white, pink, brown, blue, and violet noise actually differ.
          </p>
          <div className="mx-auto mt-8 max-w-5xl text-left">
            <ExampleSoundCard />
          </div>
        </div>
      </div>
    </section>
  );
}
