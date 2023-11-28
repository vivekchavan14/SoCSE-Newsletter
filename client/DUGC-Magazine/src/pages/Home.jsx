import React from 'react';

import NewsletterList from '../components/NewsletterList';

function Home() {
  return (
    <div className='font-sans bg-gray-200 min-h-screen flex justify-center items-center'>
      <div className='text-center'>
        <h1 className='text-gray-700 text-3xl mb-5'>View Newsletter</h1>
        <NewsletterList />
      </div>
    </div>
  );
}

export default Home;
