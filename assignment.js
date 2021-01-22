




//problem____1___!!!!!

function kilometerToMeter(kilometer) {
    var meter = kilometer * 1000;
    return meter;
}
var result1 = kilometerToMeter(1.29);
console.log("Meter:", result1);                  //Solved Problem--1





//problem_____2____!!!!!

function budgetCalculator(watch, mobile, laptop) {
    var product1 = watch * 50;
    var product2 = mobile * 100;
    var product3 = laptop * 500;
    var total = product1 + product2 + product3;

    return total;
}


var result3 = budgetCalculator(4,3,2,)
console.log("total budget:", result3)              //Solved Problem--2





//problem____3____!!!!!!

function hotelCost(totaldays) {
    var totalvara = 0;
    if (totaldays <= 10){
        totalvara = totaldays * 100;
    } else if (totaldays <= 20) {

        var firstpart = 10 * 100;
        var remaning = totaldays - 10;
        var secondpart = remaning * 80;
        totalvara = firstpart + secondpart;

    } else {

        var firstpart = 10 * 100;
        var secondpart = 10 * 80;
        var remaning = totaldays - 20;
        var thirdpart = remaning * 50;
        totalvara = firstpart + secondpart + thirdpart;

    }
    return totalvara;
}

var result2 = hotelCost(23);
console.log("total amount:", result2);       //Solved Problem--3





//problem____4____!!!!!!

function megaFriend(highestString) {
    var count = highestString[0];
    for (var i = 0; i < highestString.length; i++) {
        var element = highestString[i];
       if (element.length > count.length) {
            count = element;
        }

    }
    return count;

}

var array = ["abul","kabul","bulbul vuiya","mofizaa","kashem chowdhuri"] ;
var result4 = megaFriend(array);
console.log(result4);                    //Solved Problem--4



