function prime(number) {
if(number==1){
    return 'prime'
}
else if (number==2){
    return 'prime'
}
else {
    for (var x = 2; x < number; x++) {
        if (number % x === 0) {
            return false;
        }
    }
    return true;
}
}

