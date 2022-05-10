
async function createMediaSession() {
    navigator.mediaSession.metadata = new MediaMetadata({
        title: 'Dial up sound',
        artist: '(Click ⏩ to open settings)'
    })
    navigator.mediaSession.setActionHandler('seekforward', function () {
        chrome.runtime.openOptionsPage();
    })
}


chrome.runtime.onStartup.addListener(function () {
    // Set MediaSession API info for Chrome media player popup
    if ('mediaSession' in navigator) {
        createMediaSession()
    }

    // Create audio object
    var themeAudio = new Audio(chrome.extension.getURL('music/dial-up.ogg'))
    themeAudio.loop = false
    themeAudio.play()
})
