/**
 * ============================================================================
 * CLOUD9CREATIONZ — Premium Handmade Craft & Personalized Gifting Website
 * 
 * OWNER CONFIGURATION AREA
 * Update your contact details, Google Form links, WhatsApp number, and products
 * directly in this section. No backend or coding knowledge required!
 * ============================================================================
 */

const CONFIG = {
  // Brand Identity
  brandName: "Cloud9Creationz",
  brandTagline: "Handcrafted With Love. Made Just for You.",
  brandLocation: "Punjab, India",

  // Business WhatsApp Number (International format without '+' or spaces, e.g., 919876543210)
  // REPLACE WITH YOUR ACTUAL BUSINESS WHATSAPP NUMBER
  whatsappNumber: "919876543210",

  // Business Contact Email
  // REPLACE WITH YOUR ACTUAL BUSINESS EMAIL
  businessEmail: "hello@cloud9creationz.com",

  // Instagram Profile URL
  // REPLACE WITH YOUR ACTUAL INSTAGRAM PROFILE
  instagramUrl: "https://instagram.com/cloud9creationz",

  // Free Shipping Threshold (in INR, optional)
  freeShippingAbove: 1999,
  flatShippingFee: 99,

  // Google Forms Order Configuration
  // 1. Create a Google Form with questions for customer details and order summary.
  // 2. Paste your form's 'viewform' or 'formResponse' URL below.
  // 3. Inspect your Google Form's pre-filled link to find the 'entry.XXXXXX' IDs.
  googleForm: {
    // When enabled, customer orders can be submitted directly or opened prefilled
    isConfigured: false, // Set to true once you have entered your Form URL and Entry IDs below
    formUrl: "https://docs.google.com/forms/d/e/REPLACE_WITH_YOUR_FORM_ID/formResponse",
    viewFormUrl: "https://docs.google.com/forms/d/e/REPLACE_WITH_YOUR_FORM_ID/viewform",
    
    // Replace these entry IDs with the ones from your actual Google Form
    entryIds: {
      customerName: "entry.1000001",
      customerPhone: "entry.1000002",
      customerEmail: "entry.1000003",
      deliveryAddress: "entry.1000004",
      city: "entry.1000005",
      state: "entry.1000006",
      pincode: "entry.1000007",
      orderSummary: "entry.1000008",
      orderTotal: "entry.1000009",
      preferredDate: "entry.1000010",
      orderNotes: "entry.1000011"
    }
  },

  // Payment UPI Configuration (Optional, verified by owner)
  upiPayment: {
    enabled: true,
    upiId: "cloud9creationz@upi", // Replace with your verified business UPI ID
    payeeName: "Cloud9Creationz Crafts",
    note: "All orders & custom designs are reviewed and confirmed by Cloud9Creationz before payment processing."
  }
};

/**
 * ============================================================================
 * PRODUCT CATALOG DATA
 * Edit, add, or replace products with your genuine inventory, descriptions, and prices.
 * ============================================================================
 */
