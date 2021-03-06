import React from 'react';
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import useAuth from '../../hooks/useAuth';
import MyOrder from './MyOrder/MyOrder';
import AddProduct from './AddProduct/AddProduct';
import ManageOrder from './ManageOrder/ManageOrder';
import AddReview from './AddReview/AddReview';



const Dashboard = () => {
    const { path, url } = useRouteMatch();
    const { user } = useAuth();
    return (
        <div>
            <div className="text-center my-5">
                {/* <h3>this is dashboard</h3> */}
                <div>
                    <img className="avatar" src={user?.photoURL} alt="Profile-Pic" />
                    <h2>{user?.displayName}</h2>
                </div>
                <div>
                    <div className="d-grid gap-2 d-md-block">
                        <Link to={`${url}`}>
                            <button className="btn btn-primary mx-1" type="button">My Order</button>
                        </Link>
                        <Link to={`${url}/addProduct`}>
                            <button className="btn btn-primary mx-1" type="button">Add Product</button>
                        </Link>
                        <Link to={`${url}/manageOrders`}>
                            <button className="btn btn-primary mx-1" type="button">Manage Order</button>
                        </Link>
                        <Link to={`${url}/addReview`}>
                            <button className="btn btn-primary mx-1" type="button">Add Review</button>
                        </Link>
                    </div>
                </div>
                <hr />
                <div>
                    <Switch>
                        <Route exact path={path}>
                            <MyOrder></MyOrder>
                        </Route>
                        <Route exact path={`${path}/addProduct`}>
                            <AddProduct></AddProduct>
                        </Route>
                        <Route exact path={`${path}/manageOrders`}>
                            <ManageOrder></ManageOrder>
                        </Route>
                        <Route exact path={`${path}/addReview`}>
                            <AddReview></AddReview>
                        </Route>
                    </Switch>
                </div>


                <br /><br /><br /><br /><br /><br />
            </div>
        </div>
    );
};

export default Dashboard;