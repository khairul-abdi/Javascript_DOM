// buat element baru
// Illustrasi seperti Bunga dan Vas Bunga


const pBaru = document.createElement('p');
const teksPBaru = document.createTextNode('Paragraf Baru');

// simpan tulisan ke dalam paragraf
pBaru.appendChild(teksPBaru);

// simpan pBaru di akhir SectionA
const SectionA = document.getElementById('a');
SectionA.appendChild(pBaru);


const liBaru = document.createElement('li');
const teksLiBaru = document.createTextNode('Item Baru');
liBaru.appendChild(teksLiBaru);

const ul = document.querySelector('section#b ul');
const li2 = ul.querySelector('li:nth-child(2)');

ul.insertBefore(liBaru, li2);



// Menghapus 
// const link = document.getElementsByTagName('a')[0];

// SectionA.removeChild(link);

const SectionB = document.getElementById('b');
const p4 = SectionB.querySelector('p');

const h2Baru = document.createElement('h2');
const teksH2Baru = document.createTextNode('Judul Baru!');

h2Baru.appendChild(teksH2Baru);

SectionB.replaceChild(h2Baru, p4);


// Hasil Yang diganti Oleh Javascript

pBaru.style.backgroundColor = 'lightgreen';
liBaru.style.backgroundColor = 'lightgreen';
h2Baru.style.backgroundColor = 'lightgreen';