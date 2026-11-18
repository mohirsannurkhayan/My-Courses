// CONTROL FLOW - PENGULANGAN
// 1. while 
// dihentikan oleh user 
var ulang = true;
while(ulang){
	console.log('Hello World!');	// kode program jangan berhenti sampai console.log(), karena akan infinite loop / looping forever / perulangan tak terbatas. 
	ulang = confirm('lagi?');	// maka dari itu terdapat kode program confirm() yang digunakan untuk menghentikan perulangan ketika user memilih cancel.
}


// dihentikan oleh program
var nilaiAwal = 1; 
while(nilaiAwal <= 5) {
	console.log('Hello World! ' + nilaiAwal + 'x');
	nilaiAwal++;
}



