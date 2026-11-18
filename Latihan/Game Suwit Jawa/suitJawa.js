// Latihan - Game Suwit Jawa 
// Pseudocode
var tanya = true;

while (tanya) {
	// Menangkap Pilihan Player
	var player = prompt('Masukkan Pilihan Anda: \ngajah, semut, orang');

	// Menangkap Pilihan Komputer
	// Membangkitkan bilangan random
	var comp = Math.random();

	if (comp < 0.34) {
		comp = 'gajah';
	} else if (comp > 0.34 && comp < 0.67) {
		comp = 'orang';
	} else {
		comp = 'semut';
	}


	var hasil = '';
	// menentukan rules
	if (player == comp) {
		hasil = 'SERI!';
	} else if (player == 'gajah') {
		// if (comp == 'orang') {
		// 	hasil = 'MENANG!';
		// } else {
		// 	hasil = 'KALAH!';
		// }

		// bisa menggunakan operator ternary 
		hasil = (comp == 'orang') ? 'MENANG!' : 'KALAH!';
	} else if (player == 'orang') {
		// if (comp == 'gajah') {
		// 	hasil = 'KALAH!'; 
		// } else {
		// 	hasil = 'MENANG!';
		// }

		// bisa menggunakan operator ternary 
		hasil = (comp == 'gajah') ? 'KALAH!' : 'MENANG!';
	} else if (player == 'semut') {
		// if (comp == 'orang') {
		// 	hasil = 'KALAH!';
		// } else {
		// 	hasil = 'MENANG!';
		// }

		// bisa menggunakan operator ternary
		hasil = (comp == 'orang') ? 'KALAH!' : 'MENANG!';
	} else {
		hasil = 'memasukkan pilihan yang salah!!';
	}


	// tampilkan hasilnya 
	alert('Player Memasukkan : ' + player + '\nKomputer Memasukkan : ' + comp + '\n\nMaka Hasilnya: Kamu '+ hasil);

	// memunculkan pop up konfirmasi, mau lanjut atau 
	tanya = confirm('coba lagi?');
}

alert('Terima kasih sudah bermain.'); 