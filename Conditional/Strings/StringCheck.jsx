string = function (input) {
    if (Object.prototype.toString.call(input) === '[object String]') {
        return true;
    }
    else {
        return false;
    }
}
console.log('water');
console.log([1, 2, 3, 4]);