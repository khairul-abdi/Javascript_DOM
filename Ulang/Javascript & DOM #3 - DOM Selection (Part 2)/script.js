// DOM Selection

// document.getElementById() --> element
// document.getElementsByTagName
// document.getElementsByClassName
// document.querySelector
// document.querySelectorAll

// document.querySelector() --> element
const p4 = document.querySelector('section#b p')
p4.style.color = 'green'
p4.style.fontSize = '30px';

const li2 = document.querySelector('section#b ul li:nth-child(2)')
li2.style.backgroundColor = 'orange'



// document.querySelectorAll()
// const p1 = document.getElementsByTagName('p')
// console.log(p1)  // HTMLCollection(4) [p.p1, p.p2, p.p3, p]


const p = document.querySelectorAll('p')
console.log(p) // NodeList(4) [p.p1, p.p2, p.p3, p]


// NodeList ATAU HTMLCollection dapat di Loop dengan For || While tapi gak bisa menggunakan Higher Order Function
for (let i = 0; i < p.length; i++) {
   p[i].style.color = 'lightblue'
}