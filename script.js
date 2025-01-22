// Typewriter Effect
const text = "Hi, I'm Joshua Dornfeldt.";
const typewriter = document.getElementById('typewriter');
let index = 0;

function type() {
  if (index < text.length) {
    typewriter.innerHTML += text.charAt(index);
    index++;
    setTimeout(type, 100);
  }
}
window.onload = type;

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Modal Functionality
const modal = document.getElementById('modal');
const closeModal = document.querySelector('.close');
const modalText = document.getElementById('modal-text');

document.querySelectorAll('.project-link').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    modalText.textContent = e.target.closest('.project').querySelector('p').innerText;
    modal.style.display = 'block';
  });
});

closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});

// Scroll-To-Top Button
const scrollTopButton = document.getElementById('scroll-top');

window.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
    scrollTopButton.style.display = 'block';
  } else {
    scrollTopButton.style.display = 'none';
  }
});

scrollTopButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Dynamic Year in Footer
document.getElementById('year').textContent = new Date().getFullYear();
