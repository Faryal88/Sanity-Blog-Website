import Link from "next/link";
import { FaTwitter, FaFacebook, FaYoutube, FaInstagram } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 px-6">
      <div className="flex justify-between items-center flex-wrap gap-20"> {/* Increased gap between columns */}
        <div className="flex justify-start gap-20 flex-wrap"> {/* Increased gap between columns */}
          {/* Column 1 */}
          <div>
            <h3 className="text-sm font-semibold mb-8">EXPLORE OUR BLOG</h3> {/* Increased margin-bottom */}
            <ul className="space-y-5 text-sm"> {/* Increased spacing between list items */}
              <li><Link href="#" className="hover:underline">Latest Posts</Link></li>
              <li><Link href="#" className="hover:underline">Popular Articles</Link></li>
              <li><Link href="#" className="hover:underline">Categories</Link></li>
              <li><Link href="#" className="hover:underline">Contribute</Link></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-sm font-semibold mb-8">SUPPORT</h3> {/* Increased margin-bottom */}
            <ul className="space-y-5 text-sm"> {/* Increased spacing between list items */}
              <li><Link href="#" className="hover:underline">Contact Us</Link></li>
              <li><Link href="#" className="hover:underline">FAQ</Link></li>
              <li><Link href="#" className="hover:underline">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:underline">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-sm font-semibold mb-8">ABOUT OUR BLOG</h3> {/* Increased margin-bottom */}
            <ul className="space-y-5 text-sm"> {/* Increased spacing between list items */}
              <li><Link href="#" className="hover:underline">About Us</Link></li>
              <li><Link href="#" className="hover:underline">Contribute</Link></li>
              <li><Link href="#" className="hover:underline">Our Story</Link></li>
              <li><Link href="#" className="hover:underline">Our Mission</Link></li>
            </ul>
          </div>
        </div>

        {/* Column 4 (Social Media Icons) */}
        <div className="flex justify-start lg:justify-end items-start gap-8"> {/* Increased gap between icons */}
          <FaTwitter className="text-lg cursor-pointer hover:text-gray-400" />
          <FaFacebook className="text-lg cursor-pointer hover:text-gray-400" />
          <FaYoutube className="text-lg cursor-pointer hover:text-gray-400" />
          <FaInstagram className="text-lg cursor-pointer hover:text-gray-400" />
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-12 flex flex-wrap justify-between items-center text-xs text-gray-400"> {/* Increased margin-top */}
        {/* Country and Copyright */}
        <div className="flex mb-8 md:mb-0 gap-4"> {/* Increased gap between text */}
          <IoLocationOutline />
          <p>Serving Worldwide</p> {/* Changed from India to Serving Worldwide */}
          <p>© 2023 The Blog Hub, All Rights Reserved</p> {/* Updated copyright text */}
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-8"> {/* Increased gap between links */}
          <Link href="#" className="hover:underline">Guides</Link>
          <Link href="#" className="hover:underline">Terms of Sale</Link>
          <Link href="#" className="hover:underline">Terms of Use</Link>
          <Link href="#" className="hover:underline">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
}
