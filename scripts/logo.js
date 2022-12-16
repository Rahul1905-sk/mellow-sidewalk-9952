import {navbar} from "../components/navbar.js"
let navbardiv = document.getElementById("nav");
navbardiv.innerHTML=navbar();

import {carousel_aala1,carousel_aala2,carousel_aala3} from "./home/carr.js"

let carosse1 = document.getElementById("caross1");
carosse1.innerHTML = carousel_aala1();



let carosse2 = document.getElementById("caross2");
carosse2.innerHTML = carousel_aala2();

 let carosse3 = document.getElementById("caross3");
carosse3.innerHTML = carousel_aala3();



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


