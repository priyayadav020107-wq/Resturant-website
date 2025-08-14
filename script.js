// Food data for all pages
const foodData = {
    'caesar-salad': {
        name: 'Caesar Salad',
        emoji: '🥗',
        price: 12.99,
        category: 'Appetizer',
        type: 'Vegetarian',
        description: 'A classic Caesar salad made with fresh romaine lettuce, parmesan cheese, croutons, and our signature Caesar dressing.',
        ingredients: ['Romaine Lettuce', 'Parmesan Cheese', 'Croutons', 'Caesar Dressing', 'Anchovies', 'Garlic', 'Lemon Juice'],
        nutritionInfo: {
            calories: 280,
            protein: '12g',
            carbs: '18g',
            fat: '20g'
        },
        allergens: ['Dairy', 'Gluten', 'Fish'],
        prepTime: '10 minutes',
        tags: ['Vegetarian', 'Fresh', 'Light']
    },
    'chicken-wings': {
        name: 'Buffalo Chicken Wings',
        emoji: '🍗',
        price: 15.99,
        category: 'Appetizer',
        type: 'Non-Vegetarian',
        description: 'Crispy chicken wings tossed in our signature buffalo sauce, served with celery sticks and blue cheese dip.',
        ingredients: ['Chicken Wings', 'Buffalo Sauce', 'Blue Cheese', 'Celery', 'Butter', 'Hot Sauce', 'Garlic Powder'],
        nutritionInfo: {
            calories: 450,
            protein: '28g',
            carbs: '8g',
            fat: '35g'
        },
        allergens: ['Dairy'],
        prepTime: '20 minutes',
        tags: ['Spicy', 'Popular', 'Protein-Rich']
    },
    'mozzarella-sticks': {
        name: 'Mozzarella Sticks',
        emoji: '🧀',
        price: 9.99,
        category: 'Appetizer',
        type: 'Vegetarian',
        description: 'Golden crispy mozzarella sticks served with warm marinara sauce for dipping.',
        ingredients: ['Mozzarella Cheese', 'Breadcrumbs', 'Flour', 'Eggs', 'Marinara Sauce', 'Italian Herbs'],
        nutritionInfo: {
            calories: 320,
            protein: '18g',
            carbs: '22g',
            fat: '18g'
        },
        allergens: ['Dairy', 'Gluten', 'Eggs'],
        prepTime: '15 minutes',
        tags: ['Vegetarian', 'Crispy', 'Cheesy']
    },
    'veggie-spring-rolls': {
        name: 'Veggie Spring Rolls',
        emoji: '🥢',
        price: 8.99,
        category: 'Appetizer',
        type: 'Vegetarian',
        description: 'Crispy spring rolls filled with fresh vegetables and served with sweet chili sauce.',
        ingredients: ['Cabbage', 'Carrots', 'Bean Sprouts', 'Spring Roll Wrapper', 'Sweet Chili Sauce'],
        nutritionInfo: {
            calories: 240,
            protein: '6g',
            carbs: '38g',
            fat: '8g'
        },
        allergens: ['Gluten'],
        prepTime: '15 minutes',
        tags: ['Vegetarian', 'Crispy', 'Asian']
    },
    'grilled-salmon': {
        name: 'Grilled Salmon',
        emoji: '🐟',
        price: 24.99,
        category: 'Main Course',
        type: 'Non-Vegetarian',
        description: 'Fresh Atlantic salmon grilled to perfection, served with lemon herb butter, roasted vegetables, and wild rice.',
        ingredients: ['Atlantic Salmon', 'Lemon', 'Herbs', 'Butter', 'Asparagus', 'Bell Peppers', 'Wild Rice'],
        nutritionInfo: {
            calories: 520,
            protein: '42g',
            carbs: '28g',
            fat: '26g'
        },
        allergens: ['Fish', 'Dairy'],
        prepTime: '25 minutes',
        tags: ['Healthy', 'Omega-3', 'Gluten-Free']
    },
    'ribeye-steak': {
        name: 'Ribeye Steak',
        emoji: '🥩',
        price: 32.99,
        category: 'Main Course',
        type: 'Non-Vegetarian',
        description: 'Premium 12oz ribeye steak cooked to your preference, served with garlic mashed potatoes and seasonal vegetables.',
        ingredients: ['Ribeye Steak', 'Garlic', 'Potatoes', 'Butter', 'Cream', 'Seasonal Vegetables', 'Black Pepper'],
        nutritionInfo: {
            calories: 680,
            protein: '48g',
            carbs: '32g',
            fat: '42g'
        },
        allergens: ['Dairy'],
        prepTime: '30 minutes',
        tags: ['Premium', 'Protein-Rich', 'Hearty']
    },
    'chicken-parmesan': {
        name: 'Chicken Parmesan',
        emoji: '🍗',
        price: 19.99,
        category: 'Main Course',
        type: 'Non-Vegetarian',
        description: 'Breaded chicken breast topped with marinara sauce and melted mozzarella, served with spaghetti.',
        ingredients: ['Chicken Breast', 'Breadcrumbs', 'Marinara Sauce', 'Mozzarella', 'Parmesan', 'Spaghetti', 'Basil'],
        nutritionInfo: {
            calories: 620,
            protein: '38g',
            carbs: '45g',
            fat: '28g'
        },
        allergens: ['Dairy', 'Gluten', 'Eggs'],
        prepTime: '35 minutes',
        tags: ['Popular', 'Italian', 'Comfort Food']
    },
    'veggie-pasta': {
        name: 'Vegetable Pasta',
        emoji: '🍝',
        price: 16.99,
        category: 'Main Course',
        type: 'Vegetarian',
        description: 'Penne pasta with seasonal vegetables in a rich tomato basil sauce, topped with fresh parmesan.',
        ingredients: ['Penne Pasta', 'Zucchini', 'Bell Peppers', 'Tomatoes', 'Basil', 'Garlic', 'Parmesan'],
        nutritionInfo: {
            calories: 480,
            protein: '16g',
            carbs: '68g',
            fat: '18g'
        },
        allergens: ['Dairy', 'Gluten'],
        prepTime: '25 minutes',
        tags: ['Vegetarian', 'Italian', 'Comfort Food']
    },
    'veggie-burger': {
        name: 'Veggie Burger',
        emoji: '🍔',
        price: 14.99,
        category: 'Main Course',
        type: 'Vegetarian',
        description: 'Plant-based patty with lettuce, tomato, onion, and special sauce, served with fries.',
        ingredients: ['Plant-Based Patty', 'Lettuce', 'Tomato', 'Onion', 'Special Sauce', 'Brioche Bun', 'Fries'],
        nutritionInfo: {
            calories: 520,
            protein: '22g',
            carbs: '58g',
            fat: '24g'
        },
        allergens: ['Gluten', 'Soy'],
        prepTime: '20 minutes',
        tags: ['Plant-Based', 'Healthy', 'Popular']
    },
    'margherita-pizza': {
        name: 'Margherita Pizza',
        emoji: '🍕',
        price: 18.99,
        category: 'Main Course',
        type: 'Vegetarian',
        description: 'Classic pizza with fresh mozzarella, tomato sauce, and basil on thin crust.',
        ingredients: ['Pizza Dough', 'Tomato Sauce', 'Fresh Mozzarella', 'Basil', 'Olive Oil'],
        nutritionInfo: {
            calories: 580,
            protein: '24g',
            carbs: '72g',
            fat: '22g'
        },
        allergens: ['Dairy', 'Gluten'],
        prepTime: '25 minutes',
        tags: ['Classic', 'Italian', 'Vegetarian']
    },
    'chocolate-cake': {
        name: 'Chocolate Cake',
        emoji: '🍰',
        price: 8.99,
        category: 'Dessert',
        type: 'Vegetarian',
        description: 'Decadent chocolate layer cake with rich chocolate frosting, served with vanilla ice cream.',
        ingredients: ['Chocolate', 'Flour', 'Sugar', 'Eggs', 'Butter', 'Cocoa Powder', 'Vanilla Ice Cream'],
        nutritionInfo: {
            calories: 420,
            protein: '6g',
            carbs: '58g',
            fat: '18g'
        },
        allergens: ['Dairy', 'Gluten', 'Eggs'],
        prepTime: '5 minutes',
        tags: ['Sweet', 'Indulgent', 'Classic']
    },
    'fruit-tart': {
        name: 'Fresh Fruit Tart',
        emoji: '🥧',
        price: 7.99,
        category: 'Dessert',
        type: 'Vegetarian',
        description: 'Seasonal fresh fruits arranged on vanilla custard base with a crispy pastry shell.',
        ingredients: ['Pastry Shell', 'Vanilla Custard', 'Strawberries', 'Kiwi', 'Blueberries', 'Apricot Glaze'],
        nutritionInfo: {
            calories: 320,
            protein: '6g',
            carbs: '48g',
            fat: '12g'
        },
        allergens: ['Dairy', 'Gluten', 'Eggs'],
        prepTime: '5 minutes',
        tags: ['Fresh', 'Seasonal', 'Light']
    },
    'fresh-lemonade': {
        name: 'Fresh Lemonade',
        emoji: '🍋',
        price: 4.99,
        category: 'Beverage',
        type: 'Vegetarian',
        description: 'Freshly squeezed lemon juice with a hint of mint, served over ice.',
        ingredients: ['Fresh Lemons', 'Sugar', 'Water', 'Fresh Mint', 'Ice'],
        nutritionInfo: {
            calories: 120,
            protein: '0g',
            carbs: '32g',
            fat: '0g'
        },
        allergens: [],
        prepTime: '5 minutes',
        tags: ['Refreshing', 'Natural', 'Vitamin C']
    },
    'green-smoothie': {
        name: 'Green Smoothie',
        emoji: '🥤',
        price: 6.99,
        category: 'Beverage',
        type: 'Vegetarian',
        description: 'Healthy blend of spinach, apple, banana, and coconut water for a nutritious boost.',
        ingredients: ['Spinach', 'Apple', 'Banana', 'Coconut Water', 'Honey', 'Ice'],
        nutritionInfo: {
            calories: 150,
            protein: '4g',
            carbs: '36g',
            fat: '1g'
        },
        allergens: [],
        prepTime: '5 minutes',
        tags: ['Healthy', 'Nutritious', 'Vegan']
    },
    'shrimp-cocktail': {
        name: 'Shrimp Cocktail',
        emoji: '🍤',
        price: 18.99,
        category: 'Appetizer',
        type: 'Non-Vegetarian',
        description: 'Fresh jumbo shrimp served chilled with tangy cocktail sauce and lemon wedges.',
        ingredients: ['Jumbo Shrimp', 'Cocktail Sauce', 'Lemon', 'Lettuce', 'Celery'],
        nutritionInfo: {
            calories: 180,
            protein: '32g',
            carbs: '8g',
            fat: '2g'
        },
        allergens: ['Shellfish'],
        prepTime: '10 minutes',
        tags: ['Fresh', 'Low-Fat', 'Protein-Rich']
    },
    'chicken-satay': {
        name: 'Chicken Satay',
        emoji: '🍢',
        price: 13.99,
        category: 'Appetizer',
        type: 'Non-Vegetarian',
        description: 'Grilled chicken skewers marinated in aromatic spices, served with peanut sauce.',
        ingredients: ['Chicken Breast', 'Peanut Sauce', 'Coconut Milk', 'Lemongrass', 'Turmeric', 'Garlic'],
        nutritionInfo: {
            calories: 380,
            protein: '28g',
            carbs: '12g',
            fat: '24g'
        },
        allergens: ['Peanuts', 'Dairy'],
        prepTime: '25 minutes',
        tags: ['Grilled', 'Asian', 'Spicy']
    },
    'bbq-ribs': {
        name: 'BBQ Ribs',
        emoji: '🍖',
        price: 26.99,
        category: 'Main Course',
        type: 'Non-Vegetarian',
        description: 'Slow-cooked pork ribs with our signature BBQ sauce, served with coleslaw and cornbread.',
        ingredients: ['Pork Ribs', 'BBQ Sauce', 'Coleslaw', 'Cornbread', 'Brown Sugar', 'Spices'],
        nutritionInfo: {
            calories: 720,
            protein: '45g',
            carbs: '28g',
            fat: '48g'
        },
        allergens: ['Gluten', 'Dairy'],
        prepTime: '45 minutes',
        tags: ['BBQ', 'Hearty', 'Comfort Food']
    },
    'fish-tacos': {
        name: 'Fish Tacos',
        emoji: '🌮',
        price: 16.99,
        category: 'Main Course',
        type: 'Non-Vegetarian',
        description: 'Grilled fish with cabbage slaw, lime crema, and fresh cilantro in soft tortillas.',
        ingredients: ['White Fish', 'Corn Tortillas', 'Cabbage', 'Lime Crema', 'Cilantro', 'Avocado'],
        nutritionInfo: {
            calories: 420,
            protein: '28g',
            carbs: '38g',
            fat: '18g'
        },
        allergens: ['Fish', 'Dairy'],
        prepTime: '20 minutes',
        tags: ['Fresh', 'Mexican', 'Light']
    },
    'iced-coffee': {
        name: 'Iced Coffee',
        emoji: '☕',
        price: 5.99,
        category: 'Beverage',
        type: 'Vegetarian',
        description: 'Cold brew coffee with vanilla syrup and a splash of cream, served over ice.',
        ingredients: ['Cold Brew Coffee', 'Vanilla Syrup', 'Cream', 'Ice'],
        nutritionInfo: {
            calories: 80,
            protein: '2g',
            carbs: '12g',
            fat: '3g'
        },
        allergens: ['Dairy'],
        prepTime: '3 minutes',
        tags: ['Energizing', 'Cold', 'Caffeinated']
    },
    'craft-beer': {
        name: 'Craft Beer',
        emoji: '🍺',
        price: 7.99,
        category: 'Beverage',
        type: 'Non-Vegetarian',
        description: 'Selection of local craft beers including IPA, Lager, and Wheat beer.',
        ingredients: ['Hops', 'Malt', 'Yeast', 'Water'],
        nutritionInfo: {
            calories: 180,
            protein: '2g',
            carbs: '14g',
            fat: '0g'
        },
        allergens: ['Gluten'],
        prepTime: '2 minutes',
        tags: ['Local', 'Craft', 'Alcoholic']
    }
};

