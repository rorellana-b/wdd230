function GetInfo() {
    const newName = document.querySelector('#cityInput');

    const cityName = document.querySelector('cityName')

    cityName.innerHTML = "--" + newName.Value + "--";
}

fetch("https://api.openweathermap.org/data/2.5/forecast?q='+newName.value'&appid=e7b2a5f6573f039c65783c60c1b47ddc")
    .then(response => response.json())
    .then(data => {
        for (i = 0; i < 5; i++) {
            document.getElementById("day" + (i + 1) + "Min").innerHTML = "Min:" + Number(data.list[i].main.temp_min - 288.53).toFixed(1) + ""
        }
    })