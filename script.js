// Wait for the page to load
document.addEventListener('DOMContentLoaded', function() {

    // This hooks the form submit event
    document.getElementById('dietForm').addEventListener('submit', function(e) {
        e.preventDefault(); // prevents page refresh
        generateResults();  // calls your function to calculate and show results
    });

    // Your existing function to calculate BMI and display results
    function generateResults() {
        const height = parseFloat(document.getElementById('height').value);
        const weight = parseFloat(document.getElementById('weight').value);

        const bmi = weight / ((height / 100) ** 2);
        document.getElementById('bmiValue').textContent = bmi.toFixed(2);

        let status = '';
        if (bmi < 18.5) status = 'Underweight';
        else if (bmi < 25) status = 'Normal';
        else if (bmi < 30) status = 'Overweight';
        else status = 'Obese';
        document.getElementById('bmiStatus').textContent = status;

        let plan = '';
        if (bmi < 18.5) plan = 'Increase protein and calorie intake.';
        else if (bmi < 25) plan = 'Maintain balanced diet.';
        else if (bmi < 30) plan = 'Reduce calories, eat more fiber.';
        else plan = 'Consult a dietitian.';
        document.getElementById('dietPlan').innerHTML = `<p>${plan}</p>`;

        document.getElementById('resultBox').style.display = 'block';
    }

});
