import { useState } from "react";
import HomeCategory from "../HomeCategory/HomeCategory";

const SectionCategory = () => {

    const [categoryData, setCategoryData] = useState()
    useState(() => {
        fetch('http://localhost:5000/category')
        .then(res => res.json())
        .then(data => {
            setCategoryData(data)
        })
    }, [])
    return (
        <div className='mx-16 lg:mx-36 grid sm:grid-cols-2 lg:grid-cols-4 lg:pt-4'>
        {
            categoryData &&
            categoryData.map(singleData => <HomeCategory
            key={singleData._id}
            singleData={singleData}
            ></HomeCategory>)
        }
        </div>
    );
};

export default SectionCategory;