const slider2=()=>{
  return`
  
  <div class="slider">
         <div class="slide-track">
         <div class="slide">
  
  
           <img src="https://images.bewakoof.com/uploads/grid/app/oof-sale-1x1-women-live-now-1670944564.jpg" alt="">
         </div>
         <div class="slide">
           <img src="https://images.bewakoof.com/uploads/grid/app/revised-buy3-banner-1670840080.jpg" alt="">
         </div>
         <div class="slide">
           <img src="https://images.bewakoof.com/uploads/grid/app/revamped-banner-1x1-copy-04-1670505869.jpg" alt="">
         </div>
         <div class="slide">
           <img src="https://images.bewakoof.com/uploads/grid/app/winter-women-01-1670943723.jpg" alt="">
         </div>
         <div class="slide">
         <img src="https://images.bewakoof.com/uploads/grid/app/b2g1-1x1-common-1670505865.jpg" alt="">
      </div>
      <div class="slide">
        <img src="https://images.bewakoof.com/uploads/grid/app/oof-sale-1x1-common-1670588740.gif" alt="">
      </div>
      <div class="slide">
        <img src="https://images.bewakoof.com/uploads/grid/app/revised-buy3-banner-1670840080.jpg" alt="">
      </div>
      <div class="slide">
        <img src="https://images.bewakoof.com/uploads/grid/app/revamped-banner-1x1-copy-04-1670505869.jpg" alt="">
      </div>
  
  
       </div>
     </div>
  
  `
  }
  
  
 // WoMens 2 
  
 function wstart2(w_arr) {
  
  w_arr.map(function (elem) {
  
    var div = document.createElement("div");

    var image = document.createElement("img");
    image.setAttribute("src", elem.image);
    image.addEventListener("click", function () {    
      localStorage.setItem("wind", JSON.stringify(elem));
        window.location.href = "detail.html";
    });
    var name = document.createElement("h5");
    name.innerText = elem.title;
    

    var Price = document.createElement("h5");
    Price.innerText = `₹ ${elem.price.current_price}`;

    var rate = document.createElement("h5");
    rate.innerText =`Rating: ${elem.review.rating}`;

    div.append(image,name, Price,rate);

    document.querySelector("#new_w").append(div);

});
}


    const box3_w=()=>{
     let PopularM= [
        {
          "img": "https://images.bewakoof.com/uploads/grid/app/new-thumbnail-icon-Women-1670913489.gif",
          "cat": "Design of the Day"
        },
        {
          "img": "https://images.bewakoof.com/uploads/grid/app/Thumbnail-Bestseller-Women-1668491213.jpg",
          "cat": "Best Sellers"
        },
        {
          "img": "https://images.bewakoof.com/uploads/grid/app/hotdeals-2-1668491210.jpg",
          "cat": "Customization"
        },
        {
          "img": "https://images.bewakoof.com/uploads/grid/app/Thumbnail-Customise-Women-1668491215.jpg",
          "cat": "New Arrivals"
        },
        {
          "img": "https://images.bewakoof.com/uploads/grid/app/Thumbnail-New-Arrivals-Women-1668491217.jpg",
          "cat": "Last Sizes Left"
        },
        {
          "img": "https://images.bewakoof.com/uploads/grid/app/last-size-new-thumbnaik-1668491212.jpg",
          "cat": "Plus Size"
        },
        {
          "img": "https://images.bewakoof.com/uploads/grid/app/new-thumbnail-icon-2022-women-plus-1668491893.jpg",
          "cat": "Official Collaboration"
        },
        {
          "img": "https://images.bewakoof.com/uploads/grid/app/vote-thumbnail-1668491219.jpg",
          "cat": "Personal Care"
        }
      ]
      
     // <h1>POPULAR CATEGORIES</h1>

     PopularM.map(function(elem) {
        
        var div = document.createElement("div");
        div.setAttribute("class","pop");
    
        var image = document.createElement("img");
        image.setAttribute("src", elem.img);
        image.addEventListener("click", function () {    
          window.location.href = "products.html";
        });
        var h3 = document.createElement("h5");
        h3.innerText = elem.cat;
    
     
        div.append(image,h3);
    
        document.getElementById("box3w").append(div);
    })

    
    }
    
  
  
  let women_ka_best=(womens_best)=> {

    
      womens_best.map(function (elem) {
    
          var div = document.createElement("div");
    
          var image = document.createElement("img");
          image.setAttribute("src", elem.image);
          image.addEventListener("click", function () {
            localStorage.setItem("wind", JSON.stringify(elem));
        window.location.href = "detail.html";
          });
    
          var name = document.createElement("h5");
          name.innerText = elem.title;
    
          var Price = document.createElement("h5");
          Price.innerText = `₹ ${elem.price.current_price}`;
    
          div.append(image,Price);
          document.querySelector("#wbs_pro1").append(div);
        
      });
    }
  
  
    let  women_ka_tshirt=(wtshirt)=> {
    
      wtshirt.map(function (elem) {
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
          Price.innerText = `₹ ${elem.price.current_price}`;

          var rate = document.createElement("h4");
          rate.innerText =`Rating: ${elem.review.rating}`;

          div.append(image, Price,rate);
    
    
          document.querySelector("#wTshirt_pro1").append(div);
       
      });
    }
  
  
  
    export {slider2,women_ka_best,women_ka_tshirt,wstart2,box3_w};