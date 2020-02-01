// const p4 = document.getElementsByTagName('p')
// p4[3].style.backgroundColor = 'lightblue'


// Mengubah Root Node
sectionB = document.getElementById('b')
// console.log(sectionB)
const p4 =  sectionB.getElementsByTagName('p')[0]
console.log(p4)
p4.style.backgroundColor = ('orange')

const li2 = sectionB.querySelector('ul li:nth-child(2)')
console.log(li2)
li2.style.backgroundColor = 'lightblue'