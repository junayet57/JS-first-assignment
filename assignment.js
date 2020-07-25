//Function for Converting from Feet to Mile

function feetToMile(feet){
    var mile = feet/5280;
    if(mile < 0){
        return ("Input is invalid, please provide a positive number");
    }
    else{
        return mile.toFixed(2);
    }
}
var result = feetToMile(5000);
console.log(result, "Miles");

//Function for Required Quantinty of Wood

function woodCalculator(chair, table, cot){
    var wood1 = chair;
    var wood2 = table * 3;
    var wood3 = cot * 5;
    var total = wood1+wood2+wood3;
    if(chair, table, cot>0){
        return total.toFixed(2);
    }
    else{
        return ("Input is invalid, please provide positive numbers");
    }
}
var woodQuantity= woodCalculator(5, 6, 7);
console.log(woodQuantity, "Cubic Feet");

//Function for Calculating Bricks in a Building

function brickCalculator(floor){
    if(floor>0 && floor<= 10){
        height = floor*15;
        }
    else if(floor >10 && floor <=20){
        step1 = 10*15;
        remaining = floor-10;
        step2 = remaining*12;
        height = step1+step2;
        }
    else if(floor > 20)
        {
        step1 = 10*15;
        step2 = 10*12;
        remaining = floor-20;     
        step3 = remaining*10;
        height = step1+step2+step3;
        }
    else{
        return("Input is invalid, please provide a positive number");
    }    
    brick=height*1000;
    return brick;
}
var brickQuantity = brickCalculator(5);
console.log(brickQuantity, "Bricks");

//Function for Finding Shortest Name in Array

function tinyFriend(str){
    var min = str[0];
    for(var i = 0; i < str.length; i++){
    var element = str[i];
    if(element.length===0){
        return("Empty sting warning!");
        }
    else if(element < min){
        min = element;
        }
    }    
    return min;
}
var names = ["A", "AAA", "AAAA", "AAAAA"];
var tinyName = tinyFriend(names);
console.log("Shortest name:", tinyName);
