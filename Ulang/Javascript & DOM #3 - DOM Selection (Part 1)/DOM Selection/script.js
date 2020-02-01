// DOM Selection

// document.getElementById() --> element
// document.getElementsByTagName
// document.getElementsByClassName
// document.querySelector
// document.querySelectorAll


const h1 = document.getElementById('judul')
// console.log(h1)
h1.style.color = 'red'
h1.style.backgroundColor = '#ccc'
h1.innerHTML = 'Khairul Abdi'


const p = document.getElementsByTagName('p')
// console.log(p)
for (let i = 0; i < p.length; i++) {
   p[i].style.backgroundColor = 'lightblue'
}

const p1 = document.getElementsByClassName('p1')[0]
console.log(p1)
p1.innerHTML = 'ini diubah melalui javascript'