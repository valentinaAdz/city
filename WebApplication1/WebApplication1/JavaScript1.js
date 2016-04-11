
function checkCities() {

    var cities = ["Берово", "Скопје", "Куманово", "Охрид", "Тетово"];
    var input = document.getElementById("city").value;
    var isInMK = false;


    for (i = 0; i < cities.length; i++) {
        if (input == cities[i]) {
            isInMK = true;
        }
    }

    if (isInMK) {
        alert("Градот е во Македонија");
        document.getElementById("show").innerHTML = (input);

    } else {
        alert("Градот не е во Македонија");

    }

}
