const m = document.querySelector('#m');
const a = document.querySelector('#a');
const e = document.querySelector('#e');
const d = document.querySelector('#d');
const l = document.querySelector('#l');
const logo = document.querySelector('#svg5');
const laptop = document.querySelector('#laptop');

const letters = [m, a, e, d, l];
const lettersReversed = [l, d, e, a, m];

const btn = document.querySelector('button');
btn.addEventListener('click', animateText);

const tl = gsap.timeline();


function animateText() {
  btn.classList.add('hidden');
  gsap.from(lettersReversed, {duration: 3, opacity: 0})
  tl.fromTo(lettersReversed,{x: -300, y: -10}, {duration: 0.75, x: 0, y: -10, stagger: 0.2, ease: 'power2'});
  tl.from(laptop, {duration: 2, delay: 0.5, opacity: 0});
  tl.to(letters, {duration: 0.25, delay: -1.5, y: 0, stagger: 0.1, ease: 'ease-in', onComplete: enableBtn});
}

function enableBtn() {
  console.log('enable');
  btn.classList.remove('hidden');
}

animateText();