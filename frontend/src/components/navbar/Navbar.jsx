import React from 'react'
import { Link } from "react-router-dom";
import { useDispatch,useSelector } from 'react-redux'
import { logoutUser } from '../../actions/userActions';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const { isLoggedIn,login } = useSelector(
    (state) => state.appInfo
  );
  const handleClick=async(event)=>{
    event.preventDefault()
    dispatch(logoutUser(login.user._id))
    navigate("/")
  }
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <Link className="navbar-brand" to="/">
              QuizzApp
            </Link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item dropdown">
            
          </li>
          
        </ul>
        <form class="d-flex">
          {isLoggedIn?
          <button class="btn btn-outline-danger" type="submit" onClick={handleClick}>Log out</button>: <><Link to="/register"><button class="btn btn-outline-primary mx-2" type="submit">Register</button></Link>
          <Link to="/login"><button class="btn btn-outline-danger" type="submit">Log in</button>
</Link></>}
        </form>
      </div>
    </div>
  </nav>
  )
}

export default Navbar