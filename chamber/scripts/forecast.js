// WEATHER CONDITION 
const cards = document.querySelector('#forcast-Container');

var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };


fetch("https://api.openweathermap.org/data/2.5/forecast?lat=13.69&lon=89.24&units=imperial&appid=e7b2a5f6573f039c65783c60c1b47ddc")
    .then(response => response.json())
    .then(data => {
        for (i = 7; i < 26; i++) {

            let container = document.createElement('section');
            let card = document.createElement('figure');
            const name = document.createElement('figcaption');
            let picture = document.createElement('img');
            let day = document.createElement('p');


            picture.className = "weather-icon";
            name.className = 'forcast';

            //name.textContent = member.name;

            const iconsrc = `https://openweathermap.org/img/w/${data.list[i].weather[0].icon}.png`;

            name.innerHTML = `${data.list[i].weather[0].description} <span>Temp:</span> ${data.list[i].main.temp}&deg;F`;
            picture.setAttribute('src', iconsrc);

            const date = new Date(data.list[i].dt_txt)
            day.innerHTML = date.toLocaleDateString("en-EN", options);

            i = i + 7;

            card.appendChild(picture);
            container.appendChild(day)
            container.appendChild(card);
            container.appendChild(name);
            cards.appendChild(container);

        }
    })



// JavaScript para cambiar imágenes cada 5 segundos
document.addEventListener("DOMContentLoaded", function () {
    var images = document.querySelectorAll("#spotlight1 img");
    var currentIndex = 0;

    // Función para mostrar la siguiente imagen
    function showNextImage() {
        images[currentIndex].classList.remove("active");
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.add("active");
    }

    // Mostrar la primera imagen al cargar la página
    images[currentIndex].classList.add("active");

    // Cambiar imágenes cada 5 segundos
    setInterval(showNextImage, 5000);
});