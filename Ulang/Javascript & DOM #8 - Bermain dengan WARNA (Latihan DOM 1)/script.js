// const tombol = document.getElementById('tombol')

// tombol.onclick = () => {
//    const body = document.body
//    // Menggunakan setAttribute Untuk membuat class di dalam tag HTML
//    // body.setAttribute('class', 'biru-muda')

//    // Menggunakan toggle jika true maka background akan berubah jika false background akan kembali ke default
//    body.classList.toggle('biru-muda')
// }






const tBaru = document.createElement('button') 
const teksTBaru = document.createTextNode('Ubah Warna')
tBaru.appendChild(teksTBaru)
tBaru.setAttribute('id', 'tombol')
document.body.appendChild(tBaru)


// Untuk Tulisan Kombinasi
const h2 = document.createElement('h2')
const teksH2 = document.createTextNode('Kombinasi Warna Background dari :')
h2.appendChild(teksH2)
document.body.appendChild(h2)


// Untuk Tulisan RGB
const H3rgb = document.createElement('h3')
let x = 0, y = 0, z = 0
let rgbTeks = document.createTextNode(`Red: ${x} Green: ${y} Blue: ${z}`)
H3rgb.appendChild(rgbTeks)
document.body.appendChild(H3rgb)

const tombol = document.getElementById('tombol')

tombol.onclick = () => {
   
   x = Math.trunc(Math.random() * 256)
   y = Math.trunc(Math.random() * 256)
   z = Math.trunc(Math.random() * 256)
   
   const rgb = `rgb(${x},${y},${z})`
   document.body.style.backgroundColor = rgb
   
   // Untuk Perubahan value dari RGB setelah di click 
   const baruH3rgb = document.createElement('h3')
   const baruRgbTeks = document.createTextNode(`Red: ${x} Green: ${y} Blue: ${z}`)
   baruH3rgb.appendChild(baruRgbTeks)

   // Replace
   const rgbReplace = document.getElementsByTagName('h3')[0]
   
   document.body.replaceChild(baruH3rgb, rgbReplace)
}

