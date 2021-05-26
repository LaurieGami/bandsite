// Array of Concerts
let concerts = [
    {
        date: "Mon Sept 06 2021",
        venue: "Ronald Lane",
        location: "San Francisco, CA",
        link: "https://thefillmore.com/"
    },
    {
        date: "Tue Sept 21 2021",
        venue: "Pier 3 East",
        location: "San Francisco, CA",
        link: "https://www.thewarfieldtheatre.com/"
    },
    {
        date: "Fri Oct 15 2021",
        venue: "View Lounge",
        location: "San Francisco, CA",
        link: "https://www.theregencyballroom.com/"
    },
    {
        date: "Sat Nov 06 2021",
        venue: "Hyatt Agency",
        location: "San Francisco, CA",
        link: "https://www.ticketmaster.ca/"
    },
    {
        date: "Fri Nov 26 2021",
        venue: "Moscow Center",
        location: "San Francisco, CA",
        link: "https://www.ticketmaster.ca/"
    },
    {
        date: "Wed Dec 15 2021",
        venue: "Press Club",
        location: "San Francisco, CA",
        link: "https://www.ticketmaster.ca/"
    }
];

const createConcertItems = (listName) => {
    let item = document.createElement('li');
    item.classList.add('shows__list-item');
    
    let date = document.createElement('p');
    date.innerText = `${listName.date}`;
    date.classList.add('shows__list-date');
    item.appendChild(date);

    let venue = document.createElement('p');
    venue.innerText = `${listName.venue}`;
    venue.classList.add('shows__list-venue');
    item.appendChild(venue);

    let location = document.createElement('p');
    location.innerText = `${listName.location}`;
    location.classList.add('shows__list-location');
    item.appendChild(location);

    let button = document.createElement('button');
    button.innerText = 'Buy Tickets';
    button.addEventListener('click', (event) => {
        event.preventDefault();
        window.open(`${listName.link}`, '_blank');
    });
    button.classList.add('shows__list-button');
    item.appendChild(button);

    return item;
}

const displayConcert = (concertList) => {
    let list = document.createElement('ul');
    list.classList.add('shows__list');

    for (let i = 0; i < concertList.length; i++) {
        let listItem = createConcertItems(concertList[i]);
        list.appendChild(listItem);
    }

    document.querySelector('.shows__container').appendChild(list);

    return list;
}

displayConcert(concerts);