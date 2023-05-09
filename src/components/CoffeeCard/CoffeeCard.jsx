import { Link } from "react-router-dom";
import './CoffeeCard.css'
import { FaEye, FaEdit, FaTrash } from 'react-icons/fa';
import Swal from "sweetalert2";

const CoffeeCard = ({coffee, coffeesData, setCoffeesData}) => {
    const {_id, photo, name, chef, details} = coffee;

    const handleDelete = _id => {
        console.log(_id); 
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
              fetch(`http://localhost:5000/coffee/${_id}`, {
                method: 'DELETE',
              })
              .then(res => res.json())
              .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                  Swal.fire(
                    'Deleted!',
                    'Your coffee has been deleted.',
                    'success'
                  )
                  const remaining = coffeesData.filter(cof => cof._id !== _id);
                  setCoffeesData(remaining);
                }
              })
            }
          })
    }

    return (
        <div className="card card-side bg-base-100 single-card p-4">
        <figure>
          <img src={photo} alt="Coffee" />
        </figure>
        <div className="flex justify-between w-full pr-4 items-center">
          <div>
            <p><span className="text-lg font-semibold">Name: </span> <span className="text-lg text-gray-600">{name}</span></p>
            <p><span className="text-lg font-semibold">Chef: </span><span className="text-lg text-gray-600">{chef}</span></p>
            <p><span className="text-lg font-semibold">Details: </span> <span className="text-lg text-gray-600">{details}</span></p>
          </div>
          <div className="card-actions justify-end">
            <div>
              <Link to={`detailsCoffee/${_id}`}>
                <FaEye className="w-7 h-7 text-white rounded-sm bg-orange-950 p-1" />
              </Link>
              <Link to={`updateCoffee/${_id}`}>
                <FaEdit className="w-7 h-7 text-white rounded-sm bg-orange-950 p-1 my-2"/>
              </Link>
              <FaTrash onClick={ ()=> handleDelete(_id)} className="w-7 h-7 mt-2 text-white rounded-sm bg-orange-950 p-1"/>
            </div>
          </div>
        </div>
      </div>
    );
};

export default CoffeeCard;