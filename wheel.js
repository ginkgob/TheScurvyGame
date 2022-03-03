//-----WHEEL OF DOOM-----

let alivePlayers = ['Abde', 'Adrian', 'Albert', 'Ales', 'Alex', 'Daniel', 'Damaris', 'Guillermo', 'Ingryd', 'Jess', 'Liviu', 'Lucas', 'Miguel', 'Scarlet', 'Sergi', 'Uri'];
let deadPlayers = [];

let avatarImg = document.getElementById('avatar');

/* let imgs = {
    'Abde': './avatar png/Abde-removebg-preview.png',
    'Adrian': './avatar png/Adrian-removebg-preview.png'
} */

let abde = document.getElementById('abde');
let adrian = document.getElementById('adrian');
let albert = document.getElementById('albert');
let ales = document.getElementById('ales');
let alex = document.getElementById('alex');
let daniel = document.getElementById('daniel');
let damaris = document.getElementById('damaris');
let guillermo = document.getElementById('guillermo');
let ingryd = document.getElementById('ingryd');
let jess = document.getElementById('jess');
let liviu = document.getElementById('liviu');
let lucas = document.getElementById('lucas');
let miguel = document.getElementById('miguel'); 
let scarlet = document.getElementById('scarlet');
let sergi = document.getElementById('sergi');
let uri = document.getElementById('uri');

function killPlayers (array1, array2) {
    if (array1.length > 0) {
        randomName = Math.floor(Math.random()*array1.length); 
        nameSubstraction = array1.splice(randomName, 1).toString();
        addToArray = array2.push(nameSubstraction); 
            console.log(array1, array2);
        document.querySelector('#alivePlayers').innerHTML = array1.join(" ");
        document.querySelector('#deadPlayers').innerHTML = array2.join(" ");
    };
switch (nameSubstraction) {
    case 'Abde': 
        abde.style.display = 'block';
        setTimeout(function() {
            abde.style.display = 'none'
        }, 2000);
        break;
    case 'Adrian': 
        adrian.style.display = 'block';
        setTimeout(function() {
            adrian.style.display = 'none'
        }, 2000); 
        break;
    case 'Albert':
        albert.style.display = 'block';
        setTimeout(function() {
            albert.style.display = 'none'
        }, 2000);
        break;
    case 'Ales': 
        ales.style.display = 'block';
        setTimeout(function() {
            ales.style.display = 'none'
        }, 2000);
        break;
    case 'Alex': 
        alex.style.display = 'block';
        setTimeout(function() {
            alex.style.display = 'none'
        }, 2000);
        break;
    case 'Damaris': 
        damaris.style.display = 'block';
        setTimeout(function() {
        damaris.style.display = 'none'
        }, 2000);
            break;
    case 'Daniel': 
        daniel.style.display = 'block';
        setTimeout(function() {
            daniel.style.display = 'none'
        }, 2000);
            break;
    case 'Guillermo':
        guillermo.style.display = 'block';
        setTimeout(function() {
            guillermo.style.display = 'none'
        }, 2000);
            break;
    case 'Ingryd': 
        ingryd.style.display = 'block';
        setTimeout(function() {
            ingryd.style.display = 'none'
        }, 2000);
            break;
    case 'Jess': 
        jess.style.display = 'block';
        setTimeout(function() {
            jess.style.display = 'none'
        }, 2000);
            break;
    case 'Liviu': 
        liviu.style.display = 'block';
        setTimeout(function() {
            liviu.style.display = 'none'
        }, 2000);
            break;
    case 'Lucas': 
        lucas.style.display = 'block';
        setTimeout(function() {
            lucas.style.display = 'none'
        }, 2000);
            break;
    case 'Scarlet': 
        scarlet.style.display = 'block';
        setTimeout(function() {
            scarlet.style.display = 'none'
        }, 2000);
            break;
    case 'Sergi': 
        sergi.style.display = 'block';
        setTimeout(function() {
            sergi.style.display = 'none'
        }, 2000);
            break;
    case 'Uri': 
        uri.style.display = 'block';
        setTimeout(function() {
            uri.style.display = 'none'
        }, 2000);
            break;
    case 'Miguel': 
        miguel.style.display = 'block';
        setTimeout(function() {
            miguel.style.display = 'none'
        }, 2000);
            break;
    default: //no imprime ya que el if array1.lenght > 0, con >= quedan valores libres
            console.log('¡¡¡FIN DE CICLO!!!');
        };
};

