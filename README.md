# React Map GL Sample Project

このプロジェクトは、React-Map-GLライブラリを使用して地図を表示するサンプルアプリケーションです。

## 必要な環境

- **Node.js** (バージョン20以上推奨)
    - すでにインストール済みであることを前提としています
    - 確認方法: ターミナルで `node --version` を実行

## プロジェクトの開始方法

### 1. VS Code 拡張機能のインストール（推奨）

このプロジェクトをVS Codeで開くと、以下の拡張機能のインストールが推奨されます

- **ESLint**: コードの品質チェックとエラー検出
- **Prettier**: コードの自動フォーマット
- **Tailwind CSS IntelliSense**: Tailwind CSSのクラス名補完

VS Codeでプロジェクトを開いた際に、右下に表示される通知から「Install」をクリックするか、
拡張機能タブで「@recommended」と検索してインストールしてください。

### 2. 依存関係のインストール

```bash
npm install
```

### 3. 開発サーバーの起動

```bash
npm run dev
```

### 4. ブラウザで確認

開発サーバーが起動したら、ブラウザで以下のURLにアクセスしてください：

```
http://localhost:3000
```

地図が表示されれば成功です！

## 主な機能

- **地図の表示**: MapLibre GLを使用したインタラクティブな地図
- **カスタマイズ可能**: 初期位置、ズームレベルを簡単に変更
- **レスポンシブデザイン**: モバイルデバイスにも対応
- **ダークモード**: テーマの切り替えが可能

## プロジェクト構成

### 全体のディレクトリ構造

```
react-mapgl-sample/
├── .vscode/                    # VS Code設定ファイル
├── public/                     # 静的ファイル（画像、JSONなど）
│   └── geolonia-style.json    # 地図スタイル設定ファイル
├── src/                       # ソースコード
│   ├── app/                   # Next.js App Router
│   │   ├── layout.tsx         # アプリケーション全体のレイアウト
│   │   ├── page.tsx           # メインページ（地図を表示）
│   │   ├── globals.css        # グローバルスタイル
│   │   └── favicon.ico        # ファビコン
│   ├── components/
│   │   ├── custom/
│   │   │   ├── colorModeToggle.tsx  # ダークモード切り替えボタン
│   │   │   ├── header.tsx           # ヘッダーコンポーネント
│   │   │   ├── map.tsx              # 地図コンポーネント（メイン）
│   │   │   └── themeProvider.tsx    # テーマプロバイダー
│   │   └── ui/
│   │       └── button.tsx           # UIボタンコンポーネント
│   └── lib/
│       └── utils.ts                 # ユーティリティ関数
├── .gitignore                  # Gitで管理しないファイルの設定
├── CLAUDE.md                   # AI開発アシスタント用の設定
├── README.md                   # このファイル
├── components.json             # shadcn/ui コンポーネント設定
├── eslint.config.mjs          # ESLint設定（コード品質チェック）
├── next-env.d.ts              # Next.js TypeScript型定義
├── next.config.ts             # Next.js設定ファイル
├── package.json               # プロジェクト情報と依存関係
├── package-lock.json          # 依存関係の詳細なバージョン情報
├── postcss.config.mjs         # PostCSS設定（CSS処理）
└── tsconfig.json              # TypeScript設定
```

### 各ファイルの役割

#### 設定ファイル

- **package.json**: プロジェクトの基本情報、依存関係、スクリプトを定義
- **tsconfig.json**: TypeScriptのコンパイル設定
- **next.config.ts**: Next.jsの動作設定
- **eslint.config.mjs**: コード品質をチェックするESLintの設定
- **postcss.config.mjs**: CSSの処理設定（Tailwind CSSの適用など）

#### スタイル・UI関連

- **components.json**: shadcn/uiコンポーネントライブラリの設定
- **src/app/globals.css**: アプリケーション全体に適用されるスタイル

#### 静的ファイル

- **public/**: ブラウザから直接アクセスできるファイルを配置
- **public/geolonia-style.json**: 地図の見た目を定義するスタイルファイル

## 地図をカスタマイズする方法

### 初期位置とズームレベルの変更

`src/app/page.tsx` ファイルの以下の部分を編集してください：

```tsx
<Map
    initialLongitude={139.8063367782008} // 経度（東西の位置）
    initialLatitude={35.7487843041853} // 緯度（南北の位置）
    initialZoom={15.4} // ズームレベル（大きいほど拡大）
/>
```

### 主要都市の座標例

- **東京駅**: 経度 139.7673, 緯度 35.6812
- **大阪駅**: 経度 135.4959, 緯度 34.7024
- **札幌駅**: 経度 141.3544, 緯度 43.0642
- **福岡駅**: 経度 130.4201, 緯度 33.5904

### 地図スタイルの変更

`src/components/custom/map.tsx` の `mapStyle` プロパティを変更することで、地図の見た目を変更できます。

## 利用可能なコマンド

```bash
# 開発サーバーの起動
npm run dev

# 本番用ビルド
npm run build

# 本番サーバーの起動
npm start

# コードの品質チェック
npm run lint

# コードのフォーマット
npm run format
```

## 使用技術

- **Next.js 15**: Reactベースのフルスタックフレームワーク
- **React 19**: ユーザーインターフェース構築ライブラリ
- **TypeScript**: 型安全なJavaScript
- **React-Map-GL**: React用の地図ライブラリ
- **MapLibre GL**: オープンソースの地図エンジン
- **Tailwind CSS**: ユーティリティファーストのCSSフレームワーク

## 学習リソース

### 初心者向け

1. **React の基礎**

    - [React 公式チュートリアル](https://ja.react.dev/learn)
    - [Next.js 公式ドキュメント](https://nextjs.org/docs)

2. **TypeScript の基礎**

    - [TypeScript 公式ハンドブック](https://www.typescriptlang.org/docs/)

3. **地図開発について**
    - [MapLibre GL JS ドキュメント](https://maplibre.org/maplibre-gl-js/docs/)
    - [React-Map-GL ドキュメント](https://visgl.github.io/react-map-gl/)

## カスタマイズのアイデア

1. **マーカーの追加**: 特定の場所にピンを立てる
2. **ポップアップの実装**: クリックした場所の情報を表示
3. **ルート検索**: 2点間の経路を表示
4. **現在地の取得**: GPSを使って現在地を表示
5. **地図の描画**: 線や図形を地図上に描画

## トラブルシューティング

### よくある問題

1. **地図が表示されない**

    - ブラウザの開発者ツールでエラーを確認
    - インターネット接続を確認

2. **npm install でエラーが発生**

    - Node.js のバージョンを確認（18以上推奨）
    - キャッシュをクリア: `npm cache clean --force`

3. **開発サーバーが起動しない**
    - ポート3000が使用中でないか確認
    - 他のNext.jsプロジェクトが実行中でないか確認

## サポート

このサンプルコードについて質問がある場合は、お気軽にお声がけください。プログラミング学習の参考として活用していただければ幸いです。

---

**Happy Coding!**
