// Menambahkan tag p di dalam section A (Paragraf Baru)   || parentNode.appendChild()
const sectionA = document.querySelector('section#a')

const pBaru = document.createElement('p')
const teksPBaru = document.createTextNode('Paragraf Baru')

pBaru.appendChild(teksPBaru)
sectionA.appendChild(pBaru)
// console.log(pBaru)


// Menambahkan diantara li (Item Baru)  || parentNode.insertBefore()
const ul = document.querySelector('section#b ul')
// const li = ul.querySelector('li:nth-child(2)')
const li = document.querySelector('section#b ul li:nth-child(2)')


const liBaru = document.createElement('li')
const teksLiBaru = document.createTextNode('Item Baru')
liBaru.appendChild(teksLiBaru)

ul.insertBefore(liBaru, li)


// Remove || Menghapus sebuah element    || parentNode.removeChild()

const a = document.getElementsByTagName('a')[0]
sectionA.removeChild(a)



// Replace || Menggantikan sebuah element || parentNode.replaceChild() 
const sectionB = document.getElementById('b')
const p = sectionB.querySelector('p')

const h2Baru = document.createElement('h2')
const teksH2Baru = document.createTextNode('Judul Baru!')
h2Baru.appendChild(teksH2Baru)

sectionB.replaceChild(h2Baru, p)


h2Baru.style.backgroundColor = 'lightgreen'
liBaru.style.backgroundColor = 'lightgreen'
pBaru.style.backgroundColor = 'lightgreen'

