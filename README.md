##  Shoe Store Product Page

A modern, responsive product page for a shoe store built with React and Tailwind CSS. This project showcases a dynamic product view with features like image gallery, color selection, size selection, and product details.

# ## Features

- 📱 Responsive design that works on all devices
- 🖼️ Interactive image gallery with navigation dots
- 🎨 Color selection with visual feedback
- 📏 Size selection system
- 🛒 Basic cart functionality
- 💅 Modern UI with smooth transitions
- 🎯 Clear product information hierarchy

# ## Technologies Used

- React
- Vite
- Tailwind CSS
- JavaScript (ES6+)

## # Prerequisites

Before you begin, ensure you have the following installed:
- Node.js 
- npm 
# 
## Project Structure

```
shoe-store/
│
├── src/
│   ├── assets/
│   │   └── images/
│   │       └── shoe.png
│   │
│   ├── components/
│   │   ├── ProductsWrapper.jsx
│   │   ├── ShoeType.jsx
│   │   └── ShoeDetails.jsx
│   │
│   ├── data/
│   │   └── productData.js
│   │
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── public/
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```

## Installation

1. Clone the repository:
```bash
git clone <https://github.com/ocharoh1/Product-card.git>
cd shoe-store
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit:
[```
http://localhost:5173](https://)
```

## # Component Overview

### ProductsWrapper
- Main container component
- Handles layout and responsive behavior

### ShoeType
- Displays product images
- Manages image gallery navigation
- Handles image switching functionality

### ShoeDetails
- Shows product information
- Manages color and size selection
- Handles add to cart functionality

## Customization

### Changing Product Images
1. Add your images to `src/assets/images/`
2. Update the imports in `src/data/productData.js`

### Modifying Product Details
Edit `src/data/productData.js` to change:
- Product name
- Descriptions
- Features
- Price
- Images

### Customizing Colors
Edit the colors array in `src/components/ShoeDetails.jsx`:
```javascript
const colors = [
  { name: 'black', class: 'bg-black' },
  // Add more colors...
];
```

### Adjusting Sizes
Modify the sizes array in `src/components/ShoeDetails.jsx`:
```javascript
const sizes = [40, 41, 42, 43, 44, 45]; // Modify as needed
```

## Development

### Building for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## Troubleshooting

### Images Not Loading
- Verify image path in `productData.js`
- Check if image exists in assets folder
- Ensure correct file extension

### Styles Not Applying
- Check Tailwind configuration
- Verify class names
- Ensure index.css has Tailwind directives

