import React from 'react'
import '../Style/Footer.css'

export default function Footer() {

  return (
    <div>
      <footer className="footer-container">
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="##">Women’s Fashion</a></li>
            <li><a href="##">Men’s Fashion</a></li>
            <li><a href="##">Accessories</a></li>
            <li><a href="##">Home & Kitchen</a></li>
            <li><a href="##">Electronics</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Customer Support</h4>       
            <ul>
            <li><a href="##">Contact Us</a></li>
            <li><a href="##">FAQs</a></li>
            <li><a href="##">Help Center</a></li>
            <li><a href="##">Returns & Refunds</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Information</h4>
          <ul>
            <li><a href="##">About Us</a></li>
            <li><a href="##">Careers</a></li>
            <li><a href="##">Blog</a></li>
            <li><a href="##">Terms & Conditions</a></li>
            <li><a href="##">Privacy Policy</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="https://www.facebook.com/meeshosupply/"><i className="fab fa-facebook"></i></a>
            <a href="https://www.instagram.com/meeshoapp/?hl=en"><i className="fab fa-instagram"></i></a>
            <a href="https://x.com/Meesho_Official?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"><i className="fab fa-twitter"></i></a>
            <a href="https://in.linkedin.com/company/meesho"><i className="fab fa-linkedin"></i></a>
          </div>
          <h4>Download App</h4>

        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 Meesho. All rights reserved.</p>
          <p>Legal Disclaimer | Payment Methods | Security Seals</p>
        </div>
      </footer>
    </div>
  )
}
