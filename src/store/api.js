import axios from 'axios';

export default function fetchArticles(category, type) {
  let path;
  if (category === 'all') {
    path = `/${type}.rss`;
  } else {
    path = `/${type}/${category}.rss`;
  }
  return axios.get('https://query.yahooapis.com/v1/public/yql', {
    params: {
      q: `select * from feed where url='http://b.hatena.ne.jp${path}'`,
      format: 'json',
    },
  });
}
