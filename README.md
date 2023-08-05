# 使用技術

-   Next.js
-   Tailwindcss.
-   Mantine.
-   Form App

# 使い方

## ローカル環境
1.node.jsをインストールする
　参照:https://nodejs.org/ja

2.コードをクローンし、同じディレクトリにて[node_modules]をインストール
 コマンド:yarn install

3.Form App(https://www.newt.so/form-app)で自動メール送信機能を作成
　参照:https://www.newt.so/docs/tutorials/contact-form-in-nextjs

変数一覧：<br />
姓:firstName <br />
名:lastName <br />
会社:company <br />
メールアドレス:email <br />
電話番号:phoneNumber <br />
部門:department <br />
役職:position <br />


4.index.tsxの273行目の「action=""」とcomponents-sidebar.tsxの17行目の「action=""」に
　3で作成したエンドポイントの値を入れる(どちらも同じ)

## 本番環境
- サーバにアップする
