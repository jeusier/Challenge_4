/*  largestPalindromeProduct(multiplicands, digits)
 *
 *  @param multiplicands  the amount of multiplicands to multiply by
 *  @param digits         the amount of digits in each multiplicand
 *
 *  @returns an object containing the 
 *  two factors used to produce the palindromeNumber
 *  and the palindromeNumber itself.
 */
exports.largestPalindromeProduct = function(multiplicands, digits){
  var factor_0 = 0;
  var factor_1 = 0;
  var palindromeNumber = 0;
  // do your work here

  //store the min and max digits for the numbers to be used
  var minDigit = Math.pow(10, (digits-1));
  var maxDigit = Math.pow(10, digits) - 1;
  //console.log("min: "+minDigit);
  //console.log("max: "+maxDigit);

  /**
  * Loop through to find the palindrome product of both factors
  */

  // loop through the first list of factors
  for (var i = maxDigit; i >= minDigit; i--) {
    // loop through the second list of factors
    for (var j = maxDigit; j >= minDigit; j--) {
        // multiply both factors
        product = i * j;
        // get the palindrome of the product
        reverseProduct = product.toString().split('').reverse().join('');
       // console.log("product: "+product);
        //console.log("reverse: "+reverseProduct);
        //if product is a palindrome, store as palindrome number
        if(product == reverseProduct) {
            //sets palindrome product as new palindrome number if larger than current
            if(palindromeNumber < product) {
                palindromeNumber = product;
                factor_0 = i;
                factor_1 = j;
                console.log("num1: "+i);
                console.log("num2: "+j);
                console.log(palindromeNumber);
            }
        }

    }
  }



  
  return {
    factor_0 : factor_0,
    factor_1 : factor_1,
    palindromeNumber : palindromeNumber
  };
};