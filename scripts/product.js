const getData = async () => {
    try {
      let res = await fetch("http://localhost:3000/mensjacket");
      let data = await res.json();
  
      appendData(data)
    } catch (e) {}
  };
  
  const appendData = (data) => {
    
    document.getElementById("container").innerHTML = "";
    
    data.forEach((el) => {
        console.log(el)

      if (el.status == true) {
        
        var div = document.createElement("div");

        div.setAttribute("class", "item-card");
        var img = document.createElement("img");
        img.src = el.image;
  
        var cName = document.createElement("h3");
        cName.innerText = "Bewakoof";
  
        var pName = document.createElement("p");
        pName.innerText = el.title.slice(0,25);
  
        var pPrice = document.createElement("h4");
        pPrice.innerText = el.price.current_price;
  
        var rating = document.createElement("p");
        for (let i = 0; i < +el.review.rating; i++) {
          const star = document.createElement("span");
          star.className = "stars";
          rating.append(star);
        }
  
        div.addEventListener("click", function () {
          getdetails(el);
        });
  
        div.append(img, cName, pName, rating, pPrice);
        document.getElementById("container").append(div);
      }
    });
  };
  getData()