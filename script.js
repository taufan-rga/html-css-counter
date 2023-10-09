window.onload = function () {
  setInterval(function () {
    var numbers = getRandomInt(100000000, 999999999);
    var splitted = ("" + numbers).split("");
    document.getElementById("numbers").innerText = numbers;
    document.getElementById("number-1").innerText = splitted[0];
    document.getElementById("number-2").innerText = splitted[1];
    document.getElementById("number-3").innerText = splitted[2];
    document.getElementById("number-4").innerText = splitted[3];
    document.getElementById("number-5").innerText = splitted[4];
    document.getElementById("number-6").innerText = splitted[5];
    document.getElementById("number-7").innerText = splitted[6];
    document.getElementById("number-8").innerText = splitted[7];
    document.getElementById("number-9").innerText = splitted[8];
  }, 375);
};

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
