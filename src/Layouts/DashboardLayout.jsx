import { Link, Outlet } from "react-router-dom";


const DashboardLayout = () => {
    return (
        <div className="flex">
            <div className="w-[20%] bg-red-300">
          <ul>
            <li>
                <Link to="/dashboard">
                Dashboard
                </Link>
            </li>
            <li>
            <Link to="/dashboard/profile">
                profile
                </Link>
            </li>
            <li>
            <Link to="/dashboard/editprofile">
                Editprofile
                </Link>
            </li>
          </ul>
            </div>
             <div className="w-[80%]">
             <Outlet></Outlet>
             </div>
        </div>
    );
};

export default DashboardLayout;