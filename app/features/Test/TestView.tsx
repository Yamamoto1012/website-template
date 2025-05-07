import type { FC } from "react";
import { twMerge } from "tailwind-merge";

interface TestViewProps {
	className?: string;
	title?: string;
}

export const TestView: FC<TestViewProps> = ({
	className,
	title = "Test View",
}) => {
	return (
		<div className={twMerge("p-4 rounded-lg bg-white shadow-sm", className)}>
			<h1 className="text-2xl font-bold text-gray-900">{title}</h1>
		</div>
	);
};
