import {
  RouterLink,
  init_router
} from "./chunk-W3QIJK6B.js";
import {
  CartSer,
  init_cart_ser
} from "./chunk-JXB4A4HJ.js";
import {
  CommonModule,
  init_common
} from "./chunk-OUYGEWHZ.js";
import {
  Component,
  __decorate,
  init_core,
  init_tslib_es6
} from "./chunk-6I5JEFX5.js";
import {
  __esm
} from "./chunk-HBW54YOI.js";

// angular:jit:template:src\app\navbar\navbar.html
var navbar_default;
var init_navbar = __esm({
  "angular:jit:template:src\\app\\navbar\\navbar.html"() {
    navbar_default = '<nav class="navbar">\r\n  <div class="nav-container">\r\n    <!-- Logo -->\r\n    <a routerLink="/" class="logo">\r\n      DRSHOP\r\n    </a>\r\n\r\n    <!-- Navigation Items -->\r\n    <div class="nav-items">\r\n      <a href="#" class="nav-link">Shop</a>\r\n      <a href="#" class="nav-link">Collections</a>\r\n      <a href="#" class="nav-link">About</a>\r\n    </div>\r\n\r\n    <!-- Cart Button - Now More Prominent -->\r\n    <div class="cart-container">\r\n      <button routerLink="/cart" class="cart-button">\r\n        <span *ngIf="cartCount > 0" class="cart-badge">\r\n          {{ cartCount }}\r\n        </span>\r\n        <svg class="cart-icon" viewBox="0 0 24 24">\r\n          <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>\r\n          <line x1="3" y1="6" x2="21" y2="6"/>\r\n          <path d="M16 10a4 4 0 0 1-8 0"/>\r\n        </svg>\r\n        <span class="cart-text">Cart</span>\r\n      </button>\r\n    </div>\r\n\r\n    <!-- Mobile Menu Button -->\r\n    <button class="mobile-menu-button" (click)="toggleMobileMenu()">\r\n      <svg class="hamburger-icon" viewBox="0 0 24 24">\r\n        <path d="M4 6h16M4 12h16M4 18h16"/>\r\n      </svg>\r\n    </button>\r\n  </div>\r\n\r\n  <!-- Mobile Menu -->\r\n  @if(mobileMenuOpen) {\r\n    <div class="mobile-menu">\r\n      <a class="mobile-menu-link">Shop</a>\r\n      <a class="mobile-menu-link">Collections</a>\r\n      <a class="mobile-menu-link">About</a>\r\n      <a class="mobile-menu-link mobile-cart-link">\r\n        <svg class="mobile-cart-icon" viewBox="0 0 24 24">\r\n          <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>\r\n          <line x1="3" y1="6" x2="21" y2="6"/>\r\n          <path d="M16 10a4 4 0 0 1-8 0"/>\r\n        </svg>\r\n        Cart <span *ngIf="cartCount > 0" class="mobile-cart-badge">{{ cartCount }}</span>\r\n      </a>\r\n    </div>\r\n  }\r\n</nav>';
  }
});

