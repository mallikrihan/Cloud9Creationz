# Cloud9Creationz — Premium Handmade Craft & Personalized Gifting Website

Handcrafted with love from Punjab, India.  
A luxury, mobile-responsive static website for **Cloud9Creationz** featuring Apple-inspired liquid-glass UI, Phulkari cultural artistry, dynamic product personalization, shopping bag, WhatsApp ordering, and Google Forms + Google Sheets order management.

Built with **100% pure HTML5, CSS3, and vanilla JavaScript** — zero frameworks, no backend required, completely free to host forever on GitHub Pages or Netlify.

---

## 📁 Project Structure

```
cloud9creationz/
├── index.html          # Semantic HTML5 layout with rich schema & Apple liquid-glass UI
├── style.css           # Custom CSS design system, typography & responsive styling
├── script.js           # Owner configuration, catalog, cart & order handlers
├── assets/
│   ├── logo.svg        # Brand logo with Phulkari needle emblem
│   └── images/
│       ├── hero.jpg        # Studio workspace hero photo
│       ├── hamper.jpg      # Luxury celebration gift hamper
│       ├── embroidery.jpg  # Hand-embroidered floral hoop
│       ├── tshirt.jpg      # Custom embroidered organic cotton t-shirt
│       ├── artisan.jpg     # Cloud9Creationz founder & atelier portrait
│       ├── giftbox.jpg     # Personalized wooden keepsake box
│       └── accessories.jpg # Phulkari linen tote & bookmarks
├── favicon.svg         # SVG favicon with Phulkari thread motif
├── manifest.json       # PWA Web App Manifest
└── README.md           # Business owner guide & instructions
```

---

## 🚀 1. How to Open and Run the Website

### Option A: Direct Local Preview (No Tools Needed)
Simply double-click `index.html` in your web browser (Google Chrome, Safari, Firefox, or Edge). Because it uses pure standard HTML5, CSS3, and vanilla JavaScript, it works right away!

### Option B: Using a Local Server (Recommended for testing service workers/PWA)
If you have Node.js or Python installed:
```bash
# Using Python
python3 -m http.server 3000

# Using Vite / npx
npx serve .
```
Then visit `http://localhost:3000` in your browser.

---

## ⚙️ 2. Easy Owner Configuration (in `script.js`)

At the very top of `script.js`, you will find the `CONFIG` object. You can update your business information in seconds without touching any complex code:

```javascript
const CONFIG = {
  brandName: "Cloud9Creationz",
  brandTagline: "Handcrafted With Love. Made Just for You.",
  brandLocation: "Punjab, India",

  // 1. YOUR WHATSAPP NUMBER (International format without '+' or spaces)
  whatsappNumber: "919876543210", 

  // 2. YOUR BUSINESS EMAIL
  businessEmail: "hello@cloud9creationz.com",

  // 3. YOUR INSTAGRAM PROFILE LINK
  instagramUrl: "https://instagram.com/cloud9creationz",

  // 4. SHIPPING SETTINGS
  freeShippingAbove: 1999, // Free shipping threshold in ₹
  flatShippingFee: 99,     // Flat shipping rate in ₹ for orders below threshold

  // ...
};
```

---

## 🛍️ 3. How to Replace Product Photos, Names & Prices

In `script.js`, locate the `PRODUCTS` array starting around line 50. Each item contains:

```javascript
{
  id: "kp-hamper-01",
  name: "Royal Celebration Gift Hamper",
  category: "hampers",              // 'hampers', 'embroidery', 'tshirts', 'gifts', 'accessories', or 'occasions'
  categoryLabel: "Gift Hamper",
  price: 2499,                      // Price in Indian Rupees (INR)
  image: "/assets/images/hamper.jpg", // Path to your photo or image URL
  description: "An opulent bespoke gift hamper...",
  customizable: true,
  hasSizes: false,                  // Set to true if product has sizes (e.g. T-shirts)
  sizes: ["S", "M", "L", "XL"],
  colors: ["Blush Pink & Gold", "Warm Ivory & Burgundy"],
  productionDays: "2–3 working days",
  features: ["Reusable luxury keepsake box", "Artisan scented candle"],
  badge: "Bestseller"               // Optional tag on card
}
```

To add your own photos:
1. Place your photo inside `assets/images/` (e.g., `my_new_hoop.jpg`).
2. Update the `image` field in `script.js` to `/assets/images/my_new_hoop.jpg`.

---

## 📲 4. How WhatsApp Ordering Works

When a customer clicks **"Order via WhatsApp"** or completes checkout:
1. The website validates the customer's name, phone, and delivery address.
2. It automatically drafts a professional order message containing:
   - Customer name, phone, and delivery address
   - Itemized list of products with chosen colors, sizes, and personalization text
   - Estimated order total & shipping fee
3. It opens WhatsApp using `https://wa.me/{yourNumber}?text={message}`.
4. The customer reviews the prefilled message and hits Send.
5. You can reply directly to verify the design proof and confirm payment!

---

## 📋 5. How to Set Up Google Forms & Google Sheets

You can collect all customer orders into a private Google Sheet automatically via Google Forms for free:

