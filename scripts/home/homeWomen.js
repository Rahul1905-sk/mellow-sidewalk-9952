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
    // womens slider 2 

function wstart2() {
let img_arr = [
 
];

let ss2 = document.getElementById("ss2w");

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

    const box3_w=()=>{
     let PopularM= [
        {
          "img": "https://images.bewakoof.com/uploads/grid/app/New-thumbnail-DOTD-Men-1664527322.gif",
          "cat": "Design of the Day"
        },
        {
          "img": "https://images.bewakoof.com/uploads/grid/app/bestseller-1660921671.jpg",
          "cat": "Best Sellers"
        },
        {
          "img": "https://images.bewakoof.com/uploads/grid/app/custom-men--1660921672.jpg",
          "cat": "Customization"
        },
        {
          "img": "https://images.bewakoof.com/uploads/grid/app/new-arrival-1660921673.jpg",
          "cat": "New Arrivals"
        },
        {
          "img": "https://images.bewakoof.com/uploads/grid/app/last-sizes-1660921673.jpg",
          "cat": "Last Sizes Left"
        },
        {
          "img": "https://images.bewakoof.com/uploads/grid/app/plus-size-1660921675.jpg",
          "cat": "Plus Size"
        },
        {
          "img": "https://images.bewakoof.com/uploads/grid/app/offiicale-merch-1660921674.jpg",
          "cat": "Official Collaboration"
        },
        {
          "img": "https://images.bewakoof.com/uploads/grid/app/PC-1660921675.jpg",
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
  
  
  
    export {slider2,box_2w,women_ka_best,women_ka_tshirt,wstart2,box3_w};