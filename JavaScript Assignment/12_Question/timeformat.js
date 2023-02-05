//12. Create a human readable time format using the Date time object
//- YYYY-MM-DD HH:mm
//- DD-MM-YYYY HH:mm
//- DD/MM/YYYY HH:mm


//- YYYY-MM-DD HH:mm
var d = new Date();
d = new Date(d.getTime() - 3000000);
var date_format_str = d.getFullYear().toString()+"-"+((d.getMonth()+1).toString().length==2?(d.getMonth()+1).toString():"0"+(d.getMonth()+1).toString())+"-"+(d.getDate().toString().length==2?d.getDate().toString():"0"+d.getDate().toString())+" "+(d.getHours().toString().length==2?d.getHours().toString():"0"+d.getHours().toString())+":"+((parseInt(d.getMinutes()/5)*5).toString().length==2?(parseInt(d.getMinutes()/5)*5).toString():"0"+(parseInt(d.getMinutes()/5)*5).toString())+":00";
console.log(date_format_str);

//- DD-MM-YYYY HH:mm
const dt = new Date();
const padL = (nr, len = 2, chr = `0`) => `${nr}`.padStart(2, chr);

console.log(`${
    padL(dt.getMonth()+1)}-${
    padL(dt.getDate())}-${
    dt.getFullYear()} ${
    padL(dt.getHours())}:${
    padL(dt.getMinutes())}:${
    padL(dt.getSeconds())}`
);


//- DD/MM/YYYY HH:mm
const dt1 = new Date();
const padL1 = (nr, len = 2, chr = `0`) => `${nr}`.padStart(2, chr);

console.log(`${
    padL(dt.getMonth()+1)}/${
    padL(dt.getDate())}/${
    dt.getFullYear()} ${
    padL(dt.getHours())}:${
    padL(dt.getMinutes())}:${
    padL(dt.getSeconds())}`
);

// output

// 2023-02-05 18:45:00
// 02-05-2023 19:35:26
// 02/05/2023 19:35:26