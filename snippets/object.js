var a = {};
var b = { key: 'b' };
var c = { key: 'c' };

a[b] = 600;
b[c] = 700;
b[b] = 400;
// a["object object"] = 600
// b["object object"] = 400

console.log(a[c]);  // 600
console.log(a[b]);  // 600
console.log(b[b]);  // 400
console.log(b[c]);  // 400