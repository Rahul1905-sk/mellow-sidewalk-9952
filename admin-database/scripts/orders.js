const getOrdersData = async () => {
  let res = await fetch(`https://mock-server-wxg2.onrender.com/order_details`);
  let data = await res.json();
  appendOrdersData(data);
};
getOrdersData();

const appendOrdersData = (data) => {
  let orders_div = document.getElementById("orders_tbody");
  orders_div.innerHTML = "";
  data.forEach(
    ({ fname, lname, number, productName, id, address, date, price }) => {
      let tr = document.createElement("tr");
      let order_id = document.createElement("td");
      order_id.innerText = id;
      let order_firstName = document.createElement("td");
      order_firstName.innerText = fname;
      let order_lastName = document.createElement("td");
      order_lastName.innerText = lname;
      let order_number = document.createElement("td");
      order_number.innerText = number;
      let order_items = document.createElement("td");
      //   let arr = [];
      //   let obj = {};
      //   for (let i = 0; i < productName.length; i++) {
      //     obj[i] = productName[i];
      //     // arr.push(obj);
      //   }
      //   console.log(obj);
      //   for (let key in obj) {
      //     arr.push(obj[key]);
      //   }
      order_items.innerText = productName;
      let order_address = document.createElement("td");
      order_address.innerText = address;
      let order_price = document.createElement("td");
      order_price.innerText = price;
      let order_date = document.createElement("td");
      order_date.innerText = date;

      tr.append(
        order_id,
        order_firstName,
        order_lastName,
        order_number,
        order_items,
        order_address,
        order_price,
        order_date
      );
      orders_div.append(tr);
    }
  );
};
