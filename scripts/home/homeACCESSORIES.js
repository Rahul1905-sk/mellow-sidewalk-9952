
const slider3=()=>{
  return`
  
  <div class="slider">
         <div class="slide-track">
         <div class="slide">
           <img src="https://images.bewakoof.com/uploads/grid/app/phone-cover-banner-1669297531.jpg" alt="">
         </div>
         <div class="slide">
           <img src="https://images.bewakoof.com/uploads/grid/app/revised-buy3-banner-1670840080.jpg" alt="">
         </div>
         <div class="slide">
           <img src="https://images.bewakoof.com/uploads/grid/app/1x1-casual-shoes-1670847088.gif" alt="">
         </div>
         <div class="slide">
         <img src="https://images.bewakoof.com/uploads/grid/app/Static-Banner-1-1-Caps-1668675797.gif" alt="">
       </div>
      <div class="slide">
        <img src="https://images.bewakoof.com/uploads/grid/app/phone-cover-banner-1669297531.jpg" alt="">
      </div>
      <div class="slide">
        <img src="https://images.bewakoof.com/uploads/grid/app/revised-buy3-banner-1670840080.jpg" alt="">
      </div>
      <div class="slide">
        <img src="https://images.bewakoof.com/uploads/grid/app/1x1-casual-shoes-1670847088.gif" alt="">
      </div>
      <div class="slide">
      <img src="https://images.bewakoof.com/uploads/grid/app/Static-Banner-1-1-Caps-1668675797.gif" alt="">
    </div>
  
       </div>
     </div>
  
  `
  }
  
  const box_2acc=()=>{

    let cat = [
      {
        "img": "https://images.bewakoof.com/uploads/grid/app/category-box-new-MobileCovers-1668754848.jpg",
        "head": "Mobile Covers"
      },
      {
        "img": "https://images.bewakoof.com/uploads/grid/app/category-box-new-Bags-1668754847.jpg",
        "head": "Backpacks"
      },
      {
        "img": "https://images.bewakoof.com/uploads/grid/app/category-box-new-accessories-slideers-1662043888.jpg",
        "head": "Sliders"
      },
      
      {
        "img": "https://images.bewakoof.com/uploads/grid/app/category-box-new-Sliders-1668754849.jpg",
        "head": "Flip Flops"
      },
      {
        "img": "https://images.bewakoof.com/uploads/grid/app/category-box-new-Books-1668754847.jpg",
        "head": "Note Books"
      },
      {
        "img": "https://images.bewakoof.com/uploads/grid/app/category-box-new-Caps-1668754848.jpg",
        "head": "Cap"
      }
    ]
  
   cat.map(function(elem) {
      
          var div = document.createElement("div");
          div.setAttribute("class","mens")
    
          var image = document.createElement("img");
          image.setAttribute("src", elem.img);
  
          var h3 = document.createElement("h5");
          h3.innerText = elem.head;
    
          div.append(image,h3);
    
          document.getElementById("box2acc").append(div);
      })
   
  }





  
  const box3_acc=()=>{
    let  PopularM= [
      {
        "img": "https://images.bewakoof.com/uploads/grid/app/newest-thumbnail-cap-1668059495.jpg",
        "cat": "CAPS"
      },
      {
        "img": "https://images.bewakoof.com/uploads/grid/app/new-thumbnail-icon-2022-common-BestsellerAccessories-1668431630.gif",
        "cat": "BEST SELLERS"
      },
      {
        "img": "https://images.bewakoof.com/uploads/grid/app/hotdeals-2-1668492730.jpg",
        "cat": "HOT DEAL"
      },
      {
        "img": "https://images.bewakoof.com/uploads/grid/app/new-thumbnail-icon-2022-common-NewArrivalsAccessories-1668431632.gif",
        "cat": "New Arrivals"
      },
      {
        "img": "https://images.bewakoof.com/uploads/grid/app/new-thumbnail-icon-2022-mobilecover-1668431633.jpg",
        "cat": "MOBILE COVER"
      },
      {
        "img": "https://images.bewakoof.com/uploads/grid/app/new-thumbnail-icon-2022-common-sliders-1668431632.gif",
        "cat": "SLIDERS"
      },
      {
        "img": "https://images.bewakoof.com/uploads/grid/app/new-thumbnail-icon-2022-common-collab-1668431631.gif",
        "cat": "OFFICIAL COLLABORATION"
      },
      {
        "img": "https://images.bewakoof.com/uploads/grid/app/new-thumbnail-icon-2022-common-mug-1668431631.jpg",
        "cat": "MUG"
      }
    ]
    
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
  
      document.getElementById("box3acc").append(div);
  })
  
 
  }
  
  
  
  
  
  let a_ka_best=(a_best)=> {

    
      a_best.map(function (elem) {
        // console.log(gauri);
          var div = document.createElement("div");
    
          var image = document.createElement("img");
          image.setAttribute("src", elem.image);
          image.addEventListener("click", function () {
            window.location.href = "acc_page.html";
          });
          var name = document.createElement("h5");
          name.innerText = elem.title;
    image.addEventListener("click", function () {    
      localStorage.setItem("wind", JSON.stringify(elem));
      window.location.href = "detail.html";
      });
          var Price = document.createElement("h5");
          Price.innerText = `Price:${elem.price.current_price}`;
    
          div.append(image);
    
          document.querySelector("#abs_pro1").append(div);
      
      });
    }
  
  
    
  
  
  
    export {slider3 ,box_2acc,a_ka_best,box3_acc};