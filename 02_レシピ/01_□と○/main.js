const figure = document.getElementById("figure")
const squareButton = document.getElementById("square-button")
const circleButton = document.getElementById("circle-button")

figure.onclick = function() {
    figure.classList.toggle("rounded")
}

squareButton.onclick = function() {
  // figure から rounded クラスを削除する
  figure.classList.remove("rounded")
}