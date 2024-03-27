import { Meta, StoryObj } from "@storybook/react";
import { Search as SearchComponent } from "../components/molecules/search/search";

const meta = {
  title: "Example/Search",
  component: SearchComponent,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof SearchComponent>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Search: Story = {
  args: {
    setValue: () => {},
  },
};
