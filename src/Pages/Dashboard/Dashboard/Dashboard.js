import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  // AKAS ER UPOR TAKE BRISTI PORE OUTLET
  return (

      <div className="drawer drawer-mobile border">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content ">
          {/* <!-- Page content here --> */}
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
          <Outlet />
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-400 text-base-content">
            <li className="border m-3">
              <Link
                to="order"
                className="btn  btn-success hover:green-700 w-full"
              >
                Order
              </Link>
            </li>
            <li className="border m-3">
              <Link
                to="manageOrder"
                className="btn  btn-success hover:green-700 w-full"
              >
                manageOrder
              </Link>
            </li>
            <li className="border m-3">
              <Link
                to="user"
                className="btn  btn-success hover:green-700 w-full"
              >
                Users
              </Link>
            </li>
            <li className="border m-3">
              <Link
                to="addProduct"
                className="btn  btn-success hover:green-700 w-full"
              >
                AddProduct
              </Link>
            </li>
          </ul>
        </div>
      </div>
  );
};

export default Dashboard;
