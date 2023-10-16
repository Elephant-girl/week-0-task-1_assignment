function checkNumber(num) {
    if(num < 0){
        return `Negative`;
    } else if (num > 0){
        return `Positive`;
    } else if(num == 0){
        return `Zero`;
    } else return `ERROR. ENTER A VALID NUMBER`;
}

module.exports = checkNumber;

//SUBMITTED BY KEHINDE KHOURIE