### Step 1: Create a New Google Form
1. Go to [Google Forms](https://forms.google.com) and create a blank form named **"Cloud9Creationz Customer Orders"**.
2. Add the following Short Answer or Paragraph questions:
   - **Customer Name** (Short answer)
   - **Phone Number** (Short answer)
   - **Email Address** (Short answer)
   - **Delivery Address** (Paragraph)
   - **City** (Short answer)
   - **State** (Short answer)
   - **PIN Code** (Short answer)
   - **Order Summary** (Paragraph)
   - **Order Total** (Short answer)
   - **Preferred Delivery Date** (Date or Short answer)
   - **Special Instructions** (Paragraph)

### Step 2: Link Google Forms to Google Sheets
1. In your Google Form, click the **Responses** tab at the top.
2. Click the green **Link to Sheets** icon.
3. Select **"Create a new spreadsheet"** and click **Create**.
4. Every time an order form is submitted, a new row appears instantly in your private Google Sheet!

### Step 3: Get Your Form Field Entry IDs
1. In Google Forms, click the **three dots (⋮)** in the top-right corner and select **"Get pre-filled link"**.
2. Type test words into each field (e.g., name `TESTNAME`, phone `TESTPHONE`, etc.).
3. Click **"Get link"** and copy the link.
4. Paste the link into a text editor. You will see parameter keys like:
   `?entry.123456789=TESTNAME&entry.987654321=TESTPHONE...`
5. Note the numbers after `entry.`.

### Step 4: Add IDs to `script.js`
Open `script.js` and update the `googleForm` block:
```javascript
googleForm: {
  isConfigured: true,
  formUrl: "https://docs.google.com/forms/d/e/YOUR_FORM_ID/formResponse",
  viewFormUrl: "https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform",
  entryIds: {
    customerName: "entry.123456789",
    customerPhone: "entry.987654321",
    customerEmail: "entry.111111111",
    deliveryAddress: "entry.222222222",
    city: "entry.333333333",
    state: "entry.444444444",
    pincode: "entry.555555555",
    orderSummary: "entry.666666666",
    orderTotal: "entry.777777777",
    preferredDate: "entry.888888888",
    orderNotes: "entry.999999999"
  }
}
```
Now, clicking **"Submit via Google Form"** will prefill all customer and cart details with 100% accuracy into your Google Form!

---

## 🌐 6. How to Deploy to GitHub Pages or Netlify

### Option 1: GitHub Pages (100% Free Forever)
1. Create a free account on [GitHub.com](https://github.com).
2. Create a new repository named `cloud9creationz`.
3. Upload all the files from this folder (`index.html`, `style.css`, `script.js`, `assets/`, `manifest.json`, `favicon.svg`).
4. Go to **Settings** > **Pages**.
5. Under **Branch**, select `main` and `/ (root)`, then click **Save**.
6. Within 1 minute, your site is live at `https://yourusername.github.io/cloud9creationz/`!

### Option 2: Netlify (Drag and Drop in 30 Seconds)
1. Go to [Netlify.com](https://www.netlify.com) and log in.
2. Drag and drop this whole folder into Netlify.
3. Your website is instantly live with a free custom SSL certificate! You can also connect your own custom domain (e.g., `www.cloud9creationz.com`).

---

## 🌸 Brand Identity & Design System
- **Colors**: Warm Ivory (`#FFF9F2`), Soft Blush (`#F5E6E8`), Dusty Rose (`#C98F9B`), Deep Burgundy (`#702C45`), Champagne Gold (`#C6A36B`), Charcoal (`#262326`).
- **Typography**: Cormorant Garamond (Editorial luxury serif for headings), Plus Jakarta Sans (Crisp modern sans-serif for readability).
- **Inspiration**: Traditional Punjabi Phulkari geometric embroidery blended with Apple-style liquid-glass cards, frosted translucency, and warm artisanal aesthetics.

---

## 🎨 7. Alternative Luxury Design Themes (Switchable Live)

The website includes **4 distinct luxury design aesthetics** that can be switched in real-time or set as your permanent brand default:

1. **Atelier Royal (Default)**:
   - *Palette*: Warm Ivory (`#FFF9F2`), Soft Blush, Phulkari Burgundy (`#702C45`), Champagne Gold.
   - *Mood*: Apple-inspired liquid-glass, warm sunlit atelier, delicate Phulkari silk thread borders.

2. **Modern Editorial**:
   - *Palette*: Alabaster Silk (`#F9F9FA`), High-Fashion Pitch Black (`#18181B`), Rose Crimson, Warm Ochre.
   - *Mood*: Clean architectural hairlines, generous white space, and Vogue-style minimalist editorial typography.

3. **Punjab Virsa Heritage**:
   - *Palette*: Raw Khadi Sand Linen (`#F8F3EA`), Terracotta Henna (`#7C2F1E`), Saffron Gold (`#C98226`).
   - *Mood*: Earthy, organic artisanal roots, warm natural textures, and traditional Punjabi heritage craft feeling.

4. **Nocturne Velvet (Dark Luxury)**:
   - *Palette*: Midnight Obsidian (`#161217`), Deep Plum Velvet, Gilded Couture Gold (`#E5B865`), Petal Rose.
   - *Mood*: Gala evening luxury, luminous translucent glass with gold rim highlights, and opulent dark gifting ambiance.

Visitors can switch themes using the floating quick bar at the bottom or the **"Design Themes"** button in the header. To lock a theme as your permanent default, set `defaultTheme: "editorial"` (or `"virsa"`, `"midnight"`, `"royal"`) in `script.js`.

