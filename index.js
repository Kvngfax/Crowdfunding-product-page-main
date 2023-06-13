const backBtn = document.getElementById('backBtn');
const thankYou = document.getElementById('thankYou');
const thankYou2 = document.getElementById('thankYou2');
const closeBtn = document.getElementById('closeBtn');
const closeBtn2 = document.getElementById('closeBtnNew');
const popup = document.getElementById('popup');
const popup2 = document.getElementById('popup3');
const backdrop = document.getElementById('backdrop');
const radios = document.querySelectorAll('input');
const openButton = document.getElementById('open');
const closeButton = document.getElementById('close');
const menu = document.getElementById('nav-links');
const index = document.getElementById('index');

openButton.addEventListener('click', () => {
  menu.style.display = 'block';
  openButton.style.display = 'none';
  closeButton.style.display = 'block';
  backdrop.classList.add('visible');
  index.style.zIndex = 0;
});

closeButton.addEventListener('click', () => {
  menu.style.display = 'none';
  openButton.style.display = 'block';
  closeButton.style.display = 'none';
  backdrop.classList.remove('visible');
  index.style.zIndex = 4;
});


backBtn.addEventListener('click', function () {
  popup.style.display = 'flex';
  backdrop.classList.add('visible');
});

thankYou.addEventListener('click', function () {
  popup2.style.display = 'block';
  popup.style.display = 'none';
});

thankYou2.addEventListener('click', () => {
    popup2.style.display = 'block';
    popup.style.display = 'none';
  });

closeBtn.addEventListener('click', function () {
  popup.style.display = 'none';
  backdrop.classList.remove('visible');
});

closeBtn2.addEventListener('click', function () {
  popup2.style.display = 'none';
  backdrop.classList.remove('visible');
});

radios.forEach(radio => {
  radio.addEventListener('click', () => {
    radio.parentElement.classList.add('selected');
  });
});

// Show the button when scrolling down
window.onscroll = function() {
  showBackToTopButton();
};

// Function to check scroll position and show/hide the button
function showBackToTopButton() {
  var button = document.getElementById("back-to-top");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
}

// Scroll to the top when the button is clicked
document.getElementById("back-to-top").addEventListener("click", function() {
  scrollToTop();
});

// Function to smoothly scroll to the top of the page
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

