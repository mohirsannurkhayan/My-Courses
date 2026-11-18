// Tugas Control Flow - Angkot 2
// menampilkan angkot beroperasi dengan baik dari no angkot 1 s/d 6 dan meampilkan angkot yang sedang tidak beroperasi dari no angkot 7 s/d 10 dengan menggunakan perulangan yaitu while dan for.

var jmlAngkot = 10;
var angkotBeroperasi = 6; 
var noAngkot = 1;

// menampilkan angkot beroperasi dari no angkot 1 s/d 6 
while (noAngkot <= angkotBeroperasi) {
	console.log('Angkot No. ' + noAngkot + ' beroperasi dengan baik.')
	noAngkot++;
}

// menampilkan angkot yang tidak beroperasi dari no angkot 7 s/d 10
for (noAngkot = angkotBeroperasi + 1; noAngkot <= jmlAngkot; noAngkot++) {
	console.log('Angkot No. ' + noAngkot + ' sedang tidak beroperasi.')
}

