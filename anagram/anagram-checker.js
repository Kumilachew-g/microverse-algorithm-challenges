module.exports = function (str1, str2) {
  let string1 = str1
    .toLowerCase()
    .split("")
    .filter((k) => k >= "a" && k <= "z")
    .sort()
    .join();
  let string2 = str2
    .toLowerCase()
    .split("")
    .filter((k) => k >= "a" && k <= "z")
    .sort()
    .join();
  if (string1 === string2) {
    return true;
  } else {
    return false;
  }
};
