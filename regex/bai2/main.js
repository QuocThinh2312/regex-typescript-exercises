const str = 'color: #1A2b3C; #12345 #gggggggg #fff #12345Z';
const pattern = /#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})\b/g;
console.log(str.match(pattern));
