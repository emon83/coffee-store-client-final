import "./HomeCategory.css";

const HomeCategory = ({ singleData }) => {
  const { picture, title, description } = singleData;
  return (
    <div>
      <img className="mt-8" src={picture} alt="" />
      <h4 className="text-4xl title mt-4 text-orange-950 font-medium">{title}</h4>
      <p className="mt-2 text-orange-950">{description}</p>
    </div>
  );
};

export default HomeCategory;
