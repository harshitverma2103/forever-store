import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-10 my-10 mt-40 text-sm">
        <div>
          <img src={assets.logo} className="mb-5 w-32" alt="Company Logo" />
          <p className="w-full md:w-2/3 text-gray-600">
            We are dedicated to providing the best quality products and services
            to our customers. Our commitment to excellence is reflected in
            everything we do, from product design to customer support. Thank you
            for choosing us.
          </p>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+1-458-454-545</li>
            <li>contact@forever.com</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-200">
        <p className="py-5 text-sm text-center">
          © 2024 forever.com - All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
