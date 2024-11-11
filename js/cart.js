
function get_cart(){
    let cart = localStorage.getItem('cart')
    if(cart){
        return JSON.parse(cart);
    }
    return {};
}

function save_cart(cart){
    localStorage.setItem('cart', JSON.stringify(cart))
}

let mycart = get_cart();

function create_cart_Item(product){
    let row = document.createElement("tr");
    let product_td = document.createElement("td");
    let quantity_td = document.createElement("td");
    let subtotal_td = document.createElement("td");
    let product_details = document.createElement("p");
    product_details.innerHTML = `${product.category}<br>price : ${product.price}`
    product_td.appendChild(product_details);
    let quantity_input = document.createElement("input",{type: "number"});
    quantity_input.value = product.quantity;
    quantity_td.appendChild(quantity_input);
    subtotal_td.textContent = product.quantity * product.price;
    row.appendChild(product_td)
    row.appendChild(quantity_td)
    row.appendChild(subtotal_td)
    return row
}
document.addEventListener("DOMContentLoaded",function(){
    let table = document.getElementById("cart_table");
    for(let ref in mycart){
    let product = mycart[ref];
    let row = create_cart_Item(product);
    table.appendChild(row);
    }
})