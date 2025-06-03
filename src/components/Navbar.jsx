export default function Navbar() {
  return (
    <header>
      <nav className="navbar">
        <ul className="navbar__list">
          <li>
            <div className="navbar__brand">
              <img
                src="public/images/react-logo.png"
                alt="React logo"
                className="navbar__logo"
              />
              <span className="navbar__name">ReactFacts</span>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
}
