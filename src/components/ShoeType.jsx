import React from 'react';

const ShoeType = ({ images, activeImage, setActiveImage }) => {
  return (
    <div className="flex-1">
      <div className="relative bg-white rounded-lg p-4">
        <img
          src={images[activeImage]}
          alt="Product View"
          className="w-full h-auto object-contain aspect-square"
        />
        <div className="flex justify-center mt-4 gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveImage(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === activeImage ? 'bg-blue-600' : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`View image ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShoeType;
