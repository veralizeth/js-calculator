
function number_validation(number) {
  if (isNaN(number)) {
    return false;
  }
  else if (number == null || number === ' ') {
    return false;
  }
  else {
    return Number(number)
  }
}

function Operation(num1, num2, operation) {
  this.num1 = num1;
  this.num2 = num2;
  this.operation = operation;
}

const add = new Operation(1,2,['add','+']);
const sub = new Operation(1,2,['substract','-']);
const multiply = new Operation(1,2,['multiply','*']);
const divide = new Operation(1,2,['divide','/']);

function calculate(input) {
  // Input !== as a condition because JS takes zero as a falsy value.s
  if(!number_validation(input.num1) && number_validation(input.num1) !== 0){
    return input.num1 + ' is not a valid number. Please enter a valid number';
  }
  if(!number_validation(input.num2) && number_validation(input.num2) !== 0){
    return input.num2 + ' is not a valid number. Please enter a valid number';
  }
  if (input.operation.includes('add') || input.operation.includes('+')) {
    return input.num1 + input.num2
  }
  if (input.operation.includes('subtract') || input.operation.includes('-')) {
    return input.num1 - input.num2
  } 
  if (input.operation.includes('multiply') || input.operation.includes('*')) {
    return input.num1 * input.num2
  }
  if (input.operation.includes('divide') || input.operation.includes('/')) {
    return input.num1 / input.num2
  } 
  else {
    return 'Please enter a valid operator.'
  }
}

console.log(calculate(add));
console.log(calculate(sub));
console.log(calculate(multiply));
console.log(calculate(divide));