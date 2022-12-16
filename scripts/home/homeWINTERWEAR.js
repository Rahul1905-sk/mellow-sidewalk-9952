let  winter_ka_data=(w_data)=> {
     
    
    w_data.map(function (elem) {
        var div = document.createElement("div");
  
        var image = document.createElement("img");
        image.setAttribute("src", elem.image);
        image.addEventListener("click", function () {    
          localStorage.setItem("wind", JSON.stringify(elem));
          window.location.href = "detail.html";
        });
        
        var name = document.createElement("h4");
        name.innerText = elem.title;

        var Price = document.createElement("h4");
        Price.innerText = `Price:${elem.price.current_price}`;

        var rate = document.createElement("h4");
        rate.innerText =`Rating: ${elem.review.rating}`;

        div.append(image, Price,rate);
  
        document.querySelector("#a_pro1").append(div);
      
    });
  }
  export{winter_ka_data}