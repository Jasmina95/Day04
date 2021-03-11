function main(numOne, numTwo){
    //Only change code below this line 
    var numOne = parseFloat(numOne);
    var numTwo = parseFloat(numTwo);
    //var myQuotient = (numOne / numTwo) % 1 === 0 ? Number((numOne / numTwo).toFixed(1)) : parseFloat((numOne / numTwo));
    var myQuotient = parseFloat((numOne / numTwo));
    //Only change code above this line
    return myQuotient;
}

console.log(main(5.0, 2.0)); //Change this line
console.log(main(16.5, 5.5));
console.log(main(102.0, 25.5));
module.exports = main;