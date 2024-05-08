import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/actions/authActions";
import Logo from "../../assets/img/argentBankLogo.webp";

function Navbar(){
  const isConnected = useSelector((state) => state.auth.token);
  const userName = useSelector((state) => state.user.userData.userName);

  const dispatch = useDispatch();
  const navigate = useNavigate();
    
  const HandleFaLogout = () => {
    dispatch(logout());
    localStorage.clear();
    navigate("/");
  }
  
  return(
    <header>
      <h1 className="sr-only">Argent Bank</h1>
      <nav className="main-nav">
        <NavLink to="/" className="main-nav-logo">
          <img className="main-nav-logo-image" src={Logo} alt="Argent Bank Logo"/>
        </NavLink>
        {isConnected ? (
          <div className="connected">
            <NavLink className="main-nav-item" to="/profile">
            <i className="fa fa-user-circle" />
            <p>{userName}</p>
            </NavLink>
            <NavLink className="main-nav-item" to="/" onClick={HandleFaLogout}>
              <i className="fa fa-sign-out"></i>
              <p>Sign Out</p>
            </NavLink>
          </div>
        ) : (
          <div className="not-connected">
            <NavLink className="main-nav-item" to="/login" >
              <i className="fa fa-user-circle" aria-hidden="true"></i>
              <p>Sign In</p>
            </NavLink>
          </div>
      )}
      </nav> 
    </header>
  )
}

export default Navbar