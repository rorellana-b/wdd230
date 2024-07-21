const baseUrl = "https://rorellana-b.github.io/wdd230/";
const linksUrl = "https://rorellana-b.github.io/wdd230/data/links.json";
const cards = document.querySelector("#linksDetail");


async function getLinks() {
    const response = await fetch(linksUrl);
    const data = await response.json();
    console.log(data);
    displayWeeks(data.weeks);
}

getLinks();

function displayWeeks(weeks) {

    weeks.forEach(week => {
        const weekItem = document.createElement('ul');
        const weekTitle = document.createElement('h4');
        weekTitle.textContent = `${week.week} :`;
        weekItem.appendChild(weekTitle);

        week.links.forEach(link => {
            const linkItem = document.createElement('a');
            linkItem.href = `${baseUrl}${link.url}`;
            linkItem.textContent = `${link.title}`;
            weekItem.appendChild(linkItem);
            weekItem.appendChild(document.createTextNode(' | '));
        });

        weekItem.removeChild(weekItem.lastChild);

        cards.appendChild(weekItem);
    });
}






// const displayWeeks = (weeks) => {
//     weeks.forEach((week) => {

//         const weekItem = document.createElement('ul');
//         const weekTitle = document.createElement('h4');



//         weekTitle.textContent = `${week.week} :`;
//         weekItem.appendChild(weekTitle);

//         //let fullName = document.createElement('p');
//         // let portrait = document.createElement('img');
//         // let birthday = document.createElement('p');
//         // let birthplace = document.createElement('p');

//         week.links.forEach(link => {
//             const linkItem = document.createElement('a');
//             linkItem.setAttribute("href", `${baseURL}${link.url} `);
//             linkItem.setAttribute("href", `${baseURL}${link.url} `);
//             // linkItem.textContent = link.title;
//             // weekItem.appendChild(linkItem);
//             // weekItem.appendChild(document.createTextNode(' | ')); // Add separator
//         });

//         //fullName.textContent = `${ week[0] } `;
//         // birthday.textContent = `Date of Birth ${ prophet.birthdate } `;
//         // birthplace.textContent = `Place of Birth ${ prophet.birthplace } `;

//         // portrait.setAttribute('src', prophet.imageurl);
//         // portrait.setAttribute('alt', `Portrait of ${ prophet.name } ${ prophet.lastname } `);
//         // portrait.setAttribute('loading', 'lazy');
//         // portrait.setAttribute('width', '340');
//         // portrait.setAttribute('height', '440');

//         cards.appendChild(weekItem);
//         // card.appendChild(birthday);
//         // card.appendChild(birthplace);
//         // card.appendChild(portrait);

//         //cards.appendChild(card);
//     });

// }
