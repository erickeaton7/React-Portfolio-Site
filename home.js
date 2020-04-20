function change_color() {
  var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
  document.body.style.background = randomColor;
  document.body.style.transition = 'all 1s';
}
