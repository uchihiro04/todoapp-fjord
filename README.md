# Todo リストアプリ

一覧表示・追加・編集・削除機能を備えた Todo リストのアプリです。
（フィヨルドブートキャンプの課題になります）

## 開発環境

- Vue.js 3.2.36(CDN を使用)

## 機能概要

以下のような機能を使用することができます。

- 追加した Todo リストの一覧表示
- Todo リストの追加

  画面上部にあるフォームに Todo リストを入力し、「追加」ボタンもしくは Enter キーで追加できます。追加した Todo リストは localStorage に保存されます。

- Todo リストの編集

  編集ボタンを押すことで、Todo リストを編集することができます。「保存」ボタンか Enter キーで編集内容を保存、「キャンセル」ボタンか Esc キーで編集をキャンセルできます。

- Todo リストの削除

  削除ボタンを押すことで、Todo リストを削除することができます。

## 利用方法

1. 任意の作業ディレクトリにて `git clone` してください。

```
$ git clone https://github.com/自分のアカウント名/todoapp-fjord.git
```

1. `cd todo-fjord` でカレントディレクトリを変更してください。
1. `index.html`を開いてください。

## スクリーンショット

- Todo リストの一覧表示
  <img width="1440" alt="image" src="https://user-images.githubusercontent.com/77523896/208381967-8b883671-4634-4f30-9149-2e22e7d8a87d.png">

- Todo リストの追加
  ![22121901](https://user-images.githubusercontent.com/77523896/208381482-0aeb7797-0798-44da-b64c-227b19631663.gif)

- Todo リストの編集
  ![22121902](https://user-images.githubusercontent.com/77523896/208382402-40b5ee69-349b-44f2-988c-7674cf7c9a5c.gif)

- Todo リストの削除
  ![22121903](https://user-images.githubusercontent.com/77523896/208382641-0a7ca9ff-6c93-4749-a5d6-8d9a47cabc73.gif)
