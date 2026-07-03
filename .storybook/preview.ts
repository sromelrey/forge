import type { Preview } from "@storybook/react";

import "../app/globals.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: "centered",
    backgrounds: {
      default: "forge",
      values: [
        {
          name: "forge",
          value: "#f8f6f1",
        },
      ],
    },
  },
};

export default preview;
