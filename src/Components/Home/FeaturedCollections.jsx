import React from 'react';

const FeaturedCollections = () => {
  return (
    <section className="py-12 bg-white text-black">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-8">
          Explore Our Collections
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mx-4 gap-8">
          <div className="collection-card bg-gray-100 p-6 rounded-lg shadow-lg hover:bg-black hover:text-white transition-all duration-300">
            <h3 className="text-xl font-semibold">Formal Majesty</h3>
          </div>
          <div className="collection-card bg-gray-100 p-6 rounded-lg shadow-lg hover:bg-black hover:text-white transition-all duration-300">
            <h3 className="text-xl font-semibold">Casual Sovereign</h3>
          </div>
          <div className="collection-card bg-gray-100 p-6 rounded-lg shadow-lg hover:bg-black hover:text-white transition-all duration-300">
            <h3 className="text-xl font-semibold">Seasonal Royalty</h3>
          </div>
          <div className="collection-card bg-gray-100 p-6 rounded-lg shadow-lg hover:bg-black hover:text-white transition-all duration-300">
            <h3 className="text-xl font-semibold">Party Look</h3>
          </div>
          <div className="collection-card bg-gray-100 p-6 rounded-lg shadow-lg hover:bg-black hover:text-white transition-all duration-300">
            <h3 className="text-xl font-semibold">Wedding</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollections;
