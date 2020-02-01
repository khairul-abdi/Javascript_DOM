// DOM Selection

// document.getElementById() --> element
// document.getElementsByTagName
// document.getElementsByClassName
// document.querySelector
// document.querySelectorAll


// document.getElementById() 
const judul = document.getElementById('judul')
judul.style.color = 'red'
judul.style.backgroundColor = '#ccc'


// document.getElementsByTagName
let p = document.getElementsByTagName('p')

for (let i = 0; i < p.length; i++) {
   p[i].style.backgroundColor = 'lightblue'
}

const h1 = document.getElementsByTagName('h1')[0] //Bisa digunakan walaupun hanya 1 tag
h1.innerHTML = 'KHAIRUL ABDI'


// document.getElementsByClassName()
const p1 = document.getElementsByClassName('p1')[0]
p1.innerHTML = 'Ini diubah dari javascript' 

