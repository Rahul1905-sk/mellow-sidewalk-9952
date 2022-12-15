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
  
  const box_2w=()=>{

      let cat = [
        {
          "img": "https://images.bewakoof.com/uploads/grid/app/category-box-new-accessories-covers-1662043886.jpg",
          "head": "Mobile Covers"
        },
        {
          "img": "https://images.bewakoof.com/uploads/grid/app/category-box-new-accessories-slideers-1662043888.jpg",
          "head": "Sliders"
        },
        {
          "img": "https://images.bewakoof.com/uploads/grid/app/category-box-new-accessories-bags-1662043885.jpg",
          "head": "Backpacks"
        },
        {
          "img": "https://images.bewakoof.com/uploads/grid/app/category-box-new-accessories-flipflops-1662043887.jpg",
          "head": "Flip Flops"
        },
        {
          "img": "https://images.bewakoof.com/uploads/grid/app/category-box-new-accessories-books-1662043886.jpg",
          "head": "Note Books"
        },
        {
          "img": "https://images.bewakoof.com/uploads/grid/app/category-box-new-accessories-shoes-1662043887.jpg",
          "head": "Casual Shoes"
        }
      ]
    
     cat.map(function(elem) {
        
            var div = document.createElement("div");
            div.setAttribute("class","mens")
      
            var image = document.createElement("img");
            image.setAttribute("src", elem.img);
    
            var h3 = document.createElement("h3");
            h3.innerText = elem.head;
      
         
            div.append(image,h3);
      
            document.getElementById("box2w").append(div);
        })
     
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
    
        var h3 = document.createElement("h2");
        h3.innerText = elem.cat;
    
     
        div.append(image,h3);
    
        document.getElementById("box3w").append(div);
    })

    
    }
    
    
    
    
  
  
  let women_ka_best=(mens_best)=> {

    
      mens_best.map(function (elem, index) {
        // console.log(elem);
        if (index < 5) {
          var div = document.createElement("div");
    
          var image = document.createElement("img");
          image.setAttribute("src", elem.imageUrl);
          image.addEventListener("click", function () {
            window.location.href = "womens_page.html";
          });
    
          var Price = document.createElement("p");
          Price.innerText = elem.disPrice;
    
          div.append(image, Price);
    
          document.querySelector(".wbs_pro1").append(div);
        } else if (index >= 5 && index <= 10) {
          var div = document.createElement("div");
    
          var image = document.createElement("img");
          image.setAttribute("src", elem.imageUrl);
          image.addEventListener("click", function () {
            window.location.href = "womens_page.html";
          });
    
          var Price = document.createElement("p");
          Price.innerText = elem.disPrice;
    
          div.append(image, Price);
    
          document.querySelector(".wbs_pro2").append(div);
        } else {
          return;
        }
      });
    }
  
  
    let  women_ka_tshirt=(tshirt)=> {
     
    
      tshirt.map(function (elem, index) {
        if (index < 5 && elem.price < 300) {
          var div = document.createElement("div");
    
          var image = document.createElement("img");
          image.setAttribute("src", elem.imageUrl);
          image.addEventListener("click", function (elem) {
            window.location.href = "womens_page.html";
          });
    
          var Price = document.createElement("p");
          Price.innerText = elem.disPrice;
    
          div.append(image, Price);
    
          document.querySelector(".wTshirt_pro1").append(div);
        } else if (index >= 5 && index < 10 && elem.price < 300) {
          var div = document.createElement("div");
    
          var image = document.createElement("img");
          image.setAttribute("src", elem.imageUrl);
          image.addEventListener("click", function (elem) {
            window.location.href = "womens_page.html";
          });
    
          var Price = document.createElement("p");
          Price.innerText = elem.disPrice;
    
          div.append(image, Price);
    
          document.querySelector(".wTshirt_pro2").append(div);
        } else {
          return;
        }
      });
    }
  
  
  
    export {slider2,box_2w,women_ka_best,women_ka_tshirt,box3_w};