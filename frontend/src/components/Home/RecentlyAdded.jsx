import React from 'react'
import BoookCard from '../BookCard/BoookCard';

const RecentlyAdded = () => {
    
  return (
    <div className="mt-8 px-4">
        <h4 className="text-3xl text-yellow-100">Recently Added Books</h4>
        <div className='my-8 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4'>
            <BoookCard data={{
              url: 'https://covers.openlibrary.org/b/id/10523338-L.jpg',
              title: 'The Great Gatsby',
              author: 'F. Scott Fitzgerald',
              price: 299
            }} />
            <BoookCard data={{
              url: 'https://covers.openlibrary.org/b/id/11153223-L.jpg',
              title: 'To Kill a Mockingbird',
              author: 'Harper Lee',
              price: 349
            }} />
            <BoookCard data={{
              url: 'https://covers.openlibrary.org/b/id/10958345-L.jpg',
              title: '1984',
              author: 'George Orwell',
              price: 279
            }} />
        </div>
    </div>
  );
};

export default RecentlyAdded;