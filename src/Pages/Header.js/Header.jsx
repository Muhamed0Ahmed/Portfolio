function Header() {
  return (
    <div className="navbar navbar-expand-md navbar-light bg-ligh">
      <div className="container-fluid d-flex justify-content-between">
        <a href="#Home" className="navbar-brand">
          Portfolio
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/skills">
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/experiece">
                Experience
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="contact">
                Contact me
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="home">
                Link
              </a>
            </li>
            
           
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
