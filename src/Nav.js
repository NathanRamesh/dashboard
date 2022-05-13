import React from "react";
import test from './image/avatar2.png';
import Overview from './Overview';
import { Link } from "react-router-dom";

export default function () {
        return ( 
        <>
            <nav>
                <div className="row mb-5">
                    <div className="col-md-2">
                        <img src={test} alt="avatar2" className="profile"/>
                    </div>
                    <div className="col-md-10">
                        <h5>Welcome, Mike</h5>
                        <i className="fa fa-envelope"></i>
                        <i className="fa fa-user"></i>
                        <i className="fa fa-cog"></i>  
                    </div>
                </div>
                <div className="dashboard-menu-list">
                    <h4>Dashboard</h4>
                    <Link to="/Overview"><a href="#"><i className="fa fa-users"></i> Overview</a></Link>
                    <Link to="/Overview"><a href="#"><i className="fa fa-eye"></i> Views</a></Link>
                    <Link to="/Overview"><a href="#"><i className="fa fa-users"></i> Traffic</a></Link>
                    <Link to="/Overview"><a href="#"><i className="fa fa-bullseye"></i> Geo</a></Link>
                    <Link to="/Overview"><a href="#"><i className="fa fa-diamond"></i> Orders</a></Link>
                    <Link to="/Overview"><a href="#"><i className="fa fa-bell"></i> News</a></Link>
                    <Link to="/Overview"><a href="#"><i className="fa fa-home"></i> General</a></Link>
                    <Link to="/Overview"><a href="#"><i className="fa fa-history"></i> History</a></Link>
                    <Link to="/Overview"><a href="#"><i className="fa fa-cog"></i> Settings</a></Link>
                 
                </div>
            </nav>    
        </>  
        )
    }

