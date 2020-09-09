// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let charMap = {};
  let maxChar = "";
  let max = 0;

  for (let char of str) {
    if (!charMap[char]) {
      charMap[char] = 1;
    } else {
      charMap[char]++;
    }
  }

  for (elem in charMap) {
    if (max < charMap[elem]) {
      max = charMap[elem];
      maxChar = elem;
    }
  }

  return maxChar;
}

module.exports = maxChar;
