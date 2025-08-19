import {
  Component,
  __decorate,
  init_core,
  init_tslib_es6
} from "./chunk-6I5JEFX5.js";
import {
  __esm
} from "./chunk-HBW54YOI.js";

// angular:jit:template:src\app\footer\footer.html
var footer_default;
var init_footer = __esm({
  "angular:jit:template:src\\app\\footer\\footer.html"() {
    footer_default = '<footer class="site-footer">\r\n  <div class="footer-container">\r\n    <div class="footer-section">\r\n      <h3>Shop</h3>\r\n      <ul>\r\n        <li><a href="#">All Products</a></li>\r\n        <li><a href="#">New Arrivals</a></li>\r\n        <li><a href="#">Best Sellers</a></li>\r\n        <li><a href="#">Special Offers</a></li>\r\n      </ul>\r\n    </div>\r\n    \r\n    <div class="footer-section">\r\n      <h3>Help</h3>\r\n      <ul>\r\n        <li><a href="#">Contact Us</a></li>\r\n        <li><a href="#">FAQs</a></li>\r\n        <li><a href="#">Shipping Info</a></li>\r\n        <li><a href="#">Returns</a></li>\r\n      </ul>\r\n    </div>\r\n    \r\n    <div class="footer-section">\r\n      <h3>About</h3>\r\n      <ul>\r\n        <li><a href="#">Our Story</a></li>\r\n        <li><a href="#">Sustainability</a></li>\r\n        <li><a href="#">Careers</a></li>\r\n        <li><a href="#">Press</a></li>\r\n      </ul>\r\n    </div>\r\n    \r\n    <div class="footer-section newsletter">\r\n      <h3>Stay Connected</h3>\r\n      <p>Subscribe for updates and special offers</p>\r\n      <form class="newsletter-form">\r\n        <input type="email" placeholder="Your email address">\r\n        <button type="submit">Subscribe</button>\r\n      </form>\r\n      <div class="social-links">\r\n        <a href="#"><i class="fab fa-instagram"></i></a>\r\n        <a href="#"><i class="fab fa-facebook"></i></a>\r\n        <a href="#"><i class="fab fa-twitter"></i></a>\r\n        <a href="#"><i class="fab fa-pinterest"></i></a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  \r\n  <div class="footer-bottom">\r\n    <p>&copy; 2023 DRSHOP. All rights reserved.</p>\r\n    <div class="legal-links">\r\n      <a href="#">Privacy Policy</a>\r\n      <a href="#">Terms of Service</a>\r\n      <a href="#">Cookie Settings</a>\r\n    </div>\r\n  </div>\r\n</footer>';
  }
});

// angular:jit:style:src\app\footer\footer.css
var footer_default2;
var init_footer2 = __esm({
  "angular:jit:style:src\\app\\footer\\footer.css"() {
    footer_default2 = '/* src/app/footer/footer.css */\n.site-footer {\n  background-color: #f8f8f8;\n  color: #333;\n  padding: 40px 0 0;\n  border-top: 1px solid #eee;\n  font-family:\n    "Helvetica Neue",\n    Arial,\n    sans-serif;\n}\n.footer-container {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 20px;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 30px;\n}\n.footer-section {\n  margin-bottom: 30px;\n}\n.footer-section h3 {\n  font-size: 16px;\n  font-weight: 600;\n  margin-bottom: 20px;\n  color: #222;\n}\n.footer-section ul {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.footer-section li {\n  margin-bottom: 12px;\n}\n.footer-section a {\n  color: #666;\n  text-decoration: none;\n  font-size: 14px;\n  transition: color 0.2s;\n}\n.footer-section a:hover {\n  color: #000;\n}\n.newsletter p {\n  color: #666;\n  font-size: 14px;\n  margin-bottom: 15px;\n}\n.newsletter-form {\n  display: flex;\n  margin-bottom: 20px;\n}\n.newsletter-form input {\n  flex: 1;\n  padding: 10px 15px;\n  border: 1px solid #ddd;\n  border-radius: 4px 0 0 4px;\n  font-size: 14px;\n}\n.newsletter-form button {\n  background-color: #000;\n  color: white;\n  border: none;\n  padding: 0 15px;\n  border-radius: 0 4px 4px 0;\n  cursor: pointer;\n  font-size: 14px;\n  transition: background-color 0.2s;\n}\n.newsletter-form button:hover {\n  background-color: #333;\n}\n.social-links {\n  display: flex;\n  gap: 15px;\n}\n.social-links a {\n  color: #666;\n  font-size: 18px;\n  transition: color 0.2s;\n}\n.social-links a:hover {\n  color: #000;\n}\n.footer-bottom {\n  border-top: 1px solid #eee;\n  padding: 20px 0;\n  text-align: center;\n  font-size: 13px;\n  color: #999;\n}\n.legal-links {\n  margin-top: 10px;\n}\n.legal-links a {\n  color: #999;\n  text-decoration: none;\n  margin: 0 10px;\n  font-size: 13px;\n}\n.legal-links a:hover {\n  color: #666;\n}\n@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css);\n/*# sourceMappingURL=footer.css.map */\n';
  }
});

// src/app/footer/footer.ts
var Footer;
var init_footer3 = __esm({
  "src/app/footer/footer.ts"() {
    "use strict";
    init_tslib_es6();
    init_footer();
    init_footer2();
    init_core();
    Footer = class Footer2 {
    };
    Footer = __decorate([
      Component({
        selector: "app-footer",
        imports: [],
        template: footer_default,
        styles: [footer_default2]
      })
    ], Footer);
  }
});

export {
  Footer,
  init_footer3 as init_footer
};
//# sourceMappingURL=chunk-G4I4B5V6.js.map
