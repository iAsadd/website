// Cart Logic
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Add item to cart
function addToCart(itemName, itemPrice) {
  const item = { name: itemName, price: itemPrice };
  cart.push(item);
  localStorage.setItem('cart', JSON.stringify(cart));
  alert(`${itemName} added to cart!`);
  updateCartSummary();
}

// Update cart summary
function updateCartSummary() {
  const cartItemsElement = document.getElementById('cart-items');
  const cartTotalElement = document.getElementById('cart-total');

  if (!cartItemsElement || !cartTotalElement) return;

  cartItemsElement.innerHTML = '';
  let total = 0;

  cart.forEach((item, index) => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - ${item.price.toFixed(0)}`;
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.onclick = () => removeFromCart(index);
    li.appendChild(removeButton);
    cartItemsElement.appendChild(li);
    total += item.price;
  });

  cartTotalElement.textContent = total.toFixed(0);
}

// Remove item from cart
function removeFromCart(index) {
  cart.splice(index, 1);
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartSummary();
}

// Update cart on page load
document.addEventListener('DOMContentLoaded', updateCartSummary);
