import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white absolute bottom-0 w-full py-6 h-1/6">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} ShopNext. All rights reserved.
        </p>
        <ul className="flex justify-center space-x-4 mt-4">
          <li>
            <a href="/about" className="hover:underline">
              About Us
            </a>
          </li>
          <li>
            <a>Contact</a>
          </li>
          <li>
            <a>Privacy Policy</a>
          </li>
          <li>
            <a>Terms of Service</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
