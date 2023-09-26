const Nav = () => {
  return (
    //this is a nav component
    <div>
      <nav className="navbar bg-body-tertiary">
        <div className="container link">
          <a className="navbar-brand" href="#">
            <img className="imgs" src="logo2.jpg" />
          </a>
          <a className="navbar-brand" href="#">
            Home
          </a>

          <a className="navbar-brand" href="#">
            About
          </a>
          <a className="navbar-brand" href="#">
            Resource
          </a>

          <button className="butClick">Submit</button>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
