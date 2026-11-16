const str = 'Áo giá 250000 VNĐ, quần giá 350000đồng, mua 2 cái giảm 50000 VNĐ. Mã đơn hàng 998877.';
const pattern = /\d+(?=\s*(?:VNĐ|đồng))/g;
console.log(str.match(pattern).join(', '));
