
let voices = window.speechSynthesis.getVoices();

function textTospeech (text) {
    let utternance = new SpeechSynthesisUtterance(text);
    utternance.voice = window.speechSynthesis.getVoices()[3] ;
    speechSynthesis.speak(utternance);
}


var paymentDebitButton = document.getElementById("payment-debit-button-div");
var paymentWalletButton = document.getElementById("payment-wallet-button-div");
var paymentUpiButton = document.getElementById("payment-upi-button-div");
var paymentNetBankingButton = document.getElementById("payment-net-banking-button-div");
var paymentCodButton = document.getElementById("payment-cod-button-div");

var paymentWallet = document.getElementById("payment-wallet-button");
var paymentUpi = document.getElementById("payment-upi-button");
var paymentNetBanking = document.getElementById("payment-net-banking-button");
var paymentCod = document.getElementById("payment-cod-button");
var paymentDebit = document.getElementById("payment-debit-button");

// We have to change debit card button again on clicking second time;

paymentWalletButton.addEventListener("click", ()=>{
    // left div changed
    paymentWalletButton.style.backgroundColor = "white";
    paymentWalletButton.style.borderLeft = "5px solid #42a2a2";
    paymentDebitButton.style.backgroundColor = "whitesmoke";
    paymentDebitButton.style.border = "none";
    paymentUpiButton.style.backgroundColor = "whitesmoke";
    paymentUpiButton.style.border = "none";
    paymentNetBankingButton.style.backgroundColor = "whitesmoke";
    paymentNetBankingButton.style.border = "none";
    paymentCodButton.style.backgroundColor = "whitesmoke";
    paymentCodButton.style.border = "none";

   
    paymentWallet.style.backgroundColor = "white";
    paymentUpi.style.backgroundColor = "whitesmoke";
    paymentNetBanking.style.backgroundColor = "whitesmoke";
    paymentCod.style.backgroundColor = "whitesmoke";
    paymentDebit.style.backgroundColor = "whitesmoke";
   
 
  


    // right div changed
    document.getElementById("payment-debit").style.display = "none";
    document.getElementById("payment-wallet").style.display = "block";
    document.getElementById("payment-debit").style.display = "none";
    document.getElementById("payment-upi").style.display = "none";
    document.getElementById("payment-net-banking").style.display = "none";
    document.getElementById("payment-cod").style.display = "none";
});

paymentDebitButton.addEventListener("click", ()=>{
    paymentUpiButton.style.backgroundColor = "whitesmoke";
    paymentUpiButton.style.border = "none";
    paymentNetBankingButton.style.backgroundColor = "whitesmoke";
    paymentNetBankingButton.style.border = "none";
    paymentWalletButton.style.backgroundColor = "whitesmoke";
    paymentWalletButton.style.borderLeft = "none";
    paymentCodButton.style.backgroundColor = "whitesmoke";
    paymentCodButton.style.borderLeft = "none";
    paymentDebitButton.style.backgroundColor = "white";
    paymentDebitButton.style.borderLeft = "5px solid #42a2a2";


    paymentWallet.style.backgroundColor = "whitesmoke";
    paymentUpi.style.backgroundColor = "whitesmoke";
    paymentNetBanking.style.backgroundColor = "whitesmoke";
    paymentCod.style.backgroundColor = "whitesmoke";
    paymentDebit.style.backgroundColor = "white";
  

    document.getElementById("payment-debit").style.display = "block";
    document.getElementById("payment-upi").style.display = "none";
    document.getElementById("payment-wallet").style.display = "none";
    document.getElementById("payment-net-banking").style.display = "none";
    document.getElementById("payment-cod").style.display = "none";
    // document.getElementById("payment-net-banking").style.display = "none";

})

paymentUpiButton.addEventListener("click", ()=>{
paymentDebitButton.style.backgroundColor = "whitesmoke";
    paymentDebitButton.style.border = "none";
    paymentNetBankingButton.style.backgroundColor = "whitesmoke";
    paymentNetBankingButton.style.border = "none";
    paymentWalletButton.style.backgroundColor = "whitesmoke";
    paymentWalletButton.style.borderLeft = "none";
    paymentDebitButton.style.backgroundColor = "whitesmoke";
    paymentDebitButton.style.border = "none";
    paymentCodButton.style.backgroundColor = "whitesmoke";
    paymentCodButton.style.border = "none";
    paymentUpiButton.style.backgroundColor = "white";
    paymentUpiButton.style.borderLeft = "5px solid #42a2a2";


    paymentWallet.style.backgroundColor = "whitesmoke";
    paymentUpi.style.backgroundColor = "white";
    paymentNetBanking.style.backgroundColor = "whitesmoke";
    paymentCod.style.backgroundColor = "whitesmoke";
    paymentDebit.style.backgroundColor = "whitesmoke";

    document.getElementById("payment-upi").style.display = "block";
    // document.getElementById("payment-debit").style.display = "none";
    document.getElementById("payment-debit").style.display = "none";
    document.getElementById("payment-wallet").style.display = "none";
    document.getElementById("payment-net-banking").style.display = "none";
    document.getElementById("payment-cod").style.display = "none";
    // document.getElementById("payment-net-banking").style.display = "none";
});