const PRODUCTS = [
  {
    id: "kp-hamper-01",
    name: "Royal Celebration Gift Hamper",
    category: "hampers",
    categoryLabel: "Gift Hamper",
    price: 2499,
    image: "/assets/images/hamper.jpg",
    description: "An opulent bespoke gift hamper in a textured blush keepsake box with satin ribbon. Includes an artisanal soy scented candle, hand-engraved wooden calligraphy plaque, organic herbal tea jar, dried wild botanicals, and personalized greeting scroll.",
    customizable: true,
    hasSizes: false,
    colors: ["Blush Pink & Gold", "Warm Ivory & Burgundy", "Dusty Rose & Sage"],
    productionDays: "2–3 working days",
    features: ["Reusable luxury keepsake box", "Artisan scented soy candle", "Custom engraved wooden plaque", "Complimentary wax-sealed card"],
    badge: "Bestseller"
  },
  {
    id: "kp-embroidery-01",
    name: "Phulkari Blossom Floral Hoop",
    category: "embroidery",
    categoryLabel: "Hand Embroidery",
    price: 1599,
    image: "/assets/images/embroidery.jpg",
    description: "Exquisite hand-embroidered wooden hoop inspired by authentic Punjabi Phulkari craftsmanship. Rendered with fine silk threads in dusty rose, burgundy, and champagne accents on unbleached natural linen.",
    customizable: true,
    hasSizes: false,
    colors: ["Classic Phulkari Rose", "Vintage Burgundy", "Earthy Terracotta"],
    productionDays: "4–5 working days",
    features: ["8-inch beechwood embroidery hoop", "100% natural raw linen", "High-grade silk embroidery threads", "Brass hanging hardware included"],
    badge: "Heritage Craft"
  },
  {
    id: "kp-tshirt-01",
    name: "Bespoke Botanical Embroidered T-Shirt",
    category: "tshirts",
    categoryLabel: "Custom T-Shirts",
    price: 1099,
    image: "/assets/images/tshirt.jpg",
    description: "Ultra-soft 240 GSM combed organic cotton t-shirt featuring a delicate hand-embroidered chest floral spray and bespoke cursive monogram initials. Tailored for effortless luxury comfort.",
    customizable: true,
    hasSizes: true,
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["Dusty Rose", "Warm Ivory", "Sage Green", "Charcoal Slate"],
    productionDays: "3–4 working days",
    features: ["240 GSM heavy organic cotton", "Hand-stitched chest monogram", "Pre-shrunk fabric", "Comfort unisex relaxed fit"],
    badge: "Popular"
  },
  {
    id: "kp-giftbox-01",
    name: "Personalized Wooden Keepsake Box",
    category: "gifts",
    categoryLabel: "Personalized Gift",
    price: 1450,
    image: "/assets/images/giftbox.jpg",
    description: "Handcrafted pine wood memory box with custom laser-engraved cursive names and commemorative date on the sliding lid. Finished with champagne satin ribbon and custom wax seal stamp.",
    customizable: true,
    hasSizes: false,
    colors: ["Natural Pine & Gold", "Walnut Finish & Burgundy"],
    productionDays: "2–3 working days",
    features: ["Solid seasoned natural wood", "Custom laser engraved lid", "Velvet-lined interior", "Wax-seal stamp certificate"],
    badge: "Personalized"
  },
  {
    id: "kp-accessories-01",
    name: "Phulkari Linen Tote & Bookmark Set",
    category: "accessories",
    categoryLabel: "Handmade Accessories",
    price: 950,
    image: "/assets/images/accessories.jpg",
    description: "Thoughtful handmade everyday ensemble consisting of a hand-embroidered raw linen tote bag with vibrant Punjabi Phulkari medallion, two matching fabric bookmarks with silk tassels, and a soft linen hair scrunchie.",
    customizable: true,
    hasSizes: false,
    colors: ["Ivory & Multicolored Silk", "Blush & Rose Threads"],
    productionDays: "2–3 working days",
    features: ["Sturdy unbleached linen canvas", "Intricate geometric Phulkari medallion", "Silk thread handcrafted tassels", "Eco-friendly washable fabric"],
    badge: "Eco Craft"
  },
  {
    id: "kp-embroidery-02",
    name: "Custom Name & Date Wedding Hoop",
    category: "embroidery",
    categoryLabel: "Hand Embroidery",
    price: 1850,
    image: "/assets/images/embroidery.jpg",
    description: "Commemorate weddings, anniversaries, or baby milestones with a custom hand-embroidered hoop featuring the couple's names, auspicious date, and botanical wreath in gold and rose silk thread.",
    customizable: true,
    hasSizes: false,
    colors: ["Bridal Gold & Rose", "Burgundy & Ivory", "Pastel Meadow"],
    productionDays: "5–7 working days",
    features: ["10-inch premium embroidery hoop", "Fine cursive metallic gold lettering", "Custom date and names", "Ready for wall display"],
    badge: "Occasion Special"
  },
  {
    id: "kp-tshirt-02",
    name: "Personalized Couple Embroidered T-Shirts (Set of 2)",
    category: "tshirts",
    categoryLabel: "Custom T-Shirts",
    price: 1999,
    image: "/assets/images/tshirt.jpg",
    description: "Matching pair of organic cotton t-shirts with personalized subtle date or initials embroidered near the cuff or chest. An intimate, understated anniversary or honeymoon gift.",
    customizable: true,
    hasSizes: true,
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Ivory & Rose Duo", "Black & Ivory Duo"],
    productionDays: "3–4 working days",
    features: ["Two premium cotton t-shirts", "Custom embroidered initials/dates", "Eco-friendly dye", "Matching gift packaging"],
    badge: "Couple Set"
  },
  {
    id: "kp-hamper-02",
    name: "Luxury Wedding Keepsake Hamper",
    category: "occasions",
    categoryLabel: "Special Occasion",
    price: 3299,
    image: "/assets/images/hamper.jpg",
    description: "An extraordinary celebratory hamper crafted for brides, grooms, or housewarmings. Includes a personalized photo/name hoop, hand-poured brass candle, gold-plated brass tea strainer, artisanal saffron honey, and gourmet dry fruits in glass jars.",
    customizable: true,
    hasSizes: false,
    colors: ["Imperial Burgundy & Gold", "Blush Pink & Champagne"],
    productionDays: "4–5 working days",
    features: ["Handcrafted wooden treasure chest", "Custom wedding embroidery hoop", "Artisan brass candle", "Saffron honey & dry fruits"],
    badge: "Luxury Edition"
  }
];

/**
 * ============================================================================
 * STATE MANAGEMENT
 * ============================================================================
 */
let cart = [];
let currentFilter = "all";
let currentSearch = "";
let currentSort = "featured";
let activeProductModal = null;

// Initialize cart from localStorage
function initCart() {
  try {
    const saved = localStorage.getItem("kp_cart");
    if (saved) {
      cart = JSON.parse(saved);
    }
  } catch (e) {
    console.warn("Could not read cart from localStorage", e);
    cart = [];
  }
  updateCartUI();
}

function saveCart() {
  try {
    localStorage.setItem("kp_cart", JSON.stringify(cart));
  } catch (e) {
    console.warn("Could not save cart to localStorage", e);
  }
  updateCartUI();
}

/**
 * ============================================================================
 * FIRST VISIT ANIMATION CONTROLLER
 * ============================================================================
 */
function initIntroAnimation() {
  const intro = document.getElementById("intro-overlay");
  const skipBtn = document.getElementById("intro-skip-btn");
  if (!intro) return;

  // Check if user already saw the intro in this session or prefers reduced motion
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const alreadySeen = sessionStorage.getItem("kp_intro_seen");

  if (alreadySeen || prefersReducedMotion) {
    intro.classList.add("hidden");
    intro.style.display = "none";
    return;
  }

  function hideIntro() {
    intro.classList.add("hidden");
    sessionStorage.setItem("kp_intro_seen", "true");
    setTimeout(() => {
      intro.style.display = "none";
    }, 600);
  }

  if (skipBtn) {
    skipBtn.addEventListener("click", hideIntro);
  }

  // Automatically fade out after 2.4 seconds
  setTimeout(hideIntro, 2400);
}

/**
 * ============================================================================
 * CATALOG RENDERING & FILTERING
 * ============================================================================
 */
function getFilteredProducts() {
  return PRODUCTS.filter(product => {
    const matchCategory = (currentFilter === "all") || (product.category === currentFilter);
    const matchSearch = !currentSearch || (
      product.name.toLowerCase().includes(currentSearch.toLowerCase()) ||
      product.description.toLowerCase().includes(currentSearch.toLowerCase()) ||
      product.categoryLabel.toLowerCase().includes(currentSearch.toLowerCase())
    );
    return matchCategory && matchSearch;
  }).sort((a, b) => {
    if (currentSort === "price-low") return a.price - b.price;
    if (currentSort === "price-high") return b.price - a.price;
    if (currentSort === "name-asc") return a.name.localeCompare(b.name);
    return 0; // default featured
  });
}

