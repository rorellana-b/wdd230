// Funtion to create banner
function createBanner(message) {
    const banner = document.querySelector('#customBanner');

    // Menssage for the banner
    const bannerMessage = document.createElement('p');
    bannerMessage.textContent = message;
    banner.appendChild(bannerMessage);

    // Close button
    const closeButton = document.createElement('button');
    closeButton.textContent = '❌';
    closeButton.style.marginLeft = '20px';
    closeButton.addEventListener('click', function () {
        banner.style.display = 'none';
    });
    banner.appendChild(closeButton);

    document.body.appendChild(banner);
}

// Function to find the day
function isMondayOrTuesday() {
    const today = new Date();
    const dayOfWeek = today.getDay();
    return dayOfWeek === 1 || dayOfWeek === 2 || dayOfWeek === 3;
}

// Verificar si hoy es lunes o martes y mostrar el banner si es así
if (isMondayOrTuesday()) {
    createBanner('Join the chamber of commerce meet and greet on Wednesday at 7:00 p.m!');
}