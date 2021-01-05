// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.

const textarea = document.querySelector('#textarea')
const btn = document.querySelector('#btn')
const inputVolume = document.querySelector('#inputVolume')
const inputSpeed = document.querySelector('#inputSpeed')

const speak = () => {
  const msg = new SpeechSynthesisUtterance(textarea.value)
  msg.rate = inputSpeed.value // Set talking speed (1-10).
  msg.volume = inputVolume.value // Set voice volume.
  msg.voice = window.speechSynthesis.getVoices()[3]

  window.speechSynthesis.speak(msg)
}

btn.addEventListener('click', () => {
  if (textarea.value.length === 0) {
    textarea.classList.add('is-invalid')
  } else {
    textarea.classList.remove('is-invalid')

    speak()
  }
})
