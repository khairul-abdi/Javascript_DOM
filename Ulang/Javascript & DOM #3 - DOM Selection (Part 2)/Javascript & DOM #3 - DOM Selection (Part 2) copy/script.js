// DOM Selection

// document.getElementById() --> element
// document.getElementsByTagName
// document.getElementsByClassName
// document.querySelector
// document.querySelectorAll




//document.querySelector()
p4 = document.querySelector('#b p')
// console.log(p4)
p4.style.color = 'green'


//document.querySelectorAll()
li2 = document.querySelector('#b ul li:nth-child(2)')
li2.style.backgroundColor = 'orange'


p = document.querySelectorAll('p')
// console.log(p)
for (let i = 0; i < p.length; i++) {
   p[i].style.backgroundColor = 'lightblue'
   if (i != p.length - 1) {
      p[i].style.color = 'white'
   }
}