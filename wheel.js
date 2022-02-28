//-----WHEEL OF DOOM-----

let alivePlayers = ['Abde', 'Adrian', 'Albert', 'Ales', 'Alex', 'Daniel', 'Damaris', 'Guillermo', 'Ingryd', 'Jess', 'Liviu', 'Lucas', 'Miguel', 'Scarlet', 'Sergi', 'Uri'];
let deadPlayers = [];
//console.log(playersAlive.length);

let abde = document.querySelector('#abde');
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

function randomPlayer (name) {
    let randomPlayer = name[Math.floor(Math.random()*name.length)];
        if (randomPlayer === 'Abde') {
            abde.style.display = 'block'
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

let pickedPlayer = randomPlayer(alivePlayers); //llamo a la funcion

console.log(alivePlayers);
console.log(alivePlayers.length);
console.log('Ha muerto: ' + pickedPlayer);

//-------PRUEBAS DE SPLICE--------

let arrayTest = ['Juan', 'Isabel', 'Laura'];

let ri = Math.floor(Math.random()*arrayTest.length);
let rs = arrayTest.splice(ri, 1);

//console.log(rs);

function randsplice (test) {
    // for(let i = arrayTest.length-1;i>=0;i--){
    //     arrayTest.splice(Math.floor(Math.random()*arrayTest.length), 1);
    //     console.log(arrayTest);
    //   }
    
    
    // let ri = test[Math.floor(Math.random()*test.length)];
    // console.log('ss',ri)
    let rs = test.splice(Math.floor(Math.random()*test.length));
    console.log('rr',rs)
    return rs;
};

let totalResult = randsplice(arrayTest);
console.log(totalResult);
console.log(arrayTest);