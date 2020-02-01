// Event Handler

// - Inline HTML attribute
const p3 = document.querySelector('.p3')
function ubahWarnaP3(){
   p3.style.backgroundColor = 'lightblue'
   p3.style.color = 'red'
}


// - Element method
const p2 = document.querySelector('.p2')

p2.onclick = function(){
   p2.style.backgroundColor = 'lightblue'
}


// addEventListener()
let p4 = document.querySelector('section#b p')
p4.addEventListener('click', function(){
   const sectionB = document.getElementById('b')
   const len = document.querySelectorAll('section#b ul li').length //mendapatkan panjang dari li 
   
   const ul = document.getElementsByTagName('ul')[0]
   const liBaru = document.createElement('li')
   liBaru.style.backgroundColor = random_bg_color()
   const rgb = random_bg_color()
   const teksLiBaru = document.createTextNode(`Item ${ len+1 } ${rgb}`)
   liBaru.appendChild(teksLiBaru)
   
   ul.appendChild(liBaru)
})

function random_bg_color() {
   var x = Math.floor(Math.random() * 256);
   var y = Math.floor(Math.random() * 256);
   var z = Math.floor(Math.random() * 256);
   var bgColor = "rgb(" + x + "," + y + "," + z + ")";
 
   return bgColor
}





// Different From Event Handler and addEventListener

// const p3 = document.querySelector('.p3')
// Event Handler Run the last change
// p3.onclick = function() {
//    p3.style.backgroundColor = 'lightblue'
// }

// p3.onclick = function() {
//    p3.style.color = 'red'
// }


// addEventListener

// p3.addEventListener('click', function() {
//    p3.style.backgroundColor = 'lightblue'
// })

// p3.addEventListener('click', function() {
//    p3.style.color = 'red'
// })
