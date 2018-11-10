import { fileMap } from "../blog/summary.json";

function getUrl(article) {
  const [date, slag] = article.base.replace(article.ext, "").split("_");
  return `/blog/${date}/${slag}`;
}

export default {
  getArray() {
    return Object.values(fileMap).map(a => ({
      date: a.created_at.replace(/T.+Z/, ""),
      title: a.title,
      url: getUrl(a)
    }));
  },
  getRoutes(callback) {
    const routes = Object.values(fileMap).map(a => getUrl(a));
    callback(null, routes);
  }
};
