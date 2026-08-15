import React from "react";
import { useState } from "react";
import { Link,useNavigate} from "react-router-dom";


// dashboard on 3001 backend on 3002 frontend on 3000

const Menu = () => {

  const[selectedMenu,setSelectedMenu]= useState(0);

  const[isProfileDropdownOpen,setProfileDropdownOpen]= useState(false);

  const navigate = useNavigate();

  const handleMenuClick = (index)=>{
    setSelectedMenu(index);
  };

  const handleProfileClick = (index)=>{
    setProfileDropdownOpen(!isProfileDropdownOpen);
  };

 const handleLogout = async () => {

    try {

        const response = await fetch("http://localhost:3002/logout", {
            method: "POST",
            credentials: "include"
        });

        const data = await response.json();

        if (response.ok) {
            alert(data.message);
            window.location.href = "http://localhost:3000/login";
        }

    } catch (error) {

        console.log(error);
        alert("Logout failed");

    }
};

  const menuClass = "menu";
  const activeMenuClass = "selected";
  
  return (
    <div className="menu-container">
      <img src="logo.png" style={{ width: "30px" }} />
      <div className="menus">
        <ul>

          <li>

            <Link to="/" style={{textDecoration:"none"}} onClick={ ()=>{handleMenuClick(1)}}>
            <p className={selectedMenu==1? activeMenuClass : menuClass}>Dashboard</p>
            </Link>

          </li>
          
          <li>

            <Link to="/orders" style={{textDecoration:"none"}} onClick={ ()=>{handleMenuClick(2)}}>
            <p className={selectedMenu==2? activeMenuClass : menuClass}>Orders</p>
            </Link>

          </li>

          <li>

            <Link to="/holdings" style={{textDecoration:"none"}} onClick={ ()=>{handleMenuClick(3)}}>
            <p className={selectedMenu==3? activeMenuClass : menuClass}>Holdings</p>
            </Link>

          </li>

          <li>

            <Link to="/positions" style={{textDecoration:"none"}} onClick={ ()=>{handleMenuClick(4)}}>
            <p className={selectedMenu==4? activeMenuClass : menuClass}>Positions</p>
            </Link>

          </li>

          <li>

            <Link to="/funds" style={{textDecoration:"none"}} onClick={ ()=>{handleMenuClick(5)}}>
            <p className={selectedMenu==5? activeMenuClass : menuClass}>Funds</p>
            </Link>

          </li>

          <li>

            <Link to="/apps" style={{textDecoration:"none"}} onClick={ ()=>{handleMenuClick(6)}}>
            <p className={selectedMenu==6? activeMenuClass : menuClass}>Apps</p>
            </Link>
            

          </li>
        </ul>
        <hr />

        <div className="profile" onClick={handleProfileClick}>
          <div className="avatar">ZU</div>
          <p className="username">USERID</p>
        </div>
        {isProfileDropdownOpen && (
          <div className="profile-dropdown">

            <button onClick={handleLogout}>
              Logout
            </button>

          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;