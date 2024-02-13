function higherOrderFunction(callback) {
  console.log("Executing the higher-order function");
  callback();
}

function callbackFunction() {
  console.log("I am a callback function");
}

function multiplyBy(factor) {
  return function (number) {
      console.log("Number = ", number);
      return number * factor;
  };
}

const double = multiplyBy(2);
console.log(double(5)); // Outputs: 10

higherOrderFunction(callbackFunction);
