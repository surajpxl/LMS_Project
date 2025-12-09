import { FiMenu } from "react-icons/fi";
import { AiFillCloseCircle } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../Components/Footer";
import { useDispatch, useSelector } from "react-redux";
function HomeLayout({ children }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // for checking if user is logged in
  const isLoggedIn = useSelector((state) => state?.auth?.isLoggedIn);

  // for displaying the option acc to role
  const role = useSelector((state) => state?.auth?.role);

  function changeWidth() {
    const drawerSide = document.getElementsByClassName("drawer-side");
    drawerSide[0].style.width = "auto";
  }

  function hideDrawer() {
    const element = document.getElementsByClassName("drawer-toggle");
    element[0].checked = false;

    const drawerSide = document.getElementsByClassName("drawer-side");
    drawerSide[0].style.width = "0";
  }

  function handleLogout(e) {
    e.preventDefault()

    // const res = await dispatch(logout)
    // if(res?.payload?.success)
    navigate("/")
  }

  return (
    <>
      <div className="min-h-[90vh]" data-theme="dark">
        <div className="drawer absolute left-0 z-50 w-fit">
          <input className="drawer-toggle" id="my-drawer-3" type="checkbox" />
          <div className="drawer-content">
            <label htmlFor="my-drawer-3" className="cursor-pointer relative">
              <FiMenu
                onClick={changeWidth}
                size={"32px"}
                className="font-bold text-white m-4"
              />
            </label>
          </div>
          <div className="drawer-side w-0">
            <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
            <ul className="menu p-4 w-48 sm:w-80 bg-base-200 text-base-content relative">
              <li className="w-fit absolute right-2 z-50">
                <button onClick={hideDrawer}>
                  <AiFillCloseCircle size={24} />
                </button>
              </li>
              <li>
                <Link to="/">Home</Link>
              </li>

              {isLoggedIn && role === "ADMIN" && (
                <li>
                  <Link to="/admin/dashboard">Admin Dashboard</Link>
                </li>
              )}

              <li>
                <Link to="/courses">All Courses</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>

              {!isLoggedIn && (
                <li>
                  <div className="flex flex-row gap-2 p-2 justify-center self-start">
                    <button className="btn btn-sm btn-primary no-underline">
                      <Link to="/login">Login</Link>
                    </button>
                    <button className="btn btn-sm btn-secondary no-underline">
                      <Link to="/signup">Signup</Link>
                    </button>
                  </div>
                </li>
              )}

              {isLoggedIn && (
                <li>
                  <div className="flex flex-row gap-2 p-2 justify-center self-start">
                    <button className="btn btn-sm btn-primary no-underline">
                      <Link to="/user/profile">Profile</Link>
                    </button>
                    <button className="btn btn-sm btn-secondary no-underline">
                      <Link onClick={handleLogout}>Logout</Link>
                    </button>
                  </div>
                </li>
              )}
            </ul>
          </div>
        </div>

        {children}

        <Footer />
      </div>
    </>
  );
}

export default HomeLayout;
