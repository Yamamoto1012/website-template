import { Card } from "@/components/ui/card";
import type * as React from "react";
import { twMerge } from "tailwind-merge";

// Propsの型定義
export type SnippetTemplateProps = {
	title?: string; // タイトルはオプショナル
	description?: string; // 説明文もオプショナル
	children: React.ReactNode; // スニペット本体
	className?: string; // Tailwindクラス追加用
};

// 名前付きエクスポートの関数コンポーネント
export const SnippetTemplate: React.FC<SnippetTemplateProps> = ({
	title = "コードスニペット",
	description = "",
	children,
	className = "",
}) => {
	// TailwindクラスをtwMergeで結合
	const merged = twMerge(
		"p-6 bg-white rounded shadow border border-gray-100",
		className,
	);

	return (
		<Card className={merged}>
			{/* タイトル表示 */}
			<h2 className="text-lg font-bold mb-2">{title}</h2>
			{/* 説明文があれば表示 */}
			{description && (
				<p className="text-sm text-gray-500 mb-4">{description}</p>
			)}
			{/* スニペット本体 */}
			<div>{children}</div>
		</Card>
	);
};
