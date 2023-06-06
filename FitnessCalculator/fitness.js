function calculateFitness() {
    var age = parseInt(document.getElementById('age').value);
    var weight = parseFloat(document.getElementById('weight').value);
    var height = parseFloat(document.getElementById('height').value);

    if (isNaN(age) || isNaN(weight) || isNaN(height)) {
        document.getElementById('result').innerHTML = "Please enter valid values for age, weight, and height.";
        return;
    }

    var bmi = weight / ((height / 100) * (height / 100));

    var result = "";
    if (bmi < 18.5) {
        result = "Underweight";
    } else if (bmi >= 18.5 && bmi < 25) {
        result = "Normal weight";
    } else if (bmi >= 25 && bmi < 30) {
        result = "Overweight";
    } else {
        result = "Obese";
    }

    document.getElementById('result').innerHTML = "Your BMI is " + bmi.toFixed(2) + " - " + result;
}