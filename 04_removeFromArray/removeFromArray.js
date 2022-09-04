const removeFromArray = function(array) {
    j = 1;
    while (arguments[j] != undefined) {
        ele = arguments[j];
        console.log(ele);
        for (i = 0; i < array.length; i ++) {
            if (array[i] === ele) {
                array.splice(i, 1);

            }
        }
        j += 1;

       
    };
    return array;
};

//array = removeFromArray([1, 2, 3], "1", 3);
//console.log(array)
// Do not edit below this line
module.exports = removeFromArray;
