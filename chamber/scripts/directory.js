const memberURL = 'https://rorellana-b.github.io/wdd230/chamber/data/members.json';
const cards = document.querySelector('.cards');
const select = document.querySelector('#list');
const selectIMG = document.querySelector('#grid');


let mode = 0;

const displayMembers = (members) => {
    members.forEach((member) => {
        let card = document.createElement('section');
        let name = document.createElement('h3');
        let picture = document.createElement('img');
        let phone = document.createElement('p');
        let address = document.createElement('p');
        let siteWrap = document.createElement('p');
        let site = document.createElement('a');

        card.className = "business";

        name.textContent = member.name;

        phone.textContent = member.phone;

        address.textContent = member.address;

        site.textContent = member.website;
        site.setAttribute('href', member.website)

        picture.setAttribute('src', `https://rorellana-b.github.io/wdd230/chamber/images/${member.image}.webp`);
        picture.setAttribute('alt', `Portrait of ${member.name} logo`);
        picture.setAttribute('loading', 'lazy');
        picture.setAttribute('width', '150');
        picture.setAttribute('height', '75');

        siteWrap.appendChild(site)

        card.appendChild(picture)
        card.appendChild(name)
        card.appendChild(phone)
        card.appendChild(address)
        card.appendChild(siteWrap)
        cards.appendChild(card)
    });
}

async function getMemberData() {
    const response = await fetch(memberURL);

    const data = await response.json();
    console.table(data.members);
    displayMembers(data.members);
}

select.addEventListener('click', () => {
    cards.classList.remove('cards')
    cards.classList.add('list')
});

selectIMG.addEventListener('click', () => {
    cards.classList.remove('list')
    cards.classList.add('cards')
});


getMemberData();

