// // DOM Selection (Part 1)

// //1. document.getElementById('')
// const h1 = document.getElementById('judul')
// h1.innerHTML = 'Khairul Abdi'
// h1.style.fontSize = '50px'
// h1.style.backgroundColor = '#cccc'
// h1.style.color = 'red'



// //2. document.getElementsByTagName('')
// // Menghasilkan HTMLCollection(Mirip ARRAY)

// const p = document.getElementsByTagName('p')
// for (let i = 0; i < p.length; i++) {
//    p[i].style.backgroundColor = 'lightblue'
// }



// //3. document.getElementsByClassName('')
// // Menghasilkan HTMLCollection(Mirip ARRAY)

// const p1 = document.getElementsByClassName('p1')[0]
// p1.innerHTML = 'Ini diubah dari javascript'




// DOM Selection (Part 2)
// const sectionB = document.getElementById('b')
// const sectionB = document.querySelector('section#b')



// const p4 = document.querySelector('section#b p')
// const p4 = sectionB.querySelector('p')
// const p4 = sectionB.getElementsByTagName('p')[0]





// Javascript & DOM #6 - DOM Manipulation (Part 2)

// createElement('') 
// createTextNode('')
// parentNode.appenChild('')
const sectionA = document.getElementById('a')

const pBaru = document.createElement('p')
const teksPBaru = document.createTextNode('Paragraf Baru')

pBaru.appendChild(teksPBaru)

sectionA.appendChild(pBaru)




// createElement('')
// createTextNode('')
// parentNode.replaceChild('', '')


const sectionB = document.querySelector('section#b')

const p4 = sectionB.querySelector('p')

const pJudul = document.createElement('h2')
const teksJudul = document.createTextNode('Judul Baru!')
pJudul.appendChild(teksJudul)

sectionB.replaceChild(pJudul, p4)



// parentNode.insertBefore('', '')
const ul = sectionB.querySelector('ul')
const li2 = ul.querySelector('li:nth-child(2)')

const liBaru = document.createElement('li')
const teksLiBaru = document.createTextNode('Item Baru')
liBaru.appendChild(teksLiBaru)

ul.insertBefore(liBaru, li2)



// parentNide.remove('')


const a = document.getElementsByTagName('a')[0]
sectionA.removeChild(a)




pBaru.style.backgroundColor = 'lightgreen'
pJudul.style.backgroundColor = 'lightgreen'
liBaru.style.backgroundColor = 'lightgreen'