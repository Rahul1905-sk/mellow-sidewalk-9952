import {navbar} from "../components/navbar.js"
import {footerSection} from "../components/footer.js"
import {loader} from "../components/loader.js"
loader()

let footerdiv = document.querySelector("#footer");
footerdiv.innerHTML = footerSection ()

let navbardiv = document.querySelector("#navbar");
navbardiv.innerHTML = navbar();

// let cartlength=JSON.parse(localStorage.getItem("cart"));
// document.getElementById("cart_no").innerText=cartlength.length;

let url="https://mock-server-wxg2.onrender.com/caps"



const getData = async () => {
    try {
      let res = await fetch(url);
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
        pPrice.innerText=el.price.current_price
    



    
  
        var rating = document.createElement("p");
        for (let i = 0; i < Math.floor( +el.review.rating); i++) {
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
  let sort_Prods = document.getElementById("sortPrice");
sort_Prods.onchange = () => {
  let inputVal = sort_Prods.value;
  if (inputVal == "asc") {
    sort_handle("price.current_price", "asc");
  } else if (inputVal == "desc") {
    sort_handle("price.current_price", "desc");
  }
};

//handle filter
const sort_handle = async (query, value) => {
  document.getElementById("container").innerHTML = null;

  let res = await fetch(
    `${url}?_sort=${query}&_order=${value}`
  );
  let data = await res.json();

  appendData(data);
};
let filter_Prods = document.getElementById("filter_Prod");
filter_Prods.onchange = () => {
  let inputVal = filter_Prods.value;

  if (inputVal == "999") {
    handle_filter("price.current_price_lte", 999);
  } else if (inputVal == "1499") {
    handle_filter("price.current_price_lte", 1499);
  } else if (inputVal == "1999") {
    handle_filter("price.current_price_gte", 1999);
  }
};
let Vh = document.getElementById("Vh");
Vh.onchange = () => {
  let inputVal = Vh.value;

  if (inputVal == "4") {
    handle_filter("review.rating_gte", 4);
  } else if (inputVal == "3") {
    handle_filter("review.rating_gte", 3);
  } else if (inputVal == "2") {
    handle_filter("review.rating_gte", 2);
  }
};

const handle_filter = async (query, value) => {
  document.getElementById("container").innerHTML = null;
  let res = await fetch(`${url}?${query}=${value}`);
  let data = await res.json();
  appendData(data);
};
function getdetails(el) {
    localStorage.setItem("wind", JSON.stringify(el));
    window.location.href = "detail.html";
  }



  let cartlength=JSON.parse(localStorage.getItem("cart")) || [];
  if (cartlength == undefined) {
    cartlength = [];
  } 
    document.getElementById("cart_no").innerText=cartlength.length;
  
  
  let username=localStorage.getItem("username");
  let useremail=localStorage.getItem("email");
  let usernum=localStorage.getItem("mobile");
  
  if(username!=null && useremail!=null && usernum!=null){
    document.getElementById("profile").style.display="block";
    document.getElementById("loginid").style.display="none";
  }else{
    document.getElementById("profile").style.display="none";
    document.getElementById("loginid").style.display="block";
  }
  