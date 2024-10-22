const AboutUs = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg my-20">
      <h1 className="text-3xl font-bold text-center mb-4">About Us</h1>
      <p className="text-lg text-gray-700 mb-4">
        We are a dedicated team passionate about delivering the best products
        and services to our customers.
      </p>
      <p className="text-lg text-gray-700 mb-4">
        Our mission is to innovate and inspire, providing solutions that enhance
        your life and business.
      </p>
      <h2 className="text-2xl font-semibold mt-6 mb-2">Our Values</h2>
      <ul className="list-disc list-inside text-gray-700 mb-4">
        <li className="mb-2">
          Integrity: We believe in doing the right thing.
        </li>
        <li className="mb-2">
          Customer Focus: Your satisfaction is our priority.
        </li>
        <li>Innovation: We strive to improve and evolve continuously.</li>
      </ul>
    </div>
  );
};

export default AboutUs;
