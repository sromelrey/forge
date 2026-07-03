import { render, screen, within } from "@testing-library/react";

import { HeroSection } from "./hero-section";

describe("HeroSection", () => {
  it("renders the main Forge messaging", () => {
    render(<HeroSection />);

    expect(
      screen.getByRole("heading", {
        name: /build open, reusable components for modern react apps\./i,
      }),
    ).toBeTruthy();

    expect(
      screen.getByText(/forge is a clean, open-source friendly component system/i),
    ).toBeTruthy();
  });

  it("shows the primary and secondary call to action links", () => {
    render(<HeroSection />);

    const getStartedLink = screen.getByRole("link", { name: /get started/i });
    const learnMoreLink = screen.getByRole("link", { name: /learn more/i });

    expect(getStartedLink.getAttribute("href")).toBe("#get-started");
    expect(learnMoreLink.getAttribute("href")).toBe("#learn-more");
  });

  it("renders the key highlight badges", () => {
    render(<HeroSection />);

    const highlights = [
      "Open-source friendly",
      "React + React Native ready",
      "TypeScript + Tailwind",
    ];

    const list = screen.getByRole("list");
    for (const highlight of highlights) {
      expect(within(list).getByText(highlight)).toBeTruthy();
    }
  });

  it("shows the hero stats", () => {
    render(<HeroSection />);

    expect(screen.getAllByText("Components").length).toBeGreaterThan(0);
    expect(screen.getByText("React + RN")).toBeTruthy();
    expect(screen.getAllByText("Next.js").length).toBeGreaterThan(0);
  });
});
