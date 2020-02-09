let sounds = [
    'no-no-no-no-no',
    'consider-having-them-arrested',
    'very-bad-day',
    'one-of-the-worst-days',
]

document.addEventListener("DOMContentLoaded", () => {
    let soundsDiv = document.getElementById('sounds');
    
    sounds.forEach(el => {
        addSound(soundsDiv, el)
    });
    sounds.forEach(el => {
        document.getElementById(el + '-btn').addEventListener('click', () => {
            document.getElementById(el).play();
        });
    })
});

function addSound(containerDiv, soundName) {
    var prettyName = soundName.replace(/-/g, ' ');
    prettyName =  prettyName.charAt(0).toUpperCase() + prettyName.slice(1);
    containerDiv.innerHTML += `
        <audio id="` + soundName + `" src="assets/sounds/` + soundName + `.mp3" preload="metadata" type="audio/mpeg">
            Your browser does not support the audio element.
        </audio>
        <button id="` + soundName + `-btn" class="button is-danger">` + prettyName + `</button>
        `;
}
