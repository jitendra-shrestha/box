function getRandomColor() {
  return 'rgb(' + Math.floor(Math.random() * 256) +
    ',' + Math.floor(Math.random() * 256) + ',' +
    Math.floor(Math.random() * 256) + ')';
}

function generateBox(count) {
  var boxProp = [];
  for(var i = 0; i < count; i++) {
    boxProp.push({
      top: Math.floor(Math.random() * 480),
      left: Math.floor(Math.random() * 480)
    });
  }
  return boxProp;
}

function plotBox(boxProp) {
  $container = document.querySelector('.container');
  for (var i = 0; i < boxProp.length; i++) {
    var $box = document.createElement('div');
    $box.classList.add('box');
    $box.style.left = boxProp[i].left + 50 + 'px';
    $box.style.top = boxProp[i].top + 50 + 'px';
    $box.style.backgroundColor = getRandomColor();
    $container.appendChild($box);
  }
}

function showPosition() {
  $boxs = document.querySelectorAll('.box');
  $infoPara = document.querySelector('.box-position-info p');
  for(var i = 0; i < $boxs.length; i++) {
    $boxs[i].addEventListener('click', function(e) {
      $infoPara.innerHTML = '<strong>Position of the box clicked:-</strong><br>Top: <i>' 
        + e.target.style.top + '</i>, Left:<i>' + e.target.style.left + '</i>'; 
      e.target.style.backgroundColor = getRandomColor();
    });
  }
}

plotBox(generateBox(10));
showPosition();