# Astro 製個人ブログ

このリポジトリは、Astro を使って作成した個人ブログのソースコードです。

<https://t2-lab.pages.dev/>にて公開しています。

## 概要

- Astro フレームワークを利用
- Markdown と MDX でブログ記事を作成可能
- Tailwind CSS でスタイリング
- 数式（KaTeX）やコードハイライト対応

## ファイル構成

- `src/pages` ：ページコンポーネント
- `src/blog` ：ブログ記事（MDX 形式）
- `src/components` ：共通コンポーネント
- `public` ：静的ファイル（画像やスクリプトなど）
- `astro.config.mjs` ：Astro の設定ファイル
- `tailwind.config.js` ：Tailwind CSS の設定

## 開発サーバ起動

```bush
npm run dev
```

## ビルド

```bush
npm run build
```

## 技術スタック

- Astro
- MDX
- Tailwind CSS
- remark-math / rehype-katex
- astro-expressive-code
