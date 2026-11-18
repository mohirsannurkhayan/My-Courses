// ### WINDOW SCOPE / GLOBAL SCOPE
// var a = 1; 


// ### FUNCTION SCOPE
// Didalam function, kita bisa mengakses variabel global
// Kalau diluar function, kita tidak bisa mengaksesnya.

// diibaratkan kita berada didalam sebuah mobil, dan mobilnya memiliki kaca film yang sangat gelap. 
// kalau kita berada didalam mobil, kita bisa melihat keluar.
// sementara itu, jika kita berada diluar mobil, kita tidak bisa melihat kedalam
// var a = 1;

// function test() {
// 	var b = 2;
// 	console.log(a);		// a merupakan variable global
// }
// test();





// var a = 1;

// function test () {
// 	// name conflict
// 	// kita memiliki variabel yang sama, tetapi scope nya berbeda. jadi, isi nilai varible tidak ditimpa. dan mengacu ke variable global
// 	// var a = 2;

// 	// berbeda jika kita tidak menggunakan keyword var, a ini akan menimpa variable global. yang dipertahankan varible lokal. karena, dia mengintip variable global ada atau tidak. jika ada maka akan ditimpa.
// 	a = 2; 


// 	// kecuali kita memberikan keyword window, maka dia akan mengacu ke variable global(bukan lokal)
// 	// var a = 2; 
// 	// console.log(window.a);		// ini mengacu ke variable global
// }
// test();
// console.log(a);
// 		




// "use strict";

// function test() {
// 	// jika deklarasi var a global scope tidak ada, yang terjadi adalah javascript akan secara otomatis membuat a = 2 ini sebagai variable global. dengan melakukan ini, maka akan mengotori global scopenya atau lingkup scopenya.   
// 	a = 2;


// 	// jika tidak ingin mengotori global scope atau lingkup scope. gunaklan keyword "use strict". maka javascriptnya memahami a = 2, merupakan variable lokal (variable didalam function).
// 	// a = 2;

// 	// jika maksudnya ingin membuat variable lokal (variable didalam function), maka gunakan deklarasi variable.
// 	// var a;
// 	// a = 2;
// 	// console.log(a);

// }
// test();
// console.log(a);




var a = 1;

function test (a) {
	console.log(a);
}
test(2);			// 2 yang ada didalam argument tersebut, masuk kedalam parameter a, dan ketika membuat parameter misalnya a, itu akan selalu menjadi lokal variable, meskipun kita tidak menuliskan keyword var didalam parameter. jadi variable global tidak dipakai dalam hal ini.
console.log(a)		// a merupakan variable global