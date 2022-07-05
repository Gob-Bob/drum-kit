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
const buttonsLetter = document.querySelectorAll('.buttonLetter');
const buttonsText = document.querySelectorAll('.buttonText');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    button.style.cssText = 'border-color: rgba(255, 255, 0, 0.8); box-shadow: 0px 0px 1px 1px rgba(255, 255, 0, 0.4); transform:scale(1.1)';
    setTimeout(() => {
        button.style.cssText = 'border-color: ; box-shadow: ; transform:scale(1)';
    }, 50);
  });
});