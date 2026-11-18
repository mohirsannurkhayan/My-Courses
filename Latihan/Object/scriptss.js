// Membuat Object - Javascript

// this
// this adalah sebuah keyword spesial yang secara otomatis didefinisikan oleh setiap function  
// var a = 10; 
// console.log(window.a);


// console.log(window === this);




// 1.  cara 1 - Function Declaration 
// function halo () {
// 	console.log(this);
// 	console.log('halo');
// }
// this.halo();
// // this mengembalikan object global






// 2. cara 2 - Object Literal 
// var obj = {a : 10, nama : "Sandhika"};
// obj.halo = function () {
// 	console.log(this);
// 	console.log('halo');
// }
// obj.halo();
// // this mengembalikan object yang bersangkutan 






// // cara 3 - Constructor Function 
// function Halo() {
// 	console.log(this)
// 	console.log('halo');
// }
// var obj1 = new Halo();
// var obj2 = new Halo();
// // this mengembalikan object yang baru dibuat
