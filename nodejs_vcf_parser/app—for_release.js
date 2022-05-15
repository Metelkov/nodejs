// NODE JS - парсим контакты (vcard) в одном файле 22.vcf - файл должен быть в UTF8
//сохраняет каждый контакт в отдельный текстовой файл, расширение можено поменять
//
// NODE JS - parsing contacts (vcard) in single file 22.vcf - file must be in UTF8
//saving each contact in new text file, file extension may be changed

const fs = require("fs");
let firstFileName = "100000";
let fileExtOut = ".txt";
let tempArr = [];

let array = fs.readFileSync('22.vcf', "utf8").toString().split("\r\n");

for(i in array) {
tempArr[i]=array[i]+"\r\n";
    fs.appendFileSync(firstFileName + fileExtOut, tempArr[i]);
    if (array[i].indexOf("END") !== -1) {
      firstFileName++;
    }
}
