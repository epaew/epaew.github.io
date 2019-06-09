import Parser from "rss-parser";
const fs = require("fs");

module.exports = class Feed {
  // functions
  constructor() {
    this.rssParser = new Parser();
  }

  async fetchFeeds() {
    return await Promise.all(
      Object.keys(Feed.feedUrls()).map(async key => {
        let feed = await this.rssParser.parseURL(Feed.feedUrls()[key]);
        return feed.items.map(item => Object.assign(item, { key: key }));
      })
    );
  }

  flattenFeeds(feeds) {
    return feeds.reduce((acc, current) => acc.concat(current));
  }

  sortFeeds(feeds) {
    return feeds.sort((a, b) => Date.parse(b.pubDate) - Date.parse(a.pubDate));
  }

  writeFeedJson(path) {
    this.fetchFeeds().then(res => {
      let feeds = this.sortFeeds(this.flattenFeeds(res));
      fs.writeFileSync(path, JSON.stringify(feeds, null, 4));
    });
  }

  // static functions
  static feedUrls() {
    return {
      "epaew's blog": "https://epaew.hatenablog.com/feed",
      Qiita: "https://qiita.com/epaew_dev/feed"
    };
  }
};
