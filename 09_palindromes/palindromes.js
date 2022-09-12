const palindromes = function () {
    string = arguments[0];
    let processedString = string.toLowerCase().replace(/[^a-z]/g, "");

    return processedString.split("").reverse().join("") === processedString;
    

};

// Do not edit below this line
module.exports = palindromes;


//
//console.log(palindromes("A car, a man, a maracas."))