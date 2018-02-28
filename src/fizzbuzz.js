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
    var fizzbuzz = number / 15;
    fizz = fizz % 1;
    buzz = buzz % 1;
    fizzbuzz = fizzbuzz % 1;
    if(fizzbuzz === 0){
        return "fizzbuzz";
    }
    else if(buzz == 0){
        return "buzz";
    }
    else if(fizz === 0){
        return "fizz";
    }
    else{
        return number;
    }
}

module.exports = fizzbuzz;