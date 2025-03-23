typingBox = document.getElementById("words");

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function getRand(max = 2000) {
  return Math.floor(Math.random() * max);
}

async function writeWord(word) {
  for (const letter of word.split("")) {
    await sleep(getRand(70)).then(() =>
      document.execCommand("insertText", false, letter)
    );
  }
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function game() {
  typingBox.click();
  while (isActiveWord()) {
    await sleep(getRand(200)).then(
      async () => await writeWord(getActiveWord())
    );
  }
}

function isActiveWord() {
  return !!document.getElementsByClassName("word active")[0];
}

function getActiveWord() {
  return (
    [
      ...document
        .getElementsByClassName("word active")[0]
        .getElementsByTagName("letter"),
    ]
      .map((letterElement) => letterElement.textContent)
      .join("") + " "
  );
}

game();
