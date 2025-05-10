import React from "react";

const AboutUs = () => {
  return (
    <div className="dark:text-white bg-white dark:bg-black min-h-screen flex items-center justify-center">
      <div className="max-w-4xl p-6 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold mb-4 text-center">About Us</h1>
        <p className="text-lg leading-relaxed mb-4">
          Welcome to ShopNext! We are dedicated to providing you with the best
          shopping experience. Our mission is to bring you high-quality products
          at affordable prices, ensuring customer satisfaction every step of the
          way.
        </p>
        <p className="text-lg leading-relaxed">
          Our team is passionate about innovation and excellence, constantly
          striving to improve and expand our offerings. Thank you for choosing
          ShopNext. We look forward to serving you!
        </p>
        <div className="mt-6 text-center">
          <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
          <p className="text-lg">Prateek Veerbhan</p>
          <p className="text-lg">prateekveerbhan@gmail.com</p>
          <a
            href="https://github.com/ppomega"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-500 hover:underline flex items-center justify-center mt-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 mr-2"
            >
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.461-1.11-1.461-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.983 1.03-2.682-.103-.253-.447-1.27.098-2.645 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.845c.85.004 1.705.115 2.504.337 1.91-1.294 2.75-1.025 2.75-1.025.545 1.375.201 2.392.099 2.645.64.699 1.03 1.591 1.03 2.682 0 3.842-2.337 4.687-4.565 4.935.36.31.682.92.682 1.852 0 1.337-.012 2.415-.012 2.742 0 .267.18.578.688.48C19.135 20.165 22 16.418 22 12c0-5.523-4.477-10-10-10z"
                clipRule="evenodd"
              />
            </svg>
            GitHub Repository
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
