let sounds = [
    'this-is-bad',
    'what$$-Me$$',
    'we-have-been-hoodwinked',
    'stay-off-the-weeeeeeed',
    'no-no-no-no',
    'very-bad-day',
    'consider-having-them-arrested',
    'one-of-the-worst-days',
    'suspended-with-pay',
    'blasphemy',
    'how-do-you-do-that$',
    'what-the-hell-is-going-on$',
    'heh-heh,-what-do-you-think$',
    'WTH-is-goin-on,-I-have-no-idea',
    'i-have-no-idea',
    'oh-no-you-didn\'t',
    'we\'re-in-a-different-era',
    'y\'all-take-it-easy,-I\'m-out',
    'i-am-in-a-very-very-good-mood',
]

// On Document Ready
document.addEventListener("DOMContentLoaded", () => {
    let soundsDiv = <HTMLDivElement>document.getElementById('sounds')
    
    sounds.forEach(el => {
        addSound(soundsDiv, el)
    });
});

// adds a sound button to the app
function addSound(containerDiv: HTMLDivElement, soundName: string) {
    // create audio node
    let audio: HTMLAudioElement = document.createElement('audio')
    audio.id = soundName
    audio.src = 'assets/sounds/' + soundName + '.mp3'
    audio.preload = 'metadata'
    audio.innerText = 'Your browser does not support the audio element.'

    // create button node
    let button: HTMLButtonElement = document.createElement('button')
    button.classList.add('button', 'is-primary', 'is-loading')
    button.innerText =
        // replace '-' with ' ' and replace '$' with '?' for button inner text
        soundName.charAt(0).toUpperCase()
        + (soundName.replace(/-/g, ' ').replace(/\$/g, '?')).slice(1)
    button.addEventListener('click', () => {
        audio.play()
    })

    // remove loading animation after audio is loaded
    audio.addEventListener('canplaythrough', () => {
        button.classList.remove('is-loading')
    }, false)
    audio.load()

    // add both to DOM
    containerDiv.appendChild(audio)
    containerDiv.appendChild(button)
}
