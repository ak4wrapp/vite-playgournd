import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import Button from ".";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/MyButton",
  component: Button,
  tags: ["autodocs"],
  args: {
    onClick: fn(),
    children: "Default Button", // Default children text for all variants
  },
  argTypes: {
    theme: {
      control: {
        type: "radio",
        options: ["primary", "secondary", "dark", "light"],
      },
      description: "Button theme", // Add description for clarity in the Storybook UI
    },
    children: {
      control: "text", // Allows changing text directly from the Storybook UI
      description: "Button label text",
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// Helper function to create different button stories
const createButtonStory = (
  theme: "primary" | "secondary" | "dark" | "light",
  label: string
): Story => ({
  args: {
    theme,
    children: label,
  },
});

// Stories using the helper function
export const Primary = createButtonStory("primary", "Primary Button");
export const Secondary = createButtonStory("secondary", "Secondary Button");
export const Dark = createButtonStory("dark", "Dark Button");
export const Light = createButtonStory("light", "Light Button");
