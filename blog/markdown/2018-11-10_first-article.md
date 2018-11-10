---
title: やっとBlogページを作りました
created_at: 2018-11-10
---

## やっとBlogページを作りました

この [epaew.net](/) を公開してから早1ヶ月、ようやくブログ機能をつけることができました。

このウェブサイト自体は [Nuxt.js](https://ja.nuxtjs.org/) で作成したものなので、  
最初は [Nuxtコミュニティ公式のblogモジュール](https://github.com/nuxt-community/blog-module) を使えば簡単に終わるだろうと思ってたんですが、  
実際 `yarn install` してみると、これ Nuxt.js バージョン2系に対応してないんですね。。。

他には [VuePress](https://vuepress.vuejs.org/) を調べてみたりもしたのですが、  
まだ Nuxt.js を使い始めて日が浅いこと、あまり JavaScript が得意ではないことから、  
勉強のために [こちらのページ](https://jmblog.jp/posts/2018-01-17/build-a-blog-with-nuxtjs-and-markdown-1/) を参考にして自前で作ることにしました。

ところで、今のところコード管理 + CI は GitLab の private リポジトリでやってますが、  
気が向けば public に変更して GitHub にミラーリングしてソースコード自体も公開しようかなとは思ってます。  
せっかく作ったのでブログのネタにもしたいですね。

それでは。
