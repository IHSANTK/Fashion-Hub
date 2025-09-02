// Import all images here for easy access
import loginBg from "./login_bg.webp";
import signupBg from "./signup-bg.webp";
import quoteImg from "./quote.png";
import logo from "./FashionHub.png";
import girlImg from "./girlImg.webp";
import cart from "./cart.png";
// import avatar from "./avatar.png";

// Export all images individually
export { loginBg, signupBg, quoteImg, logo, girlImg, cart };

// Default export with a variable name to avoid ESLint warning
const images = {
  loginBg,
  signupBg,
  quoteImg,
  // profileBg,
  cart,
  logo,
  girlImg,
  // avatar,
};

export default images;
