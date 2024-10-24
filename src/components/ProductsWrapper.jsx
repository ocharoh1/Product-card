import React from 'react';

const ProductsWrapper = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-4 md:p-6 flex flex-col md:flex-row gap-8">
          {children}
        </div>
      </div>
    </div>
  );
};

export default ProductsWrapper;