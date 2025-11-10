document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('dietForm');
    const resultBox = document.getElementById('resultBox');
    const bmiValue = document.getElementById('bmiValue');
    const bmiStatus = document.getElementById('bmiStatus');
    const dietPlan = document.getElementById('dietPlan');
    const pieChartCanvas = document.getElementById('pieChart');

    // Hide result box initially
    resultBox.style.display = 'none';

    // Handle form submission
    form.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent page refresh

        const name = document.getElementById('name').value;
        const age = parseInt(document.getElementById('age').value);
        const gender = document.getElementById('gender').value;
        const height = parseFloat(document.getElementById('height').value);
        const weight = parseFloat(document.getElementById('weight').value);

        // BMI calculation
        const bmi = weight / ((height / 100) ** 2);
        bmiValue.textContent = bmi.toFixed(2);

        // BMI Status
        let status = '';
        if (bmi < 18.5) status = 'Underweight';
        else if (bmi < 25) status = 'Normal';
        else if (bmi < 30) status = 'Overweight';
        else status = 'Obese';
        bmiStatus.textContent = status;

        // Diet Plan
        let plan = '';
        if (bmi < 18.5) plan = 'Increase protein and calorie intake. Include nuts, eggs, and dairy.';
        else if (bmi < 25) plan = 'Maintain a balanced diet with fruits, vegetables, and lean proteins.';
        else if (bmi < 30) plan = 'Reduce calorie intake, increase fiber and vegetables.';
        else plan = 'Consult a dietitian, focus on low-calorie and high-fiber meals.';
        dietPlan.innerHTML = `<p>${plan}</p>`;

        // Show result box
        resultBox.style.display = 'block';

        // Pie chart
        new Chart(pieChartCanvas, {
            type: 'pie',
            data: {
                labels: ['Carbs', 'Proteins', 'Fats'],
                datasets: [{
                    data: bmi < 18.5 ? [50, 30, 20] : bmi < 25 ? [40, 30, 30] : bmi < 30 ? [35, 35, 30] : [30, 40, 30],
                    backgroundColor: ['#4CAF50', '#2196F3', '#FFC107']
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'bottom'
                    }
                }
            }
        });
    });
});
