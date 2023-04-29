const imageElement = document.getElementById("dog-image")
const button = document.getElementById("buttonAPI")

button.onclick = function () {
  // カードを削除する
  fetch("https://dog.ceo/api/breed/affenpinscher/images/random")
    .then((res) => {
      return res.json()
    })
    .then((data) => {
      imageElement.src = data.message
    })
}
