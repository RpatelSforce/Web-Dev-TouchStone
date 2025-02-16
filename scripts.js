// Initialize cart as an empty array or load from sessionStorage
let cart = JSON.parse(sessionStorage.getItem('cart')) || [];

// Subscribe button event handler
document.querySelectorAll('.subscribe-button').forEach(button => {
    button.addEventListener('click', function() {
        alert('Thank you for subscribing.');
    });
});

// Function to handle adding items to the cart
function addToCart(event) {
    const button = event.target;
    const productCard = button.closest('.product-card');
    const itemName = productCard.querySelector('p').textContent;

    if (!cart.includes(itemName)) {
        cart.push(itemName);
        sessionStorage.setItem('cart', JSON.stringify(cart));
        alert(`${itemName} added to cart`);
    } else {
        alert(`${itemName} is already in the cart`);
    }
    updateCartModal();
}

// Function to update the cart modal
function updateCartModal() {
    const cartItemsList = document.getElementById('cart-items');
    cartItemsList.innerHTML = ''; // Clear the existing list

    cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = item;
        cartItemsList.appendChild(listItem);
    });
}

// Function to handle opening the cart modal
function openCartModal() {
    updateCartModal();
    const cartModal = document.getElementById('cart-modal');
    cartModal.style.display = 'block';
}

// Function to handle closing the cart modal
function closeCartModal() {
    const cartModal = document.getElementById('cart-modal');
    cartModal.style.display = 'none';
}

// Function to handle clearing the cart
function clearCart() {
    if (cart.length > 0) {
        cart = [];
        sessionStorage.setItem('cart', JSON.stringify(cart));
        updateCartModal();
        alert('Cart cleared');
    } else {
        alert('No items to clear');
    }
}

// Function to handle processing the order
function processOrder() {
    if (cart.length > 0) {
        alert('Thank you for your order');
        clearCart(); // Clear the cart after processing the order
    } else {
        alert('Cart is empty');
    }
}

// Event listeners for cart buttons
document.getElementById('view-cart')?.addEventListener('click', openCartModal);
document.getElementById('clear-cart')?.addEventListener('click', clearCart);
document.getElementById('process-order')?.addEventListener('click', processOrder);
document.querySelector('.close')?.addEventListener('click', closeCartModal);

// Event listeners for 'Add to Cart' buttons
document.querySelectorAll('.add-to-cart-button').forEach(button => {
    button.addEventListener('click', addToCart);
});

// Form submission handler for the contact form
document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector(".contact-form");

    if (form) {
        form.addEventListener("submit", function(event) {
            event.preventDefault(); // Prevent the form from actually submitting and reloading the page

            // Get form data
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const message = document.getElementById('message').value;

            // Create an object to store the form data
            const formData = {
                name: name,
                email: email,
                phone: phone,
                message: message
            };

            // Save form data to localStorage
            localStorage.setItem('contactFormData', JSON.stringify(formData));

            // Display the alert message
            alert("Thank you for your message");

            // Optionally, reset the form fields
            form.reset();
        });
    } else {
        console.error("Contact form not found. Please check the form's class name.");
    }
});
