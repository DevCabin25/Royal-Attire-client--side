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
        <div className="flex flex-col lg:flex-row items-center mb-12">
          <div className="w-full lg:w-1/2 p-6 bg-gray-100 rounded-lg shadow-lg">
            <p className="text-lg text-gray-700 italic mb-4">
              "Royal Attire redefined my wardrobe — now I walk into every room with absolute confidence."
            </p>
            <p className="text-xl font-semibold text-gray-900">— Ahsan Rahman</p>
          </div>
          <div className="w-full lg:w-1/2 mt-6 lg:mt-0">
            <img
              src="https://i.ibb.co.com/sJt4Ss8R/smiling-young-male-professional-standing-with-arms-crossed-while-making-eye-contact-against-isolated.jpg" // Replace with the actual picture URL for Ahsan Rahman
              alt="Ahsan Rahman"
              className="object-cover w-32 h-32 rounded-full mx-auto"
            />
          </div>
        </div>

        {/* Review 2 */}
        <div className="flex flex-col lg:flex-row items-center mb-12">
          <div className="w-full lg:w-1/2 p-6 bg-gray-100 rounded-lg shadow-lg">
            <p className="text-lg text-gray-700 italic mb-4">
              "Perfect craftsmanship, luxurious feel — every piece feels royal."
            </p>
            <p className="text-xl font-semibold text-gray-900">— Imran Chowdhury</p>
          </div>
          <div className="w-full lg:w-1/2 mt-6 lg:mt-0">
            <img
              src="https://i.ibb.co.com/0R9k6MyX/young-joyful-student-man-holding-thumb-up-isolated.jpg" // Replace with the actual picture URL for Imran Chowdhury
              alt="Imran Chowdhury"
              className="object-cover w-32 h-32 rounded-full mx-auto"
            />
          </div>
        </div>

        {/* Add more reviews as needed */}

      </div>
    </section>
  );
};

export default CustomerReviews;
