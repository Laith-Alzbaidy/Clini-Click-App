import Cookies from "js-cookie";

export function isUserAuthenticated() {
  const token = Cookies.get("yourTokenCookieName"); // Replace with your actual cookie name

  return !!token;
}
