import { NavLink, Outlet } from "react-router-dom";
import {
  FaShoppingCart,
  FaWallet,
  FaHome,
  FaUsers,
  FaBookReader,
} from "react-icons/fa";
import { MdManageAccounts, MdOutlineManageHistory } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import { FcReadingEbook } from "react-icons/fc";
import useCart from "../hooks/useCart";
import { SiGoogleclassroom } from "react-icons/si";
import useAdmin from "../hooks/useAdmin";
import useInstructor from "../hooks/useInstructor";

const Dashboard = () => {
  const [cart] = useCart();

  const [isAdmin ]= useAdmin();
  const [isInstructor] = useInstructor();

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side bg-[#d5a65f]">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full text-base-content">
          {/* Sidebar content here */}
          {isAdmin || isInstructor ? (
            <>
              { isInstructor ? (
                <>
                  <li>
                    <NavLink to="/dashboard/home">
                      <FaHome className="text-2xl"></FaHome>Instructors Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/dashboard/reservations">
                      <SiGoogleclassroom className="text-2xl"></SiGoogleclassroom>
                      Add Class
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/dashboard/reservations">
                      <FcReadingEbook className="text-2xl"></FcReadingEbook>
                      Enrolled Students
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/dashboard/history">
                      <FaBookReader className="text-2xl"></FaBookReader>My Class
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <NavLink to="/dashboard/home">
                      <FaHome className="text-2xl"></FaHome>Admin Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/dashboard/reservations">
                      <MdManageAccounts className="text-2xl"></MdManageAccounts>Manage User
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/dashboard/history">
                      <MdOutlineManageHistory className="text-2xl"></MdOutlineManageHistory>Manage Class
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/dashboard/allUsers">
                      <FaUsers className="text-2xl"></FaUsers>All User
                    </NavLink>
                  </li>
                </>
              )}
            </>
          ) : (
            <>
              <li>
                <NavLink to="/dashboard/home">
                  <FaHome className="text-2xl"></FaHome>User Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/reservations">
                  <SiGoogleclassroom className="text-2xl"></SiGoogleclassroom>My
                  Class
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/history">
                  <FaWallet className="text-2xl"></FaWallet>Payment History
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/mycart">
                  <FaShoppingCart className="text-2xl"></FaShoppingCart>My Cart
                  <span className="indicator-item badge badge-secondary">
                    +{cart?.length || 0}
                  </span>
                </NavLink>
              </li>
            </>
          )}
          <div className="divider"></div>

          <li>
            <NavLink to="/">
              <FaHome className="text-2xl"></FaHome>Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/classes">
              <FiMenu className="text-2xl"></FiMenu> Our Classes
            </NavLink>
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
