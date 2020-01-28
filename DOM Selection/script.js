//DOM Selection
// document.getElementById() ->element
const judul = document.getElementById('judul');
judul.style.color = 'red';
judul.style.backgroundColor = '#ccc';
judul.innerHTML = 'Khairul Abdi';


// document.getElementByTagName() -> HTMLCollections

const p =document.getElementsByTagName('p');

// Menggunakan Perulangan 
for(let i=0; i < p.length; i++){
    p[i].style.backgroundColor = 'lightblue';

}

// Menggunakan manual (Target yang kita inginkan)
// p[0].style.backgroundColor = 'lightblue';
// p[1].style.backgroundColor = 'lightblue';
// p[2].style.backgroundColor = 'lightblue';
// p[3].style.backgroundColor = 'lightblue';

const h1 = document.getElementsByTagName('h1')[0];
h1.style.fontSize='50px';

// document.getElementsByClassName() ->HTMLCollection (Digunakan untuk mengubah text pada html)
const p1 = document.getElementsByClassName('p1');
p1[0].innerHTML = 'Ini diubah dari javascript';