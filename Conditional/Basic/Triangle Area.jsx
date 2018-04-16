let a = 5; 
let b = 6; 
let c = 7; 
let perimeter = (a + b + c)/2;
let area =  Math.sqrt(perimeter*((perimeter-a)*(perimeter-b)*(perimeter-c)));
console.log(area);