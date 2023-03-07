
const slider1=()=>{
  return`
  
  <div class="slider">
         <div class="slide-track">
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
  
  
  
  
  // Mens 2 
  
  function mstart2(m_arr) {
  
    m_arr.map(function (elem) {
    
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

      document.querySelector("#new_m").append(div);
 
  });
  }
  
  
  
  
  
  let box3_m=()=>{
    let PopularM= [
      {
        "img": "https://images.bewakoof.com/uploads/grid/app/new-thumbnail-icon-2022-copy-1669723278.jpg",
        "cat": "Pluse size"
      },
      {
        "img": "https://images.bewakoof.com/uploads/grid/app/new-thumbnail-icon-2022-bestseller-1669138226.jpg",
        "cat": "Best Sellers"
      },
      {
        "img": "https://images.bewakoof.com/uploads/grid/app/me-shirt-thumbnail-1668508337.jpg",
        "cat": "Customization"
      },
      {
        "img": "https://images.bewakoof.com/uploads/grid/app/Thumbnail-New-Arrivals-Common-1668508339.jpg",
        "cat": "New Arrivals"
      },
      {
        "img": "https://images.bewakoof.com/uploads/grid/app/last-size-new-thumbnaik-1668508337.jpg",
        "cat": "Last Sizes Left"
      },
      {
        "img": "https://images.bewakoof.com/uploads/grid/app/hotdeals-2-1668491210.jpg",
        "cat": "Hot Deals"
      },
      {
        "img": "https://images.bewakoof.com/uploads/grid/app/Thumbnail-Collabs-Common-1668508338.jpg",
        "cat": "Official Collaboration"
      },
      {
        "img": "https://images.bewakoof.com/uploads/grid/app/image-1668598708.png",
        "cat": "Coupon Offers"
      }
    ];
    
  
  
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
  
      document.getElementById("box3m").append(div);
  })
  
  
  }
  
  
  let men_ka_best=(mens_best)=> {
    
      mens_best.map(function (elem) {
        // console.log(elem);
 
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
    
          document.querySelector("#mbs_pro1").append(div);
      
        
      });
    }
  
  
    let  men_ka_tshirt=(tshirt)=> {
    
      tshirt.map(function (elem) {
    
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

          div.append(image,Price,rate);
    
          document.querySelector("#Tshirt_pro1").append(div);
     
      });
    }
  
  /*
 */
  

/*
*/
  
    export {slider1,men_ka_best,men_ka_tshirt,mstart2,box3_m};