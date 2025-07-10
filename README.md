# my-blog

このリポジトリは、[Astro](https://astro.build/) を用いて作成した個人ブログのソースコードです。

サイトは <https://t2-lab.pages.dev/> にて公開しています。

## 概要

- Astro フレームワークを利用
- Markdown と MDX でブログ記事を作成可能
- Tailwind CSS でスタイリング
- 数式（KaTeX）やコードハイライト対応

## ファイル構成

- `public` ：静的ファイル（画像やスクリプトなど）
- `src/blog` ：ブログ記事（MDX 形式）
- `src/components` ：共通コンポーネント
- `src/pages` ：ページコンポーネント
- `astro.config.mjs` ：Astro の設定ファイル
- `tailwind.config.js` ：Tailwind CSS の設定ファイル

## 開発サーバ起動

```bush
npm run dev
```

## ビルド

```bush
npm run build
```
