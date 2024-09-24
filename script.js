document.addEventListener("DOMContentLoaded", function () {
    let currentIndex = 0;
    const slides = document.querySelectorAll(".hero-slider .slide");
    const totalSlides = slides.length;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.opacity = i === index ? "1" : "0";
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        showSlide(currentIndex);
    }

    setInterval(nextSlide, 4000); // Change every 4 seconds
});

// Basket Pay

// Select the checkbox items and total amount display
const checkboxes = document.querySelectorAll('.item-checkbox');
const totalAmount = document.getElementById('totalAmount');
const payButton = document.getElementById('payButton');

let total = 0;

// Function to update total whenever items are checked/unchecked
function updateTotal() {
    total = 0;
    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            total += parseFloat(checkbox.getAttribute('data-price'));
        }
    });
    totalAmount.textContent = total.toFixed(2);
}

// Attach event listener to each checkbox
checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', updateTotal);
});

// Redirect to Payment Gateway on clicking "Pay"
payButton.addEventListener('click', () => {
    if (total === 0) {
        alert('Please select at least one item to proceed.');
        return;
    }

    const paymentMethod = prompt("Choose Payment Method: Mpesa or PayPal");
    
    if (paymentMethod.toLowerCase() === 'mpesa') {
        // Simulate Mpesa payment (you would integrate with an actual API here)
        alert(`Redirecting to Mpesa for payment of $${total.toFixed(2)}`);
        window.location.href = "https://your-mpesa-payment-gateway.com";
    } else if (paymentMethod.toLowerCase() === 'paypal') {
        // Simulate PayPal payment (you would integrate with PayPal API here)
        alert(`Redirecting to PayPal for payment of $${total.toFixed(2)}`);
        window.location.href = "https://www.paypal.com/pay";
    } else {
        alert('Invalid payment method. Please choose Mpesa or PayPal.');
    }
});
