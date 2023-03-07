
// let url = https://mock-server-wxg2.onrender.com/User;

const getCustomerData = async () => {
  let res = await fetch(`https://mock-server-wxg2.onrender.com/User`);
  let data = await res.json();
  console.log(data);
  appendCustomerData(data);
};
getCustomerData();

const appendCustomerData = (data) => {
  let customer_div = document.getElementById("customer_tbody");
  customer_div.innerHTML = "";
  data.forEach(({ name, mobile, email, pass, id }) => {
    let tr = document.createElement("tr");
    let cus_id = document.createElement("td");
    cus_id.innerText = id;
    let cus_name = document.createElement("td");
    cus_name.innerText = name;
    let cus_mobile = document.createElement("td");
    cus_mobile.innerText = mobile;
    let cus_email = document.createElement("td");
    cus_email.innerText = email;
    let cus_pass = document.createElement("td");
    cus_pass.innerText = pass;
    let cus_rem = document.createElement("td");
    let del_icon = document.createElement("i");
    del_icon.classList.add("fa-solid", "fa-trash-can", "del_icon");
    cus_rem.append(del_icon);
    del_icon.onclick = (e) => {
      delete_user_data(id);
      e.target.parentNode.parentNode.remove();
    };
    tr.append(
      cus_id,
      cus_name,
      cus_mobile,
      cus_email,
      cus_pass,
      cus_rem
    );
    customer_div.append(tr);
  });
};
// search handle
let searchBtn = document.getElementById("search_user_btn");
searchBtn.onclick = () => {
  let input_user = document.getElementById("search_user").value;
  search_user_data(input_user);
};

const search_user_data = async (d) => {
  // d = /d/i;
  let res = await fetch(`https://mock-server-wxg2.onrender.com/User`);
  let data = await res.json();
  data = data.filter(({ name }) => {
    return name.includes(d);
  });
  appendCustomerData(data);
};

//delete User Details

const delete_user_data = async (id) => {
  let res = await fetch(`https://mock-server-wxg2.onrender.com/User/${id}`, {
    method: "DELETE",
  });
};
