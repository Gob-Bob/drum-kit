function addSoundToButton(buttonNum, sound) {
    let button = document.querySelector(`#btn${buttonNum}`);
    button.addEventListener('click', () => {
    let audio = new Audio(`sounds/${sound}.wav`);
    audio.play();
});
}

soundsArray = ["clap", "hihat", "kick", 
    "openhat", "boom", "ride", 
    "snare", "tom", "tink"];

let soundCount = 1;
for (eachSound of soundsArray) {
    addSoundToButton(`${soundCount}`, `${eachSound}`);
    soundCount++;
}
