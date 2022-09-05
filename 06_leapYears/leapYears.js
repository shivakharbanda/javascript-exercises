const leapYears = function() {
    let year = parseInt(arguments[0]);
    let result = false
    if (year % 4 == 0 ) {
        result = true;
        if (year % 100 == 0){
            result = false;
            if (year % 400 == 0) {
                result = true
            }
        }
    }

    return result
};
console.log(leapYears(1900));
// Do not edit below this line
module.exports = leapYears;
