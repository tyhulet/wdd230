const cards = document.querySelector('#cards');

async function getMemberData() {
    const response = await fetch("https://tyhulet.github.io/wdd230/chamber/data/members.json");
    const data = await response.json();
    displayMembers(data.companies);
}

getMemberData();

function displayMembers(companies) {
    companies.forEach((company) => {


        let card = document.createElement('section');
        let name = document.createElement('h2');
        let img = document.createElement('img');
        let phonenumber = document.createElement('p');
        let address = document.createElement('p');
        let url = document.createElement('a');
        let memberlevel = document.createElement('p');


        name.textContent = ` ${company.name}`;
        phonenumber.textContent = `${company.phonenumber}`;
        address.textContent = `${company.address}`;
        memberlevel.textContent = `${company.memberlevel}`;

        url.textContent = `${company.url}`;
        url.setAttribute('href', `${company.url}`);
        url.setAttribute('target', `_blank`);

        img.setAttribute('src', company.img);
        img.setAttribute('alt', 'logo of ${company.name}');
        img.setAttribute('loading', 'lazy');
        img.setAttribute('width', '200');
        img.setAttribute('height', '150');


        card.appendChild(img);
        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(phonenumber);
        card.appendChild(memberlevel);
        card.appendChild(url);
        cards.appendChild(card);

    });
}

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("#cards");


function showList() {
    display.classList.add("list");
    display.classList.remove("grid");
}

gridbutton.addEventListener("click", () => {
    display.classList.add("grid");
    display.classList.remove("list");
});

listbutton.addEventListener("click", showList);



