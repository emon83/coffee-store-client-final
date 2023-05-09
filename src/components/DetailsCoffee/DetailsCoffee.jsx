import { FaArrowLeft } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import './DetailsCoffee.css'

const DetailsCoffee = () => {
    const coffeeData = useLoaderData();

    const { name, chef, supplier, taste, category, details, photo } = coffeeData;

    return (
        <div className="mx-16 lg:mx-36">
           <Link to="/" className="flex items-center justify-start mt-8">
            <FaArrowLeft className="w-6 h-6 text-orange-950 -mr-2" />
            <button className="btn btn-link no-underline title text-xl text-orange-950">
            Back to home
          </button>
        </Link>
        <div className="coffee_card md:flex justify-center items-center gap-10 my-10 md:mt-10 md:mb-20">
            <div className="">
                <img className="lg:w-[351px] lg:h-[400px] mx-auto" src={photo} alt="" />
            </div>
            <div className="text-center md:text-start">
                <h5 className="text-4xl font-semibold text-orange-950 title">Niceties</h5>
                <p className="text-lg mt-8"><span className="text-gray-700 font-semibold">Name: </span><span className="text-gray-600">{name}</span></p>
                <p className="text-lg my-2"><span className="text-gray-700 font-semibold">Chef: </span><span className="text-gray-600">{chef}</span></p>
                <p className="text-lg my-2"><span className="text-gray-700 font-semibold">Supplier: </span><span className="text-gray-600">{supplier}</span></p>
                <p className="text-lg my-2"><span className="text-gray-700 font-semibold">Taste: </span><span className="text-gray-600">{taste}</span></p>
                <p className="text-lg my-2"><span className="text-gray-700 font-semibold">Category: </span><span className="text-gray-600">{category}</span></p>
                <p className="text-lg my-2"><span className="text-gray-700 font-semibold">Details: </span><span className="text-gray-600">{details}</span></p>
            </div>
        </div>
        </div>
    );
};

export default DetailsCoffee;