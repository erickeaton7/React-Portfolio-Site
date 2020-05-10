function change_color() {
  var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
  document.body.style.background = randomColor;
  document.body.style.transition = 'all 1s';
}

function opencloseTunes() {
  var wid = document.getElementById('tunes').offsetWidth;
  if (wid == "0") {
    document.getElementById('tunes').style.width = "250px";
    document.getElementById('main').style.marginLeft = "250px";
    document.getElementById('tunesbtn').style.marginLeft = "250px";
    document.getElementById('colorsbtn').style.marginLeft = "250px";
  } else {
    document.getElementById('tunes').style.width = "0";
    document.getElementById('main').style.marginLeft = "0";
    document.getElementById('tunesbtn').style.marginLeft = "0px";
    document.getElementById('colorsbtn').style.marginLeft = "0";
  }
}

function opencloseColors() {}
