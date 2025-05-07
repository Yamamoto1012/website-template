import { z } from "zod"; // バリデーション用
// 型は必ずtypesモジュール（例: @/types/api.ts）経由で再利用してください
// import { HttpError } from "@/utils/httpError"; // カスタムエラー（実装時に有効化）

// リクエストボディのzodスキーマ例
export const requestSchema = z.object({
	// 例: ユーザー名は必須・文字列
	username: z.string().min(1, "ユーザー名は必須です"),
	// 例: 年齢は任意・数値
	age: z.number().optional(),
});

// レスポンスボディのzodスキーマ例
export const responseSchema = z.object({
	success: z.boolean(),
	message: z.string(),
	// 追加データ例
	data: z.any().optional(), // 必要に応じて型を具体化
});

// 型生成例（typesモジュールでexportして再利用推奨）
export type Request = z.infer<typeof requestSchema>;
export type Response = z.infer<typeof responseSchema>;

// APIハンドラ例（Next.js App Router用）
// export const POST = async (req: Request): Promise<Response> => {
//   const parseResult = requestSchema.safeParse(req);
//   if (!parseResult.success) {
//     // カスタムエラーで返却
//     throw new HttpError(400, parseResult.error.message);
//   }
//   // ...ビジネスロジック...
//   return { success: true, message: "OK" };
// };

// エッジケース例：バリデーション失敗時は必ずcatchしてエラーを返すこと
