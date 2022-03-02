//----POPUP RON-----

const ronbutton = document.querySelector('#ron');
const popup = document.querySelector('.popup-wrapper');
const close = document.querySelector('.popup-close');

ronbutton.addEventListener('click', () => {
    popup.style.display = 'block';
});

close.addEventListener('click', () => {
    popup.style.display = 'none';
});

popup.addEventListener('click', e => {
    // console.log(e);
    if(e.target.className === 'popup-wrapper') {
        popup.style.display = 'none';
    }
});

///-----POPUP HISTORY-----

const paperbutton = document.querySelector('#paper');
const child = document.querySelector('.parent');
const closing = document.querySelector('.close');

paperbutton.addEventListener('click', () => {
    child.style.display = 'block';
});

closing.addEventListener('click', () => {
    child.style.display = 'none';
});

child.addEventListener('click', e => {
    // console.log(e);
    if(e.target.className === 'parent') {
        child.style.display = 'none';
    }
});

