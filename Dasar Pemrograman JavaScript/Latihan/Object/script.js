// ### Object - JavaScript


// Membuat Object 
// var mhs = {};	// membuat object kosong

// mhs.nama = "Moh Irsan Nur Khayan";
// mhs.umur = 22;

// console.log(mhs);


// Membuat Object 
// var mhs = {
// 	nama : "Moh Irsan Nur Khayan",
// 	umur : 22,
// 	ips : [3.80, 3.70, 3.90, 3.75, 3.85],
// 	alamat : {
// 		jalan : "Jalan Sendang Coyo RT. 004/RW. 001",
// 		kelurahan : "Desa Jatiharjo", 
// 		kecamatan : "Kec. Pulokulon",
// 		kabupaten : "Kab. Grobogan",
// 		provinsi : "Provinsi Jawa Tengah",
// 		negara : "Indonesia"
// 	}
// }





// Membuat Object
// 1. Object Literal 
var mhs1 = {
	nama : "Sandhika Galih",
	nrp : "2026090001",
	email : "sandhikagali@wpu.unpas.ac.id",
	jurusan : "Teknik Informatika"
}

var mhs2 = {
	nama : "Doddy",
	nrp : "2026090002",
	email : "doddy@gmail.com",
	jurusan : "Teknik Elektro"
}


// 2. Function Declaration 
function buatObjectMahasiswa (nama, nrp, email, jurusan) {
	var mhs = {};

	mhs.nama = nama;
	mhs.nrp = nrp;
	mhs.email = email;
	mhs.jurusan = jurusan; 

	return mhs;
}

mhs3 = buatObjectMahasiswa("Nofariza", "2026090003", "nofariza@gmail.com", "Teknik Sipil");

mhs4 = buatObjectMahasiswa("Teddy", "2026090004", "teddy@gmail.com", "Sistem Informasi");



// 3. Constructor Function 
// nama function yang dibuat, untuk huruf depannya menggunakan huruf besar. untuk membedakan antara function declaration dengan constructor function
function Mahasiswa (nama, nrp, email, jurusan) {
	this.nama = nama;
	this.nrp = nrp; 
	this.email = email;
	this.jurusan = jurusan;
}

var mhs5 = new Mahasiswa("Cipto", "2026090005", "cipto@gmail.com", "Ilmu Komunikasi");

var mhs6 = new Mahasiswa("Seto", "2026090006", "seto@gmail.com", "Ilmu Komputer");