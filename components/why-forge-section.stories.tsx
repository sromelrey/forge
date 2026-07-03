import type { Meta, StoryObj } from "@storybook/react";

import { WhyForgeSection } from "./why-forge-section";

const meta: Meta<typeof WhyForgeSection> = {
  title: "Landing/WhyForgeSection",
  component: WhyForgeSection,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "A supporting landing section that explains why Forge exists and highlights the core value of the system.",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof WhyForgeSection>;

export const Default: Story = {
  render: () => <WhyForgeSection />,
};
