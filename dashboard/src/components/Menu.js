import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './Menu.css';
import { User, LogOut, HelpCircle, ChevronRight } from 'lucide-react'; 
import Person4SharpIcon from '@mui/icons-material/Person4Sharp';
import DashboardCustomizeSharpIcon from '@mui/icons-material/DashboardCustomizeSharp';
import AccountBalanceSharpIcon from '@mui/icons-material/AccountBalanceSharp';
import SwapHorizontalCircleOutlinedIcon from '@mui/icons-material/SwapHorizontalCircleOutlined';
import WorkHistorySharpIcon from '@mui/icons-material/WorkHistorySharp';
import AutoGraphSharpIcon from '@mui/icons-material/AutoGraphSharp';

const Menu = () => {
    const [selectedMenu, setSelectedMenu] = useState(0);
    const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
    const handleMenuClick = (index) => {
        setSelectedMenu(index);
    };

    const handleProfileClick = () => {
        setIsProfileDropdownOpen((prevState) => !prevState); 
    };
    const handleLogout = () => {
        alert("Logged out!");
       window.location.href = "http://localhost:3000/";
    };



    const menuClass = "menu";
    const activeMenuClass = "menu selected";

     return (
        <div>
            {/* Logo */}
            <img src="logo512.png" style={{ height: "43px", width:"81px"}} alt="Logo" />

            {/* Menu Items */}
            <div className="menus">
                <ul>
                    <li>
                        <Link style={{ textDecoration: "none" }} to="/" onClick={() => handleMenuClick(0)}>
                            <p className={selectedMenu === 0 ? activeMenuClass : menuClass}><DashboardCustomizeSharpIcon style={{fontSize:"1.8rem"}}></DashboardCustomizeSharpIcon></p>
                        </Link>
                    </li>
                    <li>
                        <Link style={{ textDecoration: "none" }} to="/orders" onClick={() => handleMenuClick(1)}>
                            <p className={selectedMenu === 1 ? activeMenuClass : menuClass}><SwapHorizontalCircleOutlinedIcon style={{fontSize:"1.8rem"}}/></p>
                        </Link>
                    </li>
                    <li>
                        <Link style={{ textDecoration: "none" }} to="/holdings" onClick={() => handleMenuClick(2)}>
                            <p className={selectedMenu === 2 ? activeMenuClass : menuClass}><WorkHistorySharpIcon style={{fontSize:"1.8rem"}}></WorkHistorySharpIcon></p>
                        </Link>
                    </li>
                    <li>
                        <Link style={{ textDecoration: "none" }} to="/positions" onClick={() => handleMenuClick(3)}>
                            <p className={selectedMenu === 3 ? activeMenuClass : menuClass}><AutoGraphSharpIcon style={{fontSize:"1.8rem"}}></AutoGraphSharpIcon></p>
                        </Link>
                    </li>
                    <li>
                        <Link style={{ textDecoration: "none" }} to="/funds" onClick={() => handleMenuClick(4)}>
                            <p className={selectedMenu === 4 ? activeMenuClass : menuClass}><AccountBalanceSharpIcon style={{fontSize:"1.8rem"}}></AccountBalanceSharpIcon></p>
                        </Link>
                    </li>
                </ul>
                <hr />

                <div className="profile" onClick={handleProfileClick}>
                    <div className="avatar"><Person4SharpIcon></Person4SharpIcon></div>
                    <p className="username">USERID</p>
                </div>

                {isProfileDropdownOpen && (
                    <div className="profile-dropdown show">
                        <ul>
                            <li>
                                <Link to="/" style={{ textDecoration: "none" }}>
                                    <User className="mr-2 h-4 w-4" />  Profile <ChevronRight className="ml-auto h-4 w-4" />
                                </Link>
                            </li>
                            <li>
                                <button onClick={handleLogout}>
                                    <LogOut className="mr-2 h-4 w-4" /> Logout <ChevronRight className="ml-auto h-4 w-4" />
                                </button>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Menu;
