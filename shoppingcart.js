const cart = [];

function addtoCart(productName, price) {

    //const DishorIngredientName = cart.find(item => item.DishorIngredientName);
    
    function findProduct(item){
        return item.productName === productName;
    }

    const product = cart.find(findProduct);

    if (product){
        product.quantity++;
    } 
    else{
        cart.push({productName, price, quantity: 1});

    }

    updateCart();

}

function removeFromCart(productName){
    const index = cart.findIndex(item => item.productName === productName);

    if(index !== -1){
        if (cart[index].quantity > 1) {
            cart[index].quantity--;
        }
        else{
            cart.splice(index, 1);
        }
        
        updateCart();
    }

}

function updateCart(){
    const cartItems = document.getElementById("cartItems");
    const cartTotal = document.getElementById("cartTotal");
    cartItems.innerHTML = "";

    let total = 0;

    cart.forEach(item =>  {
        const cartItem = document.createElement("li");
        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.className = "remove";
        removeButton.onclick = () => removeFromCart(item.productName);
        cartItem.textContent = `${item.productName} x${item.quantity} - £${(item.price * item.quantity).toFixed(2)}`;

        cartItem.appendChild(removeButton);
        cartItems.appendChild(cartItem);
        total += item.price * item.quantity;
    });

    cartTotal.textContent = `${total.toFixed(2)}`;

}



