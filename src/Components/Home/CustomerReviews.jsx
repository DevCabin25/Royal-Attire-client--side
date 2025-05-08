import React from 'react';

const CustomerReviews = () => {
  return (
    <section className="py-20 bg-white text-black">
      <div className="container mx-auto px-6 text-center">
        {/* Section Title */}
        <h2 className="text-4xl font-serif font-bold text-gray-900 mb-12">
          What Our Clients Say
        </h2>

        {/* Review 1 */}
        <div className='grid grid-cols-2'>
        <div className="flex flex-col items-center mb-12">
          <div className="relative w-full max-w-lg p-8 bg-gray-100 rounded-lg shadow-lg overflow-hidden h-[380px]">
            {/* Image positioned within the card */}
            <div className="relative w-40 h-40 mx-auto mb-6">
              <img
                src="https://i.ibb.co.com/sJt4Ss8R/smiling-young-male-professional-standing-with-arms-crossed-while-making-eye-contact-against-isolated.jpg"
                alt="Ahsan Rahman"
                className="object-cover w-full h-full rounded-full border-4 border-white shadow-lg"
              />
            </div>
            <p className="text-lg text-gray-700 italic mb-4">
              "Royal Attire redefined my wardrobe — now I walk into every room with absolute confidence."
            </p>
            <p className="text-xl font-semibold text-gray-900">— Ahsan Rahman</p>
          </div>
        </div>

        {/* Review 2 */}
        <div className="flex flex-col items-center mb-12">
          <div className="relative w-full max-w-lg p-8 bg-gray-100 rounded-lg shadow-lg overflow-hidden h-[380px]">
            {/* Image positioned within the card */}
            <div className="relative w-40 h-40 mx-auto mb-6">
              <img
                src="https://i.ibb.co.com/0R9k6MyX/young-joyful-student-man-holding-thumb-up-isolated.jpg"
                alt="Imran Chowdhury"
                className="object-cover w-full h-full rounded-full border-4 border-white shadow-lg"
              />
            </div>
            <p className="text-lg text-gray-700 italic mb-4">
              "Perfect craftsmanship, luxurious feel — every piece feels royal."
            </p>
            <p className="text-xl font-semibold text-gray-900">— Imran Chowdhury</p>
          </div>
        </div>
        </div>

        {/* Add more reviews as needed */}
        
      </div>
    </section>
  );
};

export default CustomerReviews;
