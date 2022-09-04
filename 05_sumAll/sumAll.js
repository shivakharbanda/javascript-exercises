const sumAll = function(ele1, ele2) {
    if (typeof ele1 != "number" || typeof ele2 != "number") {
        return "ERROR";
    };
    if (ele1 < 0) {
        return "ERROR";
    };
    if (ele2 < ele1) {
        let temp = ele1;
        ele1= ele2;
        ele2 = temp;
    };
    sum = 0;
    while (ele1 <= ele2) {
        sum += ele1;
        ele1 += 1;
    };
    return sum



};

// Do not edit below this line
module.exports = sumAll;
