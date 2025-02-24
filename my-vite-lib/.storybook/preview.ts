import type { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    layout: "centered",
    tags: ["autodocs"], // Its not working , TODO check why
    // argTypes: {},
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
