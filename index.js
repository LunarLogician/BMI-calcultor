var button = document.getElementById('btn');

button.addEventListener('click', () => {
    console.log("Button is clicked");
    const weight = parseInt(document.getElementById('we').value);
    const height = parseInt(document.getElementById('he').value);
    const result = document.getElementById('result');


    const bmi = weight / ((height * height) / 10000);

   
    if (bmi < 18.5) {
        result.innerHTML = "Underweight";
    } else if (bmi >= 18.5 && bmi < 25) {
        result.innerHTML = "Normal";
    } else if (bmi >= 25 && bmi < 30) {
        result.innerHTML = "Overweight";
    } else {
        result.innerHTML = "Enter The Value";
    }
});
