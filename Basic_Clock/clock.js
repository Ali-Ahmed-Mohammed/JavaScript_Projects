
const hours = document.getElementById("hour");
const minutes = document.getElementById("minute");
const seconds = document.getElementById("second");
const session = document.getElementById("pmam");

function clock() {
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let pmam = "AM";

  if (h > 12) {
    h -= 12
    pmam = "PM"
  }

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  hours.innerHTML = h;
  minutes.innerHTML = m;
  seconds.innerHTML = s;
  pmam.innerHTML = pmam

  setTimeout(()=> {
    clock()
  }, 1000)
}

clock();