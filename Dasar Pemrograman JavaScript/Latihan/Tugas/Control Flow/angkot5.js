// Tugas Control Flow - Angkot 4
// menampilkan angkot yang sedang beroperasi dengan baik (1 s/d 6) dan menampilkan angkot yang sedang tidak beroperasi(7, 9), dan sedang lembur untuk angkot no 8 dan 10. dengan menggunakan if.. else if.. else.

var angkotBeroperasi = 6;
var jmlAngkot = 10;


for (var noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++) {

	if (noAngkot <= angkotBeroperasi) {
		console.log('Angkot No. ' +  noAngkot + ' beroperasi dengan baik.');
	} else if (noAngkot === 8 || noAngkot === 10) {
		console.log('Angkot No. ' + noAngkot + ' sedang lembur.');
	} else { 
		console.log('Angkot No. ' + noAngkot + ' sedang tidak dapat beroperasi.');
	}

}
