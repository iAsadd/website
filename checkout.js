function updateCartSummary() {
  const cartItemsElement = document.getElementById('cart-items');
  const cartTotalElement = document.getElementById('cart-total');
  
  if (!cartItemsElement || !cartTotalElement) return; // If elements aren't on the page

  cartItemsElement.innerHTML = ''; // Clear the current list
  let total = 0;

  // Add each item in the cart to the list and calculate the total
  cart.forEach((item, index) => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - ${item.price.toFixed(2)}`;
    
    // Add a remove button for each item
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.onclick = () => removeFromCart(index);
    li.appendChild(removeButton);

    cartItemsElement.appendChild(li);
    total += item.price;
  });

  cartTotalElement.textContent = total.toFixed(0); // Update the total
}

// Function to remove an item from the cart
function removeFromCart(index) {
  cart.splice(index, 1); // Remove the item at the specified index
  localStorage.setItem('cart', JSON.stringify(cart)); // Save updated cart
  updateCartSummary(); // Refresh the displayed cart
}

// Update the cart when the page loads
document.addEventListener('DOMContentLoaded', updateCartSummary);
