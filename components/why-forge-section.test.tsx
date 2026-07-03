import { render, screen, within } from "@testing-library/react";

import { WhyForgeSection } from "./why-forge-section";

describe("WhyForgeSection", () => {
  it("renders the section heading and reasons", () => {
    render(<WhyForgeSection />);

    expect(
      screen.getByRole("heading", {
        name: /a component system built for speed, reuse, and clarity\./i,
      }),
    ).toBeTruthy();

    const section = screen.getByRole("region", { name: /why forge/i });
    expect(within(section).getByText(/Reusable building blocks/i)).toBeTruthy();
    expect(within(section).getByText(/Open-source friendly/i)).toBeTruthy();
    expect(within(section).getByText(/React and React Native ready/i)).toBeTruthy();
  });
});
