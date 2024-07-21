const dates = document.querySelector("#currentYear");
const last = document.querySelector("#lastModified");

const today = new Date();


dates.innerHTML = `&copy<span>${today.getFullYear()}</span> Ronal Balmore Orellana Bonilla - El Salvador 🇸🇻`

last.innerHTML = `Last Modification:${document.lastModified}`;

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});

const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");
const a = document.querySelector("#tag");
const a1 = document.querySelector("#tag1");
const a2 = document.querySelector("#tag2");
const a3 = document.querySelector("#tag3");
const a4 = document.querySelector("#tag4");
const a5 = document.querySelector("#tag5");

modeButton.addEventListener("click", () => {
    if (modeButton.textContent.includes("🌙")) {
        main.style.background = "#000";
        main.style.color = "#fff";
        modeButton.textContent = "🔆";
        a.style.color = "#fff";
        a1.style.color = "#fff";
        a2.style.color = "#fff";
        a3.style.color = "#fff";
        a4.style.color = "#fff";
        a5.style.color = "#fff";

    } else {
        main.style.background = "#eee";
        main.style.color = "#000";
        modeButton.textContent = "🌙";
        a.style.color = "#000";
        a1.style.color = "#000";
        a2.style.color = "#000";
        a3.style.color = "#000";
        a4.style.color = "#000";
        a5.style.color = "#000";

    }
});

// VISITS TO MY WEBSITE

const displayVisits = document.querySelector(".visits");

let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

if (numVisits !== 0) {
    displayVisits.textContent = numVisits;
} else {
    displayVisits.textContent = `This is your first visit!!`
}

numVisits++;

localStorage.setItem("numVisits-ls", numVisits);


// WEATHER CONDITION 

const currentTemp = document.querySelector('#current-temp');

const weatherIcon = document.querySelector('#weather-icon');

const captionDesc = document.querySelector('figcaption');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=13.69&lon=89.24&units=imperial&appid=e7b2a5f6573f039c65783c60c1b47ddc';

async function apiFetch() {
    try {
        const response = await fetch(url);

        if (response.ok) {
            const data = await response.json();
            console.log(data)
            displayResults(data)
        } else {

        }

    } catch (error) {
        console.log(error);
    }
}

function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;

    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;

    let desc = data.weather[0].description;

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = `${desc}`;
}

apiFetch();