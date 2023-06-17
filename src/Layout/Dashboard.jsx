import { NavLink, Outlet } from "react-router-dom";
import {
  FaShoppingCart,
  FaWallet,
  FaCalendarAlt,
  FaHome,
  FaUtensils,
  FaBook,
  FaUsers,
} from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { AiOutlineBars } from "react-icons/ai";
import useCart from "../hooks/useCart";
import Navbar from "../Pages/Shared/Navbar/Navbar";



const Dashboard = () => {
  const [cart] = useCart();

  const isAdmin = true;
  

  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        <Navbar></Navbar>
        <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side bg-[#D1A054]">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full text-base-content">
          {
            isAdmin ? 
            <>
              <li>
                <NavLink to="/dashboard/home">
                  <FaHome></FaHome>Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/addItem">
                  <FaUtensils></FaUtensils>Add an Item
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageItems">
                  <AiOutlineBars></AiOutlineBars> Manage Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/history">
                <FaBook></FaBook> Manage Booking
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/allusers">
                  <FaUsers></FaUsers> All Users
                </NavLink>
              </li>
            </>
              : 
            <>
              {/* Sidebar content here */}
              <li>
                <NavLink to="/dashboard/home">
                  <FaHome></FaHome>User Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/reservations">
                  <FaCalendarAlt></FaCalendarAlt>Reservations
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/history">
                  <FaWallet></FaWallet>Payment History
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/mycart">
                  <FaShoppingCart></FaShoppingCart>My Cart
                  <span className="indicator-item badge badge-secondary">
                    {cart?.length || 0}+
                  </span>
                </NavLink>
              </li>
            </>
            }

          <div className="divider"></div>

          <li>
            <NavLink to="/">
              <FaHome></FaHome>Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/classes">
              <FiMenu></FiMenu>All Classes
            </NavLink>
          </li>
          <li>
            <NavLink to="/">Order Food</NavLink>
          </li>
          <li>
            <NavLink></NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
