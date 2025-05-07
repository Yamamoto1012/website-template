import type { Meta, StoryObj } from "@storybook/react";
import { TestView } from "./TestView";

const meta = {
	title: "Features/Test/TestView",
	component: TestView,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
} satisfies Meta<typeof TestView>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		title: "Test View",
	},
};

export const CustomTitle: Story = {
	args: {
		title: "カスタムタイトル",
		className: "bg-blue-50",
	},
};
