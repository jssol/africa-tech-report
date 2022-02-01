const navToggle = document.querySelector('.nav-toggle');
const navListItems = document.querySelectorAll('.nav-list_item');
const navigation = document.querySelector('.nav');
const headline = document.querySelector('.headline-title');
const header = document.querySelector('.header');

function getTop(el) {
  const rect = el.getBoundingClientRect();
  return rect.top;
}

navToggle.addEventListener('click', () => {
  document.body.classList.toggle('nav-open');
});

navListItems.forEach((item) => {
  item.addEventListener('click', () => {
    document.body.classList.remove('nav-open');
  });
});
navigation.addEventListener('mouseup', () => {
  document.body.classList.remove('nav-open');
});

document.addEventListener('scroll', () => {
  if (getTop(headline) <= 50) {
    header.classList.add('blur');
  } else {
    header.classList.remove('blur');
  }
});