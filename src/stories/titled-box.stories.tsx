import { Meta, StoryObj } from "@storybook/react";
import { TitledBox } from "../components/atoms/titled-box/titled-box";

const meta = {
  title: "Example/Titled Box",
  component: TitledBox,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: {
    title: "Example title",
  },
} satisfies Meta<typeof TitledBox>;
export default meta;

type Story = StoryObj<typeof meta>;

export const WithButton: Story = {
  args: {
    title: "Example title",
    children: (
      <button
        style={{
          paddingBlock: "8px",
          width: "80px",
          backgroundColor: "lightblue",
          border: "none",
          borderRadius: "24px",
          marginBlock: "8px",
        }}
      >
        test
      </button>
    ),
  },
};
