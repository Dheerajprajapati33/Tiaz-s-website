import React, { useState } from "react";
import { Link } from "./site-router";
import Header from "./components/navbar";
import Footer from "./components/footer";
import HomePage from "./pages/home";
import { About } from "./pages/about-us";
import { Privacy } from "./pages/privacy-policy";
import { Terms } from "./pages/terms";
import { Contact } from "./pages/contact-us";

const pages = {
  "/about-us": About,
  "/privacy-policy": Privacy,
  "/terms-condition": Terms,
  "/terms-and-conditions": Terms,
  "/contact-us": Contact,
};
export default function App() {
  const [path, setPath] = useState(
    window.location.pathname.replace(/\/$/, "") || "/",
  );
  React.useEffect(() => {
    function update() {
      setPath(window.location.pathname.replace(/\/$/, "") || "/");
      if (window.location.hash) {
        requestAnimationFrame(() =>
          document
            .getElementById(window.location.hash.slice(1))
            ?.scrollIntoView(),
        );
      }
    }
    window.addEventListener("popstate", update);
    window.addEventListener("tiaz:navigate", update);
    return () => {
      window.removeEventListener("popstate", update);
      window.removeEventListener("tiaz:navigate", update);
    };
  }, []);
  const Page = pages[path] || (path === "/" ? HomePage : null);
  return (
    <>
      <Header />
      {Page ? (
        <Page />
      ) : (
        <>
          <div className="container-wide py-32 text-center">
            <h1 className="font-display text-5xl text-forest">
              Page not found
            </h1>
            <p className="mt-5 text-[#66776a]">This address isn't available.</p>
            <Link to="/" className="gold-button mt-7">
              Back to home
            </Link>
          </div>
        </>
      )}
      <Footer />
    </>
  );
}
