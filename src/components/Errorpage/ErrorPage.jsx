import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import img from '../../images/404/404.gif'
import { Link } from "react-router-dom";
import { FaArrowLeft } from 'react-icons/fa';

const ErrorPage = () => {
    return (
        <>
            <Header/>
            <Link to='/' className="flex items-center justify-center mt-8">
                <FaArrowLeft className="w-6 h-6 text-orange-950 -mr-2"/>
                <button className="btn btn-link no-underline title text-xl text-orange-950">Back to home</button>
            </Link>
            <img className="w-100vh mx-auto" src={img} alt="" />
            <Footer/>
        </>
    );
};

export default ErrorPage;