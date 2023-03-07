
// Resources
  // https://mock-server-wxg2.onrender.com/mensjacket
  // https://mock-server-wxg2.onrender.com/mensshirt 
  // https://mock-server-wxg2.onrender.com/menst-shirt
  // https://mock-server-wxg2.onrender.com/mensjeans
  // https://mock-server-wxg2.onrender.com/menstrousers
  // https://mock-server-wxg2.onrender.com/womensjacket
  // https://mock-server-wxg2.onrender.com/womensshirt
  // https://mock-server-wxg2.onrender.com/womenstop
  // https://mock-server-wxg2.onrender.com/womensjeans
  // https://mock-server-wxg2.onrender.com/womenstrousers
  // https://mock-server-wxg2.onrender.com/caps
  // https://mock-server-wxg2.onrender.com/sliders
  // https://mock-server-wxg2.onrender.com/mobilecovers
  // https://mock-server-wxg2.onrender.com/mensshoes
  // https://mock-server-wxg2.onrender.com/womensshoes



import {footerSection} from "../components/footer.js"
import {navbar} from "../components/navbar.js"
import {loader} from "../components/loader.js"
loader()


import {homeprofiles} from "./home/homeprofiles.js"

import {carousel_aala1,carousel_aala2,carousel_aala3} from "./home/carousel.js"

import {slider1,men_ka_best,men_ka_tshirt,mstart2,box3_m} from "./home/homeMens.js"
import {slider2,women_ka_best,women_ka_tshirt,wstart2,box3_w} from "./home/homeWomen.js"
import {slider3,box_2acc,a_ka_best,box3_acc} from "./home/homeACCESSORIES.js"
import {winter_ka_data} from "./home/homeWINTERWEAR.js"

let navbardiv = document.getElementById("navbar");
navbardiv.innerHTML = navbar();


let footerdiv = document.getElementById("part1");
footerdiv.innerHTML = footerSection()


 let carosse1 = document.getElementById("caross1");
carosse1.innerHTML = carousel_aala1();

let carosse2 = document.getElementById("caross2");
carosse2.innerHTML = carousel_aala2();

 let carosse3 = document.getElementById("caross3");
carosse3.innerHTML = carousel_aala3();


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

 let url_a="https://mock-server-wxg2.onrender.com/mensjacket";
  let url1 ="https://mock-server-wxg2.onrender.com/menst-shirt";
  let url2 ="https://mock-server-wxg2.onrender.com/mensshirt";
//////////////////////////////////////////////////////////////////////////////////////////
let url_wa="https://mock-server-wxg2.onrender.com/womensjeans";
  let url3 = "https://mock-server-wxg2.onrender.com/womenstop";
  let url4 ="https://mock-server-wxg2.onrender.com/womensshirt";
//////////////////////////////////////////////////////////////////////////////////////////
let url5="https://mock-server-wxg2.onrender.com/mobilecovers";

//////////////////////////////////////////////////////////////////////////////////////////
let url6="https://mock-server-wxg2.onrender.com/womensjacket";

//////////////////////////////////////////////////////////////////////////////////////////
let m_arr=[];
  let m_t_s1=[];
  let m_s2=[];

  let w_arr=[];
  let w_t_s1=[];
  let w_s2=[];

 let acc_data=[];
 let Winter_data=[];



// Display products on index/homepage
homeprofiles();

//////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////

let arrival=async()=>{
  let res = await fetch(`${url_a}`);
  let data = await res.json();
console.log("data lengtharr",data.length);
for(let i=0;i<data.length-42;i++){
  //console.log("data :" ,data[i]);
  m_arr.push(data[i]);
}
localStorage.setItem("mens_new",JSON.stringify(m_arr));
};

let men_arr = JSON.parse(localStorage.getItem("mens_new")) || [];
arrival();
mstart2(men_arr);

//men
  let getdata1=async()=>{
    let res = await fetch(`${url1}`);
    let data = await res.json();
  console.log("data length1",data.length);
for(let i=0;i<data.length-23;i++){
    //console.log("data :" ,data[i]);
    m_t_s1.push(data[i]);

  }
  localStorage.setItem("men_tshirt1",JSON.stringify(m_t_s1));
};

let getdata2=async()=>{
  let res = await fetch(`${url2}`);
  let data = await res.json();
  console.log("data length2",data.length);
  for(let i=0;i<data.length-54;i++){
    //console.log("data :" ,data[i]);
    m_s2.push(data[i]);
  
  }
  localStorage.setItem("men_shirt2",JSON.stringify(m_s2));
};
let mens_tshirt = JSON.parse(localStorage.getItem("men_tshirt1")) || [];
let mens_shirt = JSON.parse(localStorage.getItem("men_shirt2")) || [];

