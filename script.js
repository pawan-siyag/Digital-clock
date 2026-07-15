let hr = document.querySelector("#hr")
let min = document.querySelector("#min")
let sec = document.querySelector("#sec" )
let period = document.querySelector("#period");
let day = document.querySelector("#day" )
let dte = document.querySelector("#date" )
let month = document.querySelector("#month" )
let year = document.querySelector("#year" )

function displaytime(){

   let date = new Date();
     let ampm = "AM";


   let hh = String(date.getHours()).padStart(2, "0");
   let mm = String(date.getMinutes()).padStart(2, "0");
   let ss = String(date.getSeconds()).padStart(2, "0");
   let dy = date.getDay();
   let dt = date.getDate();
   let mnth = date.getMonth();
   let yr = date.getFullYear();

     if (hh >= 12) {
       ampm = "PM";
     }

     if (hh > 12) {
       hh = hh - 12;
     }

     if (hh == 0) {
       hh = 12;
     }

     let days = [
       "Sunday",
       "Monday",
       "Tuesday",
       "Wednesday",
       "Thursday",
       "Friday",
       "Saturday",
     ];


     day.value = days[dy];
     dte.value = dt;
     month.value = mnth;
     year.value = yr;

     

   hr.value = hh;
   min.value = mm;
   sec.value = ss;

   period.value = ampm;  
}
displaytime();
setInterval(displaytime , 1000);
