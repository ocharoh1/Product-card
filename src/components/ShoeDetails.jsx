import React, { useState } from 'react';

const ShoeDetails = ({ product }) => {
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState('black');
  
  const sizes = [40, 41, 42, 43, 44, 45];
  const colors = [
    { name: 'black', class: 'bg-black' },
    { name: 'blue', class: 'bg-blue-500' },
    { name: 'orange', class: 'bg-orange-500' },
    { name: 'pink', class: 'bg-pink-500' },
    { name: 'yellow', class: 'bg-yellow-500' }
  ];

  const handleBuy = () => {
    if (!selectedSize) {
      alert('Please select a size');
      return;
    }
    alert(`Added to cart:\n- ${product.name}\n- Size: ${selectedSize}\n- Color: ${selectedColor}`);
  };

  return (
    <div className="flex-1 space-y-6">
      <div>
        <h1 className="text-2xl font-bold">{product.name}</h1>
        <p className="text-gray-600">{product.shortDescription}</p>
      </div>

      <div>
        <h2 className="font-semibold mb-2">PRODUCT DESCRIPTION</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          {product.fullDescription}
        </p>
        <ul className="space-y-2 text-gray-600">
          {product.features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className="font-semibold mb-3">COLOUR</h2>
        <div className="flex gap-3">
          {colors.map(({ name, class: colorClass }) => (
            <button
              key={name}
              onClick={() => setSelectedColor(name)}
              className={`w-6 h-6 rounded-full ${colorClass} ${
                selectedColor === name ? 'ring-2 ring-offset-2 ring-blue-500' : ''
              } transition-all`}
              aria-label={`Select ${name} color`}
            />
          ))}
        </div>
      </div>

      <div>
        <h2 className="font-semibold mb-3">SIZE</h2>
        <div className="flex flex-wrap gap-2">
          {sizes.map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`px-4 py-2 rounded-full transition-colors ${
                selectedSize === size
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 hover:bg-gray-200'
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between mt-6">
        <button 
          onClick={handleBuy}
          className="bg-blue-600 text-white px-12 py-3 rounded-full hover:bg-blue-700 transition-colors"
        >
          BUY
        </button>
        <span className="text-xl font-bold">€{product.price.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default ShoeDetails;
