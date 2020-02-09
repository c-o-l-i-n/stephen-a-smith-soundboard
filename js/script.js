let sounds = [
    'no-no-no-no-no',
    'what$$-Me$$',
    'consider-having-them-arrested',
    'this-is-bad',
    'very-bad-day',
    'one-of-the-worst-days',
    'suspended-with-pay',
    'blasphemy',
    'how-do-you-do-that$',
    'what-the-hell-is-going-on$',
    'heh-heh-heh-heh,-what-do-you-think$',
    'what-the-hell-is-goin-on-I-have-no-idea',
    'i-have-no-idea',
    'oh-no-you-didn\'t',
    'we\'re-in-a-different-era',
    'we-have-been-hoodwinked',
    'y\'all-take-it-easy,-I\'m-out',
    'i-am-in-a-very-very-very-good-mood'
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
    var prettyName = soundName.replace(/-/g, ' ').replace(/\$/g, '?');
    prettyName =  prettyName.charAt(0).toUpperCase() + prettyName.slice(1);
    containerDiv.innerHTML += `
        <audio id="` + soundName + `" src="assets/sounds/` + soundName + `.mp3" preload="metadata" type="audio/mpeg">
            Your browser does not support the audio element.
        </audio>
        <button id="` + soundName + `-btn" class="button is-danger">` + prettyName + `</button>
        `;
    // var audio = document.getElementById(soundName);
    // var button = document.getElementById(soundName + '-btn');
    // audio.addEventListener('canplay', () => {
    //     button.classList.remove('is-loading');
    // });
    // button.addEventListener('click', () => {
    //     audio.play();
    // });
}

// function onCanPlay(soundName) {
//     console.log('poop');
//     var audio = document.getElementById(soundName);
//     var button = document.getElementById(soundName + '-btn');
//     audio.addEventListener('canplay', () => {
//         button.classList.remove('is-loading');
//     });
//     button.addEventListener('click', () => {
//         audio.play();
//     });
// }
