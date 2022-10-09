module.exports = function (str1, str2) {
  let s1 = str1
    .toLowerCase()
    .split("")
    .filter((k) => k >= "a" && k <= "z")
    .sort()
    .join();
  let s2 = str2
    .toLowerCase()
    .split("")
    .filter((k) => k >= "a" && k <= "z")
    .sort()
    .join();
  if (s1 === s2) {
    return true;
  } else {
    return false;
  }
};
