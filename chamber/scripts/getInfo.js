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