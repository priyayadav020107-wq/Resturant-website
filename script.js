// Navigation function to go to different menu pages - CORRECTED FOR YOUR FILES
function goToMenu(type) {
    switch(type) {
        case 'veg':
            window.location.href = 'veg-menu.html';
            break;
        case 'non-veg':
            window.location.href = 'non-veg-menu.html';
            break;
        case 'complete':
            window.location.href = 'complete-menu.html';
            break;
        default:
            window.location.href = 'complete-menu.html';
    }
}

// Function to go home (used by other pages)
function goHome() {
    window.location.href = 'index.html';
}

// Function to open food detail page - FIXED VERSION
function openFoodDetail(foodId) {
    console.log('Opening food detail for:', foodId);
    window.location.href = `food-detail.html?food=${foodId}`;
}

// Function to go back (used in food detail page) - FIXED FOR YOUR FILES
function goBack() {
    // Check where user came from and go back to appropriate menu
    const referrer = document.referrer;
    if (referrer.includes('veg-menu.html')) {
        window.location.href = 'veg-menu.html';
    } else if (referrer.includes('non-veg-menu.html')) {
        window.location.href = 'non-veg-menu.html';
    } else if (referrer.includes('complete-menu.html')) {
        window.location.href = 'complete-menu.html';
    } else {
        // Default to complete menu if unsure
        window.location.href = 'complete-menu.html';
    }
}

// Cart functionality
let cart = [];
let cartTotal = 0;

function addToCart(foodId, name, price) {
    const item = {
        id: foodId,
        name: name,
        price: parseFloat(price.replace('₹', '')),
        quantity: 1
    };
    
    const existingItem = cart.find(cartItem => cartItem.id === foodId);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push(item);
    }
    
    updateCartDisplay();
    showCartNotification(name);
}

function removeFromCart(foodId) {
    cart = cart.filter(item => item.id !== foodId);
    updateCartDisplay();
}

function updateCartDisplay() {
    cartTotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    
    // Update cart count if element exists
    const cartCount = document.getElementById('cart-count');
    if (cartCount) {
        cartCount.textContent = cart.reduce((total, item) => total + item.quantity, 0);
    }
    
    // Update cart total if element exists
    const cartTotalElement = document.getElementById('cart-total');
    if (cartTotalElement) {
        cartTotalElement.textContent = `₹${cartTotal.toFixed(2)}`;
    }
}

function showCartNotification(itemName) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 transform translate-x-full transition-transform duration-300';
    notification.innerHTML = `
        <div class="flex items-center">
            <span class="mr-2">✅</span>
            <span>${itemName} added to cart!</span>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Show notification
    setTimeout(() => {
        notification.classList.remove('translate-x-full');
    }, 100);
    
    // Hide notification after 3 seconds
    setTimeout(() => {
        notification.classList.add('translate-x-full');
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Search functionality
function searchFood() {
    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    const foodCards = document.querySelectorAll('.food-card');
    
    foodCards.forEach(card => {
        const foodName = card.querySelector('h3').textContent.toLowerCase();
        const foodDescription = card.querySelector('p').textContent.toLowerCase();
        
        if (foodName.includes(searchTerm) || foodDescription.includes(searchTerm)) {
            card.style.display = 'block';
            card.style.animation = 'fadeIn 0.5s ease';
        } else {
            card.style.display = 'none';
        }
    });
}

// Filter functionality
function filterByCategory(category) {
    const foodCards = document.querySelectorAll('.food-card');
    
    foodCards.forEach(card => {
        if (category === 'all') {
            card.style.display = 'block';
        } else {
            const cardCategory = card.getAttribute('data-category');
            if (cardCategory === category) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        }
    });
    
    // Update active filter button
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        btn.classList.remove('bg-orange-600', 'text-white');
        btn.classList.add('bg-gray-200', 'text-gray-700');
    });
    
    const activeButton = document.querySelector(`[onclick="filterByCategory('${category}')"]`);
    if (activeButton) {
        activeButton.classList.remove('bg-gray-200', 'text-gray-700');
        activeButton.classList.add('bg-orange-600', 'text-white');
    }
}

// Smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scrolling to all anchor links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Initialize loading effects
    setTimeout(addLoadingEffects, 100);
    
    // Initialize search functionality
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('input', searchFood);
    }
});

// Add loading animation for food cards
function addLoadingEffects() {
    const foodCards = document.querySelectorAll('.food-card');
    foodCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            card.style.transition = 'all 0.5s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });
}

// Scroll to top functionality
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Show scroll to top button when scrolling
window.addEventListener('scroll', function() {
    const scrollButton = document.getElementById('scroll-to-top');
    if (scrollButton) {
        if (window.pageYOffset > 300) {
            scrollButton.style.display = 'block';
        } else {
            scrollButton.style.display = 'none';
        }
    }
});

// Image lazy loading
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading when DOM is loaded
document.addEventListener('DOMContentLoaded', lazyLoadImages);

// Form validation
function validateContactForm() {
    const name = document.getElementById('contact-name').value;
    const email = document.getElementById('contact-email').value;
    const message = document.getElementById('contact-message').value;
    
    if (!name || !email || !message) {
        alert('Please fill in all fields');
        return false;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address');
        return false;
    }
    
    alert('Thank you for your message! We will get back to you soon.');
    return true;
}

// Newsletter subscription
function subscribeNewsletter() {
    const email = document.getElementById('newsletter-email').value;
    
    if (!email) {
        alert('Please enter your email address');
        return false;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address');
        return false;
    }
    
    alert('Thank you for subscribing to our newsletter!');
    document.getElementById('newsletter-email').value = '';
    return true;
}

// Mobile menu toggle
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenu) {
        mobileMenu.classList.toggle('hidden');
    }
}

// Reservation form handling
function handleReservation() {
    const date = document.getElementById('reservation-date').value;
    const time = document.getElementById('reservation-time').value;
    const guests = document.getElementById('reservation-guests').value;
    
    if (!date || !time || !guests) {
        alert('Please fill in all reservation details');
        return false;
    }
    
    alert(`Reservation confirmed for ${guests} guests on ${date} at ${time}. We look forward to serving you!`);
    return true;
}