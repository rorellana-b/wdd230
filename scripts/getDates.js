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