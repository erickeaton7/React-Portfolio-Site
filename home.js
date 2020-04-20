function change_color() {
  if (document.body.style.background == 'black') {
    document.body.style.background = 'white';
  } else {
    document.body.style.background = 'black';
    document.body.style.transition = "all 1s"
  }
}
