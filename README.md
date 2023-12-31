# Frontend Mentor - Crowdfunding product page solution

This is a solution to the [Crowdfunding product page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/crowdfunding-product-page-7uvcZe7ZR). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

The goal was to replicate the webpage with my style of approach

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover states for interactive elements
- Make a selection of which pledge to make
- See an updated progress bar and total money raised based on their pledge total after confirming a pledge
- See the number of total backers increment by one after confirming a pledge
- Toggle whether or not the product is bookmarked

## My process

As part of my readme process, I worked extensively with HTML, CSS, and JavaScript to create a visually appealing and interactive user experience. HTML provided the structure and content of my website, while CSS was used to style and format it according to my design preferences.

JavaScript was used to add interactivity to my website, allowing users to interact with the content and perform various actions.

Throughout the development process, I made use of various libraries and frameworks to streamline my workflow and enhance the functionality of my website. Overall, my experience working with HTML, CSS, and JavaScript was challenging but rewarding, and I am pleased with the final result.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox

### What I learned

To see how you can add code snippets, see below:

```css
header {
  position: relative;
  background-image: url('images/image-hero-desktop.jpg');
  background-size: cover;
  height: 40vh;
  width: 100%;
  z-index: 1;
}
```

```js
window.onscroll = function () {
  showBackToTopButton();
};

// Function to check scroll position and show/hide the button
function showBackToTopButton() {
  var button = document.getElementById('back-to-top');
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    button.style.display = 'block';
  } else {
    button.style.display = 'none';
  }
}

// Scroll to the top when the button is clicked
document.getElementById('back-to-top').addEventListener('click', function () {
  scrollToTop();
});

// Function to smoothly scroll to the top of the page
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}
```

If you want more help with writing markdown, we'd recommend checking out [The Markdown Guide](https://www.markdownguide.org/) to learn more.

**Note: Delete this note and the content within this section and replace with your own learnings.**

### Continued development

I'm going to continue on my journey to be a JavaScript genius

## Author

- Frontend Mentor - [@kvngfax](https://www.frontendmentor.io/profile/kvngfax)
- Twitter - [@kvngfax](https://www.twitter.com/kvngfax)
