// Tugas Control Flow - Angkot 4
// menampilkan angkot yang sedang beroperasi dengan baik (1 s/d 6 kecuali 2 dan 5) dan menampilkan angkot yang sedang tidak beroperasi(7, 9), dan sedang lembur untuk angkot no 2, 5, 8, 10. dengan menggunakan if.. else if.. else dan juga operator perbandingann.
// 1, 3, 4, 6 = beroperasi dengan baik.
// 2, 5, 8, 10 = sedang lembur.
// 7, 9 = sedang tidak beroperasi.

var noAngkot = 1;
var angkotBeroperasi = 6;
var jmlAngkot = 10;

for (noAngkot; noAngkot <= jmlAngkot; noAngkot++) {

	if (noAngkot <= angkotBeroperasi && noAngkot !== 2 && noAngkot !== 5) {
		console.log('Angkot No. ' + noAngkot + ' beroperasi dengan baik.');
	} else if (noAngkot === 2 || noAngkot === 10 || noAngkot === 8 || noAngkot === 5){
		console.log('Angkot No. ' + noAngkot + ' sedang lembur.');
	} else {
		console.log('Angkot No. ' + noAngkot + ' sedang tidak beroperasi.');
	}

}