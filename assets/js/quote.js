// assets/js/quote.js

function viewProduct(button) {
    const card = button.closest('.product-card');
    const categoryHeader = document.querySelector('h1');
    const categoryName = categoryHeader ? categoryHeader.innerText : "Enterprise Hardware";

    const product = {
        id: card.querySelector('h3').innerText.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase(),
        title: card.querySelector('h3').innerText,
        brand: card.getAttribute('data-brand'),
        category: categoryName,
        description: card.querySelector('p').innerText,
        image: card.querySelector('img').src
    };

    // Save to browser memory
    localStorage.setItem('activeProduct', JSON.stringify(product));
    
    // Redirect to the universal product page
    window.location.href = './product.html';
}

function loadProductDetails() {
    const data = localStorage.getItem('activeProduct');
    if (!data) {
        window.location.href = './index.html'; 
        return;
    }

    const product = JSON.parse(data);

    // Inject Text and Images
    document.getElementById('breadcrumb-category').innerText = product.category;
    document.getElementById('breadcrumb-brand').innerText = product.brand;
    document.getElementById('product-title').innerText = product.title;
    document.getElementById('product-subtitle').innerText = product.description;
    document.getElementById('product-tags').innerText = `${product.brand}, ${product.category}`;
    document.getElementById('product-description').innerText = product.description;
    document.getElementById('product-image').src = product.image;

    // Generate Specs
    const specsContainer = document.getElementById('product-specs');
    let specsHTML = '';

    if (product.category.includes('Firewall')) {
        specsHTML = generateSpecs(['Threat Protection: Industry Leading', 'Form Factor: Enterprise Appliance', 'VPN Support: IPsec & SSL', 'Management: Cloud & On-Premise']);
    } else if (product.category.includes('Switch')) {
        specsHTML = generateSpecs(['Ports: High-Density GbE', 'PoE Support: PoE/PoE+', 'Uplinks: 10G/25G/40G', 'Layer: L2/L3 Advanced']);
    } else if (product.category.includes('Router')) {
        specsHTML = generateSpecs(['Throughput: High-Speed Routing', 'WAN Ports: Multiple GE/SFP', 'Features: SD-WAN & Security', 'Form Factor: Rackmount']);
    } else if (product.category.includes('Access Point')) {
        specsHTML = generateSpecs(['Wi-Fi Standard: Wi-Fi 6 / Wi-Fi 7', 'Antenna: Advanced MU-MIMO', 'Throughput: Multi-Gigabit', 'Deployment: Indoor/Outdoor']);
    } else if (product.category.includes('Phone')) {
        specsHTML = generateSpecs(['Lines: Multi-line Support', 'Display: High-Res Color LCD', 'Audio: HD Voice & Noise Cancellation', 'Connectivity: Gigabit Ethernet']);
    } else if (product.category.includes('Server')) {
        specsHTML = generateSpecs(['Processor: High-Core CPU', 'Memory: Scalable DDR4/DDR5 ECC', 'Storage: High-Speed NVMe/SAS', 'Form Factor: 1U/2U Rack']);
    } else if (product.category.includes('Transceiver')) {
        specsHTML = generateSpecs(['Data Rate: 1G to 100G+', 'Form Factor: SFP/SFP+/QSFP', 'Wavelength: Optimized for SMF/MMF', 'Compatibility: MSA Compliant']);
    } else {
        specsHTML = generateSpecs(['Condition: Brand New / Certified', 'Warranty: 1 Year Limited', 'Support: Enterprise Tech Support', 'Shipping: Global Secure Delivery']);
    }

    if(specsContainer) specsContainer.innerHTML = specsHTML;

    // Bind Add to Quote Button
    const quoteBtn = document.getElementById('add-to-quote-btn');
    if(quoteBtn) {
        quoteBtn.onclick = function() { addToCart(product); };
    }
}

function generateSpecs(specsArray) {
    return specsArray.map(spec => {
        const parts = spec.split(':');
        return `<div class="flex items-center text-slate-400 text-sm">
                    <span class="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></span>
                    <span class="font-semibold text-slate-200 mr-2">${parts[0]}:</span> ${parts[1] || ''}
                </div>`;
    }).join('');
}

function addToCart(product) {
    let cart = JSON.parse(localStorage.getItem('quoteCart')) || [];
    const exists = cart.find(p => p.id === product.id);
    
    if (!exists) {
        cart.push(product);
        localStorage.setItem('quoteCart', JSON.stringify(cart));
        
        const btn = document.getElementById('add-to-quote-btn');
        if(btn) {
            btn.innerHTML = `<span>✓ Added to Quote List</span>`;
            btn.classList.replace('bg-blue-600', 'bg-emerald-600');
            btn.classList.replace('hover:bg-blue-500', 'hover:bg-emerald-500');
        }
        updateCartBadge();
    } else {
        alert("This item is already in your Quote List.");
    }
}

function updateCartBadge() {
    let cart = JSON.parse(localStorage.getItem('quoteCart')) || [];
    const badges = document.querySelectorAll('.cart-badge');
    badges.forEach(badge => {
        badge.innerText = cart.length;
        badge.style.display = cart.length > 0 ? 'flex' : 'none';
    });
}

// Run badge update on every page load
document.addEventListener('DOMContentLoaded', updateCartBadge);