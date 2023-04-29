let MemoInput = document.getElementById("memo-input")
const MemoButton = document.getElementById("add-button")
const cardsContainer = document.getElementById("memo-container")



MemoButton.onclick = function () {
  const memo = document.createElement("div")
   memo.textContent = MemoInput.value

  cardsContainer.appendChild(memo)
}
