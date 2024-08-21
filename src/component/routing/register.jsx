export function Register(){
    return(
        <div className="d-flex justify-content-center align-items-center" style={{height:"100vh"}}>
            <form className="p-3 border border-1 border-dark rounded rounded-2" style={{boxShadow:"2px 2px 2px grey"}}>
                <h2>User Login <span className="bi bi-person-fill"></span></h2>
                <dl>
                    <dt>Username</dt>
                    <dd><input type="text" className="form-control" /></dd>
                    <dt>Password</dt>
                    <dd><input type="text" className="form-control" /></dd>
                    <dt>Email</dt>
                    <dd><input type="email" className="form-control"/></dd>
                    <dt>Age</dt>
                    <dd><input type="number" className="form-control"/></dd>
                </dl>
                <button className="btn btn-info w-100">Register</button>
            </form>
        </div>
    )
}