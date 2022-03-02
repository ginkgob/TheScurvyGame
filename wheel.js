//-----WHEEL OF DOOM-----

let alivePlayers = ['Abde', 'Adrian', 'Albert', 'Ales', 'Alex', 'Daniel', 'Damaris', 'Guillermo', 'Ingryd', 'Jess', 'Liviu', 'Lucas', 'Miguel', 'Scarlet', 'Sergi', 'Uri'];
let deadPlayers = [];

/* let abde = document.querySelector('#abde');
let adrian = document.querySelector('#adrian');
let albert = document.querySelector('#albert');
let ales = document.querySelector('#ales');
let alex = document.querySelector('#alex');
let daniel = document.querySelector('#daniel');
let damaris = document.querySelector('#damaris');
let guillermo = document.querySelector('#guillermo');
let ingryd = document.querySelector('#ingryd');
let jess = document.querySelector('#jess');
let liviu = document.querySelector('#liviu');
let lucas = document.querySelector('#lucas');
let miguel = document.querySelector('#miguel'); 
let scarlet = document.querySelector('#scarlet');
let sergi = document.querySelector('#sergi');
let uri = document.querySelector('#uri');

function chooseRandomPlayer (name) {
    let randomPlayer = name[Math.floor(Math.random()*name.length)];     //let id = randomplayer (transform en minusculas)
        if (randomPlayer === 'Abde') {                                  //pasar minusculas + variable 
            abde.style.display = 'block'
        } else if (randomPlayer === 'Adrian') {
            adrian.style.display = 'block';
        } else if (randomPlayer === 'Albert') {
            albert.style.display = 'block';
        } else if (randomPlayer === 'Ales') {
            ales.style.display = 'block';
        } else if (randomPlayer === 'Alex') {
            alex.style.display = 'block';
        } else if (randomPlayer === 'Damaris') {
            damaris.style.display = 'block'
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
    return randomPlayer//.push(deadPlayers);
};

let result = chooseRandomPlayer(alivePlayers);
//console.log(result);

*/

function forTesting (array1, array2) {
    let result = 0;
    if (array1.length > 0) {
        randomName = Math.floor(Math.random()*array1.length); //Agarramos un nombre random de array1
        nameSubstraction = array1.splice(randomName, 1).toString(); //Quitamos ese nombre random de array1
        addToArray = array2.unshift(nameSubstraction); //Colocamos el nombre random en array2
        console.log(array1, array2);
    }
    return result;
};
