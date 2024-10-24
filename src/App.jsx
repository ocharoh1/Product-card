import React, { useState } from 'react';
import ProductsWrapper from './components/ProductsWrapper';
import ShoeType from './components/ShoeType';
import ShoeDetails from './components/ShoeDetails';
import { productData } from './data/productData';

const App = () => {
  const [activeImage, setActiveImage] = useState(0);

  return (
    <ProductsWrapper>
      <ShoeType 
        images={productData.images} 
        activeImage={activeImage}
        setActiveImage={setActiveImage}
      />
      <ShoeDetails product={productData} />
    </ProductsWrapper>
  );
};

export default App;