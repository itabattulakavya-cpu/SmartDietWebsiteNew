document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("dietForm");
  const resultBox = document.getElementById("resultBox");
  const bmiValue = document.getElementById("bmiValue");
  const bmiStatus = document.getElementById("bmiStatus");
  const dietPlan = document.getElementById("dietPlan");

  form.addEventListener("submit", function(e) {
    e.preventDefault(); // stops page from refreshing

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
        breakfast: ["Peanut butter toast", "Oats with nuts", "Boiled eggs & avocado toast"],
        lunch: ["Brown rice with dal", "Vegetable pulao", "Rajma rice with salad"],
        dinner: ["Grilled fish with rice", "Chicken curry with brown rice", "Vegetable soup & 2 rotis"]
      };
    } else if (bmi < 25) {
      status = "Normal";
      nutrients = { Protein: 30, Carbs: 40, Fats: 20, Vitamins: 5, Minerals: 5 };
      meals = {
        breakfast: ["Oats with fruits", "Smoothie bowl", "Brown bread sandwich"],
        lunch: ["Brown rice with dal & salad", "Chapati with sabji & curd", "Vegetable biryani"],
        dinner: ["Soup & salad", "Veg pulao & curd", "Grilled chicken with veggies"]
      };
    } else if (bmi < 30) {
      status = "Overweight";
      nutrients = { Protein: 30, Carbs: 35, Fats: 20, Vitamins: 10, Minerals: 5 };
      meals = {
        breakfast: ["Green smoothie bowl", "Boiled eggs & green tea", "Oats with apple & cinnamon"],
        lunch: ["Mixed veggie salad", "Grilled paneer with soup", "Brown rice with dal & vegetables"],
        dinner: ["Grilled chicken with soup", "Vegetable soup & sprouts", "Steamed fish & brown rice"]
      };
    } else {
      status = "Obese";
      nutrients = { Protein: 25, Carbs: 30, Fats: 15, Vitamins: 20, Minerals: 10 };
      meals = {
        breakfast: ["Fruit salad with green tea", "Oats porridge", "Smoothie with spinach & apple"],
        lunch: ["Vegetable soup with brown rice", "Quinoa bowl with veggies", "Grilled tofu with salad"],
        dinner: ["Light dal & salad", "Vegetable soup & fruits", "Steamed broccoli with brown rice"]
      };
    }

    dietPlan.innerHTML = `
      <p>Hi <strong>${name}</strong>! Your BMI: <b>${status}</b></p>
      <p><strong>🍳 Breakfast:</strong><br>${meals.breakfast.join("<br>")}</p>
      <p><strong>🍛 Lunch:</strong><br>${meals.lunch.join("<br>")}</p>
      <p><strong>🍲 Dinner:</strong><br>${meals.dinner.join("<br>")}</p>
    `;
    bmiStatus.textContent = status;
    resultBox.style.display = "block";
    resultBox.scrollIntoView({ behavior: "smooth" });

    if (window.dietChart) window.dietChart.destroy();

    window.dietChart = new Chart(document.getElementById("pieChart"), {
      type: "pie",
      data: {
        labels: Object.keys(nutrients),
        datasets: [{
          data: Object.values(nutrients),
          backgroundColor: ["#00e676", "#81d4fa", "#ffb74d", "#ba68c8", "#ef5350"],
          borderWidth: 2
        }]
      },
      options: {
        animation: { animateScale: true, animateRotate: true },
        plugins: { legend: { labels: { color: "white", font: { size: 14 } } } }
      }
    });
  });
});
