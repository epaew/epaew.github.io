import ArticleList from "@/components/article-list.vue";
import Parser from "rss-parser";

const parser = new Parser();

export default {
  components: {
    ArticleList
  },
  computed: {
    articles() {
      let array = new Array();
      Object.keys(this.feedItems).forEach(k => {
        array = array.concat(this.feedItems[k]);
      });

      return array
        .sort((a, b) => {
          return Date.parse(b.pubDate) - Date.parse(a.pubDate);
        })
        .map(a => {
          return {
            title: a.title,
            link: a.link,
            pubDate: a.pubDate.replace(/T.+Z/, "")
          };
        });
    }
  },
  async asyncData() {
    let hatenaFeed = await parser.parseURL("https://epaew.hatenablog.com/feed");
    let qiitaFeed = await parser.parseURL("https://qiita.com/epaew_dev/feed");
    return {
      feedItems: {
        hatena: hatenaFeed.items,
        qiita: qiitaFeed.items
      }
    };
  }
};
