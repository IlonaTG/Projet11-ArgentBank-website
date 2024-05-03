import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/actions/authActions";
import Logo from "../../assets/img/argentBankLogo.png";

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
          <img src={Logo} alt="Argent Bank Logo"/>
        </NavLink>
        {isConnected ? (
          <div className="connected">
            <NavLink to="/profile">
            <p>{userName}</p>
              <i className="fa-solid fa-2x fa-circle-user" />
            </NavLink>
            <NavLink to="/">
              <i className="fa-solid fa-2x fa-gear"></i>
            </NavLink>
            <NavLink to="/" onClick={HandleFaLogout}>
              <i className="fa-solid fa-2x fa-power-off"></i>
            </NavLink>
          </div>
        ) : (
          <div className="not-connected">
            <NavLink to="/settings">
              <i className="fa-solid fa-2x fa-gear"></i>
            </NavLink>
            <NavLink to="/login" >
              <i className="fa-solid fa-2x fa-power-off"></i>
            </NavLink>
          </div>
      )}
      </nav> 
    </header>
  )
}

export default Navbar