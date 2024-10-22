import machineo from "../assets/machineo.jpg";
import facebook from "../assets/facebook.jpg";
import instagram from "../assets/instagram.jpg";
import linkedin from "../assets/linkedin.jpg";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="bg-[#222222] text-white py-12 mt-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img
                src={machineo}
                alt="Machineo Mart logo"
                className="h-10 w-auto"
              />
            </div>
            <p className="text-gray-500 mt-4">
              We were on a mission to redefine the machinery buying and selling
              experience. With our cutting-edge platform, we aim to facilitate
              seamless transactions and empower businesses worldwide.
            </p>

            <div className="flex space-x-4 mt-6">
              <a href="https://facebook.com">
                <div className="w-12 h-12 rounded-full  bg-gray-500 m-auto  flex items-center justify-center">
                  <img src={facebook} alt="Facebook icon" className="w-6 h-6" />
                </div>
              </a>
              <a href="https://instagram.com">
                <div className="w-12 h-12 rounded-full bg-gray-500 m-auto flex items-center justify-center">
                  <img
                    src={instagram}
                    alt="Instagram icon"
                    className="w-6 h-6"
                  />
                </div>
              </a>
              <a href="https://www.linkedin.com/in/shami-alam-6174882bb/">
                <div className="w-12 h-12 rounded-full  bg-gray-500 m-auto flex items-center justify-center">
                  <img src={linkedin} alt="LinkedIn icon" className="w-6 h-6" />
                </div>
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Sell or Buy</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#">Pricing</a>
              </li>
              <li>Sell Used & New Machinery</li>
              <li>Post Buy Requirement</li>
              <li>How it works</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="">About Us</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Support</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link to="/help">Help & Support</Link>
              </li>
              <li className="flex items-center space-x-2">
                <Link to="/contact"> Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-8 text-gray-500">
          ©2024 Copyright Machineo Mart
        </div>
      </footer>
    </>
  );
}

export default Footer;
