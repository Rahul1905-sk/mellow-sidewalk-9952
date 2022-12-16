
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
  
  
  
  const box_2m=()=>{
    
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
          div.setAttribute("class","mens");
    
          var image = document.createElement("img");
          image.setAttribute("src", elem.img);
  
          var h3 = document.createElement("h3");
          h3.innerText = elem.head;
    
       
          div.append(image,h3);
    
          document.getElementById("box2m").append(div);
      })
   
  }
  
  // Mens slider 2 
  
  function mstart2() {
    let img_arr = [
     
    ];
  
    let ss2 = document.getElementById("ss2m");
  
    let i = 0;
  
    x2 = setInterval(function () {
      if (i === img_arr.length - 2) {
        i = 0;
      }
      ss2.innerHTML = "";
  
      let img1 = document.createElement("img");
      img1.src = `${img_arr[i]}`;
  
      let img2 = document.createElement("img");
      img2.src = `${img_arr[i + 1]}`;
  
      let img3 = document.createElement("img");
      img3.src = `${img_arr[i + 2]}`;
      ss2.append(img1, img2, img3);
      i++;
    }, 5000);
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
  
      var h3 = document.createElement("h2");
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
          image.setAttribute("src", elem.imageUrl);
          image.addEventListener("click", function (elem) {
            addToCart(elem);
            //window.location.href = "mens_page.html";
          });
    
          var name = document.createElement("p");
          name.innerText = elem.shirtNmae;
    
          var Price = document.createElement("p");
          Price.innerText = elem.price;
    
          div.append(image,name,Price);
    
          document.querySelector("#mbs_pro1").append(div);
        
        
      });
    }
  
  
    let  men_ka_tshirt=(tshirt)=> {
    
      tshirt.map(function (elem) {
       
          var div = document.createElement("div");
    
          var image = document.createElement("img");
          image.setAttribute("src", elem.imageUrl);
          image.addEventListener("click", function (elem) {
            addToCart(elem);
            //window.location.href = "mens_page.html";
          });
          var name = document.createElement("p");
          name.innerText = elem.shirtNmae;

          var Price = document.createElement("p");
          Price.innerText = elem.price;

          var Brand = document.createElement("p");
          Brand.innerText = elem.brand;

          div.append(image,name, Price,Brand);
    
          document.querySelector(".Tshirt_pro1").append(div);
        
      });
    }
  
  /*
 */

  let addToCart=(e)=> {
    let product = JSON.parse(localStorage.getItem("cart")) || [];

    product.push(e);
   localStorage.setItem("cart", JSON.stringify(product.data));
   //localStorage.setItem("cart", (product));
  }
 
 

/*
*/
  
    export {slider1,box_2m,men_ka_best,men_ka_tshirt,mstart2,box3_m};