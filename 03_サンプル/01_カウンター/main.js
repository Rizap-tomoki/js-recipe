
const state = { count: 0 }

const btn = document.getElementById("increment")
btn.addEventListener("click", () => {
  const counter = document.getElementById("counter")
  counter.innerHTML = ++state.count
})
