import React from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleHamburger = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className="navbar"
      style={{ height: isOpen ? "20rem" : "5rem" }}
    >
      <div className="hamburgerIcon" onClick={toggleHamburger}>
        <svg
          className="hamburgerIconBtn"
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 18L20 18"
            stroke="#000000"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M4 12L20 12"
            stroke="#000000"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M4 6L20 6"
            stroke="#000000"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <ul className={isOpen ? "navbar__open" : "navbar__close"}>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/photo-sessions">Photo Works</a>
        </li>
        <li>
          <a href="/contact">Contact me</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
