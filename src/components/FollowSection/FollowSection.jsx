import { useEffect, useState } from "react";

const FollowSection = () => {
    const [followsData, setFollowsData] = useState('');
    useEffect( () => {
        fetch('http://localhost:5000/follow')
        .then(res => res.json())
        .then(data => setFollowsData(data))
    }, [])
    
    return (
        <div className="mx-16 lg:mx-36 my-16 md:my-28">
            <p className="text-center">Follow Us Now</p>
            <h2 className="text-5xl font-bold text-center title text-orange-950">Follow on Instagram</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 lg:mt-12">
                {
                followsData &&
                  followsData.map(data =><img className="lg:w-80" key={data._id} src={data.picture} alt="" />)
                }
            </div>
        </div>
    );
};

export default FollowSection;