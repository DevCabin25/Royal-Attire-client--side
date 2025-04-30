import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaPinterest } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-black text-white py-10">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">

                <div>
                    <h2 className="text-2xl font-bold mb-4">Royal Attire!</h2>
                    <p className="text-gray-400">
                        Elevate your style with the latest trends and timeless designs. Fashion for every moment.
                    </p>
                </div>

                <div>
                    <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                    <ul className="space-y-2 text-gray-400">
                        <li><a href="#" className="hover:text-white">Home</a></li>
                        <li><a href="#" className="hover:text-white">Shop</a></li>
                        <li><a href="#" className="hover:text-white">About</a></li>
                        <li><a href="#" className="hover:text-white">Contact</a></li>
                        <li><a href="#" className="hover:text-white">services</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-xl font-semibold mb-4">Customer Support</h3>
                    <ul className="space-y-2 text-gray-400">
                        <li><a href="#" className="hover:text-white">FAQ</a></li>
                        <li><a href="#" className="hover:text-white">Returns</a></li>
                        <li><a href="#" className="hover:text-white">Shipping</a></li>
                        <li><a href="#" className="hover:text-white">Order Status</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
                    <div className="flex space-x-4 text-gray-400">
                        <a href="#" className="hover:text-white"><FaFacebookF /></a>
                        <a href="#" className="hover:text-white"><FaInstagram /></a>
                        <a href="#" className="hover:text-white"><FaTwitter /></a>
                        <a href="#" className="hover:text-white"><FaPinterest /></a>
                    </div>
                </div>
            </div>

            <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
                © 2025 FashionHub. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
