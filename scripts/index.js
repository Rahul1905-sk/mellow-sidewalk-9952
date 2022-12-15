

import {footerSection} from "../components/footer.js"
import {navbar} from "../components/navbar.js"

import {homeprofiles} from "./home/homeprofiles.js"
import {slider1,box_2m,men_ka_best,men_ka_tshirt,mstart2,box3_m} from "./home/homeMens.js"
import {slider2,box_2w,women_ka_best,women_ka_tshirt,wstart2,box3_w} from "./home/homeWomen.js"
import {slider3 ,box_2acc,a_ka_best,a_ka_data,astart2,box3_acc} from "./home/homeACCESSORIES.js"

let footerdiv = document.querySelector("#part1");
footerdiv.innerHTML = footerSection ()

let navbardiv = document.querySelector("#navbar");
navbardiv.innerHTML = navbar();


const tshirt = [
    {
      imageUrl:
        "https://images.bewakoof.com/t540/jet-black-half-sleeve-t-shirt-106-1639137606-1.jpg",
      shirtNmae: "Jet Black Half Sleeve T-Shirt",
      disPrice: "₹ 299 3̶9̶9̶",
      price: 299,
      member: "₹319 For TriBe Members",
      brand: "Puma",
      size: "X",
    },
    {
      imageUrl:
        "https://images.bewakoof.com/t320/white-half-sleeve-t-shirt-105-1637995614-1.jpg",
      shirtNmae: "Jet White Half Sleeve T-Shirt",
      disPrice: "₹ 250 3̶9̶9̶",
      price: 250,
      member: "₹319 For TriBe Members",
      brand: "Puma",
      size: "L",
    },
    {
      imageUrl:
        "https://images.bewakoof.com/t320/jet-black-full-sleeve-t-shirt-1094-1637995554-1.jpg",
      shirtNmae: "Jet Black Half Sleeve T-Shirt",
      disPrice: "₹ 249 3̶9̶9̶",
      price: 249,
      member: "₹300 For TriBe Members",
      brand: "Adidas",
      size: "L",
    },
    {
      imageUrl:
        "https://images.bewakoof.com/t320/navy-blue-full-sleeve-t-shirt-1092-1637269396-2.jpg",
      shirtNmae: "Navy Blue Sleeve T-Shirt",
      disPrice: "₹ 225 3̶9̶9̶",
      price: 225,
      member: "₹350 For TriBe Members",
      brand: "Adidas",
      size: "XL",
    },
    {
      imageUrl:
        "https://images.bewakoof.com/t320/fire-fist-relaxed-fit-half-sleeve-t-shirt-387573-1636266570-1.gif",
      shirtNmae: "Men Black Fire Fist Relaxed Fit T-Shirt",
      disPrice: "₹ 299 8̶9̶9̶",
      price: 299,
      member: "₹549 For TriBe Members",
      brand: "Nike",
      size: "XL",
    },
    {
      imageUrl:
        "https://images.bewakoof.com/t320/misty-hills-halftone-half-sleeve-t-shirt-black-men-s-printed-t-shirts-286043-1600401657.jpg",
      shirtNmae: "Misty Hills Halftone Sleeve Fit T-Shirt",
      disPrice: "₹ 200 3̶9̶9̶",
      price: 200,
      member: "250 For TriBe Members",
      brand: "Nike",
      size: "M",
    },
    {
      imageUrl:
        "https://images.bewakoof.com/t320/white-full-sleeve-t-shirt-1093-1637995974-1.jpg",
      shirtNmae: "White Full Sleeve Fit T-Shirt",
      disPrice: "₹ 245 8̶9̶9̶",
      price: 245,
      member: "₹549 For TriBe Members",
      brand: "Reebok",
      size: "XS",
    },
    {
      imageUrl:
        "https://images.bewakoof.com/t320/yeager-relaxed-fit-half-sleeve-t-shirt-387570-1636266587-1.gif",
      shirtNmae: "Yeager Relaxed Fit Half Sleeve Fit T-Shirt",
      disPrice: "₹ 299 8̶9̶9̶",
      price: 299,
      member: "₹559 For TriBe Members",
      brand: "Nike",
      size: "2XL",
    },
    {
      imageUrl:
        "https://images.bewakoof.com/t320/torque-half-sleeve-t-shirt-459652-1640331745-1.jpg",
      shirtNmae: "Torque Half Sleeve T-Shirt",
      disPrice: "₹ 225 3̶9̶9̶",
      price: 225,
      member: "₹369 For TriBe Members",
      beand: "Reebok",
      size: "2XL",
    },
    {
      imageUrl:
        "https://images.bewakoof.com/t320/create-good-stories-half-sleeve-t-shirt-black-283013-1640064978-4.jpg",
      shirtNmae: "Create a good Stories Half SleeveT-Shirt",
      disPrice: "₹ 250 4̶9̶9̶",
      price: 250,
      member: "₹549 For TriBe Members",
      brand: "Puma",
      size: "2XL",
    },
  ];
  const mens_best = [
    {
      imageUrl:
        "https://images.bewakoof.com/t540/freedom-feather-half-sleeve-t-shirt-black-340007-1639137613-1.jpg",
      shirtNmae: "Black Full Sleeve Shirt",
      disPrice: "₹ 599 8̶9̶9̶",
      price: 599,
    },
    {
      imageUrl:
        "https://images.bewakoof.com/t320/pocket-jerry-half-sleeve-t-shirt-tjl-241993-1637854939-1.jpg",
      shirtNmae: "Gyaan Half Half Sleeve T-Shirt",
      disPrice: "₹ 750 8̶9̶9̶",
      price: 750,
    },
    {
      imageUrl:
        "https://images.bewakoof.com/t320/conquer-strip-half-sleeve-t-shirt-navy-blue-300968-1639374597-1.jpg",
      shirtNmae: "Conquer Strip Half Sleeve T-Shirt",
      disPrice: "₹ 399 8̶9̶9̶",
      price: 399,
    },
    {
      imageUrl:
      "https://images.bewakoof.com/t540/upbeat-blue-verticle-pocket-stripe-t-shirt-463932-1643802327-1.jpg",
      name: "Men's Solid Casual Long Kurta",
      disPrice: "₹ 1020 8̶9̶9̶",
      price: 1020,
    },
    {
      imageUrl:
        "https://images.bewakoof.com/t320/upbeat-blue-camo-half-sleeve-t-shirt-463938-1643802243-1.jpg",
      shirtNmae: "UpBeat Blue Camo Half Slleve T-Shirt",
      disPrice: "₹ 599 8̶9̶9̶",
      price: 599,
    },
    {
      imageUrl:
        "https://images.bewakoof.com/t320/keep-listening-half-sleeve-t-shirt-465258-1642658859-1.jpg",
      shirtNmae: "Keep Listining Half Sleeve T-Shirt",
      disPrice: "₹ 399 7̶9̶9̶",
      price: 399,
    },
    {
      imageUrl:
        "https://images.bewakoof.com/t320/clan-nightmare-men-s-t-shirts-387567-1634624545-1.jpg",
      shirtNmae: "Clan Night Mare Round Neck R-shirt",
      disPrice: "₹ 599 8̶9̶9̶",
      price: 599,
    },
    {
      imageUrl:
        "https://images.bewakoof.com/t320/mickey-trio-call-half-sleeve-t-shirt-dl-276320-1637854957-1.jpg",
      shirtNmae: "Mickey Trio Call Half Sleeve T-Shirt",
      disPrice: "₹ 349 3̶9̶9̶",
      price: 349,
    },
    {
      imageUrl:
        "https://images.bewakoof.com/t320/striped-captain-america-printed-badge-half-sleeve-t-shirt-avl-234123-1637995862-1.jpg",
      shirtNmae: "Trust Your Full Ability Full Sleeve  T-Shirt ",
      disPrice: "₹ 399 9̶9̶9̶",
      price: 399,
    },
    {
      imageUrl:
        "https://images.bewakoof.com/t320/avengers-all-stars-avl-468862-1644818333-1.jpg",
      shirtNmae: "Pocket Jerry Half Sleeve T-Shirt (TJL)",
      disPrice: "₹ 349 9̶9̶9̶",
      price: 349,
    },
  ];


  localStorage.setItem("tshirt", JSON.stringify(tshirt));
  localStorage.setItem("mens_best", JSON.stringify(mens_best));
  
  let tshirtarr = JSON.parse(localStorage.getItem("tshirt")) || [];
  let mens_bestarr = JSON.parse(localStorage.getItem("mens_best")) || [];



// Display products on index/homepage
homeprofiles();





//men
let mslider=document.getElementById("m_slider");
mslider.innerHTML=slider1();
box_2m();
//mstart2();

men_ka_tshirt(tshirtarr);
men_ka_best(mens_bestarr);
box3_m();


//women
let wslider=document.getElementById("w_slider");
wslider.innerHTML=slider2();
box_2w();
//wstart2();

women_ka_tshirt(tshirtarr);

women_ka_best(mens_bestarr);
box3_w();

//acess
let aslider=document.getElementById("a_slider");
aslider.innerHTML=slider3();
box_2acc();
//astart2();

a_ka_data(tshirtarr);
a_ka_best(mens_bestarr);
box3_acc();