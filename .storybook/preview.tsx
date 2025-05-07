import React from "react";
import type { Preview } from "@storybook/react";
import "../app/globals.css";
import { Noto_Sans_JP } from "next/font/google";

const notoSansJP = Noto_Sans_JP({
	variable: "--font-noto-sans-jp",
	subsets: ["latin"],
	display: "swap",
	weight: ["400", "700"],
});

const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
	},
	decorators: [
		(Story) => (
			<div className={`${notoSansJP.variable} antialiased`}>
				<Story />
			</div>
		),
	],
};

export default preview;
