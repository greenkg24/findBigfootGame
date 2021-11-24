
var bigFoot = document.querySelector("#bigfoot");



function loadBigFoot() {
  document.getElementById('bigfoot').src = 'bigfoot.png';
}

bigFoot.addEventListener("click",function() {
  alert("Wahoo! You found bigfoot!!");

  var picture = document.getElementById('bigfoot');

  var x = Math.random() * 700;
  var y = Math.random() * 700;

  picture.style.top = x + 'px';
  picture.style.left = y + 'px';
});

