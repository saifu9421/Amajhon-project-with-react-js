import { Link, Outlet, useNavigation } from "react-router-dom";
import Footer from "../pages/Footer/Footer";
import Spinner from "../components/Spinner/Spinner";


const MainLayout = () => {
    const navigation = useNavigation();
   
   const isLodingData = navigation.state === "loading";

    return (
        <div>
             <section className="flex justify-between px-10 shadow-md py-7">

                <div>
                    <h1 className="text-xl font-semibold">Amajhon</h1>
                </div>
                 <nav>

                    <ul className="flex gap-7">
                        <li><Link to="/">Home</Link></li>
                        <li>
                           <Link to="/products">products</Link>

                        </li>
                        <li><Link to="/dashboard">Dashboard</Link></li>
                    </ul>
                 </nav>
      </section>

  
   {isLodingData ? <Spinner></Spinner> :  <div className="min-h-screen">
    <Outlet></Outlet>
   </div>}
    
    <Footer></Footer>
        </div>
    );
};

export default MainLayout;