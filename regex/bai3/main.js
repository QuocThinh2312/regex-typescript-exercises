const url = 'https://unicode.vn/chuyen-muc/lap-trinh-front-end';
const pattern = /https?:\/\/(?:www\.)?([^\/]+)/;
console.log(url.match(pattern)[1]);
