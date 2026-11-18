// POPUP BOX / DIALOG BOX
// 1. alert
// alert('Perkenalkan Nama Saya');
// alert('Moh Irsan Nur Khayan');
// alert('Dari Universitas Semarang');


// 2. prompt
// var nama = prompt('masukkan nama:');
// alert(nama);


// 3. confirm
// var konfirmasi = confirm('kamu yakin?');
// // console.log(konfirmasi);
// if (konfirmasi === true) {
// 	alert('Kamu menekan tombol OK!');
// } else {
// 	alert('Kamu menekan tombol CANCEL!');
// }




// program sederhana
alert('Selamat Datang..');

var lagi = true;

while (lagi) {
	var nama = prompt("Masukkan Nama Anda:");
	alert('halo ' + nama);
 
	lagi = confirm('coba lagi?');
}

alert('terima kasih..');

