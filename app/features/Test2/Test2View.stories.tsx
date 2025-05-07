import type { Meta, StoryObj } from "@storybook/react";
import { Test2View } from "./Test2View";

const meta = {
	title: "Features/Test2/Test2View",
	component: Test2View,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
} satisfies Meta<typeof Test2View>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		title: "Test2 View",
		description: "This is a test component",
	},
};

export const CustomContent: Story = {
	args: {
		title: "カスタムタイトル",
		description: "カスタムの説明文です",
		className: "bg-blue-50",
	},
};
