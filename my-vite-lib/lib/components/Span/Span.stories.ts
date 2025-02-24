import type { Meta, StoryObj } from "@storybook/react";
import MySpan from ".";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof MySpan> = {
  title: "Components/MySpan",
  component: MySpan,
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    theme: {
      options: ["light", "dark"],
      table: {
        defaultValue: { summary: "light" },
      },
      control: { type: "select" }, // Dropdown to select theme
      description: "Select theme for the span", // Optional description
    },
    children: {
      control: "text", // Allows dynamic text input for `children`
      description: "Text content inside the span", // Optional description
    },
  },
  args: {
    children: "This is a default span", // Default children text for all stories
    theme: "light", // Default theme for all stories
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Helper function to create different span stories
const createSpanStory = (theme: "light" | "dark", label: string): Story => ({
  args: {
    theme,
    children: label,
  },
});

// Stories using the helper function
export const Default = createSpanStory("light", "This is a default span");
export const Dark = createSpanStory("dark", "This is a dark themed span");
export const Light = createSpanStory("light", "This is a light themed span");
