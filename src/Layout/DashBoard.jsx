import { FaBook, FaCartShopping, FaList, FaUsers } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";
import { FaCalendarAlt, FaHome } from "react-icons/fa";
import { MdOutlineStarBorder } from "react-icons/md";
import { IoMenu } from "react-icons/io5";
import { LuCalendarHeart } from "react-icons/lu";
import { IoIosRestaurant } from "react-icons/io";
import useCart from "../Hooks/useCart";
import { MdEmail } from "react-icons/md";
import useAdmin from "../Hooks/useAdmin";

const DashBoard = () => {
  const [cart] = useCart();

  const [isAdmin] = useAdmin();
  return (
    <div className="flex">
      {/* dashboard sidebar */}
      <div className="w-64 min-h-screen bg-orange-400">
        <ul className="menu p-4">
          {isAdmin ? (
            <>
              <li>
                <NavLink to={"/dashboard/adminHome"}>
                  <FaHome /> Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/addItems"}>
                  <IoIosRestaurant /> Add Items
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/manageItems"}>
                  <FaList></FaList> Manage Items
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/manageBookings"}>
                  <FaBook></FaBook>
                  Manage Bookings
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/allUsers"}>
                  <FaUsers></FaUsers>
                  All Users
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to={"/dashboard/userHome"}>
                  <FaHome /> User Home
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/reservation"}>
                  <FaCalendarAlt /> Reservation
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/cart"}>
                  <FaCartShopping></FaCartShopping>My Cart({cart.length})
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/review"}>
                  <MdOutlineStarBorder />
                  Add Review
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/bookings"}>
                  <LuCalendarHeart />
                  My Bookings
                </NavLink>
              </li>
            </>
          )}
          {/* shared navLinks */}
          <div className="divider"></div>
          <li>
            <NavLink to={"/"}>
              <FaHome />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to={"/order/salad"}>
              <IoMenu />
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink to={"/contact"}>
              <MdEmail></MdEmail>
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
      {/* dashboard content */}
      <div className="flex-1 p-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default DashBoard;