//men
let mslider=document.getElementById("m_slider");
mslider.innerHTML=slider1();


getdata1();
men_ka_tshirt(mens_tshirt);

getdata2();
men_ka_best(mens_shirt);
box3_m();
//////////////////////////////////////////////////////////////////////////////////////////

let arrivalw=async()=>{
  let res = await fetch(`${url_wa}`);
  let data = await res.json();
console.log("data lengtharr",data.length);
for(let i=0;i<data.length-41;i++){
  //console.log("data :" ,data[i]);
  w_arr.push(data[i]);
}
localStorage.setItem("womens_new",JSON.stringify(w_arr));
};

let women_arr = JSON.parse(localStorage.getItem("womens_new")) || [];
arrivalw();
wstart2(women_arr);

//women
let getdata3=async()=>{
  let res = await fetch(`${url3}`);
  let data = await res.json();
console.log("data length3",data.length);
for(let i=0;i<data.length-29;i++){
  //console.log("data :" ,data[i]);
  w_t_s1.push(data[i]);

}
localStorage.setItem("women_tshirt1",JSON.stringify(w_t_s1));
};

let getdata4=async()=>{
let res = await fetch(`${url4}`);
let data = await res.json();
console.log("data length 4",data.length);
for(let i=0;i<data.length-47;i++){
  //console.log("data :" ,data[i]);
  w_s2.push(data[i]);

}
localStorage.setItem("women_shirt2",JSON.stringify(w_s2));
};
 let womens_tshirt1 = JSON.parse(localStorage.getItem("women_tshirt1")) || [];
  let womens_shirt2 = JSON.parse(localStorage.getItem("women_shirt2")) || [];


//women
let wslider=document.getElementById("w_slider");
wslider.innerHTML=slider2();


getdata3();
women_ka_tshirt(womens_tshirt1);


getdata4();
women_ka_best(womens_shirt2);
box3_w();

//////////////////////////////////////////////////////////////////////////////////////////
//acc
let getdata5=async()=>{
  let res = await fetch(`${url5}`);
  let data = await res.json();
console.log("data length5",data.length);
for(let i=0;i<data.length-23;i++){
 // console.log("data :" ,data[i]);
  acc_data.push(data[i]);

}
localStorage.setItem("acc_data",JSON.stringify(acc_data));
};
let accessories = JSON.parse(localStorage.getItem("acc_data")) || [];


//acess
let aslider=document.getElementById("a_slider");
aslider.innerHTML=slider3();
box_2acc();
getdata5();
a_ka_best(accessories);
box3_acc();

//////////////////////////////////////////////////////////////////////////////////////////

//winter is coming.,..

let getdata6=async()=>{
  let res = await fetch(`${url6}`);
  let data = await res.json();
console.log("data length6",data.length);
for(let i=0;i<data.length-50;i++){
 // console.log("data :" ,data[i]);
  Winter_data.push(data[i]);

}
localStorage.setItem("Winter_data",JSON.stringify(Winter_data));
};
let w_ka_data = JSON.parse(localStorage.getItem("Winter_data")) || [];


getdata6();
winter_ka_data(w_ka_data);






//new arrivals

var angle = 0;
let spinnerm = document.getElementById("spinnerm");
let spinnerw = document.getElementById("spinnerw");
let spinneracc = document.getElementById("spinneracc");


let galleryspin=(sign,nam)=>{ 
if (!sign) { angle = angle + 80; } else { angle = angle - 80; }
nam.setAttribute("style","-webkit-transform: rotateY("+ angle +"deg); -moz-transform: rotateY("+ angle +"deg); transform: rotateY("+ angle +"deg);");
}

//men
let sp_leftm=document.getElementById("spin_leftm");
sp_leftm.addEventListener('click',()=>{
  console.log("gauri");
  galleryspin('-',spinnerm);
});
let sp_rightm=document.getElementById("spin_rightm");
sp_rightm.addEventListener('click',()=>{
  console.log("gauri");
 galleryspin('',spinnerm);
});


//women
let sp_leftw=document.getElementById("spin_leftw");
sp_leftw.addEventListener('click',()=>{
  console.log("gauri");
  galleryspin('-',spinnerw);
});

let sp_rightw=document.getElementById("spin_rightw");
sp_rightw.addEventListener('click',()=>{
  console.log("gauri");
 galleryspin('',spinnerw);
});


//acc
let sp_leftacc=document.getElementById("spin_leftacc");
sp_leftacc.addEventListener('click',()=>{
  console.log("gauri");
  galleryspin('-',spinneracc);
});
 
let sp_rightacc=document.getElementById("spin_rightacc");
sp_rightacc.addEventListener('click',()=>{
  console.log("gauri");
 galleryspin('',spinneracc);
});

//new arrivals

// data

// async function displayData () {

//     let res = await fetch ()
// }