function renderCatalog() {
  const container = document.getElementById("product-grid");
  const countDisplay = document.getElementById("catalog-count");
  if (!container) return;

  const items = getFilteredProducts();

  if (countDisplay) {
    countDisplay.textContent = `Showing ${items.length} ${items.length === 1 ? 'creation' : 'creations'}`;
  }

  if (items.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem; color: var(--color-muted);">
        <p style="font-size: 1.1rem; margin-bottom: 0.75rem;">No creations found matching your filter.</p>
        <button id="reset-filters-btn" class="btn-secondary" style="font-size: 0.8125rem;">Show All Creations</button>
      </div>
    `;
    const resetBtn = document.getElementById("reset-filters-btn");
    if (resetBtn) {
      resetBtn.addEventListener("click", () => {
        currentFilter = "all";
        currentSearch = "";
        const searchInput = document.getElementById("catalog-search");
        if (searchInput) searchInput.value = "";
        document.querySelectorAll(".filter-tab").forEach(tab => {
          tab.classList.toggle("active", tab.dataset.filter === "all");
        });
        renderCatalog();
      });
    }
    return;
  }

  container.innerHTML = items.map(product => `
    <div class="product-card" data-id="${product.id}">
      <div class="product-thumb" onclick="openProductModal('${product.id}')" title="View details of ${product.name}">
        <img src="${product.image}" alt="${product.name}" loading="lazy" onerror="this.onerror=null; this.src='/assets/images/embroidery.jpg';" />
        ${product.badge ? `<span class="product-tag">${product.badge}</span>` : ''}
      </div>
      <div class="product-body">
        <span class="product-category-label">${product.categoryLabel}</span>
        <h3 class="product-title" onclick="openProductModal('${product.id}')">${product.name}</h3>
        <p class="product-summary">${product.description}</p>
        <div class="product-details-strip">
          <span>Production: ${product.productionDays}</span>
        </div>
        <div class="product-price-row">
          <div>
            <span class="price-main tabular-nums">₹${product.price.toLocaleString('en-IN')}</span>
            <span class="price-sub"> (Inclusive of taxes)</span>
          </div>
        </div>
        <div class="product-action-grid">
          <button class="btn-add-cart" onclick="quickAddToCart('${product.id}')" aria-label="Add ${product.name} to bag">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/>
            </svg>
            Customize & Add
          </button>
          <button class="btn-quick-wa" onclick="orderItemDirectWhatsApp('${product.id}')" title="Quick Order on WhatsApp" aria-label="Quick Order on WhatsApp">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  `).join("");
}

/**
 * ============================================================================
 * PRODUCT DETAIL & CUSTOMIZATION MODAL
 * ============================================================================
 */
function openProductModal(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  activeProductModal = {
    product: product,
    selectedSize: product.hasSizes && product.sizes ? product.sizes[0] : null,
    selectedColor: product.colors ? product.colors[0] : null,
    personalizationText: "",
    quantity: 1
  };

  const modalBackdrop = document.getElementById("product-modal-backdrop");
  const modalContainer = document.getElementById("product-modal-container");
  if (!modalBackdrop || !modalContainer) return;

  modalContainer.innerHTML = `
    <button class="modal-close-btn" onclick="closeProductModal()" aria-label="Close dialog">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
    </button>
    <div class="product-modal-grid">
      <div class="product-modal-media">
        <img src="${product.image}" alt="${product.name}" onerror="this.onerror=null; this.src='/assets/images/embroidery.jpg';" />
      </div>
      <div class="product-modal-body">
        <div>
          <span class="pdp-category">${product.categoryLabel}</span>
          <h2 class="pdp-title">${product.name}</h2>
          <div class="pdp-price tabular-nums">₹${product.price.toLocaleString('en-IN')}</div>
        </div>
        <p class="pdp-desc">${product.description}</p>

        <!-- Product Features List -->
        ${product.features && product.features.length ? `
          <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.35rem; font-size: 0.8125rem; color: var(--color-muted);">
            ${product.features.map(f => `<li style="display: flex; align-items: center; gap: 0.4rem;">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C6A36B" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
              <span>${f}</span>
            </li>`).join('')}
          </ul>
        ` : ''}

        <!-- Customization Fields -->
        <div style="display: flex; flex-direction: column; gap: 1rem; padding: 1rem; background: var(--color-ivory); border-radius: var(--radius-md); border: 1px solid var(--color-border);">
          <strong style="font-size: 0.875rem; color: var(--color-burgundy);">Bespoke Customization Options:</strong>

          <!-- Color Selection -->
          ${product.colors && product.colors.length ? `
            <div class="variant-group">
              <label class="variant-label">Color Theme / Thread Palette:</label>
              <div class="option-chips" id="pdp-color-chips">
                ${product.colors.map((c, idx) => `
                  <button type="button" class="chip-btn ${idx === 0 ? 'selected' : ''}" onclick="selectModalColor('${c}', this)">
                    ${c}
                  </button>
                `).join('')}
              </div>
            </div>
          ` : ''}

          <!-- Size Selection (For T-Shirts) -->
          ${product.hasSizes && product.sizes && product.sizes.length ? `
            <div class="variant-group">
              <label class="variant-label">T-Shirt Size:</label>
              <div class="option-chips" id="pdp-size-chips">
                ${product.sizes.map((s, idx) => `
                  <button type="button" class="chip-btn ${idx === 0 ? 'selected' : ''}" onclick="selectModalSize('${s}', this)">
                    ${s}
                  </button>
                `).join('')}
              </div>
            </div>
          ` : ''}

          <!-- Personalization Text (Names / Initials / Message) -->
          <div class="variant-group">
            <label class="variant-label" for="pdp-personalization">
              Custom Name, Initials, or Date to Embroider / Engrave:
            </label>
            <input type="text" id="pdp-personalization" class="form-input" 
              placeholder="e.g., 'Kaur & Singh', 'EST. 2024', or 'Simran'"
              maxlength="100"
              oninput="activeProductModal.personalizationText = this.value" />
            <span style="font-size: 0.725rem; color: var(--color-muted);">Leave blank if standard design is preferred.</span>
          </div>

          <!-- Quantity Stepper -->
          <div style="display: flex; align-items: center; justify-content: space-between;">
            <label class="variant-label">Quantity:</label>
            <div class="qty-stepper">
              <button type="button" class="qty-btn" onclick="updateModalQty(-1)">−</button>
              <span id="pdp-qty-display" class="qty-display">1</span>
              <button type="button" class="qty-btn" onclick="updateModalQty(1)">+</button>
            </div>
          </div>
        </div>

        <!-- Action Buttons -->
        <div style="display: flex; flex-direction: column; gap: 0.75rem; margin-top: 0.5rem;">
          <button class="btn-primary" onclick="confirmAddToCart()" style="width: 100%; padding: 0.85rem 1.25rem;">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
            Add Customized Item to Bag
          </button>
          <button class="btn-primary btn-whatsapp" onclick="confirmWhatsAppFromModal()" style="width: 100%; padding: 0.85rem 1.25rem;">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            Order Directly via WhatsApp
          </button>
        </div>

        <div style="font-size: 0.75rem; color: var(--color-muted); text-align: center;">
          Handmade craft production: <strong>${product.productionDays}</strong>. Direct inquiry welcomed.
        </div>
      </div>
    </div>
  `;

  modalBackdrop.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeProductModal() {
  const modalBackdrop = document.getElementById("product-modal-backdrop");
  if (modalBackdrop) modalBackdrop.classList.remove("open");
  document.body.style.overflow = "";
  activeProductModal = null;
}

function selectModalColor(color, btn) {
  if (!activeProductModal) return;
  activeProductModal.selectedColor = color;
  const parent = btn.parentElement;
  if (parent) {
    parent.querySelectorAll(".chip-btn").forEach(b => b.classList.remove("selected"));
  }
  btn.classList.add("selected");
}

function selectModalSize(size, btn) {
  if (!activeProductModal) return;
  activeProductModal.selectedSize = size;
  const parent = btn.parentElement;
  if (parent) {
    parent.querySelectorAll(".chip-btn").forEach(b => b.classList.remove("selected"));
  }
  btn.classList.add("selected");
}

function updateModalQty(delta) {
  if (!activeProductModal) return;
  let newQty = activeProductModal.quantity + delta;
  if (newQty < 1) newQty = 1;
  if (newQty > 20) newQty = 20;
  activeProductModal.quantity = newQty;
  const display = document.getElementById("pdp-qty-display");
  if (display) display.textContent = newQty;
}

function confirmAddToCart() {
  if (!activeProductModal) return;
  addItemToCart(
    activeProductModal.product,
    activeProductModal.quantity,
    activeProductModal.selectedColor,
    activeProductModal.selectedSize,
    activeProductModal.personalizationText
  );
  closeProductModal();
  showToast(`Added ${activeProductModal.product.name} to your bag`);
  openCartDrawer();
}

function quickAddToCart(productId) {
  openProductModal(productId);
}

function confirmWhatsAppFromModal() {
  if (!activeProductModal) return;
  const p = activeProductModal.product;
  const lines = [
    `Hello Cloud9Creationz! I would like to place an order for:`,
    ``,
    `*Product:* ${p.name}`,
    `*Quantity:* ${activeProductModal.quantity}`,
    `*Price:* ₹${(p.price * activeProductModal.quantity).toLocaleString('en-IN')}`,
    activeProductModal.selectedColor ? `*Color / Theme:* ${activeProductModal.selectedColor}` : null,
    activeProductModal.selectedSize ? `*Size:* ${activeProductModal.selectedSize}` : null,
    activeProductModal.personalizationText ? `*Custom Name / Personalization:* ${activeProductModal.personalizationText}` : null,
    ``,
    `Please confirm availability, production timeline, and delivery charges. Thank you!`
  ].filter(Boolean).join("\n");

  const url = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(lines)}`;
  window.open(url, "_blank", "noopener,noreferrer");
}

function orderItemDirectWhatsApp(productId) {
  const p = PRODUCTS.find(item => item.id === productId);
  if (!p) return;
  const lines = [
    `Hello Cloud9Creationz! I am interested in ordering:`,
    ``,
    `*Product:* ${p.name} (₹${p.price.toLocaleString('en-IN')})`,
    `*Category:* ${p.categoryLabel}`,
    `*Estimated Production:* ${p.productionDays}`,
    ``,
    `Please let me know how I can customize this and confirm delivery details.`
  ].join("\n");

  const url = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(lines)}`;
  window.open(url, "_blank", "noopener,noreferrer");
}

/**
 * ============================================================================
 * SHOPPING CART LOGIC
 * ============================================================================
 */
function addItemToCart(product, quantity = 1, color = null, size = null, personalization = "") {
  // Check if same product with same customizations exists
  const existing = cart.find(item => 
    item.productId === product.id &&
    item.color === color &&
    item.size === size &&
    item.personalization === personalization
  );

  if (existing) {
    existing.quantity += quantity;
  } else {
    cart.push({
      productId: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      categoryLabel: product.categoryLabel,
      color: color,
      size: size,
      personalization: personalization,
      quantity: quantity
    });
  }

  saveCart();
}

function updateCartItemQty(index, delta) {
  if (!cart[index]) return;
  cart[index].quantity += delta;
  if (cart[index].quantity <= 0) {
    cart.splice(index, 1);
  }
  saveCart();
}

function removeCartItem(index) {
  if (!cart[index]) return;
  cart.splice(index, 1);
  saveCart();
  showToast("Item removed from bag");
}

function clearCart() {
  cart = [];
  saveCart();
  showToast("Shopping bag cleared");
}

function calculateSubtotal() {
  return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
}

function updateCartUI() {
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = calculateSubtotal();

  // Badges
  const badges = document.querySelectorAll(".cart-count-badge");
  badges.forEach(b => {
    b.textContent = count;
    b.style.display = count > 0 ? "inline-flex" : "none";
  });

  // Drawer items
  const container = document.getElementById("cart-drawer-items");
  const subtotalDisplay = document.getElementById("cart-drawer-subtotal");
  const checkoutBtn = document.getElementById("cart-checkout-btn");
  const clearBtn = document.getElementById("cart-clear-btn");

  if (subtotalDisplay) {
    subtotalDisplay.textContent = `₹${subtotal.toLocaleString('en-IN')}`;
  }

  if (checkoutBtn) {
    checkoutBtn.disabled = cart.length === 0;
    checkoutBtn.style.opacity = cart.length === 0 ? "0.5" : "1";
    checkoutBtn.style.pointerEvents = cart.length === 0 ? "none" : "auto";
  }

  if (clearBtn) {
    clearBtn.style.display = cart.length > 0 ? "inline-block" : "none";
  }

  if (!container) return;

  if (cart.length === 0) {
    container.innerHTML = `
      <div class="cart-empty-state">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/>
          <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/>
        </svg>
        <p>Your shopping bag is currently empty.</p>
        <button class="btn-outline" onclick="closeCartDrawer(); scrollToSection('catalog');">Explore Handmade Creations</button>
      </div>
    `;
    return;
  }

  container.innerHTML = cart.map((item, index) => `
    <div class="cart-item">
      <div class="cart-item-img">
        <img src="${item.image}" alt="${item.name}" onerror="this.onerror=null; this.src='/assets/images/embroidery.jpg';" />
      </div>
      <div class="cart-item-meta">
        <h4>${item.name}</h4>
        <div class="cart-item-custom">
          ${item.color ? `<div>Theme: ${item.color}</div>` : ''}
          ${item.size ? `<div>Size: ${item.size}</div>` : ''}
          ${item.personalization ? `<div>Custom: "${item.personalization}"</div>` : ''}
        </div>
        <div class="cart-item-price tabular-nums">
          ₹${(item.price * item.quantity).toLocaleString('en-IN')}
          <span style="font-size: 0.725rem; font-weight: normal; color: var(--color-muted);"> (₹${item.price.toLocaleString('en-IN')} each)</span>
        </div>
        <div style="margin-top: 0.5rem; display: flex; align-items: center; gap: 0.5rem;">
          <div class="qty-stepper" style="transform: scale(0.85); transform-origin: left center;">
            <button class="qty-btn" onclick="updateCartItemQty(${index}, -1)">−</button>
            <span class="qty-display">${item.quantity}</span>
            <button class="qty-btn" onclick="updateCartItemQty(${index}, 1)">+</button>
          </div>
          <button class="cart-item-remove" onclick="removeCartItem(${index})">Remove</button>
        </div>
      </div>
    </div>
  `).join("");
}

function openCartDrawer() {
  const drawer = document.getElementById("cart-drawer");
  if (drawer) drawer.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeCartDrawer() {
  const drawer = document.getElementById("cart-drawer");
  if (drawer) drawer.classList.remove("open");
  document.body.style.overflow = "";
}

/**
 * ============================================================================
 * CHECKOUT & ORDER SUBMISSION SYSTEM (Google Forms & WhatsApp)
 * ============================================================================
 */
function openOrderModal() {
  if (cart.length === 0) {
    showToast("Your shopping bag is empty");
    return;
  }
  closeCartDrawer();

  const modal = document.getElementById("order-modal-backdrop");
  const summaryBox = document.getElementById("order-summary-box");
  const totalDisplay = document.getElementById("order-final-total");
  const shippingDisplay = document.getElementById("order-shipping-charge");

  if (!modal) return;

  const subtotal = calculateSubtotal();
  const shippingFee = (subtotal >= CONFIG.freeShippingAbove) ? 0 : CONFIG.flatShippingFee;
  const finalTotal = subtotal + shippingFee;

  if (summaryBox) {
    summaryBox.innerHTML = cart.map(item => `
      <div style="display: flex; justify-content: space-between; font-size: 0.85rem; padding: 0.4rem 0; border-bottom: 1px dashed rgba(112, 44, 69, 0.1);">
        <div>
          <strong>${item.name} × ${item.quantity}</strong>
          <div style="font-size: 0.75rem; color: var(--color-muted);">
            ${[item.size ? `Size: ${item.size}` : null, item.color ? `Theme: ${item.color}` : null, item.personalization ? `Custom: "${item.personalization}"` : null].filter(Boolean).join(" · ")}
          </div>
        </div>
        <div class="tabular-nums font-semibold">₹${(item.price * item.quantity).toLocaleString('en-IN')}</div>
      </div>
    `).join("");
  }

  if (shippingDisplay) {
    shippingDisplay.textContent = shippingFee === 0 ? "FREE" : `₹${shippingFee}`;
  }

  if (totalDisplay) {
    totalDisplay.textContent = `₹${finalTotal.toLocaleString('en-IN')}`;
  }

  // Pre-fill delivery date min to tomorrow
  const dateInput = document.getElementById("order-preferred-date");
  if (dateInput) {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 2);
    dateInput.min = tomorrow.toISOString().split("T")[0];
  }

  modal.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeOrderModal() {
  const modal = document.getElementById("order-modal-backdrop");
  if (modal) modal.classList.remove("open");
  document.body.style.overflow = "";
}

function getOrderDetailsFromForm() {
  const name = document.getElementById("order-name")?.value.trim() || "";
  const phone = document.getElementById("order-phone")?.value.trim() || "";
  const email = document.getElementById("order-email")?.value.trim() || "";
  const street = document.getElementById("order-street")?.value.trim() || "";
  const locality = document.getElementById("order-locality")?.value.trim() || "";
  const city = document.getElementById("order-city")?.value.trim() || "";
  const state = document.getElementById("order-state")?.value.trim() || "";
  const pincode = document.getElementById("order-pincode")?.value.trim() || "";
  const date = document.getElementById("order-preferred-date")?.value || "";
  const notes = document.getElementById("order-notes")?.value.trim() || "";

  return { name, phone, email, street, locality, city, state, pincode, date, notes };
}

function validateOrderFields(details) {
  if (!details.name) {
    showToast("Please enter your Full Name");
    document.getElementById("order-name")?.focus();
    return false;
  }
  if (!details.phone || details.phone.length < 10) {
    showToast("Please enter a valid 10-digit Phone Number");
    document.getElementById("order-phone")?.focus();
    return false;
  }
  if (!details.street || !details.city || !details.pincode) {
    showToast("Please complete your delivery address details");
    return false;
  }
  return true;
}

function generateOrderSummaryText() {
  return cart.map((item, idx) => {
    const customizations = [
      item.size ? `Size: ${item.size}` : null,
      item.color ? `Color/Theme: ${item.color}` : null,
      item.personalization ? `Personalization: "${item.personalization}"` : null
    ].filter(Boolean).join(", ");
    return `${idx + 1}. ${item.name} (Qty: ${item.quantity}, Price: ₹${item.price * item.quantity}${customizations ? ` | ${customizations}` : ''})`;
  }).join("\n");
}

/**
 * WhatsApp Order Flow
 */
function submitOrderViaWhatsApp() {
  const details = getOrderDetailsFromForm();
  if (!validateOrderFields(details)) return;

  const subtotal = calculateSubtotal();
  const shippingFee = (subtotal >= CONFIG.freeShippingAbove) ? 0 : CONFIG.flatShippingFee;
  const finalTotal = subtotal + shippingFee;

  const address = `${details.street}, ${details.locality ? details.locality + ', ' : ''}${details.city}, ${details.state} - ${details.pincode}`;

  const message = [
    `🌸 *NEW HANDMADE CRAFT ORDER — CLOUD9CREATIONZ* 🌸`,
    ``,
    `*Customer Name:* ${details.name}`,
    `*Phone:* ${details.phone}`,
    details.email ? `*Email:* ${details.email}` : null,
    `*Delivery Address:* ${address}`,
    details.date ? `*Preferred Delivery Date:* ${details.date}` : null,
    ``,
    `*--- ORDER ITEMS ---*`,
    generateOrderSummaryText(),
    ``,
    `*Subtotal:* ₹${subtotal.toLocaleString('en-IN')}`,
    `*Shipping:* ${shippingFee === 0 ? 'FREE' : '₹' + shippingFee}`,
    `*Estimated Total:* ₹${finalTotal.toLocaleString('en-IN')}`,
    details.notes ? `*Special Notes / Instructions:* ${details.notes}` : null,
    ``,
    `Please confirm product availability, customized embroidery proof, and payment instructions. Thank you!`
  ].filter(Boolean).join("\n");

  const waUrl = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
  
  // Clear cart upon generating order
  showToast("Opening WhatsApp with your order draft...");
  window.open(waUrl, "_blank", "noopener,noreferrer");

  // Keep modal open or show success state
  showOrderSuccessState("WhatsApp", details.name);
}

/**
 * Google Forms Order Flow
 */
function submitOrderViaGoogleForm() {
  const details = getOrderDetailsFromForm();
  if (!validateOrderFields(details)) return;

  const subtotal = calculateSubtotal();
  const shippingFee = (subtotal >= CONFIG.freeShippingAbove) ? 0 : CONFIG.flatShippingFee;
  const finalTotal = subtotal + shippingFee;
  const address = `${details.street}, ${details.locality ? details.locality + ', ' : ''}${details.city}, ${details.state} - ${details.pincode}`;
  const summaryText = generateOrderSummaryText();

  // If owner hasn't replaced the placeholder Google Form URL yet, offer graceful fallback
  if (!CONFIG.googleForm.isConfigured || CONFIG.googleForm.formUrl.includes("REPLACE_WITH")) {
    // Show polite owner configuration guidance while offering immediate WhatsApp order
    showConfigNoticeModal();
    return;
  }

  // Construct Google Form Pre-filled View Link
  const params = new URLSearchParams();
  const e = CONFIG.googleForm.entryIds;
  params.append(e.customerName, details.name);
  params.append(e.customerPhone, details.phone);
  if (details.email) params.append(e.customerEmail, details.email);
  params.append(e.deliveryAddress, address);
  params.append(e.city, details.city);
  params.append(e.state, details.state);
  params.append(e.pincode, details.pincode);
  params.append(e.orderSummary, summaryText);
  params.append(e.orderTotal, `₹${finalTotal}`);
  if (details.date) params.append(e.preferredDate, details.date);
  if (details.notes) params.append(e.orderNotes, details.notes);

  const prefilledUrl = `${CONFIG.googleForm.viewFormUrl}?${params.toString()}`;
  window.open(prefilledUrl, "_blank", "noopener,noreferrer");

  showOrderSuccessState("Google Forms", details.name);
}

function showConfigNoticeModal() {
  alert(`Owner Notice: The Google Form URL is set to the default template in script.js. 

To connect your own Google Form:
1. Open script.js
2. Set CONFIG.googleForm.isConfigured = true
3. Replace the formUrl and field entry IDs with your Google Form questions.

In the meantime, your order can be placed instantly via WhatsApp!`);
  submitOrderViaWhatsApp();
}

function showOrderSuccessState(method, customerName) {
  const container = document.getElementById("order-form-container");
  if (!container) return;

  container.innerHTML = `
    <div style="text-align: center; padding: 2.5rem 1rem;">
      <div style="width: 60px; height: 60px; background: rgba(198, 163, 107, 0.15); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 1.25rem auto; color: var(--color-burgundy);">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
      </div>
      <h3 style="font-size: 1.6rem; color: var(--color-charcoal); margin-bottom: 0.5rem;">Order Transmitted via ${method}!</h3>
      <p style="color: var(--color-charcoal-light); font-size: 0.95rem; max-width: 480px; margin: 0 auto 1.5rem auto;">
        Thank you, <strong>${customerName}</strong>. Cloud9Creationz will personally review your customized creation, verify the production timeline, and confirm your payment instructions.
      </p>
      <div style="display: flex; gap: 0.75rem; justify-content: center; flex-wrap: wrap;">
        <button class="btn-primary" onclick="cart = []; saveCart(); closeOrderModal(); location.reload();">Done & Clear Bag</button>
      </div>
    </div>
  `;
}

/**
 * ============================================================================
 * CUSTOM CREATION INQUIRY FORM ("Have Something Special in Mind?")
 * ============================================================================
 */
function submitCustomInquiry(e) {
  e.preventDefault();
  const name = document.getElementById("custom-name")?.value.trim() || "";
  const phone = document.getElementById("custom-phone")?.value.trim() || "";
  const type = document.getElementById("custom-type")?.value || "General Custom Craft";
  const occasion = document.getElementById("custom-occasion")?.value || "Personal Gift";
  const budget = document.getElementById("custom-budget")?.value || "Flexible";
  const colors = document.getElementById("custom-colors")?.value.trim() || "";
  const description = document.getElementById("custom-desc")?.value.trim() || "";
  const date = document.getElementById("custom-date")?.value || "";

  if (!name || !phone || !description) {
    showToast("Please provide your name, phone, and design idea.");
    return;
  }

  const lines = [
    `🌸 *CUSTOM CREATION REQUEST — CLOUD9CREATIONZ* 🌸`,
    ``,
    `*Customer Name:* ${name}`,
    `*Phone:* ${phone}`,
    `*Creation Type:* ${type}`,
    `*Occasion:* ${occasion}`,
    `*Budget Range:* ${budget}`,
    colors ? `*Color Theme:* ${colors}` : null,
    date ? `*Needed by Date:* ${date}` : null,
    ``,
    `*Design Description & Idea:*`,
    description,
    ``,
    `Please review my idea and let me know if reference photos can be sent here. Thank you!`
  ].filter(Boolean).join("\n");

  const waUrl = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(lines)}`;
  window.open(waUrl, "_blank", "noopener,noreferrer");
  showToast("Opening WhatsApp with your bespoke request...");
  
  // Reset form
  const form = document.getElementById("custom-inquiry-form");
  if (form) form.reset();
}

