module.exports = function (str) {
  var removeChar = str.replace(/[^A-Z0-9]/gi, "").toLowerCase();
  var checkPalindrome = removeChar.split("").reverse().join("");
  if (removeChar === checkPalindrome) {
    return true;
  } else {
    return false;
  }
};
