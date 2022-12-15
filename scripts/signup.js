

const load=()=>{
    let phone=localStorage.getItem("phone");
    console.log(phone)

    document.getElementById("mobile").value=phone;
}
load();

document.getElementById("name").oninput=()=>{
    signup();
}
document.getElementById("mobile").oninput=()=>{
    signup();
}
document.getElementById("email").oninput=()=>{
    signup();
}
document.getElementById("pass").oninput=()=>{
    signup();
}


const signup=()=>{
    let name=document.getElementById("name").value;
    let mobile=document.getElementById("mobile").value;
    let email=document.getElementById("email").value;
    let pass=document.getElementById("pass").value;

    if(name.length>0 && mobile.length==10 && email.length>0 && pass.length>=6){
        document.getElementById("submit").style.backgroundColor="#42a2a2"
    }else{
        document.getElementById("submit").style.backgroundColor="#989898"
    }
}

// const getData=async()=>{
//     let name=document.getElementById("name").value;
//     let mobile=document.getElementById("mobile").value;
//     let email=document.getElementById("email").value;
//     let pass=document.getElementById("pass").value;

//     let res=await fetch(`http://localhost:3000/posts`,{

//     })
// }

