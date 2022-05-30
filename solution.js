let xlsxFile = require("xlsx");

let workBook = xlsxFile.readFile("programmertest2022.xlsx");
//console.log(workBook.SheetNames);

let workSheet = workBook.Sheets["Data"];
//console.log(workSheet);
let data = xlsxFile.utils.sheet_to_json(workSheet);
let engData = JSON.parse(JSON.stringify(data));
let frData = JSON.parse(JSON.stringify(data));
let count = 0;
console.log("all data");
console.log(data);

console.log("all ENG data");
console.log(engData);
console.log("length of array");
const lengthOfArrEng = Object.keys(engData).length;
console.log(lengthOfArrEng);
for (let i = 0; i < lengthOfArrEng; i++) {
  console.log(engData[i].Language);
  if (engData[i].Language.includes("F")) {
    console.log("It is french");
    delete engData[i];
  }
}
console.log(lengthOfArrEng);
console.log("new ENG data");
console.log(engData);
//
//
//
console.log("all FR data");
console.log(frData);
console.log("length of array");
const lengthOfArrFr = Object.keys(frData).length;
console.log(lengthOfArrFr);
for (let i = 0; i < lengthOfArrFr; i++) {
  console.log(frData[i].Language);
  if (frData[i].Language.includes("E")) {
    console.log("It is english");
    delete frData[i];
  }
}
console.log(lengthOfArrFr);
console.log("new fr data");
console.log(frData);

const output = document.querySelector(".output");
const search = document.querySelector(".filter-input");

window.addEventListener("DOMContentLoaded", loadList);
search.addEventListener("input", filter);

function loadList() {
  let temp = `<ul class="list-items">`;
  data.forEach((item) => {
    temp += `<li class="list-item"> ${item} </li>`;
  });
  temp += `</ul>`;
  output.innerHTML = temp;
}