/**
 * Direct Email Contact Helper
 */
function sendDirectEmailInquiry(subject = "Inquiry regarding Handmade Crafts") {
  const mailto = `mailto:${CONFIG.businessEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent("Hello Cloud9Creationz,\n\nI would like to inquire about your handmade creations...\n\nBest regards,\n[Your Name]\n[Your Phone]")}`;
  window.location.href = mailto;
}

/**
 * ============================================================================
 * FAQ ACCORDION HANDLERS
 * ============================================================================
 */
function initFaqAccordion() {
  const items = document.querySelectorAll(".faq-item");
  items.forEach(item => {
    const question = item.querySelector(".faq-question");
    if (question) {
      question.addEventListener("click", () => {
        const isActive = item.classList.contains("active");
        items.forEach(i => i.classList.remove("active"));
        if (!isActive) {
          item.classList.add("active");
        }
      });
    }
  });
}

/**
 * ============================================================================
 * POLICY MODALS (Shipping, Returns, Privacy, Terms)
 * ============================================================================
 */
const POLICIES = {
  shipping: {
    title: "Shipping & Delivery Information",
    content: `
      <p><strong>Handcrafted Production:</strong> Each creation by Cloud9Creationz is made by hand with care and devotion. Standard handmade production times are:</p>
      <ul style="margin: 0.75rem 0 1rem 1.25rem; line-height: 1.6;">
        <li>Hand-Embroidered Hoops: 4 to 6 business days</li>
        <li>Personalized Gift Hampers: 2 to 4 business days</li>
        <li>Custom Embroidered T-Shirts: 3 to 5 business days</li>
        <li>Bespoke Custom Orders: As mutually confirmed upon design approval</li>
      </ul>
      <p><strong>Shipping Across India:</strong> We ship through verified courier partners across all major Indian cities, towns, and PIN codes. Tracking links are provided via WhatsApp once your package is dispatched.</p>
      <p><strong>Shipping Charges:</strong> Free shipping is provided on orders above ₹${CONFIG.freeShippingAbove}. For smaller orders, a nominal flat rate of ₹${CONFIG.flatShippingFee} applies.</p>
    `
  },
  returns: {
    title: "Returns & Cancellation Policy",
    content: `
      <p><strong>Custom & Personalized Items:</strong> Because our embroidery, hampers, and personalized gifts are handcrafted specifically with your requested names, initials, and bespoke details, custom orders cannot be returned or refunded once production begins.</p>
      <p><strong>Damaged in Transit:</strong> If your package arrives damaged, please record an unboxing video and notify us via WhatsApp within 24 hours of delivery. We will promptly make and dispatch a free replacement.</p>
      <p><strong>Cancellations:</strong> Order cancellations are accepted within 6 hours of placement before customized design work begins.</p>
    `
  },
  privacy: {
    title: "Privacy Policy",
    content: `
      <p>Cloud9Creationz respects your personal privacy. Customer details including names, phone numbers, delivery addresses, and gift messages are collected solely to fulfill your handcrafted orders and communicate shipping updates.</p>
      <p>We do not sell, rent, or share customer contact details with third-party advertisers. All order inquiries made via WhatsApp or Google Forms remain strictly confidential.</p>
    `
  },
  terms: {
    title: "Terms & Conditions",
    content: `
      <p><strong>Artisanal Uniqueness:</strong> Because each piece is handmade and hand-stitched by an artisan, subtle organic variations in embroidery stitch density, wood grain, ribbon texture, and thread nuances are natural hallmarks of authentic craftsmanship.</p>
      <p><strong>Order Confirmation:</strong> An order is officially confirmed once Cloud9Creationz verifies product customization requirements and delivery timelines with you via WhatsApp or Email.</p>
    `
  }
};

