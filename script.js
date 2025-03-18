/* 
  ===========================================================
  File: script.js
  Author: Joshua Dornfeldt
  Description: JavaScript for portfolio site interactions:
               - Typewriter effect for heading
               - Smooth scrolling
               - Modal functionality
               - Scroll-to-top button
               - Dynamic footer year
  ===========================================================
*/

// ======================= Typewriter Effect =======================
const text = "Hi, I'm Joshua Dornfeldt.";   // Text to be typed out with the Typewriter Effect
const typewriter = document.getElementById('typewriter');
let index = 0;

/**
 * Recursively appends one character at a time to create a typewriter effect.
 * Triggered on window.onload.
 */
function type() {
  if (index < text.length) {
    typewriter.innerHTML += text.charAt(index);
    index++;
    setTimeout(type, 100);
  }
}
window.onload = type;


// ======================= Smooth Scrolling =======================
/**
 * Will attaches a click listener to all anchor links starting with "#".
 * Prevents default jump and smoothly scrolls to the target section.
 */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});


// ======================= Modal Functionality =======================
const modal = document.getElementById('modal');
const closeModal = document.querySelector('.close');
const modalText = document.getElementById('modal-text');

/**
 * For each element with .project-link class,
 * display a modal with relevant project details. This is an optional feature.
 */
document.querySelectorAll('.project-link').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    modalText.textContent = e.target.closest('.project').querySelector('p').innerText;
    modal.style.display = 'block';
  });
});

/**
 * Closes the modal when the close icon is clicked.
 */
closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

/**
 * Closes the modal if the user clicks outside the modal content.
 */
window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});


// ======================= Scroll-To-Top Button =======================
const scrollTopButton = document.getElementById('scroll-top');

/**
 * Shows the scroll-to-top button after scrolling 200px down.
 * Hides it when near the top.
 */
window.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
    scrollTopButton.style.display = 'block';
  } else {
    scrollTopButton.style.display = 'none';
  }
});

/**
 * Smoothly scrolls back to top when the top button is clicked.
 */
scrollTopButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});


// ======================= Dynamic Year in Footer =======================
/**
 * Inserts the current year into the footer element with id="year".
 * Ensures the site always displays the correct year when viewing the website.
 */
document.getElementById('year').textContent = new Date().getFullYear();
