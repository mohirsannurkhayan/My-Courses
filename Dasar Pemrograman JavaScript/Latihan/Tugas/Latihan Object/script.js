// membuat Object Angkot

// Pengelolaan Angkot 
// - Sopir
// - Trayek/Rute
// - Kas
// - Penumpang: penumpang naik, penumpang turun


function Angkot (sopir, rute, penumpang, kas) {
	this.sopir = sopir;
	this.rute = rute;
	this.penumpang = penumpang;
	this.kas = kas;


	// Mengelola Penumpang Naik
	this.penumpangNaik = function(namaPenumpang) {
		this.penumpang.push(namaPenumpang);
		return this.penumpang;
	}



	// Mengelola Penumpang Turun
	this.penumpangTurun = function(namaPenumpang, bayar) {

		// Cek Ketika Angkot Masih Kosong
		if ( this.penumpang.length === 0 ) {
			console.log('penumpang masih kosong');
			return false;
		}

		// Ketika Angkot Tidak Kosong
		for ( var i = 0; i < this.penumpang.length; i++ ) {

			// Jika ada penumpang dengan namaPenumpang Sama, maka penumpang tersebut akan bernilai undefined. 
			if ( this.penumpang[i] == namaPenumpang ) {
				this.penumpang[i] = undefined;
				this.kas += bayar;
				return this.penumpang;
			} 
		}
	}

}

var angkot1 = new Angkot('Sandhika Galih', ['Cicaheum', 'Cibiru'], [], 0);

var angkot2 = new Angkot('Tom Cruise', ['Antapani', 'Ciroyom'], [], 0);