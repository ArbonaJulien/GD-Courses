
window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.querySelector('.nav-container').classList.add('scrolled');
    document.querySelector('.nav-container ul li button').classList.remove('dark');
    document.querySelector('.nav-container ul li button').classList.add('light');
} else {
    document.querySelector('.nav-container').classList.remove('scrolled');
    document.querySelector('.nav-container ul li button').classList.remove('light');
    document.querySelector('.nav-container ul li button').classList.add('dark');
  }
}

document.querySelector('input#btn_menuBurger').addEventListener('change', (e) => {
  if(e.currentTarget.checked) {
    document.querySelector('label[for=' + e.currentTarget.id + '] img').src = 'src/close-icon.svg';
  } else {
    document.querySelector('label[for=' + e.currentTarget.id + '] img').src = 'src/burgerMenu-icon.svg';

  }
});