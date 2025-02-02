function convertTextToSpeech() {
    var text = document.getElementById("text-input").value;
    var speech = new SpeechSynthesisUtterance(text);

    speech.lang = 'en-US'; // You can change language if needed
    window.speechSynthesis.speak(speech);
}

function downloadSpeech() {
    var text = document.getElementById("text-input").value;
    var speech = new SpeechSynthesisUtterance(text);

    speech.lang = 'en-US';
    
    // Creating an audio file from speech synthesis (this is a bit tricky but could be done)
    // Currently, we can't directly download speech from SpeechSynthesis API, so you can implement custom solutions or APIs to create audio files
}
