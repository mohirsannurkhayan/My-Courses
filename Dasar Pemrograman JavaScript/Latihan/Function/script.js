// FUNCTION - JAVASCRIPT 

// # Menjumlahkan 2 Volume Kubus tanpa menggunakan function 
// var a = 8;
// var b = 3;
// var volumeA;
// var volumeB;
// var total;

// volumeA = a * a * a;
// volumeB = b * b * b;

// total = volumeA + volumeB;

// console.log(total);



// # Menggunakan Function 
// function jumlahVolumeDuaKubus (a, b) {	// ketahui sisi masing - masing kubus
// 	var volumeA, volumeB, total;

// 	// hitung volume masing - masing kubus
// 	volumeA = a * a * a;
// 	volumeB = b * b * b;

// 	// jumlahkan hasilnya 
// 	total = volumeA + volumeB;

// 	// kembalikan nilai jawabannya
// 	return total; 
// }

// // kita bisa panggil function tersebut berulang - ulang
// console.log(jumlahVolumeDuaKubus(8, 3));		// hasilnya : 539
// console.log(jumlahVolumeDuaKubus(10, 8));		// hasilnya : 1512




// # Parameter & Argument 
// function tambah (a, b) {
// 	return a + b;
// }

// function kali (a, b) {
// 	return a * b;
// }

// var hasil = kali(tambah(2,3), tambah(5,6));
// console.log(hasil);




// function tambah(a , b) {
// 	return a + b;
// }

// var coba = tambah(10, 20, 30, "hi",false);			// maka 30, "hi", false akan diabaikan
// console.log(coba);




// # Arguments / sudo variable
// function tambah() {
// 	return arguments;
// }

// console.log(tambah(2,3,4,5));				// hasilnya yaitu array yang dimulai dari index ke 0





function tambah () {

	var hasil = 0;

	for (var i = 0; i < arguments.length; i++) {
		hasil += arguments[i];
	}

	return hasil;

}

var coba = tambah(10,20,30,40,50);		// hasil 150
console.log(coba);
