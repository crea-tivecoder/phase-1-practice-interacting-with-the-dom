// Select the counter element
const counterElement = document.getElementById('counter');

let counterValue = 0;
let timer = null;

function startCounter() {
    timer = setInterval(() => {
        counterValue++;
        counterElement.textContent = counterValue;
    }, 1000);
}
function stopCounter() {
    clearInterval(timer);
}

//Plus and Minus buttons that increment or decrement the counter
const plusBtn = document.getElementById('plus');
const minusBtn = document.getElementById('minus');

plusBtn.addEventListener('click', () => {
    counterValue++;
    counterElement.textContent = counterValue;
});

minusBtn.addEventListener('click', () => {
    counterValue--;
    counterElement.textContent = counterValue;
});

//"Like" button (❤️) that adds a "like" for the current counter value
const likeBtn = document.getElementById('heart');
const likesList = document.querySelector('.likes');
let likes = {};
likeBtn.addEventListener('click', () => {
    if (counterValue in likes) {
        likes[counterValue]++;
    } else {
        likes[counterValue] = 1;
    }
    renderLikes();
});
function renderLikes() {
    likesList.innerHTML = '';
    for (let key in likes) {
        const likeItem = document.createElement('li');
        likeItem.textContent = `${key} has been liked ${likes[key]} time(s)`;
        likesList.appendChild(likeItem);
    }
}

//"Pause" button that toggles the counter
const pauseBtn = document.getElementById('pause');

let isPaused = false;

pauseBtn.addEventListener('click', () => {
    if (isPaused) {
        startCounter();
        pauseBtn.textContent = 'pause';
    } else {
        stopCounter();
        pauseBtn.textContent = 'resume';
    }
    isPaused = !isPaused;
});

//Comment box that adds comments when submitted
const commentForm = document.querySelector('form');
const commentInput = document.getElementById('comment');

commentForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const commentText = commentInput.value;
    commentInput.value = '';
    const commentItem = document.createElement('p');
    commentItem.textContent = commentText;
    document.querySelector('.comments').appendChild(commentItem);
});
