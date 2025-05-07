import type { FC } from "react";
import { twMerge } from "tailwind-merge";

type Test2ViewProps = {
	/** コンポーネントのカスタムクラス名 */
	className?: string;
	/** タイトルテキスト */
	title?: string;
	/** 説明文 */
	description?: string;
};

/**
 * Test2Viewコンポーネント
 *
 * タイトルと説明文を表示するカード形式のコンポーネント。
 * カスタムスタイリングとコンテンツのカスタマイズが可能。
 */
export const Test2View: FC<Test2ViewProps> = ({
	className,
	title = "Test2 View",
	description = "This is a test component",
}) => {
	// ベースのスタイルとカスタムスタイルを結合
	const containerClassName = twMerge(
		"p-6 rounded-lg bg-white shadow-md transition-shadow hover:shadow-lg",
		className,
	);

	return (
		<div className={containerClassName}>
			<h2 className="text-2xl font-bold text-gray-900 mb-2">{title}</h2>
			<p className="text-gray-600 leading-relaxed">{description}</p>
		</div>
	);
};
