//-----WHEEL OF DOOM-----

let alivePlayers = ['Abde', 'Adrian', 'Albert', 'Ales', 'Alex', 'Daniel', 'Damaris', 'Guillermo', 'Ingryd', 'Jess', 'Liviu', 'Lucas', 'Miguel', 'Scarlet', 'Sergi', 'Uri'];
let deadPlayers = [];

function forTesting (array1, array2) {
    let result = 0;
    if (array1.length > 0) {
        randomName = Math.floor(Math.random()*array1.length); //Agarramos un nombre random de array1
        nameSubstraction = array1.splice(randomName, 1).toString(); //Quitamos ese nombre random de array1
        addToArray = array2.unshift(nameSubstraction); //Colocamos el nombre random en array2
        console.log(array1, array2);
        document.getElementById('boxBl2').innerHTML = array1;
        document.getElementById('boxBr2').innerHTML = array2;
    }
    return result;
};

//document.getElementById('prueba').innerHTML="<p>pruebapruebapruba</p>"
//var content = document.getElementById('someElement').innerHTML;