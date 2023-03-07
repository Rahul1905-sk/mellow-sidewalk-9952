// Get the modal
var modal = document.querySelector(".myModal");

// Get the button that opens the modal
var btn = document.querySelector(".add_product");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
document.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// add new products
let addNewProducts = document.getElementById("add_new_product");
addNewProducts.onclick = async () => {
  let category = document.getElementById("new_prod_category").value;
  let ProdName = document.getElementById("new_prod_name").value;
  let ProdImage = document.getElementById("new_prod_img").value;
  let ProdPrice = document.getElementById("new_prod_price").value;
  // let ProdBrand = document.getElementById("new_prod_brandName").value;
  let ProdQuantity = document.getElementById("new_prod_quantity").value;
  let ProdDescription = document.getElementById("new_prod_description").value;

  let dataToSend = {
    title: ProdName,
    status: true,
    image: ProdImage,
    price: {current_price:ProdPrice, before_price: ProdPrice+1000, savings_amount: 1000 },
    // brandName: ProdBrand,
    review: { total_reviews: Math.floor(Math.random()*1000), rating: +(Math.random()*4+1).toFixed(2) },
    quantity: ProdQuantity,
    description: ProdDescription,

  };

  let res = await fetch(`https://mock-server-wxg2.onrender.com/${category}`, {
    method: "POST",
    body: JSON.stringify(dataToSend),
    headers: {
      "Content-Type": "application/json",
    },
  });
  alert("Product Added");
  category.value = "";
  ProdName.value = "";
  ProdImage.value = "";
  ProdPrice.value = "";
  ProdBrand.value = "";
  ProdQuantity.value = "";
  ProdDescription.value = "";
};
