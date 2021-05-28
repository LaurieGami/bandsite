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

// Create an element with a class
const makeElement = (element, className) => {
    let anElement = document.createElement(element);
    anElement.classList.add(className);
    return anElement;
}

// Create a card for each show
const createConcertItem = (showArray) => {
    let item = makeElement('li', 'show');

    let headingDates = makeElement('h4', 'show__heading');
    headingDates.innerText = 'Dates';
    item.appendChild(headingDates);
    
    let date = makeElement('p', 'show__date');
    date.innerText = `${showArray.date}`;
    item.appendChild(date);

    let headingVenue = makeElement('h4', 'show__heading');
    headingVenue.innerText = 'Venue';
    item.appendChild(headingVenue);

    let venue = makeElement('p', 'show__venue');
    venue.innerText = `${showArray.venue}`;
    item.appendChild(venue);

    let headingLocation = makeElement('h4', 'show__heading');
    headingLocation.innerText = 'Location';
    item.appendChild(headingLocation);

    let location = makeElement('p', 'show__location');
    location.innerText = `${showArray.location}`;
    item.appendChild(location);

    let button = makeElement('button', 'show__button');
    button.innerText = 'Buy Tickets';

    button.addEventListener('click', (event) => {
        event.preventDefault();
        console.log(`${showArray.location}`);
        // window.open(`${showArray.link}`, '_blank');
    });

    let buttonContainer = makeElement('div', "show__button-container");
    buttonContainer.appendChild(button);
    
    item.appendChild(buttonContainer);

    return item;
}

// Display shows in the Shows Container
const displayConcert = (showArray) => {
    // Select the container to add the show information to
    let showContainer = document.querySelector('.shows__container');
    
    // Create the headings for the Tablet & Desktop Version
    let listHeadingContainer = document.createElement('div');
    listHeadingContainer.classList.add('shows__heading-container');

    let labelDates = makeElement('h4', 'shows__heading');
    labelDates.innerText = 'Dates';
    listHeadingContainer.appendChild(labelDates);

    let labelVenue = makeElement('h4', 'shows__heading');
    labelVenue.innerText = 'Venue';
    listHeadingContainer.appendChild(labelVenue);

    let headingLocation = makeElement('h4', 'shows__heading');
    headingLocation.innerText = 'Location';
    listHeadingContainer.appendChild(headingLocation);

    showContainer.appendChild(listHeadingContainer);

    // Create the list for show items
    let list = document.createElement('ul');
    list.classList.add('shows__list');

    // Create each show items and add them to the list
    for (let i = 0; i < showArray.length; i++) {
        let listItem = createConcertItem(showArray[i]);
        list.appendChild(listItem);
    }

    // Append the list to the Shows Container on our html file
    showContainer.appendChild(list);
}

// Display the shows in the array when first loading the page
displayConcert(concerts);