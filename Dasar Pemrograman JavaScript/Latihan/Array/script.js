// MANIPULASI ARRAY

// 1. Menambah Isi Array
// var arr = [];		// array kosong
// arr[0] = "Sandhika";
// arr[1] = "Galih";
// arr[2] = "Nofa";
// arr[3] = "Doddy";

// console.log(arr[1]);	// Galih



// // 2. Menghapus isi array 
// var arr = ["Sandhika", "Galih", "Nofa"];
// arr[1] = undefined;

// console.log(arr);	// Sandhika, undefined, Nofa


// 3. Menampilkan isi array 
// dengan cara looping, tidak menampilkan dengan cara object
// Hasilnya:
// Sandhika
// Galih
// Nofa
// Gilang
// var arr = ["Sandhika", "Galih", "Nofa", "Gilang"];
// for (var i = 0; i < arr.length; i++) {
// 	console.log(arr[i]);
// }



// Method pada array 
var arr = ["Sandhika", "Galih", "Nofa"];

// 1. length
// console.log(arr.length);	// 3 


// 2. join
// default nya koma. selain itu kita bisa separator nya misalnya "-"
// console.log(arr.join(' - '));	// Sandhika - Galih - Nofa


// 3. push & pop 
// arr.push('Dodddy', 'Irsan');		// Sandhika - Galih - Nofa - Dodddy - Irsan

// arr.pop();							// Sandhika - Galih - Nofa - Dodddy

// console.log(arr.join(" - "));



// 4. unshift & shift 
// arr.unshift('Deny', 'Fitri');		// Deny - Fitri - Sandhika - Galih - Nofa


// arr.shift();						// Fitri - Sandhika - Galih - Nofa
// console.log(arr.join(" - "));



// 5. splice 
// sintaks 
// splice(indexAwal, mauDihapusBerapaElementnya opt, elementBaru1, elementBaru2, .....)

// arr.splice(2, 0, 'Doddy', 'Fitri');		// Sandhika - Galih - Doddy - Fitri - Nofa
// console.log(arr.join(' - '));



// 6. slice 
// sintaks 
// slice(indexAwal, indexAkhir);
// var arr = ['Sandhika', 'Galih', 'Nofa', 'Doddy', 'Fitri'];

// var arrBaru = arr.slice(2, 4);
// console.log(arrBaru.join(' - '));		// Nofa - Doddy

// // // array yang lama masih bisa diakses
// console.log(arr.join(' - '));			// Sandhika - Galih - Nofa - Doddy - Fitri 




// 7. forEach
// tidak mengembalikan array
// var angka = [1,2,3,4,5,6,7,8];
// var nama = ['Sandhika', 'Galih', 'Nofa'];

// dengan looping biasa
// for (var i = 0; i < angka.length; i++) {
// 	console.log(angka[i]);
// }


// dengan menggunakan forEach
// var cetak = function(e) {
// 	console.log(e);
// }
// angka.forEach(cetak);


// angka.forEach(function(e) {
// 	console.log(e);
// })


// nama.forEach(function(e, i) {
// 	console.log('Mahasiswa ke-' + (i+1) + ' adalah ' + e);
// });




// 8. map
// mengembalikan array
// var angka = [1,2,5,3,6,8,4];
// var angka2 = angka.map(function(e) {
// 	return e * 2;
// });
// console.log(angka2.join(' - '));			// 2 - 4 - 10 - 6 - 12 - 16 - 8




// 9. sort
// var angka = [1,2,5,3,6,8,10,20,4,11];
// console.log(angka.join(' - '));				// 11 - 2 - 5 - 3 - 6 - 8 - 10 - 20 - 4 - 11

// angka.sort();
// console.log(angka.join(' - '));				// 1 - 10 - 11 - 2 - 20 - 3 - 4 - 5 - 6 - 8

// // agar urut sesuai dengan aturannya 
// angka.sort(function(a, b) {
// 	return a - b;
// })
// console.log(angka.join(' - '));				// 1 - 2 - 3 - 4 - 5 - 6 - 8 - 10 - 11 - 20




// 10. filter
// menghasilkan array dan mengembalikan banyak nilai. 
// var angka = [1,2,3,4,10,76,8,9,13,14,20,5];
// var angka2 = angka.filter(function(x) {
// 	return x >= 5;
// });

// console.log(angka2.join(' - '));		// 10 - 76 - 8 - 9 - 13 - 14 - 20 - 5

// // agar urut
// angka2.sort(function(a,b){
// 	return a - b;
// });
// console.log(angka2.join(' - '));		// 5 - 8 - 9 - 10 - 13 - 14 - 20 - 76





// 11. find
// tidak menghasilkan array dan mengembalikan 1 nilai
var angka = [1,2,6,10,5,20,3,6,8,4];
angka2 = angka.find(function(e) {
	return e > 5;
});
console.log(angka2);					// Hasilnya: 6

// kenapa 10 ?
// angka 1 > 5	// false
// angka 2 > 5 // false
// angka 6 > 5 // true

// Maka Hasilnya 6