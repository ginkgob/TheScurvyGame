//-----WHEEL OF DOOM-----

let players = ['Abde', 'Adrian', 'Albert', 'Ales', 'Alex', 'Daniel', 'Guillermo', 'Ingryd', 'Jess', 'Liviu', 'Lucas', 'Scarlet', 'Sergi', 'Uri', 'Miguel'];

let abde = document.querySelector('#abde');
let adrian = document.querySelector('#adrian');
let albert = document.querySelector('#albert');
let ales = document.querySelector('#ales');
let alex = document.querySelector('#alex');
let daniel = document.querySelector('#daniel');
let guillermo = document.querySelector('#guillermo');
let ingryd = document.querySelector('#ingryd');
let jess = document.querySelector('#jess');
let liviu = document.querySelector('#liviu');
let lucas = document.querySelector('#lucas');
let scarlet = document.querySelector('#scarlet');
let sergi = document.querySelector('#sergi');
let uri = document.querySelector('#uri');
let miguel = document.querySelector('#miguel'); 

let removed = players.splice();

//console.log(players.length);
console.log(players);

/* for(var i = array.length-1;i>=0;i--){
    array.splice(Math.floor(Math.random()*array.length), 1);
    console.log(array);
}*/

function randomPlayer (name) {
    let randomPlayer = name[Math.floor(Math.random()*name.length)];
    for(let i= players.length-1;i>=0;i--) {
        players.splice(randomPlayer, 1)
    };
        if (randomPlayer === 'Abde') {
            abde.style.display = 'block' //&& players.splice(name, 1);
        } else if (randomPlayer === 'Adrian') {
            adrian.style.display = 'block';
        } else if (randomPlayer === 'Albert') {
            albert.style.display = 'block';
        } else if (randomPlayer === 'Ales') {
            ales.style.display = 'block';
        } else if (randomPlayer === 'Alex') {
            alex.style.display = 'block';
        } else if (randomPlayer === 'Daniel') {
            daniel.style.display = 'block';
        } else if (randomPlayer === 'Guillermo') {
            guillermo.style.display = 'block';
        } else if (randomPlayer === 'Ingryd') {
            ingryd.style.display = 'block';
        } else if (randomPlayer === 'Jess') {
            jess.style.display = 'block';
        } else if (randomPlayer === 'Liviu') {
            liviu.style.display = 'block';
        } else if (randomPlayer === 'Lucas') {
            lucas.style.display = 'block';
        } else if (randomPlayer === 'Scarlet') {
            scarlet.style.display = 'block';
        } else if (randomPlayer === 'Sergi') {
            sergi.style.display = 'block';
        } else if (randomPlayer === 'Uri') {
            uri.style.display = 'block';
        } else if (randomPlayer === 'Miguel') {
            miguel.style.display = 'block';
        };
    return randomPlayer;
};

let deadPlayer = randomPlayer(players);
console.log('Ha muerto: ' + deadPlayer);

/* let pruebafuncion = randomPlayer(prueba);
console.log(pruebafuncion); */
