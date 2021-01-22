import Link from "next/link";

export default function Footer() {
  return (
    <div className="copyrights">
      <div className="container">
        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
          <p>© Object Press {new Date().getFullYear()}.</p>
        </div>
        <div className="col-lg-8 col-md-8 col-sm-6 col-xs-12">
          <div className="footer-menu">
            <ul className="menu">
              <li>
                <Link href="https://objectpress.co">
                  <a>About</a>
                </Link>
              </li>
              <li>
                <Link href="https://objectpress.co">
                  <a>Privacy</a>
                </Link>
              </li>
              <li>
                <Link href="https://objectpress.co">
                  <a>Contact</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
