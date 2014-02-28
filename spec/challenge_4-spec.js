var challenge_4 = require("../challenge_4");
 
describe("The Largest Palindrome Product", function () {
  
  it("of two 2 digit numbers should be 9009, 91×99", function () {
    var product = challenge_4.largestPalindromeProduct(2,2);
    expect(product.palindromeNumber).toEqual(9009);
    // make sure solution contains the two factors
    expect([91,99]).toContain(product.factor_0);
    expect([91,99]).toContain(product.factor_1);
  });

  it("of two 3 digit numbers should be 906609", function () {
    var product = challenge_4.largestPalindromeProduct(2,3);
    expect(product.palindromeNumber).toEqual(906609);
    expect([993,913]).toContain(product.factor_0);
    expect([993,913]).toContain(product.factor_1);
  });

});    