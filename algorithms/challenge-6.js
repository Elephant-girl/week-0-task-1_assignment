function fizzBuzz(num) {
    if(typeof(num) != "number" ){
        return `ERROR. ENTER A VALID NUMBER`;
    } else if(num % 15 == 0){
        return `fizzbuzz`;
    } else if(num % 3 == 0){
        return `fizz`;
    } else if (num % 5 == 0){
        return `buzz`
    }else return num;
}

module.exports = fizzBuzz;
//SUBMITTED BY KEHINDE KHOURIE