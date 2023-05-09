import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const Main = () => {
    return (
        <>
           <Header></Header>
           <div className="">
            <Outlet></Outlet>
            </div> 
            <Footer></Footer>
        </>
    );
};

export default Main;