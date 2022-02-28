import React,{useEffect,useState} from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

const Navbar = () => {
  var Navigate = useNavigate();
  const [user,setUser]=useState({
  });

const auth=async()=>{
try {
  const response = await fetch ('/logout',{
    mathod:'GET',
    headers:{
      "Content-Type":"application/json",
    }
  });
  console.log(response)
  if(response.status===200){
    Navigate('/login')
    window.alert("Logout Successfull")
  }
  else{
    throw new Error("HUI")
  }
} catch (e) {
  console.log(e)
  window.alert("Need to login first")
}
}


  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="#">
            Bio-Web
          </Link>
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/Login"
                >
                  Login
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/Bio">
                  Bio Data
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Contact">
                  Contact Us
                </Link>
              </li>

            </ul>


              <button className="btn btn-danger ms-2" onClick={auth} type="submit">
                Logout
              </button>

          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
