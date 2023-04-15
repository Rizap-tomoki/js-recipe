for (let i = 1; i <= 50; i++) {
  if (i % 3 === 0 || /3/.test(i)) {
    console.log(`${i}⭐️`)
  } else {
    console.log(i)
  }
}
