function loader () {

    setTimeout(() => {
        
    let displaydiv = document.querySelector("#loader");
        displaydiv.style.display = "none";
    }, 1000);
    
    
}


export {loader};