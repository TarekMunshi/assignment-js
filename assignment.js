// https://github.com/TarekMunshi/assignment-js


// Converting Kilometer To Meter.
function kilometerToMeter(kilometer){
    if (kilometer == undefined || kilometer == null){
        return "Please sir, give a value first";
    }
    // check value negative or positive.
    if (kilometer < 0){
        return "Negative number is not allowed";
    }
    else{
        var meter = kilometer * 1000; // 1km = 1000m.
        return meter;
    }
}



// Calculate budget for watch, mobile and laptop.
function budgetCalculator(watch, mobile, laptop) {
    // Check given watch value is valid or not
    if (watch == null || watch == undefined || watch < 0 || watch % 1 != 0) {
        return "Please sir, give valid value for watch.";
    }
    // Check given mobile value is valid or not
    if (mobile == null || mobile == undefined || mobile < 0 || mobile % 1 != 0) {
        return "Please sir, give valid value for mobile.";
    }
    // Check given laptop value is valid or not
    if (laptop == null || laptop == undefined || laptop < 0 || laptop % 1 != 0) {
        return "Please sir, give valid value for laptop.";
    }
    else {
        var watchCost = watch * 50; // 1 watch = 50$
        var mobileCost = mobile * 100; // 1 mobile = 100$
        var laptopCost = laptop * 500; // 1 laptop = 500$
        var totalCost = watchCost + mobileCost + laptopCost;
        return totalCost;
    }
}



// Total Cost Calculation For Staying At The Hotel
function hotelCost(day) {
    if (day == null || day == undefined) {
        return "Please sir, give a value first";
    }
    if (day < 0) {
        return "Negative Number is not allowed";
    }
    //if day is float then make it integer
    if (day % 1 != 0) {
        day = Math.ceil(day);
    }
    var totalCost = 0;
    // check how many days are being stayed
    if (day <= 10) {
        var firstCost = 100 * day; // 1-10 days cost is 100$ per day
        totalCost = firstCost;
    } 
    else if (day > 10 && day <= 20) {
        var firstCost = 100 * 10;
        var secondCost = 80 * (day - 10); // 11-20 days cost is 80$ per day
        totalCost = firstCost + secondCost;
    } 
    else {
        var firstCost = 100 * 10;
        var secondCost = 80 * 10;
        var thirdCost = 50 * (day - 20); // 21-infinte days cost is 50$ per day
        totalCost = firstCost + secondCost + thirdCost;
    }
    return totalCost;
}



// Highest Character Name Find Calculator
function megaFriend(names) {
    // Check the names parameter is an array or not
    if (Array.isArray(names) == false) {
        return "Input must to be an array";
    }
    // Check if empty array passed or not
    if (names.length == 0) {
        return "Please input some value in the array first";
    }
    var biggestName = names[0];
    for (var i = 0; i < names.length; i++) {
        var currentElement = names[i];
        if (currentElement.length > biggestName.length) {
            biggestName = currentElement;
        }
    }
    return biggestName;
}