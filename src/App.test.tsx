import React from "react";
import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import App from "./App";

afterEach(() => {
  cleanup();
  window.history.pushState({}, "", "/");
});

describe("Colorwaves routes", () => {
  it("renders the home page hero and generated demo", () => {
    window.history.pushState({}, "", "/");

    render(<App />);

    expect(screen.getByText(/learn what white, pink, brown, black/i)).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /compare real generated noise colors/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /play pink noise/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Black Noise" })).toBeInTheDocument();
  });

  it("renders a research-gap detail page for black noise", () => {
    window.history.pushState({}, "", "/colors/black");

    render(<App />);

    expect(screen.getByRole("heading", { name: "Black Noise" })).toBeInTheDocument();
    expect(screen.getByText(/no single canonical playback file/i)).toBeInTheDocument();
    expect(screen.getByText(/not well established as a standardized evidence-based category/i)).toBeInTheDocument();
  });
});
