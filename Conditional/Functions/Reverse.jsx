function reverse(number)
{
	number = number + "";
	return number.split("").reverse().join("");
}
console.log(reverse(2104));