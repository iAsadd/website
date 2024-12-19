let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(itemName, itemPrice) {
  const item = { name: itemName, price: itemPrice };
  cart.push(item);
  localStorage.setItem('cart', JSON.stringify(cart));
  alert(`${itemName} added to cart!`);
}
