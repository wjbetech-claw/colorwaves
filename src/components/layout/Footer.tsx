import React from "react";

export default function Footer() {
  return (
    <footer className="border-t border-base-300 bg-base-100/20 px-4 py-6 backdrop-blur-md md:px-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-2 text-center md:flex-row md:text-left">
        <p className="font-body text-sm text-base-content">Colorwaves</p>
        <p className="font-body text-xs text-base-content">
          Sound-color explorer built with React, TypeScript, Tailwind, and daisyUI.
        </p>
      </div>
    </footer>
  );
}
