# MinimalCRM - ミニマルCRMシステム

Salesforceライクな軽量CRMシステム。モダンなUI/UXで営業管理を効率化。

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Version](https://img.shields.io/badge/version-1.0.0-green.svg)

## 🚀 特徴

- 📊 **ダッシュボード** - リアルタイムの営業指標を可視化
- 👥 **リード管理** - 見込み顧客の効率的な追跡
- 💼 **商談管理** - パイプライン全体を一目で把握
- 🏢 **取引先管理** - 顧客情報の一元管理
- 📈 **レポート機能** - データドリブンな意思決定をサポート
- 🎨 **モダンUI** - 直感的で美しいインターフェース

## 📦 インストール

```bash
# リポジトリをクローン
git clone https://github.com/yourusername/minimal-crm.git

# ディレクトリに移動
cd minimal-crm

# ブラウザで開く（ローカルサーバー推奨）
# Python 3の場合
python -m http.server 8000

# Node.jsの場合
npx http-server
```

## 🎯 クイックスタート

1. `index.html`をブラウザで開く
2. サイドバーから各機能にアクセス
3. 「新規追加」ボタンでデータを登録

## 📁 プロジェクト構造

```
minimal-crm/
├── index.html          # メインアプリケーション
├── README.md          # このファイル
├── LICENSE            # MITライセンス
├── src/
│   ├── styles/
│   │   └── main.css   # スタイルシート
│   ├── scripts/
│   │   ├── app.js     # メインアプリケーションロジック
│   │   ├── data.js    # データ管理
│   │   ├── components.js # UIコンポーネント
│   │   └── utils.js   # ユーティリティ関数
│   └── assets/
│       └── icons/     # アイコンファイル
├── docs/
│   ├── setup.md       # セットアップガイド
│   └── api.md         # API仕様（将来実装）
└── screenshots/       # スクリーンショット
    └── dashboard.png
```

## 🛠️ 技術スタック

- **フロントエンド**: Pure HTML5, CSS3, Vanilla JavaScript
- **スタイリング**: カスタムCSS with CSS Variables
- **アイコン**: Emoji（軽量化のため）
- **データ管理**: JavaScript Object（メモリ内）

## 📊 主要機能

### ダッシュボード
- KPI表示（リード数、商談数、成約率、売上）
- 月別売上グラフ
- 最近の活動フィード

### リード管理
- リード一覧表示
- ステータス管理（新規/フォロー中/見込みあり）
- ソース追跡

### 商談管理
- パイプライン表示
- ステージ管理（新規→ヒアリング→提案→交渉→成約）
- 確度と金額管理

### レポート
- 売上分析
- パイプライン分析
- コンバージョン率追跡

## 🔄 今後の実装予定

- [ ] バックエンドAPI（Node.js/Express）
- [ ] データベース連携（PostgreSQL）
- [ ] ユーザー認証（JWT）
- [ ] データエクスポート機能
- [ ] カレンダー連携
- [ ] メール連携
- [ ] モバイルアプリ版

## 🤝 コントリビューション

プルリクエスト歓迎です！大きな変更の場合は、まずissueを開いて変更内容を議論してください。

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 ライセンス

MIT License - 詳細は[LICENSE](LICENSE)ファイルを参照

## 👥 作者

Your Name - [@yourtwitter](https://twitter.com/yourtwitter)

Project Link: [https://github.com/yourusername/minimal-crm](https://github.com/yourusername/minimal-crm)

## 🙏 謝辞

- Salesforceからのインスピレーション
- モダンなWeb技術コミュニティ
- オープンソースコントリビューター

---

⭐ このプロジェクトが役に立ったら、スターをお願いします！
