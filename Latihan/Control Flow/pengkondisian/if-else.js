// Control Flow - Pengkondisian 
// 1. if 
var angka1 = 1;
if(angka1 <= 10) {
	console.log(angka1 + ' lebih kecil sama dengan 10.')
}


// 2. if else 
// var question = prompt('Masukkan angka:')

// if (question % 2 == 0) {
// 	alert(question + ' adalah bilangan GENAP')
// } else {
// 	alert(question + ' adalah bilangan GANJIL')
// }


// 3. else if 
// kita bisa menyisipkan else if diantara if dan else. else if ini bisa banyak, mungkin kita bisa membuat else if lebih dari 1 kali.
var angka = prompt('Masukkan Angka:');

if (angka % 2 === 0) {
	alert(angka + ' adalah bilangan GENAP');
} else if (angka % 2 === 1) {
	alert(angka + ' adalah bilangan GANJIL');
} else {
	alert('yang anda masukkan bukan angka!!')
}
