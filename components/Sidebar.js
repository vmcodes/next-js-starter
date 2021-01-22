import Link from "next/link";

export default function Sidebar() {
  return (
    <>
      <div className="logo-wrapper">
        <Link href="https://objectpress.co">
          <a className="navbar-brand" />
        </Link>
      </div>
      <div className="menu-wrapper">
        <nav className="flat-menu flat-menu-dark-orange flat-menu-slide-up">
          <input
            type="checkbox"
            id="toggle-one"
            name="toggle"
            className="toggle-menu-input"
          />
          <label htmlFor="toggle-one" className="toggle-menu-label">
            <span className="fa fa-bars" />
            Menu
          </label>
          <ul className="flat-responsive-menu">
            <li>
              <Link href="/">
                <a className="btn sidebar-text">Home</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
