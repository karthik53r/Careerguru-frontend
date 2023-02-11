export const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top ">
            <div className="container-fluid ">
                <a className="navbar-brand  " style={{paddingRight: 20}} href="afterlogin">
                    <h3>Career Guru</h3>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarNavDropdown">
                    <ul className="navbar-nav ">
                        <li className="nav-item">
                            <a className="nav-link text-white" href="jobrec">Job Recommendations</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="saved">Saved Jobs</a>
                        </li>
                    </ul>
                    <ul className="navbar-nav " style={{marginLeft:"auto"}}>
                        <div className="dropdown">
                            <button style={{marginRight: 20 }} id="dLabel" type="button" data-toggle="dropdown"
                                aria-haspopup="true" aria-expanded="false">
                                <img src={require('./img/logo.jpg')} style={{width: "2em",height: "2em"}} alt=""/>
                            </button>
                            <ul className=" dropdown-menu dropdown-menu-end" aria-labelledby="dLabel" data-bs-popper="static">
                                <li><a className="dropdown-item" href="#">Profile</a></li>
                                <li><a className="dropdown-item" href="#">Update Profile</a></li>
                                <li><a className="dropdown-item" href="#">Settings</a></li>
                                <li><a className="dropdown-item" href="#">Help</a></li>
                                <hr style={{margin: 5}}/>
                                    <li><a className="dropdown-item" href="#">Logout</a></li>
                            </ul>
                        </div>
                    </ul>
                </div>
            </div>
        </nav>
    );
}