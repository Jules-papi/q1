// Scrollytelling functionality
document.addEventListener('DOMContentLoaded', function() {
    // Scrollytelling section
    const scrollyContainer = document.querySelector('.scrolly-container');
    const contentSteps = document.querySelectorAll('.content-step');
    const storyVisuals = document.querySelectorAll('.story-visual');
    
    // Price data for pizza sizes
    const sizePrices = {
        'small': 12.99,
        'medium': 16.99,
        'large': 20.99,
        'xl': 24.99
    };
    
    // Update scrollytelling on scroll
    function updateScrollytelling() {
        if (!scrollyContainer) return;
        
        const containerRect = scrollyContainer.getBoundingClientRect();
        const containerTop = containerRect.top;
        const containerHeight = scrollyContainer.offsetHeight;
        const windowHeight = window.innerHeight;
        
        // Calculate which step we're on (0-3 for 4 steps)
        const scrollProgress = -containerTop / (containerHeight - windowHeight);
        const currentStep = Math.min(Math.floor(scrollProgress * 4), 3);
        
        // Update content steps
        contentSteps.forEach((step, index) => {
            if (index === currentStep) {
                step.classList.add('active');
            } else {
                step.classList.remove('active');
            }
        });
        
        // Update visuals
        storyVisuals.forEach((visual, index) => {
            if (index === currentStep) {
                visual.classList.add('active');
            } else {
                visual.classList.remove('active');
            }
        });
    }
    
    // Listen to scroll events
    window.addEventListener('scroll', updateScrollytelling);
    updateScrollytelling(); // Initial call
    
    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Order form functionality
    const pizzaForm = document.getElementById('pizzaForm');
    const sizeSelect = document.getElementById('size');
    const quantityInput = document.getElementById('quantity');
    const totalPriceSpan = document.getElementById('total-price');
    const toppingCheckboxes = document.querySelectorAll('input[name="toppings"]');
    const maxToppings = 5;
    
    // Update total price
    function updateTotalPrice() {
        const size = sizeSelect.value;
        const quantity = parseInt(quantityInput.value) || 0;
        const basePrice = sizePrices[size] || 0;
        const toppingsCount = Array.from(toppingCheckboxes).filter(cb => cb.checked).length;
        const toppingPrice = Math.max(0, toppingsCount - 3) * 1.5; // First 3 toppings free, then $1.50 each
        
        const total = (basePrice + toppingPrice) * quantity;
        totalPriceSpan.textContent = `$${total.toFixed(2)}`;
    }
    
    // Topping selection limit
    toppingCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            const checkedCount = Array.from(toppingCheckboxes).filter(cb => cb.checked).length;
            
            if (checkedCount > maxToppings) {
                checkbox.checked = false;
                alert(`You can select up to ${maxToppings} toppings only.`);
                return;
            }
            
            updateTotalPrice();
        });
    });
    
    // Size and quantity change
    sizeSelect.addEventListener('change', updateTotalPrice);
    quantityInput.addEventListener('input', updateTotalPrice);
    
    // Form submission
    pizzaForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(pizzaForm);
        const size = formData.get('size');
        const crust = formData.get('crust');
        const toppings = formData.getAll('toppings');
        const quantity = formData.get('quantity');
        const specialInstructions = formData.get('special-instructions');
        
        // Validate toppings count
        if (toppings.length > maxToppings) {
            alert(`Please select no more than ${maxToppings} toppings.`);
            return;
        }
        
        // Create order summary
        const orderSummary = `
🍕 Your Pizza Order:
━━━━━━━━━━━━━━━━━━━━
Size: ${size.charAt(0).toUpperCase() + size.slice(1)}
Crust: ${crust.charAt(0).toUpperCase() + crust.slice(1)}
Toppings: ${toppings.length > 0 ? toppings.join(', ') : 'None'}
Quantity: ${quantity}
Special Instructions: ${specialInstructions || 'None'}
━━━━━━━━━━━━━━━━━━━━
Total: ${totalPriceSpan.textContent}

Thank you for your order! Your pizza will be ready in 30 minutes. 🚗
        `;
        
        // Show confirmation
        alert(orderSummary);
        
        // Reset form
        pizzaForm.reset();
        updateTotalPrice();
    });
    
    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 70; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Intersection Observer for animating elements into view
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe menu items and process steps
    document.querySelectorAll('.menu-item, .process-step').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // Initialize price display
    updateTotalPrice();
});
