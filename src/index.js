module.exports = function reverse(n) {
  if (n < 0) { n = n * -1; }

  n = ("" + n).split('').map(Number);
  n.reverse();
  return +n.join("");
}
