const aside = document.querySelector('aside');
const button = document.querySelector('button');
window.addEventListener('scroll', () => {
    if (window.scrollY > aside.offsetHeight + 120) {
        aside.style.visibility = 'hidden';
        button.style.visibility = 'visible';
    }
    else {
        aside.style.visibility = 'visible';
        button.style.visibility = 'hidden';
    }
});
button.addEventListener('click', () => {
    if (aside.style.visibility === 'hidden') {
        aside.style.visibility = 'visible';
    }
    else {
        aside.style.visibility = 'hidden';
    }
});