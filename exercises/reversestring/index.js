// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  debugger;
  return str.split("").reduce((rev, char) => {
    return (rev = char + rev);
  }, "");
}

// reverse("asdf");

module.exports = reverse;


/*First Answer*/
// function reverse(str) {
//   return str.split("").reverse().join("");
// }

/*Second Answer*/
// function reverse(str) {
//   let reverse = "";
//   for (char of str) {
//     reverse = char + reverse;
//   }

//   return reverse;
// }
