import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg bg-dark justify-content-center" data-bs-theme="dark">
          <div className="container my-2">
            <Link to="/" className="navbar-brand">
              HOME
            </Link>
            <Link
              to="/post"
              className="btn btn-success py-2 px-4 nav-link active"
              aria-current="page"
            >
              POST
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
