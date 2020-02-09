const tUbahWarna = document.getElementById('tUbahWarna') 
tUbahWarna.addEventListener('click', () => {
  // document.body.style.backgroundColor = 'salmon'
  // document.body.setAttribute('class', 'biru-muda')
  document.body.classList.toggle('biru-muda')
})

const tAcakWarna = document.createElement('button')
const teksTAcakWarna = document.createTextNode('Acak Warna')
tAcakWarna.appendChild(teksTAcakWarna)
tAcakWarna.setAttribute('type', 'button')

// Cara memasukkan ke document
// document.body.appendChild(tAcakWarna)
tUbahWarna.after(tAcakWarna)

tAcakWarna.addEventListener('click', () => {
  const r = Math.trunc(Math.random() * 255)
  const g = Math.trunc(Math.random() * 255)
  const b = Math.trunc(Math.random() * 255)

  
  document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
})

const sectionA = document.querySelector('section#a')

const sMerah = sectionA.querySelector('input[name=sMerah]')
const sHijau = sectionA.querySelector('input[name=sHijau]')
const sBiru = sectionA.querySelector('input[name=sBiru]')

sectionA.addEventListener('input', () => {

  const r = sMerah.value
  const g = sHijau.value
  const b = sBiru.value

  document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
})

