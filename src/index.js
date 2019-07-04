import './styles/index.scss';

const abf = (e) => {
  e.preventDefault();
  console.log('values', e.currentTarget);
  const text = textarea.value;

  const words = text.split(' ');

  let html = words.map((word) => {
    return `${word}<span style="color: #fff;">а</span>`;
  }).join('');

  document.querySelector('.result').innerHTML = html;
};

const form = document.querySelector('.form');
const textarea = form.querySelector('.textarea');
form.addEventListener('submit', abf);