function openPolicyModal(policyKey) {
  const policy = POLICIES[policyKey];
  if (!policy) return;

  const modal = document.getElementById("policy-modal-backdrop");
  const title = document.getElementById("policy-modal-title");
  const body = document.getElementById("policy-modal-body");

  if (title) title.textContent = policy.title;
  if (body) body.innerHTML = policy.content;
  if (modal) modal.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closePolicyModal() {
  const modal = document.getElementById("policy-modal-backdrop");
  if (modal) modal.classList.remove("open");
  document.body.style.overflow = "";
}

/**
 * ============================================================================
 * TOAST NOTIFICATION UTILITY
 * ============================================================================
 */
function showToast(message) {
  let container = document.getElementById("toast-container");
  if (!container) {
    container = document.createElement("div");
    container.id = "toast-container";
    document.body.appendChild(container);
  }

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `
    <span class="toast-icon">✦</span>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(10px)";
    toast.style.transition = "all 0.3s ease";
    setTimeout(() => {
      toast.remove();
    }, 300);
  }, 2600);
}

/**
 * Smooth Scroll Helper
 */
function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
}

/**
 * Filter from category cards
 */
function filterCategoryFromCard(categoryKey) {
  currentFilter = categoryKey;
  document.querySelectorAll(".filter-tab").forEach(tab => {
    tab.classList.toggle("active", tab.dataset.filter === categoryKey);
  });
  renderCatalog();
  scrollToSection("catalog");
}

/**
 * Mobile Drawer Menu
 */
function toggleMobileMenu() {
  const drawer = document.getElementById("mobile-menu-drawer");
  if (drawer) {
    drawer.classList.toggle("open");
  }
}

function closeMobileMenu() {
  const drawer = document.getElementById("mobile-menu-drawer");
  if (drawer) {
    drawer.classList.remove("open");
  }
}

/**
 * ============================================================================
 * DESIGN THEMES & STYLING SWITCHER
 * ============================================================================
 */
const THEMES = {
  royal: {
    id: "royal",
    title: "Atelier Royal",
    subtitle: "Warm Ivory, Phulkari Burgundy & Champagne Gold",
    description: "The classic luxury aesthetic: frosted liquid-glass panels, warm ivory linen canvas, and royal Punjabi burgundy threads."
  },
  editorial: {
    id: "editorial",
    title: "Modern Editorial",
    subtitle: "Vogue Minimalist, Alabaster Silk & Pitch Black",
    description: "High-fashion studio aesthetic: crisp monochromatic hairlines, generous architectural whitespace, and refined rose gold accents."
  },
  virsa: {
    id: "virsa",
    title: "Punjab Virsa Heritage",
    subtitle: "Raw Khadi Sand, Terracotta Henna & Saffron Gold",
    description: "Authentic earthiness: raw unbleached textures, warm terracotta and rich saffron stitching reflecting rural Punjabi artisan roots."
  },
  midnight: {
    id: "midnight",
    title: "Nocturne Velvet",
    subtitle: "Gala Obsidian Silk & Gilded Couture Gold",
    description: "Evening couture atmosphere: midnight plum obsidian background, gilded gold illumination, and luminous rose petal accents."
  }
};

function setTheme(themeId, showNotification = true) {
  if (!THEMES[themeId]) return;

  if (themeId === "royal") {
    document.documentElement.removeAttribute("data-theme");
  } else {
    document.documentElement.setAttribute("data-theme", themeId);
  }

  try {
    localStorage.setItem("kp_selected_theme", themeId);
  } catch (e) {
    console.warn("Could not save theme preference", e);
  }

  // Update theme pill states
  document.querySelectorAll(".theme-pill-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.theme === themeId);
  });

  // Update modal cards
  document.querySelectorAll(".theme-card-option").forEach(card => {
    card.classList.toggle("active", card.dataset.theme === themeId);
  });

  if (showNotification) {
    showToast(`Switched to "${THEMES[themeId].title}" design theme`);
  }
}

function initThemeSystem() {
  let savedTheme = "royal";
  try {
    savedTheme = localStorage.getItem("kp_selected_theme") || "royal";
  } catch (e) {
    savedTheme = "royal";
  }
  setTheme(savedTheme, false);
}

function openDesignStudio() {
  const modal = document.getElementById("design-studio-modal");
  if (modal) modal.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeDesignStudio() {
  const modal = document.getElementById("design-studio-modal");
  if (modal) modal.classList.remove("open");
  document.body.style.overflow = "";
}

/**
 * ============================================================================
 * INITIALIZATION ON DOM LOAD
 * ============================================================================
 */
document.addEventListener("DOMContentLoaded", () => {
  initIntroAnimation();
  initThemeSystem();
  initCart();
  renderCatalog();
  initFaqAccordion();

  // Category filter tabs
  document.querySelectorAll(".filter-tab").forEach(tab => {
    tab.addEventListener("click", () => {
      document.querySelectorAll(".filter-tab").forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      currentFilter = tab.dataset.filter || "all";
      renderCatalog();
    });
  });

  // Search input
  const searchInput = document.getElementById("catalog-search");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      currentSearch = e.target.value.trim();
      renderCatalog();
    });
  }

  // Sort select
  const sortSelect = document.getElementById("catalog-sort");
  if (sortSelect) {
    sortSelect.addEventListener("change", (e) => {
      currentSort = e.target.value;
      renderCatalog();
    });
  }

  // Custom creation form submit
  const customForm = document.getElementById("custom-inquiry-form");
  if (customForm) {
    customForm.addEventListener("submit", submitCustomInquiry);
  }

  // Close modals on escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeProductModal();
      closeCartDrawer();
      closeOrderModal();
      closePolicyModal();
      closeDesignStudio();
      closeMobileMenu();
    }
  });

  // Close modals when clicking backdrop
  [
    { id: "product-modal-backdrop", closeFn: closeProductModal },
    { id: "cart-drawer", closeFn: closeCartDrawer },
    { id: "order-modal-backdrop", closeFn: closeOrderModal },
    { id: "policy-modal-backdrop", closeFn: closePolicyModal },
    { id: "design-studio-modal", closeFn: closeDesignStudio },
    { id: "mobile-menu-drawer", closeFn: closeMobileMenu }
  ].forEach(({ id, closeFn }) => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener("click", (e) => {
        if (e.target === el) closeFn();
      });
    }
  });
});
