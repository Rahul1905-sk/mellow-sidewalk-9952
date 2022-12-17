

const empty=()=>{
    let image=document.createElement("img");
    image.src="https://images.bewakoof.com/images/doodles/empty-cart-page-doodle.png";

    let p=document.createElement("p");
    p.innerText="Nothing in the bag";

    let button=document.createElement("button");
    button.innerText="Continue Shopping";
    button.onclick=()=>{
        window.location.href="index.html";
    }

    document.getElementById("empty_bag").append(image,p,button);

}
//empty();

let data=JSON.parse(localStorage.getItem("cart"))||[];

document.getElementById("length").innerText=data.length; 

const appending=(data)=>{
    let cont=document.getElementById("items");
    cont.innerHTML=null;

    

    data.forEach((el,index)=>{
        let div=document.createElement("div");
        div.setAttribute("id","box");

        let div2=document.createElement("div");
        div2.setAttribute("id","second");

        let spec=document.createElement("div");
        spec.setAttribute("id","prices");

        let imagediv=document.createElement("div");
        imagediv.setAttribute("id","img_div");

        let img=document.createElement("img");
        img.src=el.image;

        let p=document.createElement("p");
        p.innerText=el.title;

        let del=document.createElement("del");
        del.innerText="₹"+el.price.before_price;
        del.style.color="grey";

        let ins=document.createElement("ins");
        ins.innerText="₹"+el.price.current_price+" ";
        ins.style.textDecoration="none";
        ins.style.fontSize="20px";
        ins.style.fontWeight="bold";

        let save=document.createElement("p");
        save.innerText=`You Save ₹${el.price.savings_amount}!`;
        save.style.color="green";

        let remove=document.createElement("button");
        remove.innerText="Remove";
        remove.onclick=()=>{
            removeproduct(index);
        }

        spec.append(p,ins,del,save);
        imagediv.append(img);
        div.append(spec,imagediv);
        div2.append(div,remove);
        cont.append(div2);

           

      

        //cont2.append(div4)

    })

}
appending(data);


const removeproduct=(index)=>{

    data.splice(index,1);
    localStorage.setItem("cart",JSON.stringify(data));
    window.location.reload()
    appending(data);
}

// let sum=+localStorage.getItem("totalprice")||0;
// data.forEach((el)=>{
//     sum+=(+el.price.current_price);
// })
// localStorage.setItem("totalprice",sum);
// console.log(sum)

let sum=0;
data.forEach((el)=>{
    sum+=(+el.price.before_price);
})
document.getElementById("total").innerText="₹ "+sum;
console.log(sum);

let bag_discount=0;
data.forEach((el)=>{
    bag_discount+=(+el.price.savings_amount);
})
document.getElementById("off").innerText="- ₹ "+bag_discount;
document.getElementById("save_span").innerText="₹ "+bag_discount;


let final=0;
data.forEach((el)=>{
    final+=(+el.price.current_price);
})
document.getElementById("final_price").innerText="₹ "+final;
document.getElementById("span_price").innerText=" ₹ "+final;
// const appendprice=()=>{

//     let cont2=document.getElementById("detail_div");
//     cont2.innerHTML=null;

//        let div3=document.createElement("div");
//         div3.style.border="1px solid #ececec"
        
//         let p2=document.createElement("p");
//         p2.innerText="Get Rs.200 instant discount on your First Purchase above Rs.999. Coupon code -NEW200"

        
//         let div4=document.createElement("div");
//         let p3=document.createElement("p");
//         p3.innerText="Whistles! Get extra 20% Cashback on prepaid orders above Rs.499. Coupon code - NEW20. Applicable for new customers only!"
        
//         div4.append(p3);
        
//         let div5=document.createElement("div");
//         div5.setAttribute("id","coupon");
        
//         let coupon=document.createElement("p");
//         coupon.innerText="Have a Coupon / Referral / Gift Card ?"

//         let reedem=document.createElement("p");
//         reedem.innerText="redeem>>";

//         div5.append(coupon,reedem);

//         let div6=document.createElement("div");
        
//         let ps=document.createElement("p");
//         ps.innerText="PRICE SUMMARY";

//         let tm=document.createElement("p");
//        // tm.innerText=`Total MRP (Incl. of taxes) ${el.price.current_price}`

//         let shp=document.createElement("p");
//         //shp.innerText="Shipping Charges  FREE";

//         let bd=document.createElement("p");
//        // bd.innerText=`Bag Discount ${el.price.savings_amount}`

//         let sbt=document.createElement("p");
//         //sbt.innerText=`Sub Total ${el.price.current_price}`

//         div6.append(ps,tm.shp,bd,sbt);

//         div3.append(p2);

//         cont2.append(div3,div4,div5);

// }
// appendprice();