paymentNetBankingButton.addEventListener("click", ()=>{
    paymentDebitButton.style.backgroundColor = "whitesmoke";
    paymentDebitButton.style.border = "none";
    paymentUpiButton.style.backgroundColor = "whitesmoke";
    paymentUpiButton.style.border = "none";
    paymentWalletButton.style.backgroundColor = "whitesmoke";
    paymentWalletButton.style.borderLeft = "none";
    paymentDebitButton.style.backgroundColor = "whitesmoke";
    paymentDebitButton.style.border = "none";
    paymentCodButton.style.backgroundColor = "whitesmoke";
    paymentCodButton.style.border = "none";
    paymentNetBankingButton.style.backgroundColor = "white";
    paymentNetBankingButton.style.borderLeft = "5px solid #42a2a2";


    paymentWallet.style.backgroundColor = "whitesmoke";
    paymentUpi.style.backgroundColor = "whitesmoke";
    paymentNetBanking.style.backgroundColor = "white";
    paymentCod.style.backgroundColor = "whitesmoke";
    paymentDebit.style.backgroundColor = "whitesmoke";

    document.getElementById("payment-net-banking").style.display = "block";
    document.getElementById("payment-debit").style.display = "none";
    document.getElementById("payment-upi").style.display = "none";
    document.getElementById("payment-wallet").style.display = "none";
    document.getElementById("payment-cod").style.display = "none";
    // document.getElementById("payment-wallet").style.display = "none";
});

  paymentCodButton.addEventListener("click", ()=>{
  paymentDebitButton.style.backgroundColor = "whitesmoke";
  paymentDebitButton.style.border = "none";
  paymentUpiButton.style.backgroundColor = "whitesmoke";
  paymentUpiButton.style.border = "none";
  paymentWalletButton.style.backgroundColor = "whitesmoke";
  paymentWalletButton.style.borderLeft = "none";
  paymentDebitButton.style.backgroundColor = "whitesmoke";
  paymentDebitButton.style.border = "none";
  paymentNetBankingButton.style.backgroundColor = "whitesmoke";
  paymentNetBankingButton.style.borderLeft = "none";
  paymentCodButton.style.backgroundColor = "white";
  paymentCodButton.style.borderLeft = "5px solid #42a2a2";

  
  paymentWallet.style.backgroundColor = "whitesmoke";
  paymentUpi.style.backgroundColor = "whitesmoke";
  paymentNetBanking.style.backgroundColor = "whitesmoke";
  paymentCod.style.backgroundColor = "white";
  paymentDebit.style.backgroundColor = "whitesmoke";
  
  document.getElementById("payment-net-banking").style.display = "none";
  document.getElementById("payment-debit").style.display = "none";
  document.getElementById("payment-upi").style.display = "none";
  document.getElementById("payment-wallet").style.display = "none";
  // document.getElementById("payment-cod-button").style.display = "block";
  document.getElementById("payment-cod").style.display = "block";

});

localStorage.setItem("userkanaam", "anukul")


document.getElementById("card-pay-now-button").addEventListener("click" , function(){
  // let name = localStorage.getItem("userkanaam")
  
  var person = prompt("Please enter your OTP", "");
  if(person == "1234"){
    alert("We are processing your payment !");
    textTospeech(` Thank you for order ${username}`)
// let arrr = ;
pushOrderDetails();
    localStorage.setItem("cart", null)
    localStorage.setItem("address", null)
    // let cartlength=JSON.parse(localStorage.getItem("cart"));
    // document.getElementById("cart_no").innerText=cartlength.length;



setTimeout(() => {
  window.location.href = "./orderPlaced.html";
}, 1);
}
else{
  alert("Wrong OTP, Try Again");
}  
});



function paymentP() {
  
  paymentUpiButton.style.backgroundColor = "whitesmoke";
  paymentUpiButton.style.border = "none";
  paymentNetBankingButton.style.backgroundColor = "whitesmoke";
  paymentNetBankingButton.style.border = "none";
  paymentWalletButton.style.backgroundColor = "whitesmoke";
  paymentWalletButton.style.borderLeft = "none";
  paymentCodButton.style.backgroundColor = "whitesmoke";
  paymentCodButton.style.borderLeft = "none";
  paymentDebitButton.style.backgroundColor = "white";
  paymentDebitButton.style.borderLeft = "5px solid #42a2a2";
  
  
  paymentWallet.style.backgroundColor = "whitesmoke";
  paymentUpi.style.backgroundColor = "whitesmoke";
  paymentNetBanking.style.backgroundColor = "whitesmoke";
  paymentCod.style.backgroundColor = "whitesmoke";
  paymentDebit.style.backgroundColor = "white";
  

    document.getElementById("payment-debit").style.display = "block";
    document.getElementById("payment-upi").style.display = "none";
    document.getElementById("payment-wallet").style.display = "none";
    document.getElementById("payment-net-banking").style.display = "none";
    document.getElementById("payment-cod").style.display = "none";
    // document.getElementById("payment-net-banking").style.display = "none";
    
  }
  
  paymentP()


  
let username=localStorage.getItem("username");
let useremail=localStorage.getItem("email");
let usernum=localStorage.getItem("mobile");

// if(username!=null && useremail!=null && usernum!=null){
//   document.getElementById("profile").style.display="block";
//   document.getElementById("loginid").style.display="none";
// }else{
//   document.getElementById("profile").style.display="none";
//   document.getElementById("loginid").style.display="block";
// }




let orderDetails = JSON.parse(localStorage.getItem("final"));

async function pushOrderDetails () {

    let res = await fetch (`https://mock-server-wxg2.onrender.com/order_details`, {
        method: "POST",
        body: JSON.stringify(orderDetails),
        headers : {
            "Content-Type" : "application/json"
        }
    })
}


let email = localStorage.getItem("email");

document.querySelector("#emailAPka").innerText = email;


document.getElementById("logo").onclick=()=>{
  window.location.href="index.html";
}