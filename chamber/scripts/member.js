const url = "https://tyhulet.github.io/wdd230/chamber/data/members.json";
const cards = document.querySelector("#card");

async function getMembersData() {
    const response = await fetch(url);
    const data = await response.json();
    displayMembers(data.members);
}

getMembersData();

const displayMembers = (members) => {
    members.forEach((member) => {

        let card = document.createElement('section');
        let name = document.createElement('h2');
        let img = document.createElement('img');
        let address = document.createElement('h3');
        let phone = document.createElement('h4');
        let url = document.createElement('a');
        let level = document.createElement('h5');

        name.textContent = `${member.name}`;
        phone.textContent = `${member.phone}`;
        address.textcontent = `${member.address}`;

        img.setAttribute('src', busines.image);
        img.setAttribute('alt', 'logo of ${busines.name}');
        img.setAttribute('loading', 'lazy');
        img.setAttribute('width', '150');
        img.setAttribute('height', '100');

        card.appendChild(img);
        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(phone);
        cards.appendChild(card)

    });
}




