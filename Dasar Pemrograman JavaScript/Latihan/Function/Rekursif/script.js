// MENAMPILKAN LOOPING MULAI DARI ANGKA 10 --> 1
// for (var i = 10; i >= 1; i--) {
// 	console.log(i);
// }


// DENGAN MENGGUNAKAN FUNCTION 
// menampilkan angka dari 1 --> 10
// function tampilAngka (n) {
// 	// base case: digunakan untuk menghentikan fungsi rekursif
// 	if (n > 10) {
// 		return;
// 	}


// 	console.log(n);
// 	return tampilAngka(n+1);
// }
// tampilAngka(1);



// memampilkan angka dari 10 --> 1
// function tampilAngka (n) {
// 	// base case
// 	// digunakan untuk menghentikan fungsi rekursif
// 	if (n === 0) {
// 		return; 
// 	}


// 	console.log(n);
// 	return tampilAngka(n-1);
// }
// tampilAngka(10);



// contoh menggunakan factorial dengan function
// 5! = 5 x 4 x 3 x 2 x 1 
// faktorial(5)
// 5 * faktorial(4)
// 5 * (4 * faktorial(3))
// 5 * (4 * (3 * faktorial(2)))
// 5 * (4 * (3 * (2 * faktorial(1))))
// 5 * (4 * (3 * (2 * 1)))
// 5 * (4 * (3 * (2))
// 5 * (4 * 6)
// 5 * 24 
// 120	

function faktorial (n) {
	if (n === 0) return 1;
	return n * faktorial(n-1);
}
console.log(faktorial(5));

