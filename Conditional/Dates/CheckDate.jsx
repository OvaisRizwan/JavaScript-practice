var date = function (input) {
    if (Object.prototype.toString.call(input) === "[object Date]")
        return true;
    else {
        return false;
    }
};
console.log(date(new Date(86400000))); 