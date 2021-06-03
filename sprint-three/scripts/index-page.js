const BASE_URL = 'https://project-1-api.herokuapp.com/';
const API_KEY = '3251e4ad-eb5a-4779-8b3a-b08207267fce';

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

// Calculate how long ago was the comment posted
const timeAgo = (timestamp) => {
    let date = new Date(timestamp);
    let today = new Date();
    let seconds = Math.round((today - date) / 1000);
    let minutes = Math.round(seconds / 60);
    let hours = Math.round(minutes / 60);

    if (seconds < 10) {
        return `Now`;
    } else if (seconds < 60) {
        return `${seconds} seconds ago`
    } else if (seconds < 90) {
        return `A minute ago`
    } else if (minutes < 60) {
        return `${minutes} minutes ago`
    } else if (hours < 2) {
        return `An hour ago`
    } else if (hours < 24) {
        return `${hours} hours ago`
    } else {
        return timestampToDate(timestamp)
    }
}

// Transform timestamp in a date format MM/DD/YYYY
const timestampToDate = (timestamp) => {
    let date = new Date(timestamp);
    
    let dd = date.getDate();
    let mm = date.getMonth()+1; 
    let yyyy = date.getFullYear();
    
    if (dd < 10) {
    dd = '0' + dd;
    } 

    if (mm < 10) {
    mm = '0' + mm;
    }

    return date = mm+'/'+dd+'/'+yyyy;
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
    timeStamp.innerText = timeAgo(commentArray.timestamp);
    rightSide.appendChild(timeStamp);

    // Create the comment of the card
    let text = makeElement('p', 'comment__text');
    text.innerText = commentArray.comment;
    rightSide.appendChild(text);

    // Create the buttons container of the card
    let buttonContainer = makeElement('div', 'comment__button-container');

    // Create the like button of the card
    let like = makeElement('div', 'comment__like');

    let likeBtn = makeElement('img', 'comment__like-img');
    likeBtn.src= "../assets/icons/SVG/icon-like.svg";
    like.appendChild(likeBtn);

    let likeCount = makeElement('div', 'comment__like-count');
    likeCount.innerText = commentArray.likes;
    like.appendChild(likeCount);

    like.addEventListener('click', (event) => {
        event.preventDefault();
        axios.put(`${BASE_URL}comments/${commentArray.id}/like?api_key=${API_KEY}`)
        .then(result => {
            console.log(result.data);
            getComments();
        })
        .catch(error => console.log(error))
    });

    buttonContainer.appendChild(like);

    // Create the delete button of the card
    let removeBtn = makeElement('img', 'comment__remove');
    removeBtn.src= "../assets/icons/SVG/icon-delete.svg";

    removeBtn.addEventListener('click', (event) => {
        event.preventDefault();
        axios.delete(`${BASE_URL}comments/${commentArray.id}?api_key=${API_KEY}`)
        .then(result => {
            console.log(result.data);
            getComments();
        })
        .catch(error => console.log(error))
    });

    buttonContainer.appendChild(removeBtn);

    rightSide.appendChild(buttonContainer);

    item.appendChild(leftSide);
    item.appendChild(rightSide);

    return item;
}

// Target the comment form
const commentForm = document.getElementById('comment-form');
// Target the container of the comments
const commentsContainer = document.getElementById('comment-container');

// Display comments in the Comments Container
const displayComment = (commentArray) => {
    // Empty the Comments Container prior to display it
    commentsContainer.innerHTML = '';

    // Sort the array of comments by date posted, with the latest at the top
    commentArray.sort((a, b) => {
        return b.timestamp - a.timestamp;
    });

    // Go through and create a card for all the comments in the array and add it to the container
    commentArray.forEach(comment => {
        let card = createCommentItem(comment);
        commentsContainer.appendChild(card);
    })
}

// Function to retrieve the comments
const getComments = () => {
    axios
        .get(`${BASE_URL}comments/?api_key=${API_KEY}`)
        .then(result => displayComment(result.data))
        .catch(error => console.log(error))
}

// Control the submit event of our form
const constrolSubmit = (event) => {
    // Prevent the page from reloading at submit event
    event.preventDefault();

    // Add the new comment to the API
    axios.post(`${BASE_URL}comments/?api_key=${API_KEY}`, {
        name: event.target.name.value,
        comment: event.target.comment.value
    })
    .then(result => {
        // Log the new comment on the console
        console.log(result.data);
        // Retrieve all the comments (including the new one)
        getComments();
    })
    .catch(error => console.log(error))

    // Reset the form inputs
    commentForm.reset();
}

// Add an event listener to the form
commentForm.addEventListener('submit', constrolSubmit);

// Display the comments in the array when first loading the page
getComments();