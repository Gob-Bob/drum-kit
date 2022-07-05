function addSoundToButton(buttonNum, sound) {
    let button = document.querySelector(`#btn${buttonNum}`);
    button.addEventListener('click', () => {
    let audio = new Audio(`sounds/${sound}.wav`);
    audio.play();
});
}

function addSoundsToAllButtons() {
    soundsArray = ["clap", "hihat", "kick", 
    "openhat", "boom", "ride", 
    "snare", "tom", "tink"];

    let soundCount = 1;
    for (eachSound of soundsArray) {
        addSoundToButton(`${soundCount}`, `${eachSound}`);
        soundCount++;
    }
}

addSoundsToAllButtons();

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    button.style.cssText = 'box-shadow: 0px 0px 4px 4px rgba(255, 255, 0, 0.8);';
    setTimeout(() => {
        button.style.cssText = 'box-shadow: '; 
    }, 50);
  });
});