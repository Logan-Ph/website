weight = prompt("What is your weight in kilograms");
height = prompt("what is your height in meters");
BMI = (weight/(height**2)).toFixed(1);
if (BMI<18.5){
    console.log(`Your BMI is ${BMI}, so you are underweight`);
}else if (18.5<=BMI<=24.9) {
    console.log(`Your BMI is ${BMI}, so you have a normal weight.`);
}else{
    console.log(`Your BMI is ${BMI}, so you are overweight`);
}