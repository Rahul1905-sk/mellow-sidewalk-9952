

let voices = window.speechSynthesis.getVoices();

function textTospeech (text) {
    let utternance = new SpeechSynthesisUtterance(text);
    utternance.voice = window.speechSynthesis.getVoices()[3] ;
    speechSynthesis.speak(utternance);
}


document.querySelector(".dm").addEventListener("click", ()=> {
        textTospeech("@ Happy to see you Rahul")
        
})
    


