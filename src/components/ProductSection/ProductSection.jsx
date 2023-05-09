import { FaCoffee } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import CoffeeCard from '../CoffeeCard/CoffeeCard';

const ProductSection = ({coffeesData, setCoffeesData}) => {

    return (
        <div className="mx-16 lg:mx-36 my-16 md:my-28">
            <p className="text-center text-orange-950">--- Sip & Savor ---</p>
            <h2 className="text-5xl font-bold text-center title my-2 text-orange-950">Our Popular Products</h2>
            <div className="text-center">
            <Link to="/addCoffee">
            <button className="btn bg-[#E3B577] hover:bg-orange-300 text-orange-950 mt-2 title text-lg border-orange-950">Add Coffee <FaCoffee className='w-6 h-6 ml-1 text-orange-950'/></button>
            </Link>
            </div>
            <div className='grid lg:grid-cols-2 gap-6 mt-12'>
                {
                  coffeesData &&
                  coffeesData.map(coffee =><CoffeeCard 
                    key={coffee._id}
                    coffee={coffee}
                    coffeesData={coffeesData}
                    setCoffeesData={setCoffeesData}
                  ></CoffeeCard>)
                }
            </div>
        </div>
    );
};

export default ProductSection;