/* Write a function kebabize(input) to convert a camel case input string into a kebab case.

The function only needs to take care of lower- and upper-case alphabets. 
Non-alphabetical characters (e.g. numbers, punctuation (_ - + ? )) can be ignored

Examples:
kebabize('camelsHaveThreeHumps') // camels-have-three-humps
kebabize('camelsHave3Humps') // camels-have-humps
*/

function kebabize(input) {
  var arr1 = [];
  var arr2 = [];
  // split spaces of values and put in arrays
  arr1 = input.split("");

  // clone original array to another array so we can us the duplicate to make adjustments
  for (var i = 0; i < arr1.length; i++) {
    arr2.push(arr1[i]);
  }

  /* create a 2 layer for loop to run through the array and check if there is a caps character and uncap 
     it and put a dash in front of it
  */
  var counter = 0;
  for (var i = 0; i < arr1.length; i++) {
    var char = arr1[i];
    for (var j = 0; j < arr1.length; j++) {
      if (char.toUpperCase() === arr1[j]) {
        arr2.splice(j + counter, 0, "-");
        arr2[j + counter + 1] = arr2[j + counter + 1].toLowerCase();
        counter++;
      }
    }
  }
  var result = arr2.join("");
  console.log(result);
  return result;
}

module.exports = kebabize;
