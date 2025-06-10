import React, { useState } from 'react';
import BoookCard from '../components/BookCard/BoookCard';
import bookData from '../data/bookData'; // Import the book data

export const AllBooks = () => {
  const [Data, setData] = useState(bookData); // Use the imported book data
  const [cart, setCart] = useState([]); // State to manage the cart

  const addToCart = (item) => {
    setCart([...cart, item]); // Add item to the cart
  };

  return (
    <div className="bg-zinc-900 h-auto px-12 py-8">


      <h4 className="text-3xl text-yellow-100">All Books</h4>
      <div className='my-8 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4'>
        {Data.map((item, i) => (
          <div key={i}>
            <BoookCard data={item} />
            <div className="flex justify-center">
              <button onClick={() => addToCart(item)} className="mt-4 bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>


      
        <h4 className="text-3xl text-yellow-100">Cart</h4>
        <div className='my-8 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4'>
          {cart.map((item, index) => (
              <div key={index}>
                <BoookCard data={item} />
                <div className="flex justify-center">
                  <button onClick={() => setCart(cart.filter((_, j) => j !== index))} className="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                    Remove from Cart
                  </button>
                </div>
              </div>
            ))}
        </div>
        
        
        
    



    </div>
  );
};

