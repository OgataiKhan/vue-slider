'use strict';

const { createApp } = Vue;

createApp({
    data() {
        return {
            slides: [
                {
                    image: 'img/01.jpg',
                    title: "Meet Bob",
                    description: "Bob is a developer. Bob always remembers to feed his rubber duck. Be like Bob."
                },
                {
                    image: 'img/02.jpg',
                    title: "Bob is a digital nomad",
                    description: "He lives in a tiny Swiss lakeside town."
                },
                {
                    image: 'img/03.jpg',
                    title: "Bob works remotely",
                    description: "He builds websites for a big London-based company."
                },
                {
                    image: 'img/04.jpg',
                    title: "Bob often works until late",
                    description: "All that code is not going to write itself."
                },
                {
                    image: 'img/05.jpg',
                    title: "Bob doesn't like bugs",
                    description: "If the console displays that bloody error message one more time he swears he's dropping everything and moving to the Bahamas."
                }
            ],
            currentIndex: 0,
            
        }
    }
}).mount('#app');


/*
// FUNCTIONS
// Prev function
function prevFn() {
    domSlides[currentSlide].classList.remove('active');
    domThumbnails[currentSlide].classList.remove('highlighted');
    if (currentSlide > 0) {
        currentSlide--;
    } else {
        currentSlide = domSlides.length - 1;
    }
    domSlides[currentSlide].classList.add('active');
    domThumbnails[currentSlide].classList.add('highlighted');
}

// Next function
function nextFn() {
    domSlides[currentSlide].classList.remove('active');
    domThumbnails[currentSlide].classList.remove('highlighted');
    if (currentSlide < domSlides.length - 1) {
        currentSlide++;
    } else {
        currentSlide = 0;
    }
    domSlides[currentSlide].classList.add('active');
    domThumbnails[currentSlide].classList.add('highlighted');
}

// Autoplay function
function autoplayAction() {
    if (autoplayDirection === 'forward') {
        nextFn();
    } else {
        prevFn();
    }
}

// DATA
const imageData = [
    {
        image: 'img/01.jpg',
        title: "Meet Bob",
        description: "Bob is a developer. Bob always remembers to feed his rubber duck. Be like Bob."
    },
    {
        image: 'img/02.jpg',
        title: "Bob is a digital nomad",
        description: "He lives in a tiny Swiss lakeside town."
    },
    {
        image: 'img/03.jpg',
        title: "Bob works remotely",
        description: "He builds websites for a big London-based company."
    },
    {
        image: 'img/04.jpg',
        title: "Bob often works until late",
        description: "All that code is not going to write itself."
    },
    {
        image: 'img/05.jpg',
        title: "Bob doesn't like bugs",
        description: "If the console displays that bloody error message one more time he swears he's dropping everything and moving to the Bahamas."
    }
];

// VARIABLES
const items = document.querySelector('.items');
const thumbnails = document.querySelector('.thumbnails');
let currentSlide = 0;
let autoplayDirection = 'forward';

// Templates
const itemTemplate = document.getElementById('itemTemplate').content;
const thumbnailTemplate = document.getElementById('thumbnailTemplate').content;

// EXECUTION
// Add items and thumbnails to DOM using templates
imageData.forEach((element, index) => {
    // Images, titles, & descriptions
    const itemNode = itemTemplate.cloneNode(true);
    itemNode.querySelector('img').src = element.image;
    itemNode.querySelector('img').alt = `Image ${index + 1}`;
    itemNode.querySelector('.textbox h2').textContent = element.title;
    itemNode.querySelector('.textbox p').textContent = element.description;
    items.appendChild(itemNode);

    // Thumbnails
    const thumbnailNode = thumbnailTemplate.cloneNode(true);
    thumbnailNode.querySelector('img').src = element.image;
    thumbnailNode.querySelector('img').alt = `Image ${index + 1} thumbnail`;
    thumbnails.appendChild(thumbnailNode);
});

// Add "active" and "highlighted" classes to the first item and thumbnail respectively
const firstItem = items.querySelector('.item');
firstItem.classList.add('active');
const firstThumbnail = thumbnails.querySelector('.thumbnail');
firstThumbnail.classList.add('highlighted');

// Variables after DOM rewriting
const domSlides = document.querySelectorAll('.item');
const domThumbnails = document.querySelectorAll('.thumbnail');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

// Manage arrow clicks
prev.addEventListener('click', prevFn);
next.addEventListener('click', nextFn);

// Manage thumbnail clicks
for (let i = 0; i < domThumbnails.length; i++) {
    domThumbnails[i].addEventListener('click', function () {
        domSlides[currentSlide].classList.remove('active');
        domThumbnails[currentSlide].classList.remove('highlighted');
        currentSlide = i;
        domSlides[currentSlide].classList.add('active');
        domThumbnails[currentSlide].classList.add('highlighted');
    });
}

// Autoplay
let autoplayFn = setInterval(autoplayAction, 3_000);

// Buttons
const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');
const reverseBtn = document.getElementById('reverse');

// Start
startBtn.addEventListener('click', function() {
    clearInterval(autoplayFn);
    autoplayFn = setInterval(autoplayAction, 3000);
    stopBtn.innerHTML = '&#9208;';
});
// Stop
stopBtn.addEventListener('click', function() {
    clearInterval(autoplayFn);
    stopBtn.innerHTML = '&#9632;';
});
// Reverse
reverseBtn.addEventListener('click', function() {
    if (autoplayDirection === 'forward') {
        autoplayDirection = 'backward';
        reverseBtn.innerHTML = '&#8635;';
    } else {
        autoplayDirection = 'forward';
        reverseBtn.innerHTML = '&#8634;';
    }
});
*/