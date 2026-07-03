import type { Meta, StoryObj } from "@storybook/react";

import { HeroSection } from "./hero-section";

const meta: Meta<typeof HeroSection> = {
  title: "Landing/HeroSection",
  component: HeroSection,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Forge hero section for the homepage. It introduces the brand, highlights the stack, and provides two clear call-to-action buttons.",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof HeroSection>;

export const Default: Story = {
  render: () => <HeroSection />,
};
