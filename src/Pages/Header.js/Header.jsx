function Header(props) {
  let {setPage} = props;
  // console.log(setPage)  
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
              <span className="nav-link active" aria-current="page" onClick={() => setPage("Home")}>
                Home
              </span>
            </li>
            <li className="nav-item" >
              <span className="nav-link active" aria-current="page" onClick={() => setPage("About")}>
                About
              </span>
            </li>
            <li className="nav-item">
              <span className="nav-link" onClick={ () => setPage("Skills")}>
                Skills
                </span>
                </li>
            
            <li className="nav-item">
              <span className="nav-link" onClick={() => setPage("Experience")}>
                Experience
              </span>
            </li>
            <li className="nav-item">
              <span className="nav-link active" aria-current="page" onClick={() => setPage("Projects")}>
                Projects
              </span>
            </li>
            <li className="nav-item">
              <span className="nav-link" href="home">
                Link
              </span>
            </li>
            
           
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
