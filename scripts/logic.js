

// async function getData () {
// let query = "jacket";
//         let res = await fetch(`http://localhost:3000/data?q=${query}`,{
//             method: "GET",
//             headers: {
//                 "Content-Type" : "application/json"
//             }
//         })

//         res = await res.json();
//         console.log(res);

//     }

//     getData()

// voiceList = 


let synth =  speechSynthesis;

function voices () {
    for (let voice of synth.getVoices()){
            console.log(voice);
    }
}


let v = {default:false,
    lang: "en-US",
    localService: true,
    name: "Microsoft Zira - English (United States)",
    voiceURI: "Microsoft Zira - English (United States)"}

synth.addEventListener("voicechanged",voices)

function textTospeech (text) {
    let utternance = new SpeechSynthesisUtterance(text);
    utternance.voice = {voiceURI : "Microsoft Ravi - English (India)"};
    synth.speak(utternance);
    // voices ()
}


document.querySelector(".dm").addEventListener("click", ()=> {
    textTospeech("Welcome back Rahul")
    textTospeech("thank you for order. Happy shopping")


})





