const ftoc = function() {
 let f = arguments[0]
 let c = (f - 32)*(5/9);
  return Math.round(c * 10) / 10;
};

const ctof = function() {
  let c = arguments[0];
  let f = (c * (9/5)) + 32
  return Math.round(f * 10) / 10;
};


// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
