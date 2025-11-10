console.log("Script loaded!");
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('dietForm');
    const resultBox = document.getElementById('resultBox');
    const bmiValue = document.getElementById('bmiValue');
    const bmiStatus = document.getElementById('bmiStatus');
    const dietPlan = document.getElementById('dietPlan');
    const pieChartCanvas = document.getElementById('pieChart');

    // Hide result box initially
    resultBox.style.display = 'none';const form = document.getElementById("dietForm");
const resultBox = document.getElementById("resultBox");
const bmiValue = document.getElementById("bmiValue");
const bmiStatus = document.getElementById("bmiStatus");
const dietPlan = document.getElementById("dietPlan");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const height = parseFloat(document.getElementById("height").value) / 100;
  const weight = parseFloat(document.getElementById("weight").value);

  const bmi = (weight / (height * height)).toFixed(2);
  bmiValue.textContent = bmi;

  let status = "";
  let nutrients = {};
  let meals = {};

  if (bmi < 18.5) {
    status = "Underweight";
    nutrients = { Protein: 35, Carbs: 45, Fats: 15, Vitamins: 3, Minerals: 2 };
    meals = {
      breakfast: [
        "Peanut butter toast with banana & milk",
        "Oats with nuts & honey",
        "Boiled eggs & avocado toast",
        "Paneer sandwich & orange juice",
        "Veg paratha with curd",
        "Idli with sambar and ghee",
        "Masala dosa with chutney",
        "Fruit smoothie bowl with almonds",
        "Poha with peanuts and vegetables"
      ],
      lunch: [
        "Brown rice with dal & paneer curry",
        "Vegetable pulao with curd",
        "Rajma rice with salad",
        "Roti with chicken curry",
        "Mixed veg rice with ghee",
        "Khichdi with ghee and papad",
        "Egg biryani with salad",
        "Vegetable fried rice with paneer cubes",
        "Aloo paratha with curd"
      ],
      dinner: [
        "Grilled fish with rice",
        "Chicken curry with brown rice",
        "Vegetable soup & 2 rotis",
        "Dal tadka with rice",
        "Boiled eggs with soup & salad",
        "Paneer bhurji with chapati",
        "Lentil soup with roti and salad",
        "Curd rice with pickle",
        "Light fried rice with vegetables"
      ]
    };
  } else if (bmi < 25) {
    status = "Normal";
    nutrients = { Protein: 30, Carbs: 40, Fats: 20, Vitamins: 5, Minerals: 5 };
    meals = {
      breakfast: [
        "Oats with fruits & chia seeds",
        "Smoothie bowl with banana & almonds",
        "Brown bread sandwich with veggies",
        "Idli with chutney",
        "Upma with coconut water",
        "Vegetable poha with lemon juice",
        "Sprout salad with fruits",
        "Stuffed paratha with curd",
        "Milk with nuts and dates"
      ],
      lunch: [
        "Brown rice with dal & salad",
        "Chapati with sabji & curd",
        "Vegetable biryani & salad",
        "Khichdi with papad",
        "Rajma curry with brown rice",
        "Curd rice with pickle",
        "Sambar rice with veggies",
        "Lemon rice with salad",
        "Mixed vegetable curry with chapati"
      ],
      dinner: [
        "Soup & salad with fruits",
        "Veg pulao & curd",
        "Grilled chicken with veggies",
        "Paneer bhurji & 2 rotis",
        "Vegetable soup & bread toast",
        "Dal with rice and salad",
        "Clear vegetable soup with brown bread",
        "Roti with sabji and curd",
        "Boiled eggs and soup"
      ]
    };
  } else if (bmi < 30) {
    status = "Overweight";
    nutrients = { Protein: 30, Carbs: 35, Fats: 20, Vitamins: 10, Minerals: 5 };
    meals = {
      breakfast: [
        "Green smoothie bowl",
        "Boiled eggs & green tea",
        "Oats with apple & cinnamon",
        "Sprout salad with lemon juice",
        "Fruit bowl & herbal tea",
        "Idli with sambar (no oil)",
        "Vegetable sandwich on brown bread",
        "Poha with vegetables",
        "Greek yogurt with fruits"
      ],
      lunch: [
        "Mixed veggie salad with olive oil",
        "Grilled paneer with soup",
        "Brown rice with dal & vegetables",
        "Roti with tofu curry",
        "Quinoa salad & soup",
        "Vegetable stir-fry with tofu",
        "Sambar with brown rice",
        "Vegetable pulao (less oil)",
        "Moong dal with spinach"
      ],
      dinner: [
        "Grilled chicken with soup",
        "Vegetable soup & sprouts",
        "Steamed fish & brown rice",
        "Paneer tikka with salad",
        "Light dal & salad",
        "Vegetable stew with brown bread",
        "Spinach soup with chapati",
        "Boiled eggs with soup",
        "Tofu salad and fruit bowl"
      ]
    };
  } else {
    status = "Obese";
    nutrients = { Protein: 25, Carbs: 30, Fats: 15, Vitamins: 20, Minerals: 10 };
    meals = {
      breakfast: [
        "Fruit salad with green tea",
        "Oats porridge with flax seeds",
        "Smoothie with spinach & apple",
        "Vegetable poha",
        "Sprouted beans salad",
        "Low-fat milk with almonds",
        "Steamed idli with chutney",
        "Vegetable sandwich (no cheese)",
        "Papaya bowl with lemon water"
      ],
      lunch: [
        "Vegetable soup with brown rice",
        "Quinoa bowl with veggies",
        "Grilled tofu with salad",
        "Khichdi with curd",
        "Dal soup with veggies",
        "Brown rice with sprouts curry",
        "Roti with lauki sabji",
        "Vegetable curry (no oil)",
        "Spinach rice with salad"
      ],
      dinner: [
        "Light dal & salad",
        "Vegetable soup & fruits",
        "Steamed broccoli with brown rice",
        "Clear soup with toast",
        "Lentil soup & vegetable stir fry",
        "Grilled vegetables with soup",
        "Boiled egg whites & soup",
        "Cabbage soup with brown rice",
        "Fruit bowl and green tea"
      ]
    };
  }

  // Combine all meals into a plan
  const plan = `
  <p>Hi <strong>${name}</strong>! Here’s your healthy meal list for your BMI range (<b>${status}</b>):</p>
  <p><strong>🍳 Breakfast options:</strong><br>${meals.breakfast.join("<br>")}</p>
  <p><strong>🍛 Lunch options:</strong><br>${meals.lunch.join("<br>")}</p>
  <p><strong>🍲 Dinner options:</strong><br>${meals.dinner.join("<br>")}</p>
  `;

  bmiStatus.textContent = status;
  dietPlan.innerHTML = plan;
  resultBox.style.display = "block";
  resultBox.scrollIntoView({ behavior: "smooth" });

  // Remove old chart if exists
  if (window.dietChart) window.dietChart.destroy();

  // Create pie chart
  window.dietChart = new Chart(document.getElementById("pieChart"), {
    type: "pie",
    data: {
      labels: Object.keys(nutrients),
      datasets: [
        {
          data: Object.values(nutrients),
          backgroundColor: ["#00e676", "#81d4fa", "#ffb74d", "#ba68c8", "#ef5350"],
          borderWidth: 2,
        },
      ],
    },
    options: {
      animation: { animateScale: true, animateRotate: true },
      plugins: {
        legend: {
          labels: { color: "white", font: { size: 14 } },
        },
      },
    },
  });
});


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


