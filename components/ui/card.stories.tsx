import type { Meta, StoryObj } from "@storybook/react";
import {
	Card,
	CardHeader,
	CardFooter,
	CardTitle,
	CardAction,
	CardDescription,
	CardContent,
} from "./card";

const meta: Meta<typeof Card> = {
	title: "UI/Card",
	component: Card,
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
	render: () => (
		<Card>
			<CardHeader>
				<CardTitle>カードタイトル</CardTitle>
				<CardAction>
					{/* biome-ignore lint/a11y/useButtonType: <explanation> */}
					<button>アクション</button>
				</CardAction>
				<CardDescription>カードの説明文です。</CardDescription>
			</CardHeader>
			<CardContent>
				<p>ここにカードの内容が入ります。</p>
			</CardContent>
			<CardFooter>
				{/* biome-ignore lint/a11y/useButtonType: <explanation> */}
				<button>フッターアクション</button>
			</CardFooter>
		</Card>
	),
};
