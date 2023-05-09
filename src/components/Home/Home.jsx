import './Home.css'
import FollowSection from '../FollowSection/FollowSection';
import ProductSection from '../ProductSection/ProductSection';
import SectionCategory from '../SectionCategory/SectionCategory';
import { useLoaderData } from 'react-router-dom';
import { useState } from 'react';

const Home = () => {
    const loadedCoffee = useLoaderData();
    const [coffeesData, setCoffeesData] = useState(loadedCoffee) 

    return (
        <div>
            <div className="hero-img">
                <div className='mx-16 lg:mx-36 pt-52 lg:ml-[700px]'>
                <h2 className='text-5xl title text-white'>Would you like a Cup of Delicious Coffee?</h2>
                <p className='text-white mt-4'> It,s coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
                <button className='btn bg-[#E3B577] hover:bg-orange-300 mt-8 text-black title text-lg'>Learn More</button>
                </div>
            </div>
            <div className="category-container">
            <SectionCategory/>
            </div>
            <ProductSection  
            className="product-bg"
            coffeesData={coffeesData}
            setCoffeesData={setCoffeesData}
            ></ProductSection>
            <FollowSection/>
        </div>
    );
};

export default Home;