chrome.runtime.onStartup.addListener(function () {
    var themeAudio = new Audio(chrome.extension.getURL('music/dial-up.ogg'))
    themeAudio.loop = false
    themeAudio.play()
})
