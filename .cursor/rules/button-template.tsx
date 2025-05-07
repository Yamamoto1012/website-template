import * as React from "react";
import { Button as ShadcnButton } from "@/components/ui/button"; // shadcn/uiのButtonプリミティブ
import { twMerge } from "tailwind-merge";

// ボタンのバリアント種別
type ButtonVariant = "default" | "outline" | "ghost" | "destructive";

// Propsの型定義（interface推奨）
export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant; // バリアントはオプショナル
  className?: string; // Tailwindクラス追加用
};

// 名前付きエクスポートの関数コンポーネント
export const Button: React.FC<ButtonProps> = ({
  variant = "default", // デフォルト値
  className = "",
  type = "button", // typeもデフォルト指定
  children,
  ...props
}) => {
  // variantごとのTailwindクラス
  const variantClass: Record<ButtonVariant, string> = {
    default: "bg-primary text-white hover:bg-primary/90",
    outline: "border border-primary text-primary bg-white hover:bg-primary/10",
    ghost: "bg-transparent text-primary hover:bg-primary/5",
    destructive: "bg-destructive text-white hover:bg-destructive/80",
  };

  // twMergeでクラス結合
  const merged = twMerge(
    "px-4 py-2 rounded transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50",
    variantClass[variant],
    className
  );

  return (
    <ShadcnButton className={merged} type={type} {...props}>
      {children}
    </ShadcnButton>
  );
};