//function expression

// function Angkot(sopir, trayek, penumpang, kas) {
// 	this.sopir = sopir
// 	this.trayek = trayek
// 	this.penumpang = penumpang
// 	this.kas = kas

// 	// this.penumpangNaik = function() {
// 	// 	this.penumpangNaik = "Hendro"
// 	// 	this.penumpang.push(this.penumpangNaik)
// 	// 	return this.penumpang
// 	// }
// 	this.penumpangNaik = function(namaPenumpang) {
// 		this.angkot1.penumpangNaik= "hendro"
// 		this.penumpang.push(namaPenumpang)
// 		return this.penumpang
// 	}
// }






// var angkot1 = new Angkot("mevin", ['jagir', 'bratang'], [], 0)
// var angkot2 = new Angkot("tom", ["jemursari", "mojosari"], [], 0)




// console.log(angkot1)


// let namaPeserta = (nama, waktu) => {
//     return `halo ${nama}, selamat ${waktu}`
// }
// console.log(namaPeserta("alfred", "malam"))
// TEST CASES
//console.log(totalDigitRekursif(512)); // 8
// console.log(totalDigitRekursif(1542)); // 12
// console.log(totalDigitRekursif(5)); // 5
// console.log(totalDigitRekursif(21)); // 3
// console.log(totalDigitRekursif(11111)); // 5

// function makanTerusRekursif(waktu) {
//   // you can only write your code here!
//   var count = 0

//   if(waktu === 0) {
//     return 0
//   } else if(waktu > 0 && waktu < 16) {
//     return 1
//   } else {
//     count+=1
//     return count + makanTerusRekursif(waktu-15)
//   }
// }

// TEST CASES
//console.log(makanTerusRekursif(66)); // 5
// console.log(makanTerusRekursif(100)); // 7
// console.log(makanTerusRekursif(90)); // 6
// console.log(makanTerusRekursif(10)); // 1
// console.log(makanTerusRekursif(0)); // 0

// function changeVocals(str) {
//   //code di sini
//   str = str.split("a").join("b");
//   str = str.split("i").join("j");
//   str = str.split("u").join("v");
//   str = str.split("e").join("F");
//   str = str.split("o").join("p");
//   str = str.split("A").join("B");
//   str = str.split("I").join("J");
//   str = str.split("U").join("V");
//   str = str.split("E").join("F");
//   str = str.split("O").join("P");

//   return str;
// }

// function reverseWord(str) {
//   var balikKata = "";
//   for (var i = str.length - 1; i >= 0; i--) {
//     balikKata += str[i];
//   }
//   return balikKata;
// }

// function setLowerUpperCase(str) {
//   //code di sini
//   var kata = "";

//   for (var k = 0; k < str.length; k++) {
//     if (str[k] === str[k].toUpperCase()) {
//       kata += str[k].toLowerCase();
//     } else {
//       kata += str[k].toUpperCase();
//     }
//   }
//   return kata;
// }

// function removeSpaces(str) {
//   return str.replace(/\s/g, "");
// }

// function passwordGenerator(name) {
//   //console.log(name);
//   if (name.length < 5) {
//     return "minimal karakter yang diinputkan adalah 5 karakter";
//   } else {
//     var gantiHurufVokal = changeVocals(name);
//     var BalikKalimat = reverseWord(gantiHurufVokal);
//     var gantiBesarKecil = setLowerUpperCase(BalikKalimat);
//     var removespasi = removeSpaces(gantiBesarKecil);
//     return removespasi;
//   }
// }

// console.log(passwordGenerator("Sergei Dragunov")); // 'VPNVGBRdJFGRFs'
// console.log(passwordGenerator("Dimitri Wahyudiputra")); // 'BRTVPJDVYHBwJRTJMJd'
// console.log(passwordGenerator("Alexei")); // 'JFXFLb'
// console.log(passwordGenerator("Alex")); // 'Minimal karakter yang diinputkan adalah 5 karakter'

//-------------------------------------------------------------------------------------

// var arr =[2,6,5,4,5,4]
//  var num = 0

// for(var i=0; i<arr.length; i++) {
//  if(num < arr[i]) {
//   num = arr[i]
//  }

// }
// console.log(num)

//--------------------------------------------------------------------------------------

// function sorting(arrNumber) {
//   // code di sini

//   var angkaSort = arrNumber.sort();
//   return angkaSort;
// }

// function getTotal(arrNumber) {
//   var AngkaSudahDiSort = sorting(arrNumber);
//   var arrNum = [];
//   var angkaCounter = 0;
//   var angkaBesar = 0;

//   if (arrNumber.length === 0) {
//     return arrNum;
//   }

//   for (var i = 0; i < AngkaSudahDiSort.length; i++) {
//     if (angkaBesar < AngkaSudahDiSort[i]) {
//       angkaBesar = AngkaSudahDiSort[i];
//     }
//   }

//   for (var j = 0; j < AngkaSudahDiSort.length; j++) {
//     if (angkaBesar === AngkaSudahDiSort[j]) {
//       angkaCounter += 1;
//     }
//   }
//   return (
//     "angka paling besar adalah " +
//     angkaBesar +
//     " dan jumlah kemunculan sebanyak " +
//     angkaCounter +
//     " kali"
//   );
// }

// function mostFrequentLargestNumbers(arrNumber) {
//   var listSort = sorting(arrNumber);
//   var countHighest = getTotal(listSort);
//   return countHighest;
// }

//console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
// //'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

// console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
// //'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'

//console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
// //'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

// console.log(mostFrequentLargestNumbers([]));

//--------------------------------------------------------------------------

// function naikAngkot(arrPenumpang) {
//   rute = ["A", "B", "C", "D", "E", "F"];
//   //your code here
//   var hasil = []
//   var biaya = 2000

//   if (arrPenumpang.length === 0) {
//     return arrPenumpang;
//   }

//   for(var i = 0; i<arrPenumpang.length; i++) {
//     console.log(arrPenumpang)
//     //console.log(arrPenumpang[i])
//     // var penumpang = arrPenumpang[i]
//     // var objPenumpang = {}

//     // console.log(penumpang[0])
//     // objPenumpang.penumpang = penumpang[0]
//     // objPenumpang.naikDari = penumpang[1]
//     // objPenumpang.tujuan = penumpang[2]
//     // objPenumpang.bayar = biaya * (rute.indexOf(objPenumpang.tujuan) - rute.indexOf(objPenumpang.naikDari))
//     // hasil.push(objPenumpang)
//   }
//   return hasil
// }

// //TEST CASE
// console.log(
//   naikAngkot([
//     ["Dimitri", "B", "F"],
//     ["Icha", "A", "B"],
//   ])
// );
// // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
// //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

// //console.log(naikAngkot([])); //[]


// function ternary(num) {
// 	return num > 6 ? true : false
// }

// console.log(ternary(5))
// console.log(ternary(10))

const angka = [9, 7, 4, 2, 9, 0, 5, 4, 12 ,13, 15]

//mencari angka lebih besar >=3
// const arrKosong = []

// for(let i = 0; i<angka.length; i++) {
// 	if(angka[i] > 3) {
// 		arrKosong.push(angka[i])
// 	}
// }

// console.log(arrKosong)

//filter

// const newAngka = angka.filter(item => item >= 3)

// console.log(newAngka)

// const sumAngka = angka.map(angka => angka * 2)

// console.log(sumAngka)

//reduce

const totalJumlah = angka.reduce((accumulator, currentValue) => accumulator + currentValue)

console.log(totalJumlah)
