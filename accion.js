/*--POPUP RON--*/

const button = document.querySelector('#ron');
const popup = document.querySelector('.popup-wrapper');

button.addEventListener('click', () => {
    popup.style.display = 'block';
});

const close = document.querySelector('.popup-close');

button.addEventListener('click', () => {
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


