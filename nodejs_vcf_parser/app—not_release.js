// NODE JS 
//заметки и не релизное решение, как НЕ нужно делать, этот код не добавляет LF в конец строки и vcf с 
//отдельным контактом не импортируется в аутлук
// - парсим контакты (vcard) в одном файле 22.vcf - файл должен быть в UTF8
//сохраняет каждый контакт в отдельный текстовой файл, расширение можено поменять
//
// NODE JS
//not for release, do not do that, this code not append LF in end string in and vcf with
//single contact not importing in outlook
// NODE JS - parsing contacts (vcard) in single file 22.vcf - file must be in UTF8
//saving each contact in new text file, file extension may be changed


const fs = require("fs");
let firstFileName = "100000";
let fileExtOut = ".txt";
let emailAdr = "";
let arrCreateFies = [];
let arrEmailAdr = [];

//let array = fs.readFileSync('22.vcf').toString().split("\n\r");
let array = fs.readFileSync('22.vcf').toString().split("\n\r");

fs.writeFileSync(firstFileName + fileExtOut, '');

for (i in array) {
    if (array[i].indexOf("EMAIL") !== -1) {
        let endSrt = array[i].length;
        let startStr = array[i].indexOf(":") + 1;
        emailAdr = array[i].slice(startStr,endSrt);
        //console.log(emailAdr);
        arrEmailAdr.push(emailAdr);
    }

    fs.appendFileSync(firstFileName + fileExtOut, array[i]);
    if (array[i].indexOf("END:VCARD") !== -1) {
        arrCreateFies.push(firstFileName + fileExtOut);
        firstFileName++;
    }

    //console.log(firstFileName+".txt");
    //fs.renameSync(firstFileName+".txt", emailAdr);
    //console.log("ffff "+ emailAdr);
}

for (i in array) {
    ee = arrEmailAdr.join();
    console.log(arrEmailAdr);
    console.log(arrCreateFies);
}
console.log(ee);

//for (i in array) {
    //fs.renameSync(arrCreateFies[i], arrCreateFies[i]);
    //console.log(arrEmailAdr);
    //console.log(arrCreateFies);
//}






/*
const fs = require("fs");
let firstFileName = "100000";
let array = fs.readFileSync('22.vcf').toString().split("\n");
let fileExtOut = ".txt";
let emailAdr = "";
fs.writeFileSync(firstFileName + fileExtOut, '');
for (i in array) {
    if (array[i].indexOf("EMAIL") !== -1) {
        let endSrt = array[i].length;
        let startStr = array[i].indexOf(":") + 1;
        emailAdr = array[i].slice(startStr,endSrt);
        console.log(emailAdr);
    }
    fs.appendFileSync(firstFileName + fileExtOut, array[i]);
    if (array[i].indexOf("END:VCARD") !== -1) {
        firstFileName++;
    }
    console.log(firstFileName+".txt");
    //fs.renameSync(firstFileName+".txt", emailAdr);
    //console.log("ffff "+ emailAdr);
}
 */