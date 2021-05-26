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

// Display Comments on Page

const createCommentItems = (listName) => {
    let item = document.createElement('li');
    item.classList.add('comments__list-item');
    
    let name = document.createElement('h3');
    name.innerText = `${listName.name}`;
    name.classList.add('comments__list-name');
    item.appendChild(name);

    let timeStamp = document.createElement('p');
    timeStamp.innerText = `${listName.timeStamp}`;
    timeStamp.classList.add('comments__list-timestamp');
    item.appendChild(timeStamp);

    let text = document.createElement('p');
    text.innerText = `${listName.text}`;
    text.classList.add('comments__list-text');
    item.appendChild(text);

    return item;
}

const displayComment = (commentList) => {
    let list = document.createElement('ul');
    list.classList.add('comments__list');

    for (let i = 0; i < commentList.length; i++) {
        let listItem = createCommentItems(commentList[i]);
        list.appendChild(listItem);
    }

    document.querySelector('.comments__container').appendChild(list);

    return list;
}

displayComment(comments);