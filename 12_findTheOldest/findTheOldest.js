const findTheOldest = function() {
    arr = arguments[0];

    arr = arr.sort((prevPerson, nextPerson) =>{
        if (prevPerson.yearOfDeath != undefined) {
            firstPersonAge = prevPerson.yearOfDeath - prevPerson.yearOfBirth;
        } else {
            let yod = new Date().getFullYear();
            firstPersonAge = yod - prevPerson.yearOfBirth;
            //console.log(firstPersonAge);
        };
        if (nextPerson.yearOfDeath != undefined) {
            secondPersonAge = nextPerson.yearOfDeath - prevPerson.yearOfBirth;
        } else {
            let yod = new Date().getFullYear();
            
            secondPersonAge = yod -  nextPerson.yearOfBirth;
            //console.log(secondPersonAge);
        };

        
        
        //console.log(secondPersonAge);
        //console.log(firstPersonAge);
        //console.log(firstPersonAge);
        //console.log(secondPersonAge);

        return firstPersonAge > secondPersonAge ? -1 : 1;
    })
    return(arr[0]);
};

// Do not edit below this line
module.exports = findTheOldest;

const people = [
    {
        name: "Carly",
        yearOfBirth: 2018,
    },
    {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
    },
    {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
    },
];

console.log(findTheOldest(people));