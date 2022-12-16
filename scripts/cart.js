

const empty=()=>{
    let image=document.createElement("img");
    image.src="https://images.bewakoof.com/images/doodles/empty-cart-page-doodle.png";

    let p=document.createElement("p");
    p.innerText="Nothing in the bag";

    let button=document.createElement("button");
    button.innerText="Continue Shopping";
    button.onclick=()=>{
        window.location.href="index.html";
    }

    document.getElementById("empty_bag").append(image,p,button);

}
empty();



