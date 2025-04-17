/* 
// 1. Misol: Parolni Kuchliligi Tekshiruvi
let parol = prompt("Enter password: ");
const raqamlar = "1234567890";
const kattaHarf = "QAZWSXEDCRFVTGBYHNUJMIKOLP";
const kichikHarf = "qazwsxedcrfvtgbyhnujmikolp";

const raqamBor = [...raqamlar].some(raqam => parol.includes(raqam));
const kattaHarfBor = [...kattaHarf].some(harf => parol.includes(harf));
const kichikHarfBor = [...kichikHarf].some(harf => parol.includes(harf));


if (parol.length < 8) {
    alert("Parol kamida 8 ta belgidan iborat  bo'lishi kerak.");
    
} else if (!raqamBor) {
    alert("Parolda kamida 1 ta raqam qatnashishi kerak.");
    
} else if (!kattaHarfBor) {
    alert("Parolda kamida bitta katta harf qatnashishi kerak.");
    
} else if (!kichikHarfBor) {
    alert("Parolda kamida bitta kichik harf qatnashishi kerak.");
    
} else {
    alert("Siz kuchli parol yaratdingiz!");
}
*/
    

/* 
// 2. Misol: Xarid Chekini Hisoblash
let narx = Number(prompt("Mahsulot narxini kiriting."));
let miqdor = Number(prompt("Nechta mahsulot xarid qilasiz?"));

let umumiySumma = narx * miqdor;

if (isNaN(narx) || isNaN(miqdor)) {
    alert("noto'g'ri ma'lumot");
} else if (umumiySumma >= 100_000) {
    let chegirma = 0;
    chegirma = umumiySumma * 0.90;
    alert(`Umumiy summa = ${umumiySumma} 10% chegirmada to'lov summasi ${chegirma}`);
} else {
    alert(`umumiy summa = ${umumiySumma}`);
}
*/


/* 
// 3. Misol: Matndagi Raqamlarni "*" bilan Almashtirish

let matn = prompt("Harflar, belgilar va raqamlar kombinatsiyasini kiriting.");
let raqam = "1234567890";
let result = "";

for (let i = 0; i < matn.length; i++) {
    const element = matn[i];
    if (raqam.includes(element)) {
        result += "*";
    } else {
        result += element;
    }
}
console.log(result);
*/


/* 
// 4. Misol: Ism va Familiyani Qisqartirish
let ismFamiliya = prompt("Ism va familiyangizni kiriting");

if (ismFamiliya.trim().split(" ").length === 2) {
    let probelIndex = ismFamiliya.indexOf(" ");

    let birinchiHarf = ismFamiliya[0];
//                                                          if shartni gpt yozib berdi.
    let familiya = ismFamiliya.slice(probelIndex + 1)

    let qisqartma = birinchiHarf + ". " + familiya;

    console.log(qisqartma);
} else {
    console.log("Iltimos, faqat ism va familiyani kiriting (masalan: Ali Valiyev).");
} 
*/


/* 
// 5. Misol: Vaqtni Soat va Daqiqaga Ajratish
let input = prompt("Daqiqanin kiriting.");
let minutes = Number(input);

if (isNaN(minutes) || minutes < 0 || !Number.isInteger(minutes)) {
    console.log("Iltimos musbat butun son kiriting.");
} else {
    let hours = Math.floor(minutes / 60);
    let remainingMinutes = minutes % 60;
    console.log(`${hours} soat ${remainingMinutes} daqiqa`);
}
*/


/* 
// 6. Misol: Matndagi Harfni Takrorlash Sonini Hisoblash
let text = prompt("Matinni kiriting.");
let letter = prompt("Qaysi harfni sanaylik.");

if (letter.length !== 1) {
    alert("Iltimos faqat bitta harf kiriting.");
} else {
    let count = 0;
    let lowerText = text.toLowerCase();
    let lowerLetter = letter.toLowerCase();

    for (let i = 0; i < lowerText.length; i++) {
        if (lowerText[i] === lowerLetter) {
            count++;
        }
    }
    alert(`${letter} harfi matnda ${count} marta uchradi.`);
}
*/

// 7. Misol: Pulni Valyutaga Konvertatsiya Qilish
let money = parseInt(prompt("Pul miqdorini kiriting."));
let usd = 0;

if (isNaN(money) || money < 0) {
    alert("Xato!❌");
} else {
    usd = money / 12500;
    alert(`${money.toFixed(2)} so'm = ${usd.toFixed(2)} USD ga teng.`);
}