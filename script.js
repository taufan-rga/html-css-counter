window.onload = function () {
  setInterval(function () {
    var numbers = getRandomInt(100000000, 999999999);
    document.getElementById("numbers").innerText = numbers;
  }, 375);
};

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
