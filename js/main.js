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
            autoplayVariable: null,
        }
    },
    methods: {
        next() {
            this.currentIndex++;
            if (this.currentIndex > this.slides.length - 1) {
                this.currentIndex = 0;
            }
        },
        prev() {
            this.currentIndex--;
            if (this.currentIndex < 0) {
                this.currentIndex = this.slides.length - 1;
            }
        },
        changeImage(index) {
            this.currentIndex = index;
        },
        autoplay() {
            if (this.autoplayVariable) {
                clearInterval(this.autoplayVariable);
            }
            this.autoplayVariable = setInterval(this.next, 3000);
        },
        stopAutoplay() {
            clearInterval(this.autoplayVariable);
        }
    },
    mounted() {
        this.autoplay();
    }
}).mount('#app');