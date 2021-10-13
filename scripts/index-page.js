// Array of Comments
let comments = [
    {
        name: "Connor Walton",
        timeStamp: "02/17/2021",
        text: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains."
    },
    {
        name: "Emilie Beach",
        timeStamp: "01/09/2021",
        text: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day."
    },
    {
        name: "Miles Acosta",
        timeStamp: "12/20/2020",
        text: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough."
    }
];

// Create an element with a class
const makeElement = (element, className) => {
    let anElement = document.createElement(element);
    anElement.classList.add(className);
    return anElement;
}

// Create avatar for card comment
const createAvatar = () => {
    // Create the container for avatar
    let avatarContainer = makeElement('div', 'avatar-container');

    // Create the avatar img
    let avatar = makeElement('img', 'avatar');
    // avatar.setAttribute('src', '');

    // Add avatar to avatar container
    avatarContainer.appendChild(avatar);

    return avatarContainer;
}

// Create a card for each comment
const createCommentItem = (commentArray) => {
    // Create the container of the card
    let item = makeElement('article', 'comment');

    // Create the left side of the card
    let leftSide = makeElement('div', 'comment__left');
    leftSide.appendChild(createAvatar());

    // Create the right side of the card
    let rightSide = makeElement('div', 'comment__right');
    
    // Create the heading of the card
    let name = makeElement('h3', 'comment__name');
    name.innerText = commentArray.name;
    rightSide.appendChild(name);

    // Create the timestamp of the card
    let timeStamp = makeElement('p', 'comment__timestamp');
    timeStamp.innerText = commentArray.timeStamp;
    rightSide.appendChild(timeStamp);

    // Create the comment of the card
    let text = makeElement('p', 'comment__text');
    text.innerText = commentArray.text;
    rightSide.appendChild(text);

    item.appendChild(leftSide);
    item.appendChild(rightSide);

    return item;
}

// Display comments in the Comment Container
const displayComment = (commentArray) => {
    // Target the container of the comments
    const comments = document.getElementById('comment-container');

    // Empty the comments' container prior to display it
    comments.innerHTML = '';

    // Go through all the comments in the array and add it to the container
    for (let i = 0; i < commentArray.length; i++) {
        let card = createCommentItem(commentArray[i]);
        comments.appendChild(card);
    }
}

// Control the submit event of our form
const constrolSubmit = (event) => {
    // Prevent the page from reloading at submit event
    event.preventDefault();

    // Get today's date
    let today = new Date();

    // Create a new comment object with the form inputs as data
    let data = {
        name: event.target.name.value,
        timeStamp: (today.getMonth()+1)+'/'+today.getDate()+'/'+today.getFullYear(), // Format today's date mm/dd/yyyy
        text: event.target.comment.value
    }

    // Add the new comment object to the beginning of the array
    comments.unshift(data);

    // Display all the comments (including the new one) on the page
    displayComment(comments);

    // Reset the form inputs
    commentForm.reset();
}

// Add an event listener to the form
commentForm.addEventListener('submit', constrolSubmit);

// Display the comments in the array when first loading the page
displayComment(comments);