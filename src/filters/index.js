export function host(url) {
  const hostVal = url.replace(/^https?:\/\//, '').replace(/\/.*$/, '');
  const parts = hostVal.split('.').slice(-3);
  if (parts[0] === 'www') {
    parts.shift();
  }
  return parts.join('.');
}

export function dateFormatted(dateStr) {
  const date = new Date(dateStr);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();

  return `${year}/${month}/${day} ${hours}:${minutes}`;
}