// angular:jit:style:src\app\navbar\navbar.css
var navbar_default2;
var init_navbar2 = __esm({
  "angular:jit:style:src\\app\\navbar\\navbar.css"() {
    navbar_default2 = '/* src/app/navbar/navbar.css */\n:root {\n  --primary: #3b82f6;\n  --primary-dark: #2563eb;\n  --accent: #ef4444;\n  --text-dark: #1f2937;\n  --text-light: #f9fafb;\n  --gray-100: #f3f4f6;\n  --gray-200: #e5e7eb;\n  --shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);\n  --transition: all 0.3s ease;\n}\n.navbar {\n  background-color: rgba(255, 255, 255, 0.95);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  border-bottom: 1px solid var(--gray-200);\n  box-shadow: var(--shadow);\n  padding: 0.75rem 1.5rem;\n  position: sticky;\n  top: 0;\n  z-index: 50;\n}\n.nav-container {\n  max-width: 1200px;\n  margin: 0 auto;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.logo {\n  font-size: 1.8rem;\n  font-weight: 800;\n  color: var(--primary);\n  cursor: pointer;\n  letter-spacing: 0.05em;\n  text-decoration: none;\n  transition: all 0.3s ease;\n}\n.logo:hover {\n  transform: scale(1.05);\n}\n.nav-items {\n  display: none;\n  gap: 2rem;\n}\n@media (min-width: 768px) {\n  .nav-items {\n    display: flex;\n  }\n}\n.nav-link {\n  color: var(--text-dark);\n  font-weight: 500;\n  text-decoration: none;\n  transition: var(--transition);\n  padding: 0.5rem 0;\n  position: relative;\n}\n.nav-link:hover {\n  color: var(--primary);\n}\n.nav-link::after {\n  content: "";\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 0;\n  height: 2px;\n  background: var(--primary);\n  transition: var(--transition);\n}\n.nav-link:hover::after {\n  width: 100%;\n}\n.cart-container {\n  display: flex;\n  align-items: center;\n}\n.cart-button {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.5rem 1rem;\n  background-color: rgb(241, 241, 241);\n  color: rgb(0, 0, 0);\n  border: none;\n  border-radius: 50px;\n  cursor: pointer;\n  transition: var(--transition);\n  position: relative;\n}\n.cart-button:hover {\n  background-color: var(--primary-dark);\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);\n}\n.cart-icon {\n  width: 1.25rem;\n  height: 1.25rem;\n  stroke: currentColor;\n  stroke-width: 2;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n  fill: none;\n}\n.cart-text {\n  font-weight: 500;\n  display: none;\n}\n@media (min-width: 640px) {\n  .cart-text {\n    display: block;\n  }\n}\n.cart-badge {\n  position: absolute;\n  top: -0.5rem;\n  right: -0.5rem;\n  background-color: var(--accent);\n  color: rgb(214, 4, 4);\n  font-size: 0.75rem;\n  font-weight: 700;\n  min-width: 1.25rem;\n  height: 1.25rem;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n  animation: pulse 1.5s infinite;\n}\n@keyframes pulse {\n  0% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(1.1);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n.mobile-menu-button {\n  padding: 0.5rem;\n  border-radius: 0.5rem;\n  background: none;\n  border: none;\n  cursor: pointer;\n  transition: var(--transition);\n}\n@media (min-width: 768px) {\n  .mobile-menu-button {\n    display: none;\n  }\n}\n.mobile-menu-button:hover {\n  background-color: var(--gray-100);\n}\n.hamburger-icon {\n  width: 1.75rem;\n  height: 1.75rem;\n  stroke: var(--text-dark);\n  stroke-width: 2;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n  fill: none;\n}\n.mobile-menu {\n  margin-top: 1rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n  padding: 1rem;\n  animation: fadeIn 0.3s ease;\n}\n@media (min-width: 768px) {\n  .mobile-menu {\n    display: none;\n  }\n}\n.mobile-menu-link {\n  display: block;\n  color: var(--text-dark);\n  font-weight: 500;\n  padding: 0.75rem 1rem;\n  border-radius: 0.5rem;\n  transition: var(--transition);\n  text-decoration: none;\n}\n.mobile-menu-link:hover {\n  background-color: var(--gray-100);\n  color: var(--primary);\n}\n.mobile-cart-link {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  margin-top: 1rem;\n  padding: 1rem;\n  background-color: var(--primary);\n  color: white;\n}\n.mobile-cart-link:hover {\n  background-color: var(--primary-dark);\n}\n.mobile-cart-icon {\n  width: 1.25rem;\n  height: 1.25rem;\n  stroke: currentColor;\n  stroke-width: 2;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n  fill: none;\n}\n.mobile-cart-badge {\n  margin-left: auto;\n  background-color: white;\n  color: var(--accent);\n  font-weight: 700;\n  padding: 0.25rem 0.5rem;\n  border-radius: 50px;\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n/*# sourceMappingURL=navbar.css.map */\n';
  }
});

// src/app/navbar/navbar.ts
var Navbar;
var init_navbar3 = __esm({
  "src/app/navbar/navbar.ts"() {
    "use strict";
    init_tslib_es6();
    init_navbar();
    init_navbar2();
    init_core();
    init_router();
    init_cart_ser();
    init_common();
    Navbar = class Navbar2 {
      cartService;
      mobileMenuOpen = false;
      cartCount = 0;
      constructor(cartService) {
        this.cartService = cartService;
        this.cartService.cart$.subscribe((items) => {
          this.cartCount = items.length;
        });
      }
      toggleMobileMenu() {
        this.mobileMenuOpen = !this.mobileMenuOpen;
      }
      static ctorParameters = () => [
        { type: CartSer }
      ];
    };
    Navbar = __decorate([
      Component({
        selector: "app-navbar",
        imports: [
          RouterLink,
          CommonModule
        ],
        template: navbar_default,
        styles: [navbar_default2]
      })
    ], Navbar);
  }
});

export {
  Navbar,
  init_navbar3 as init_navbar
};
//# sourceMappingURL=chunk-D425VVDH.js.map
