export const Login=()=>{
    return (
        <div style={{backgroundColor:"powderblue"}}>
            <nav className="navbar navbar-expand-md navbar-light fs-5">
        <div className="container-fluid">
            <a className="navbar-brand" href="Home">🎓 Career Guru</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" style={{justifyContent : "end"}} id="navbarSupportedContent">
                <button className="btn" style={{border: 0,fontSize: 20}}>Sign-up</button>
            </div>
        </div>
    </nav>
    <img src={require('./img/home.jpg')} alt="Guru logo" style={{width: "45%", height: "35%"}}/>
    <div style={{display:"inline-block", top: 100,margin: "0px 50px",position: "relative",fontSize: "x-large",borderWidth: 2,borderStyle: "solid" , borderRadius: "5%", padding: "5% 5%"}}>
        <p style={{fontWeight: "900"}}>SIGN IN TO YOUR ACCOUNT </p>
        <hr/>
        <form>
            <input type="email" placeholder="Email-Address" className="form-control"/>
            <br/>
            <input type="password" placeholder="******" className="form-control"/>
            <input type="checkbox" className="form-check-input"/>
            <label for="exampleCheck1" style={{fontSize: "medium"}}>Keep me signed in</label>
            <a type="button" className="btn btn-dark" style={{width: "100%", margin: "20px 0px"}} href="afterlogin">Login</a>
            <a href="#" style={{justifyContent: "center",display: "flex", fontSize:"large"}}>Forgot your password</a>
            <p style={{fontSize: "large"}}>Don't have an account? <a href="signup">Register here</a></p>
        </form>
    </div>
        </div>
    );
}
