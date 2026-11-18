// #### Program Pengelolaan Penumpang Sederhana dengan JavaScript

// Pengelolaan Penumpang 
// - Penumpang naik : tambahPenumpang()
// - Penumpang turun : hapusPenumpang()

// 1. tambahPenumpang()
// 2 Parameter : namaPenumpang, array penumpang 
// RULES: 
// jika angkot kosong, penumpang naik duduk di kursi pertama. 
// penumpang berikutnya duduk dikursi selanjutnya secara berurutan. 
// jika ada kursi kosong (karena penumpang turun), penumpang yang naik berikutnya duduk di kursi kosong terlebih dahulu.
// asumsi kursi tidak akan penuh dan akan bertambah terus jika ada penumpang naik. 
// nama penumpang tidak boleh sama, untuk menghindari kebingungan ketika nanti penumpang turun. 


var penumpang = [];       

var tambahPenumpang = function(namaPenumpang, penumpang) {

	// jika angkot kosong 
	if (penumpang.length == 0) {
		//tambah penumpang di awal array
		penumpang.push(namaPenumpang);

		// kembalikan isi array & keluar dari function
		return penumpang; 	
	} else {
		// telusuri seluruh kursi dari awal 
		for(var i = 0; i < penumpang.length; i++) {

			// jika ada kursi kosong
			if (penumpang[i] == undefined) {
				// tambah penumpang di kursi tersebut
				penumpang[i] = namaPenumpang;

				// kembalikan isi array & keluar dari function
				return penumpang;
			} 

			// jika sudah ada nama yang sama 
			else if (penumpang[i] == namaPenumpang) {
				// tampilkan pesan kesalahannya
				console.log(namaPenumpang + ' sudah ada di dalam angkot.');
				
				// kembalikan isi array & keluar dari function
				return penumpang; 
			}

			// jika seluruh isi kursi terisi
			else if ( i == penumpang.length - 1 ) {
				// tambah penumpang di akhir array
				penumpang.push(namaPenumpang);
				
				// kembalikan isi array & keluar dari function 
				return penumpang;
			}
		}
	}

	//return penumpang;

} 



// 2. hapusPenumpang()
// 2 Parameter : namaPenumpang, array penumpang 
// RULES: 
// jika angkot kosong, tampilkan pesan bahwa angkot kosong
// jika ada penumpang yang namanya sesuai, hapus nama penumpang pada array dengan memberi nilai undefined
// jika tidak ada penumpang yang namanya sesuai, tampilkan pesan kesalahannya

var hapusPenumpang = function(namaPenumpang, penumpang) {

	// jika angkot kosong
	if (penumpang.length == 0) {

		// tampilkan pesan bahwa angkot kosong, dan
		// tidak mungkin ada penumpang turun
		console.log('angkot masih kosong') 
		 
		// kembalikan isi array & keluar dari function
		// return penumpang; 
	} else {
		// telusuri seluruh kursi dari awal
		for (var i = 0; i < penumpang.length; i++) {
			// jika nama penumpang sesuai
			if (penumpang[i] == namaPenumpang) {
				// hapus penumpang dengan mengubah namanya
				// menjadi undefined
				penumpang[i] = undefined;
				 
				// kembalikan isi array & keluar drai function 
				return penumpang;
			}

			// jika tidak ada nama yang sesuai
			else if (i == penumpang.length - 1) {  	
				// tampilkan pesan kesalahannya
				console.log(namaPenumpang + ' tidak ada di dalam angkot.'); 

				// kembalikan isi array & keluar dari function 
				return penumpang;
			}
		}
	}

	return penumpang;
}