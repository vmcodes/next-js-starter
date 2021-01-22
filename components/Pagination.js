import Link from "next/link";

export default function Pegination() {
  return (
    <>
      <div className="text-center">
        <ul className="pagination">
          <li>
            <Link href="/">
              <a>Prev</a>
            </Link>
          </li>

          <li>
            <Link href="/">
              <a>1</a>
            </Link>
          </li>

          <li>
            <Link href="/">
              <a>2</a>
            </Link>
          </li>

          <li>
            <Link href="/">
              <a>3</a>
            </Link>
          </li>

          <li>
            <Link href="/">
              <a>Next</a>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
