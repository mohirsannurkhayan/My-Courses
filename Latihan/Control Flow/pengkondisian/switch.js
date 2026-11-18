var item = prompt('masukkan nama makanan / minuman : \n(cth: daging, salad, nasi, susu, hamburger, softdrink)');

switch(item) {
	case 'daging':
	case 'nasi':
	case 'salad':
		alert(item + ' merupakan makanan SEHAT.');
		break;
	case 'susu':
		alert(item + ' merupakan minuman SEHAT.');
		break;
	case 'hamburger': 
		alert(item + ' merupakan makanan TIDAK SEHAT.');
		break;
	case 'softdrink':
		alert(item + ' merupakan minuman TIDAK SEHAT.');
		break;
	default: 
		alert(item + ' yang anda masukkan tidak masuk kedalam kategori.');
		break;
}

