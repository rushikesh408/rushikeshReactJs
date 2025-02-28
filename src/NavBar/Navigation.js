function Navigation() {
  return (
    <nav className="navbar shadow mt-3 navbar-expand-lg">
      <div className="container">
        <a className="navbar-brand">
          <img
            src="https://cdn.prod.website-files.com/63da3362f67ed649a19489ea/65a762d88d34c9b08de34039_659f1e3a57ce506fbcc81b42_who%2520owns%2520chatgpt_logo.png"
            width={750}
            height={250}
          />
        </a>
        <div>
        
            <ul className="navbar-nav">
              <li className="nav-item">
                <a href="/" className="nav-link">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="/cooourses" className="nav-link">
                  Courses
                </a>
              </li>
              <li className="nav-item">
                <a href="/signup2" className="nav-link">
                  Create account
                </a>
              </li>
              <li className="nav-item">
                <a href="/login" className="nav-link">
                  Login
                </a>
              </li>
              <li className="nav-item">
                <a href="/profileUpdate" className="nav-link">
                  ProfileUpdate
                </a>
              </li>

              <li className="nav-item">
                <a href="/api-reading" className="nav-link">
                  Get Prducts
                </a>
              </li>
              <li className="nav-item">
                <a href="/get-users" className="nav-link">
                  Get Users
                </a>
              </li>
            </ul>
         
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
