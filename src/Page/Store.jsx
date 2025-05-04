
import Hero from "../Components/Store/Hero";
import FeaturedProducts from "../Components/Store/FeaturedProducts";
import Newsletter from "../Components/Store/Newsletter";


const Store = () => {
 

  return (
    <div className="min-h-screen flex flex-col">
      
      <main className="flex-grow">
        <Hero />
        <FeaturedProducts />
        <Newsletter />
      </main>
     
    </div>
  );
};

export default Store;
