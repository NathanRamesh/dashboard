import React from "react";
import black from "./image/region.jpg";
import user1 from "./image/avatar2.png";
import user2 from "./image/avatar3.png";
import user3 from "./image/avatar4.png";
import user4 from "./image/avatar5.png";
import user5 from "./image/avatar6.png";

export default function () {
    return (    
            <div className="whole-content">
                <h4 className="p-3"><i className="fa fa-tachometer"></i> My Dashboard</h4>
                <div className="container-fluid">
                    <div className="row p-3 boxed-list text-white">
                        <div className="col-md-3 bg-danger p-4 box">
                            <div className="boxed-content">
                                <div className="boxed-icon">
                                <i className="fa fa-comment-o"></i>
                            </div>
                            <div className="values">
                                <h3>52</h3>
                            </div>
                            </div>
                            <h4>Messages</h4>
                        </div>
                        <div className="col-md-3 bg-primary p-4 box">
                            <div className="boxed-content">
                                <div className="boxed-icon">
                                    <i className="fa fa-eye"></i>
                                </div>
                                <div className="values">
                                    <h3>99</h3>
                                </div>
                            </div>
                            <h4>Views</h4>
                        </div>
                        <div className="col-md-3 bg-success p-4 box">
                            <div className="boxed-content">
                                <div className="boxed-icon">
                                <i className="fa fa-share-alt"></i>
                            </div>
                            <div className="values">
                                <h3>23</h3>
                            </div>
                            </div>
                            <h4>Shares</h4>
                        </div>
                        <div className="col-md-3  bg-warning p-4 box">
                            <div className="boxed-content">
                                <div className="boxed-icon">
                                <i className="fa fa-users"></i>
                            </div>
                            <div className="values">
                                <h3>50</h3>
                            </div>
                            </div>
                            <h4>Users</h4>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 region-image">
                            <h3>Regions</h3>
                            <img src={black} alt="Region"/>
                        </div>
                        <div className="col-md-8">
                            <h3>Feeds</h3>
                            <table className="feed-table">
                                <tbody>
                                    <tr>
                                        <td><i className="fa fa-user text-primary"></i></td>
                                        <td>New record, over 90 views.</td>
                                        <td>10 mins</td>
                                    </tr>
                                    <tr>
                                        <td><i className="fa fa-bell text-danger"></i></td>
                                        <td>Database error.</td>
                                        <td>10 mins</td>
                                    </tr>
                                    <tr>
                                        <td><i className="fa fa-home text-warning"></i></td>
                                        <td>New record, over 40 users.</td>
                                        <td>10 mins</td>
                                    </tr>
                                    <tr>
                                        <td><i className="fa fa-comment-o text-danger"></i></td>
                                        <td>New comments.</td>
                                        <td>10 mins</td>
                                    </tr>
                                    <tr>
                                        <td><i className="fa fa-bookmark text-primary"></i></td>
                                        <td>Check transactions.</td>
                                        <td>10 mins</td>
                                    </tr>
                                    <tr>
                                        <td><i className="fa fa-laptop text-danger"></i></td>
                                        <td>CPU overload.</td>
                                        <td>10 mins</td>
                                    </tr>
                                    <tr>
                                        <td><i className="fa fa-share-alt text-success"></i></td>
                                        <td>New shares.</td>
                                        <td>10 mins</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="row">
                        <h4>General Stats</h4>
                        <div className="col-md-12 general-list">
                            <h5>New Visitors</h5>
                            <ul>
                                <li className="twenty-five bg-success">+25%</li>
                            </ul>
                            <h5>New Users</h5>
                            <ul>
                                <li className="fifty bg-warning">50%</li>
                            </ul>
                            <h5>Bounce Rate</h5>
                            <ul>
                                <li className="seventy-five bg-danger">75%</li>
                            </ul>
                        </div>
                    </div>
                    <div className="countries">
                            <h3>Countries</h3>
                        <table>
                            <tbody>
                                <tr>
                                    <td>United States</td>
                                    <td>65%</td>
                                </tr>
                                <tr>
                                    <td>UK</td>
                                    <td>15.7%</td>
                                </tr>
                                <tr>
                                    <td>Russia</td>
                                    <td>5.6%</td>
                                </tr>
                                <tr>
                                    <td>Spain</td>
                                    <td>2.1%</td>
                                </tr>
                                <tr>
                                    <td>India</td>
                                    <td>1.9%</td>
                                </tr>
                                <tr>
                                    <td>France</td>
                                    <td>1.5%</td>
                                </tr>
                            </tbody>
                        </table>
                        <button className="more-btn p-3">More Countries <i class="fa fa-arrow-right"></i></button>
                    </div>
                    <div className="recent-user mt-5">
                        <h3>Recent Users</h3>
                        <ul className="bg-white">
                            <li> <img src={user1} alt="user1"/> Mike</li>
                            <li> <img src={user2} alt="user1"/> Jill</li>
                            <li> <img src={user3} alt="user1"/> Jane</li>
                        </ul>
                    </div>
                    <div className="Recent-Comments row mt-5 p-3">
                        <h3>Recent Comments</h3>
                        <div className="col-md-2">
                            <img src={user4}/>
                        </div>
                        <div className="col-md-9">
                            <h4>John <span>Sep 29, 2014, 9:12 PM</span></h4>
                            <p>Keep up the GREAT work! I am cheering for you!! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                        <div className="col-md-2">
                            <img src={user5}/>
                        </div>
                        <div className="col-md-9">
                            <h4>Bo <span>Sep 28, 2014, 10:15 PM</span></h4>
                            <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                    <div className="types row text-white p-5">
                    <div className="col-md-4">
                            <h4 className="border-bottom border-success border-5 pb-3">Demographic</h4>
                            <ul>
                                <li>Language</li>
                                <li>Country</li>
                                <li>City</li>
                            </ul>
                        </div>
                        <div className="col-md-4">
                        <h4 className="border-bottom border-danger border-5 pb-3">System</h4>
                            <ul>
                                <li>Browser</li>
                                <li>OS</li>
                                <li>More</li>
                            </ul>
                        </div>
                        <div className="col-md-4">
                        <h4 className="border-bottom border-warning border-5 pb-3">Target</h4>
                            <ul>
                                <li>Users</li>
                                <li>Active</li>
                                <li>Geo</li>
                                <li>Interests</li>
                            </ul>
                        </div>
                    </div>
                </div>
        </div>

    )
}  