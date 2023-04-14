//Odd or even
function check(numb:number):string{
    if(numb % 2==0){
        return"The number is even"
    }
    else{
        return"The number is odd"
    }
}
console.log(check(9));
//--------------------------------------------------------------------------
//fizz-buzz
function fizzBuzz(numb:number):string|number{
    if(numb % 3==0 && numb % 5==0 ){
        return"Fizz-buzz!"
    }
    else if(numb % 5==0){
        return"Buzz"
    }
    else if(numb % 3==0){
        return"Fizz!"
    }
    else{
        return numb;
    }
}
console.log(fizzBuzz(112));

//--------------------------------------------------------------------------
//Conversion functions

//Convert pounds to kg's
function poundsToKg(pounds:number):string{
    let kg:number = pounds / 2.2046;
    return `The amount in Kg's is: ${kg}`
}
console.log(poundsToKg(155));


//Convert inches to centimeters
function inchesToCentimeters(inches:number):string{
    let centimeters:number = inches * 2.54;
    return `The amount in centimeters is: ${centimeters}`;
}
console.log(inchesToCentimeters(10));


//Convert fahrenheit to celsius
function fahrenheitToCelsius(fahrenheit:number):string{
    let celsius:number = (fahrenheit - 32) * 5 / 9;
    return `The amount in celsius is: ${celsius}`;
}
console.log(fahrenheitToCelsius(32));


//Convert feet to meters
function feetToMeters(feet:number):string{
    let meters:number = feet / 3.281;
    return `The amount in meters is: ${meters}`;
}
console.log(feetToMeters(1));
