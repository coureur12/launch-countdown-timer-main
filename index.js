setInterval(() => {
var future = Date.parse("feb 10, 2022 01:30:00");
var now = Date.now();
diff = future - now;

days = Math.floor(diff / (1000 * 60 * 60 * 24));
hours = Math.floor(diff/ (1000 * 60 * 60));
minutes = Math.floor(diff/ (1000 * 60));
secondes = Math.floor(diff/ 1000);

d = days;
h = hours - days * 24;
m = minutes - hours * 60;
s = secondes - minutes * 60;

dateText = document.getElementById("day");
if (d <10){
    dateText.textContent = "0" + d;
}else{
    dateText.textContent = d;
}
hourText = document.getElementById("hours");
if (h < 10){
    hourText.textContent = "0" + h;
}else{
    hourText.textContent = h;
}
minuteText = document.getElementById("minutes");
if (m < 10){
    minuteText.textContent = "0" + m;
}else{
    minuteText.textContent = m;
}
secondeText = document.getElementById("seconds");
if (s < 10 ){
    secondeText.textContent = "0" + s;
}else{
    secondeText.textContent = s;
}

}, 1000);