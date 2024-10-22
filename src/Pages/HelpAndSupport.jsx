import React from "react";

const HelpAndSupport = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Help and Support</h1>

      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">
          Frequently Asked Questions
        </h2>
        <div className="mb-4">
          <h3 className="font-medium">How do I reset my password?</h3>
          <p>
            If you forgot your password, click on "Forgot Password" at the login
            page.
          </p>
        </div>
        <div className="mb-4">
          <h3 className="font-medium">Where can I find my order history?</h3>
          <p>
            Your order history is available in your account dashboard under
            "Orders."
          </p>
        </div>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
        <p>
          If you need further assistance, please reach out to our support team:
        </p>
        <p className="font-medium">Email: support@example.com</p>
        <p className="font-medium">Phone: (123) 456-7890</p>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Search</h2>
        <input
          type="text"
          placeholder="Search for help..."
          className="w-full p-2 border border-gray-300 rounded-lg"
        />
      </div>
    </div>
  );
};

export default HelpAndSupport;
