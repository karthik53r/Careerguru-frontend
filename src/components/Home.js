export const Home = () => {
    return (
        <div>
            <div style={{ backgroundColor: "powderblue" }}>
                <nav className="navbar navbar-expand-md navbar-light fs-5">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">🎓 Career Guru</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto">
                                <li className="nav-item">
                                    <a className="nav-link active" href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" href="#">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" href="#">Contact</a>
                                </li>
                            </ul>
                            <button className="btn" style={{ border: 0, paddingLeft: 0, fontSize: 20 }}>Login</button>
                            /
                            <button className="btn" style={{ border: 0, fontSize: 20 }}>Sign-up</button>
                        </div>
                    </div>
                </nav>
                <div style={{ display: "inline-block", width: "40%" }}>
                    <img src={require('./img/home.jpg')} alt="The Guru" style={{ width: "100%", height: "100%" }} />
                </div>
                <div style={{display: "inline-block", fontSize: "200%", fontFamily: "monospace" }}>
                    <p>Namaste!
                        <br />
                        Want to choose a perfect Career for you ?
                        <br />
                        Click On <a href="login">Continue</a> to get started
                    </p>
                </div>
            </div>
        </div >
    );
}