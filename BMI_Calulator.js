/** Our own personel BMI calculator */

function bmiCalculator(weight,height) {
    var heightSq = height*height;
    var bmi = weight/heightSq;
    if (bmi <= 18.5) {
        alert("Your BMI is: "+bmi+"You are UnderWeight , Start Eating Healthy Deit.");
    }
    if (bmi>18.5 && bmi<=24.9) {
        alert("Your BMI is: "+bmi+"You are NomarlWeight , Great Job, Keep it up!! .");
    }
    if (bmi > 24.9) {
        alert("Your BMI is: "+bmi+"You are OverWeight , Start Excersing Today!! .");
    }
}



var weight = prompt("Enter your weight(in Kg's):");
var height = prompt("Enter your height(in Meter's):");
bmiCalculator(weight,height);