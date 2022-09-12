const add = function() {
	addition = 0;
  args = [...arguments];

  args.forEach(element => {
    addition += Number(element);
  });

  return addition;

};

const subtract = function() {
	arg1 = arguments[0];

  args = [...arguments];

  args.forEach(element => {
    if (element == arg1) {
      console.log("do nothing");
    } else {
      arg1 -= element;
    }
  });
  return arg1;
};

const sum = function() {
	addition = 0;
  arguments[0].forEach(element =>  {
    addition += Number(element);
  });
  return addition;
};

const multiply = function() {
  args = arguments[0];
  product = 1;

  args.forEach(element => {
    //console.log(product, element);
    product = product * Number(element);
  });
  return product;
};

const power = function() {
	return arguments[0] ** arguments[1];
};

const factorial = function() {
	num = Number(arguments[0]);
  if (num === 0 || num === 1) {
    return 1;
  };
  return num * factorial(num - 1);
};
// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
