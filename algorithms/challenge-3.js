function isLeapYear(year) {
    if(typeof(year) != "number"){
        return `ERROR. ENTER A VALID NUMBER`;
    } else if (year % 4 == 0){
        return true;
    } else return false;
}

module.exports = isLeapYear;
//SUBMITTED BY KEHINDE KHOURIE


