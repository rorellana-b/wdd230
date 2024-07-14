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


// last visit

const displayMesage = document.querySelector(".mesage");
const lastVisit = localStorage.getItem("lastVisit-ls");

if (!lastVisit) {
    displayMesage.textContent = "Welcome! Let us know if you have any question.";
} else {
    const diftime = Date.now() - parseInt(lastVisit);
    const difDay = Math.floor(diftime / (1000 * 60 * 60 * 24));

    if (difDay < 1) {
        displayMesage.textContent = "Back so soon! Awesome!";
    } else {
        displayMesage.textContent = `You last visited ${difDay} days ago.`;
    }
}


localStorage.setItem("lastVisit-ls", Date.now());