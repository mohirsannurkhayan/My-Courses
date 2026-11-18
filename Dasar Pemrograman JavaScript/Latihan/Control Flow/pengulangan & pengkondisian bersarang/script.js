// Contoh 1
// *****

// var string = '';

// for (var i = 1; i <= 5; i++) {
// 	string += '*';
// }
// console.log(string);



// Contoh 2
// *****
// *****
// *****
// *****
// *****
// *****
// *****
// *****
// *****
// *****


// var string = '';

// // pengulangan untuk baris. cth: 10 baris
// for ( var i = 0; i < 10; i++ ) {

// 	// pengulangan untuk berapa bintang. cth: 5 bintang 		
// 	for ( var j = 0; j < 5; j++ ) {
// 		string += '*';
// 	}

// 	string += '\n';
// }
// console.log(string);



// Contoh 3
// *
// **
// ***
// ****
// *****
// ******
// *******
// ********
// *********
// **********

// var string = '';

// for ( var i = 0; i < 10; i++ ) {
// 	for ( var j = 0; j <= i; j++ ) {
// 		string += '*'
// 	}
// 	string += '\n';
// }
// console.log(string);




// Contoh 4
// **********
// *********
// ********
// *******
// ******
// *****
// ****
// ***
// **
// *

// var string = '';

// for (var i = 10; i > 0; i--) {
// 	for (var j = 0; j < i; j++) {
// 		string += '*';
// 	}
// 	string += '\n';
// }
// console.log(string);




// Contoh 5
// *
// **
// ***
// ****
// *****
// ******
// *******
// ********
// *********
// **********
// *********
// ********
// *******
// ******
// *****
// ****
// ***
// **
// *

// var string = '';

// for (var i = 1; i < 10; i++) {
// 	for (var j = 0; j < i; j++) {
// 		string += '*';	
// 	}
// 	string += '\n';
// }


// for (var b = 10; b > 0; b--) {
// 	for (var c = 0; c < b; c++) {
// 		string += '*';
// 	}
// 	string += '\n';
// }
// console.log(string);




// Contoh 6

var string = '';
var nilaiAwal = 1;

// # CASE 1
// *
// ***
// *****
// *******
// *********

// while (nilaiAwal <= 9) {
// 	for (var i = 1; i <= nilaiAwal; i++) {
// 		string += '*';
// 	}
// 	string += '\n';
// 	nilaiAwal = nilaiAwal + 2;
// }
// console.log(string);


// # CASE 2
//     *
//    ***
//   *****
//  *******
// *********
while (nilaiAwal <= 9) {

	// mencetak spasi 
	for (var spasi = 9; spasi > nilaiAwal; spasi -= 2) {
		string += ' ';
	}

	// mencetak bintang
	for (var i = 1; i <= nilaiAwal; i++) {
		string += '*';
	}
	string += '\n';
	nilaiAwal = nilaiAwal + 2;
}
console.log(string);













