/* FizzBuzz. 

For a given natural number greater than zero return:
- 'fizz' if the number is dividable by 3
- 'buzz' if the number is dividable by 5
- 'fizzbuzz' if the number is dividable by 15
- the input number if no other requirement is fulfilled
*/

function fizzbuzz(number) {
    var fizz = number / 3;
    var buzz = number / 5;
    fizz = fizz % 1;
    buzz = buzz % 1;
    if(fizz === 0){
        return "fizz";
    }
    else if(buzz == 0){
        return "buzz";
    }
    else{
        return number;
    }
}

module.exports = fizzbuzz;