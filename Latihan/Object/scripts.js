var mahasiswa = [
	'sandhika galih', true, [2.90, 3.10, 3.25, 2.88, 3.04]
];

function IPKumulatif (IPSemester) {
	var total = 0;
	for (var i = 0; i < IPSemester.length; i++) {
		total += IPSemester[i];
	}
	return total/IPSemester.length;
};

IPKumulatif(mahasiswa[2]); 