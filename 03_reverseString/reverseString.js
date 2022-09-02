const reverseString = function(string) {
    let size = string.length;
    let reverse = "";
    for (let i = size - 1; i >= 0; i --) {
        reverse += string[i]
    }
    return reverse
};

// Do not edit below this line
module.exports = reverseString;

