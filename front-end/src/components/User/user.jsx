import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUserName } from "../../redux/actions/userActions";

function User () {
  const token = useSelector((state) => state.auth.token);
  const userData = useSelector((state) => state.user.userData);

  const [display, setDisplay] = useState(true);
  const [userName, setUserName] = useState("");
  
  const dispatch = useDispatch();

  const handleSubmitUsername = async (event) =>{
    event.preventDefault();
    try {
      const response = await fetch(
        "http://localhost:3001/api/v1/user/profile",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ userName }),
        }
      );
      if (response.ok) {
        const data = await response.json();
        const updatedUserName = data.body.userName;
        dispatch(updateUserName(updatedUserName));
        setDisplay(!display);

      } else {
        console.log("Champs invalides");
      }
    } catch (error) {
      console.error(error);
    }
  }


  return (
    <div className="header">{display ? (
      <div>
        <h2>
        Welcome back,
        <br />
        {userData.firstName} {userData.lastName} !
        </h2>
        <button className="edit-button" onClick={() => setDisplay(!display)}>
          Edit Name
        </button>
      </div>) : (<div>
        <h2>Edit user info</h2>
        <form>
          <div className="edit-input">
            <label htmlFor="username">User name:</label>
            <input
              type="text"
              id="username"
              defaultValue={userData.username}
              onChange={(event) => setUserName(event.target.value)}/>
          </div>
          <div className="edit-input">
            <label htmlFor="firstName">First name:</label>
            <input
              type="text"
              id="firstName"
              defaultValue={userData.firstName}
              disabled={true}/>
          </div>
          <div className="edit-input">
            <label htmlFor="lastName">Last name:</label>
            <input
              type="text"
              id="lastName" 
              defaultValue={userData.lastName}
              disabled={true}/>
          </div>
          <div className="buttons">
            <button className="edit-username-button-save" onClick={handleSubmitUsername}>Save</button>
            <button className="edit-username-button-cancel" onClick={() => setDisplay(!display)}>Cancel</button>
          </div>
        </form>
      </div>
      )}
    </div>
  );
}

export default User;