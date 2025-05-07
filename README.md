# Website Template for Next.js

Next.js 15（App Router）と TypeScript をベースに、Tailwind CSS と shadcn/ui を組み合わせたすぐに使えるウェブサイトテンプレートです。

## 主な特徴

* **Next.js 15（App Router）** で高速なページ遷移
* **TypeScript** による型安全な開発
* **Tailwind CSS + shadcn/ui** で柔軟かつ再利用可能な UI
* **pnpm** で高速かつ軽量な依存管理
* **Storybook** でコンポーネントを視覚的に確認
* **GSAP** アニメーションで動きに表情をプラス
* **Biome** による自動フォーマットと静的解析
* **Husky** でコミット前にコード品質チェック

## 開発環境の準備

1. Node.js（18.17.0 以上）と pnpm（8.0.0 以上）をインストール
2. リポジトリをクローンして移動：

   ```bash
   git clone [repository-url]
   cd website-template-next
   ```
3. 依存パッケージをインストール：

   ```bash
   pnpm install
   ```
4. 開発サーバーを起動：

   ```bash
   pnpm dev
   ```

## 使えるコマンド

| コマンド             | 説明                  |
| ---------------- | ------------------- |
| `pnpm dev`       | 開発サーバー起動（Turbopack） |
| `pnpm build`     | プロダクションビルド          |
| `pnpm start`     | 本番サーバー起動            |
| `pnpm lint`      | 静的解析                |
| `pnpm format`    | コードフォーマット           |
| `pnpm storybook` | Storybook 起動        |

## プロジェクト構成

```
├── app/           // Next.js App Router
├── components/    // 共通コンポーネント
├── lib/           // ヘルパー関数など
├── public/        // 画像やフォントなどの静的ファイル
└── .storybook/    // Storybook の設定
```

## スタイリングとアニメーション

* **Tailwind CSS** によるユーティリティファーストなスタイル
* **shadcn/ui** で一貫性のある UI コンポーネント
* **GSAP** を使ったリッチなアニメーション

## コード品質

* **Biome** で自動フォーマット＆Lint
* **Husky** でコミット前に品質チェック
* **TypeScript** で安心の型検査

## ドキュメント

* Next.js: [https://nextjs.org/docs](https://nextjs.org/docs)
* Tailwind CSS: [https://tailwindcss.com/docs](https://tailwindcss.com/docs)
* shadcn/ui: [https://ui.shadcn.com](https://ui.shadcn.com)
* GSAP: [https://greensock.com/docs](https://greensock.com/docs)
