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


// 3. Misol: Matndagi Raqamlarni Almashtirish


////////////         hali to'liq emas       ////////////

