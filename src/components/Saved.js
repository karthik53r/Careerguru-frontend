import { Nav } from "./Nav";
export const Saved=()=>{
    return (
        <div>
            <Nav/>
            <div className="container-fluid " style={{width: "70%"}}>
        <div className="py-4 fw-bold h4 " style={{color:"rgb(0, 141, 141)"}} >Bookmarked Jobs</div>
        <div style={{overflowx:"auto"}}>
        <table className="table align-middle mb-0 bg-white">
            <thead className="bg-dark text-white">
                <tr>
                    <th>Company</th>
                    <th>Role</th>
                    <th>Job Type</th>
                    <th>Experience</th>
                    
                    <th>Apply</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <div className="d-flex align-items-center">
                            <img src={require("./img/logo.jpg")} alt=""
                                style={{width: 45, height: 45}} className="rounded-circle" />
                            <div className="ms-3">
                                <p className="fw-bold mb-1">Company1</p>
                                <p className="text-muted mb-0">Company1@gmail.com</p>
                            </div>
                        </div>
                    </td>
                    <td>
                        <p className="fw-normal mb-1">Software engineer</p>
                        <p className="text-muted mb-0">IT department</p>
                    </td>
                    <td>
                        Full Time
                    </td>
                    <td>
                        3-5 yrs
                    </td>
                    
                    <td>
                        <button type="button" className="btn btn-link btn-sm btn-rounded fw-bold">
                            Link
                        </button>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div className="d-flex align-items-center">
                            <img src={require("./img/logo.jpg")} className="rounded-circle" alt=""
                                style={{width: 45, height: 45}} />
                            <div className="ms-3">
                                <p className="fw-bold mb-1">Company2</p>
                                <p className="text-muted mb-0">Company2@gmail.com</p>
                            </div>
                        </div>
                    </td>
                    <td>
                        <p className="fw-normal mb-1">Consultant</p>
                        <p className="text-muted mb-0">Finance</p>
                    </td>
                    <td>
                        Flexible
                    </td>
                    <td>
                        NA
                    </td>
                    
                    <td>
                        <button type="button" className="btn btn-link btn-rounded btn-sm fw-bold">
                            Link
                        </button>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div className="d-flex align-items-center">
                            <img src={require("./img/logo.jpg")} className="rounded-circle" alt=""
                                style={{width: 45, height: 45}} />
                            <div className="ms-3">
                                <p className="fw-bold mb-1">Company3</p>
                                <p className="text-muted mb-0">Company3@gmail.com</p>
                            </div>
                        </div>
                    </td>
                    <td>
                        <p className="fw-normal mb-1">Designer</p>
                        <p className="text-muted mb-0">UI/UX</p>
                    </td>
                    <td>
                        Full Time
                    </td>
                    <td>
                        {'>'}2yrs
                    </td>
                    
                    <td>
                        <button type="button" className="btn btn-link btn-rounded btn-sm fw-bold">
                            Link
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    </div>
    <div className="container">
        <footer className="py-3 my-4">
            <hr/>
            <p className="text-center text-muted">&copy; 2023 Company, Inc</p>
        </footer>
    </div>
        </div>
    );
}