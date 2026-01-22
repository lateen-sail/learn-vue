# GitHub Pages デプロイガイド

このプロジェクトをGitHub Pagesに公開するための設定が完了しました。

## 🚀 自動デプロイの有効化

1. **GitHubリポジトリの設定**
   - GitHubリポジトリ (https://github.com/lateen-sail/learn-vue) にアクセス
   - `Settings` タブをクリック
   - 左サイドバーの `Pages` をクリック

2. **Pages設定**
   - `Source` で `GitHub Actions` を選択
   - 保存すると自動的にデプロイが開始されます

## 📦 手動デプロイ（オプション）

GitHub Actionsを使わずに手動でデプロイする場合：

```bash
npm run deploy
```

## 🔗 公開URL

設定完了後、以下のURLでアクセス可能になります：
https://lateen-sail.github.io/learn-vue/

## ⚙️ 設定内容

- **ベースURL**: `/learn-vue/` (GitHub Pages用)
- **ビルド出力**: `dist/` フォルダ
- **自動デプロイ**: mainブランチへのpush時
- **Node.js**: バージョン20を使用

## 🔄 デプロイプロセス

1. コードをmainブランチにpush
2. GitHub Actionsが自動実行
3. プロジェクトをビルド
4. GitHub Pagesに自動デプロイ
5. 数分後に公開URL でアクセス可能

## 📝 注意事項

- 初回デプロイには少し時間がかかる場合があります
- DNS設定の反映に最大10分程度かかることがあります
- エラーが発生した場合は、GitHubの`Actions`タブでログを確認してください
