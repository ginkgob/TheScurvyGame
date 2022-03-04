//-----WHEEL OF DOOM-----

let alivePlayers = ['Abde', 'Adrian', 'Albert', 'Ales', 'Alex', 'Daniel', 'Damaris', 'Guillermo', 'Ingryd', 'Jess', 'Liviu', 'Lucas', 'Miguel', 'Scarlet', 'Sergi', 'Uri', 'Jose', 'Laura'];
let deadPlayers = [];

let avatarImg = document.getElementById('avatar');

let imgs = {
    'Abde': './avatar png/Abde-removebg-preview.png',
    'Adrian': './avatar png/Adrian-removebg-preview.png',
    'Albert': './avatar png/Albert-removebg-preview.png',
    'Ales': './avatar png/Ales-removebg-preview.png',
    'Alex': './avatar png/Alex-removebg-preview.png',
    'Daniel': './avatar png/Daniel-removebg-preview.png',
    'Damaris': './avatar png/Damaris.png',
    'Guillermo': './avatar png/Guillermo-removebg-preview.png',
    'Ingryd': './avatar png/Ingryd-removebg-preview.png',
    'Jess': './avatar png/Jess-removebg-preview.png',
    'Liviu': './avatar png/Liviu-removebg-preview.png',
    'Lucas': './avatar png/Lucas-removebg-preview.png',
    'Miguel': './avatar png/Miguel2.png',
    'Scarlet': './avatar png/Scarlet.png',
    'Sergi': './avatar png/Sergi-removebg-preview.png',
    'Uri': './avatar png/Uri-removebg-preview.png',
    'Jose': './avatar png/Jose.png',
    'Laura': './avatar png/Laura.png'
} 

function killPlayers (array1, array2) {
    if (array1.length > 0) {
        randomName = Math.floor(Math.random()*array1.length); 
        nameSubstraction = array1.splice(randomName, 1).toString();
        addToArray = array2.unshift(nameSubstraction); 
            //console.log(array1, array2);
        document.querySelector('#alivePlayers').innerHTML = array1.join(" ");
        document.querySelector('#deadPlayers').innerHTML = array2.join(" ");
    } else if (array1.length === 0)
        document.querySelector('.limon').onclick = function () {
            window.location='./thirdpage.html'
    }
    let imgSrc = imgs[nameSubstraction];
    avatarImg.src = imgSrc;
};