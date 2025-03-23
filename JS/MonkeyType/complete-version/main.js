function displayGui() {
  const gui = document.createElement("div");

  function applyGuiCSS() {
    gui.style = `
    position: fixed;
    bottom: 30%;
    right: 0px;
    transform: translateY(50%);
    padding: 5px;
    background: "rgba(0, 0, 0, 0.6)";
    color: white;
    font-family: sans-serif;
    font-size: 12px;
    z-index: 9999;
    display: flex;
    flex-direction: column;
    `;
  }

  applyGuiCSS();

  document.body.appendChild(gui);
}

function game() {
  const wordsInput = document.getElementById("wordsInput");

  displayGui();
}

game();
