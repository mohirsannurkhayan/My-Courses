// Tugas Control Flow - Angkot 3
// menampilkan angkot yang sedang beroperasi dengan baik (1 s/d 6) dan menampilkan angkot yang sedang tidak beroperasi dengan baik (7 s/d 10) dengan menggunakan for dan if else.

var angkotBeroperasi = 6;
var jmlAngkot = 10;

for (var noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++) {
	if (noAngkot <= angkotBeroperasi) {
		console.log('Angkot No. ' + noAngkot + ' sedang beroperasi dengan baik.');
	} else {
		console.log('Angkot No. ' + noAngkot + ' sedang tidak beroperasi.')
	}
}


