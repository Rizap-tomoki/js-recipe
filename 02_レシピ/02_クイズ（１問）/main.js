const quizText = document.getElementById("quiz-text")
const quizImage = document.getElementById("quiz-image")
const element = document.getElementById("element")
const choice1 = document.createElement("button")
const choice2 = document.createElement("button")
const choice3 = document.createElement("button")
const feedback = document.getElementById("feedback")

// クイズの内容
const quiz = {
  text: "これは誰でしょう",
  image: "Two.jpeg",
  choices: [
    {
      text: "サナりゅ",
      feedback: "残念！サナリュはもっと",
    },
    {
      text: "ともキング",
      feedback: "正解！ともキングです",
    },
    {
      text: "さ〜〜や",
      feedback: "惜しい！でもさやはもっと怖い",
    },
  ],
}

// quiz を画面に表示する関数
const reloadQuiz = function () {
  // 問題文を表示
  quizText.textContent = "Q. " + quiz.text

  // 画像を表示
  quizImage.src = "./images/" + quiz.image

  // 追加
  element.append(choice1)
  element.append(choice2)
  element.appendChild(choice3)

  // 選択肢（ボタン）の中身を表示
  choice1.textContent = quiz.choices[0].text
  choice2.textContent = quiz.choices[1].text
  choice3.textContent = quiz.choices[2].text
}

// choiceNumber番目の選択肢を選択
const choose = function (choiceNumber) {
  // フィードバックを表示
  feedback.textContent = quiz.choices[choiceNumber].feedback
}

choice1.onclick = function () {
  // 0 番目の選択肢を選択
  choose(0)
}
choice2.onclick = function () {
  // 1 番目の選択肢を選択
  choose(1)
}
choice3.onclick = function () {
  // 2 番目の選択肢を選択
  choose(2)
}

// reloadQuiz関数 を実行して、クイズを画面に表示する
reloadQuiz()
