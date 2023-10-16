//SUBMITTED BY KEHINDE KHOURIE
function countCharOccurrences(str, char) {
    let counter = 0
    for(let item of str){
        if(item == char){
            counter++
        }
    }
    return counter
}
module.exports = countCharOccurrences;

