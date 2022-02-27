//-----WHEEL OF DOOM-----

let players = ['Abde', 'Adrian', 'Albert', 'Ales', 'Alex', 'Daniel', 'Guillermo', 'Ingryd', 'Jess', 'Liviu', 'Lucas', 'Scarlet', 'Sergi', 'Uri', 'Yeray'];
let lemonclick = document.querySelector('.limon');
let avatar = document.querySelector('.avatar');
//let prueba = ['Armando', 'Rocio', 'Hector']

//console.log(players.length);

function randomPlayer (name) {
    let randomPlayer = name[Math.floor(Math.random()*name.length)];
        if (randomPlayer === 'Abde') {
            avatar.style.display = 'block';
        };
    return randomPlayer;
};

let deadPlayer = randomPlayer(players);
console.log('Ha muerto: ' + deadPlayer); 

/* let pruebafuncion = randomPlayer(prueba);
console.log(pruebafuncion); */
