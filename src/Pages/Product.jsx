
import React from 'react';
import { useSelector } from 'react-redux';
import ProductCard from '../components/item/ProductCard';
import { addItem } from '../components/features/cart/cartSlice';
import { increment } from '../components/features/counter/counterslice';
import { useDispatch } from 'react-redux';

const Product = () => {
  const products = useSelector(state => state.product.selectedProduct);
  const dispatch = useDispatch();
  const isSignedUp = !!localStorage.getItem('users');

  const handleAddItem = () => {
    if (!isSignedUp) {
      window.open('/signup', '_blank');
    } else {
      dispatch(increment());
      dispatch(addItem(products));
    }
  };
  

  return (
    <div>
      {products.map(product => (
        <div key={product.id}>
          <ProductCard product={product} />
         
        </div>
      ))}
    </div>
  );
};

export default Product;
