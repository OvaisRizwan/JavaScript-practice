SORTING
var a = 2
var b = -3
var c = 4
if (a > b && a > c && b > c) {
    console.log(a, + b, +c);
}
else if (b > a && b > a && a > c) {
    console.log(b, + a, +c);
}
else if (c > a && c > b && b > a) {
    console.log(c, + b, + a);
}
else if (c > a && c > b && a > b) {
    console.log(c, + a, + b);
}
