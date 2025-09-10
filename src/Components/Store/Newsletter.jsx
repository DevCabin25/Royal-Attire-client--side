import { useState } from "react";


const Newsletter = () => {
  const [email, setEmail] = useState("");
  

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) return;

    // Simulate sending to backend
    // toast({
    //   title: "Thank you for subscribing",
    //   description: "You'll be the first to know about our latest collections.",
    // });

    alert("Thank you for subscribing")
    setEmail("");
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-4">
            Join Our Community
          </h2>
          <p className="text-gray-600 mb-8">
            Subscribe to our newsletter and be the first to receive exclusive offers, styling tips, and announcements about new collections.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            {/* <Input
              type="email"
              placeholder="Enter your email"
              className="bg-white focus:border-black px-4 py-6"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            /> */}
            {/* <Button
              type="submit"
              className="bg-black hover:bg-black/90 text-white px-6 py-6 whitespace-nowrap"
            >
              Subscribe
            </Button> */}
          </form>

          <p className="text-xs text-gray-500 mt-4">
            By subscribing, you agree to our Privacy Policy and consent to receive updates from Roaly Attires.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