// Navigation functions for welcome page
function goToMenu(preference) {
    if (preference === 'veg') {
        window.location.href = 'veg-menu.html';
    } else if (preference === 'non-veg') {
        window.location.href = 'non-veg-menu.html';
    } else {
        window.location.href = 'complete-menu.html';
    }
}

// Navigation functions for menu pages
function goHome() {
    window.location.href = 'index.html';
}

function openFoodDetail(foodId) {
    window.location.href = `food-detail.html?item=${foodId}`;
}

// Functions for food detail page
let quantity = 1;
let basePrice = 0;

function getUrlParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

function loadFoodDetails() {
    const foodId = getUrlParameter('item');
    const food = foodData[foodId];
    
    if (!food) {
        document.getElementById('foodDetails').innerHTML = `
            <div class="p-8 text-center">
                <h2 class="text-2xl font-bold text-gray-800 mb-4">Food Item Not Found</h2>
                <p class="text-gray-600 mb-6">The requested food item could not be found.</p>
                <button onclick="goBack()" class="bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700">
                    Back to Menu
                </button>
            </div>
        `;
        return;
    }

    basePrice = food.price;
    
    const typeColor = food.type === 'Vegetarian' ? 'green' : 'red';
    const gradientColor = food.type === 'Vegetarian' ? 'from-green-400 to-green-600' : 'from-red-400 to-red-600';
    
    document.getElementById('foodDetails').innerHTML = `
        <!-- Food Image Section -->
        <div class="h-80 bg-gradient-to-br ${gradientColor} flex items-center justify-center">
            <span class="text-9xl">${food.emoji}</span>
        </div>

        <div class="p-8">
            <!-- Food Header -->
            <div class="flex justify-between items-start mb-6">
                <div>
                    <h1 class="text-4xl font-bold text-gray-800 mb-2">${food.name}</h1>
                    <p class="text-gray-600 text-lg">${food.category}</p>
                    <div class="flex flex-wrap gap-2 mt-3">
                        <span class="bg-${typeColor}-100 text-${typeColor}-600 px-3 py-1 rounded-full text-sm">${food.type}</span>
                        ${food.tags.map(tag => `<span class="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm">${tag}</span>`).join('')}
                    </div>
                </div>
                <div class="text-right">
                    <span class="text-4xl font-bold text-orange-600">$${food.price}</span>
                    <p class="text-gray-500 mt-1">⏱️ ${food.prepTime}</p>
                </div>
            </div>

            <!-- Description -->
            <div class="mb-8">
                <h3 class="text-2xl font-bold text-gray-800 mb-3">Description</h3>
                <p class="text-gray-700 text-lg leading-relaxed">${food.description}</p>
            </div>

            <!-- Two Column Layout -->
            <div class="grid md:grid-cols-2 gap-8 mb-8">
                <!-- Ingredients -->
                <div>
                    <h3 class="text-2xl font-bold text-gray-800 mb-4">🥘 Ingredients</h3>
                    <div class="bg-gray-50 rounded-lg p-4">
                        <ul class="space-y-2">
                            ${food.ingredients.map(ingredient => `<li class="flex items-center text-gray-700"><span class="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>${ingredient}</li>`).join('')}
                        </ul>
                    </div>
                </div>

                <!-- Nutrition Info -->
                <div>
                    <h3 class="text-2xl font-bold text-gray-800 mb-4">📊 Nutrition Facts</h3>
                    <div class="bg-gray-50 rounded-lg p-4">
                        <div class="grid grid-cols-2 gap-4">
                            <div class="text-center">
                                <div class="text-2xl font-bold text-orange-600">${food.nutritionInfo.calories}</div>
                                <div class="text-gray-600">Calories</div>
                            </div>
                            <div class="text-center">
                                <div class="text-2xl font-bold text-blue-600">${food.nutritionInfo.protein}</div>
                                <div class="text-gray-600">Protein</div>
                            </div>
                            <div class="text-center">
                                <div class="text-2xl font-bold text-green-600">${food.nutritionInfo.carbs}</div>
                                <div class="text-gray-600">Carbs</div>
                            </div>
                            <div class="text-center">
                                <div class="text-2xl font-bold text-purple-600">${food.nutritionInfo.fat}</div>
                                <div class="text-gray-600">Fat</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Allergens -->
            ${food.allergens.length > 0 ? `
            <div class="mb-8">
                <h3 class="text-2xl font-bold text-gray-800 mb-4">⚠️ Allergen Information</h3>
                <div class="bg-red-50 border border-red-200 rounded-lg p-4">
                    <p class="text-red-700 mb-2">This dish contains:</p>
                    <div class="flex flex-wrap gap-2">
                        ${food.allergens.map(allergen => `<span class="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm">${allergen}</span>`).join('')}
                    </div>
                </div>
            </div>
            ` : ''}

            <!-- Order Section -->
            <div class="bg-gradient-to-r from-orange-500 to-red-600 rounded-xl p-6 text-white">
                <h3 class="text-2xl font-bold mb-4">🛒 Place Your Order</h3>
                <div class="flex items-center justify-between">
                    <div class="flex items-center space-x-4">
                        <span class="text-lg">Quantity:</span>
                        <div class="flex items-center space-x-3">
                            <button onclick="decreaseQuantity()" class="quantity-btn bg-white text-orange-600 w-10 h-10 rounded-full font-bold hover:bg-gray-100">-</button>
                            <span id="quantity" class="text-2xl font-bold min-w-[2rem] text-center">1</span>
                            <button onclick="increaseQuantity()" class="quantity-btn bg-white text-orange-600 w-10 h-10 rounded-full font-bold hover:bg-gray-100">+</button>
                        </div>
                    </div>
                    <div class="text-right">
                        <div class="text-sm opacity-90">Total:</div>
                        <div id="totalPrice" class="text-3xl font-bold">$${food.price}</div>
                    </div>
                </div>
                <div class="mt-6 flex space-x-4">
                    <button onclick="addToCart()" class="order-btn flex-1 bg-white text-orange-600 py-3 px-6 rounded-lg font-bold hover:bg-gray-100">
                        🛒 Add to Cart
                    </button>
                    <button onclick="orderNow()" class="order-btn flex-1 bg-yellow-400 text-gray-800 py-3 px-6 rounded-lg font-bold hover:bg-yellow-300">
                        ⚡ Order Now
                    </button>
                </div>
            </div>
        </div>
    `;
    
    // Update page title
    document.title = `${food.name} - Delicious Bites`;
}

function increaseQuantity() {
    quantity++;
    updateDisplay();
}

function decreaseQuantity() {
    if (quantity > 1) {
        quantity--;
        updateDisplay();
    }
}

function updateDisplay() {
    document.getElementById('quantity').textContent = quantity;
    document.getElementById('totalPrice').textContent = '$' + (basePrice * quantity).toFixed(2);
}

function addToCart() {
    const foodId = getUrlParameter('item');
    const food = foodData[foodId];
    alert('🛒 Added ' + quantity + ' x ' + food.name + ' to your cart!\n\nTotal: $' + (basePrice * quantity).toFixed(2) + '\n\nThis is a demo - in a real restaurant app, this would add items to your cart.');
}

function orderNow() {
    const foodId = getUrlParameter('item');
    const food = foodData[foodId];
    alert('⚡ Order placed successfully!\n\n' + quantity + ' x ' + food.name + '\nTotal: $' + (basePrice * quantity).toFixed(2) + '\n\nEstimated delivery: 30-45 minutes\n\nThis is a demo - in a real restaurant app, this would process your order.');
}

function goBack() {
    window.history.back();
}

// Smooth scrolling for navigation
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for menu navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Load food details if on food detail page
    if (window.location.pathname.includes('food-detail.html')) {
        loadFoodDetails();
    }

    // Animate welcome card if on welcome page
    const welcomeCard = document.querySelector('.welcome-card');
    if (welcomeCard) {
        welcomeCard.style.opacity = '0';
        welcomeCard.style.transform = 'translateY(50px)';
        
        setTimeout(() => {
            welcomeCard.style.transition = 'all 1s ease';
            welcomeCard.style.opacity = '1';
            welcomeCard.style.transform = 'translateY(0)';
        }, 200);
    }
});

