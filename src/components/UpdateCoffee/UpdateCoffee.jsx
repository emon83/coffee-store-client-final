import { Link, useLoaderData } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
    const coffee = useLoaderData();

    const { _id, name, chef, supplier, taste, category, details, photo } = coffee;

    const handleUpdateCoffee = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const updatedCoffee = {name, chef, supplier, taste, category, details, photo}
        //console.log(updatedCoffee);

        //send data to server
        fetch(`http://localhost:5000/coffee/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedCoffee)
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            if (data.modifiedCount > 0) {
                Swal.fire({
                    title: 'Success!',
                    text: 'Coffee updated successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
    }
    return (
        <div className="mx-16 lg:mx-36">
        <Link to="/" className="flex items-center justify-start mt-8">
          <FaArrowLeft className="w-6 h-6 text-orange-950 -mr-2" />
          <button className="btn btn-link no-underline title text-xl text-orange-950">
            Back to home
          </button>
        </Link>
        <div className="from-container my-12">
          <h2 className="text-5xl text-center font-bold title pt-16 text-orange-950">
            Update Existing Coffee Details
          </h2>
          <p className="mt-8 text-center mx-8 lg:mx-56 text-orange-950">
            It is a long established fact that a reader will be distraceted by the
            readable content of a page when looking at its layout. The point of
            using Lorem Ipsum is that it has a more-or-less normal distribution of
            letters, as opposed to using Content here.
          </p>
          <div className="mx-12 lg:mx-20 lg:mt-8">
            <form onSubmit={handleUpdateCoffee}>
              {/* form name and chef row */}
              <div className="md:flex gap-4 mb-4">
                <div className="form-control md:w-1/2">
                  <label className="label">
                    <span className="label-text text-lg lg:text-xl text-gray-700  font-semibold">
                      Name
                    </span>
                  </label>
                  <label className="input-group">
                    <input
                      type="text"
                      name="name"
                      defaultValue={name}
                      placeholder="Enter coffee name"
                      className="input input-bordered w-full"
                    />
                  </label>
                </div>
                <div className="form-control md:w-1/2">
                  <label className="label">
                    <span className="label-text text-lg lg:text-xl text-gray-700  font-semibold">
                      Chef
                    </span>
                  </label>
                  <label className="input-group">
                    <input
                      type="text"
                      name="chef"
                      defaultValue={chef}
                      placeholder="Enter coffee chef"
                      className="input input-bordered w-full"
                    />
                  </label>
                </div>
              </div>
              {/* form supplier and taste row */}
              <div className="md:flex gap-4 mb-4">
                <div className="form-control md:w-1/2">
                  <label className="label">
                    <span className="label-text text-lg lg:text-xl text-gray-700  font-semibold">
                      Supplier
                    </span>
                  </label>
                  <label className="input-group">
                    <input
                      type="text"
                      name="supplier"
                      defaultValue={supplier}
                      placeholder="Enter coffee supplier"
                      className="input input-bordered w-full"
                    />
                  </label>
                </div>
                <div className="form-control md:w-1/2">
                  <label className="label">
                    <span className="label-text text-lg lg:text-xl text-gray-700  font-semibold">
                      Taste
                    </span>
                  </label>
                  <label className="input-group">
                    <input
                      type="text"
                      name="taste"
                      defaultValue={taste}
                      placeholder="Enter coffee taste"
                      className="input input-bordered w-full"
                    />
                  </label>
                </div>
              </div>
              {/* form category and details row */}
              <div className="md:flex gap-4 mb-4">
                <div className="form-control md:w-1/2">
                  <label className="label">
                    <span className="label-text text-lg lg:text-xl text-gray-700  font-semibold">
                      Category
                    </span>
                  </label>
                  <label className="input-group">
                    <input
                      type="text"
                      name="category"
                      defaultValue={category}
                      placeholder="Enter coffee category"
                      className="input input-bordered w-full"
                    />
                  </label>
                </div>
                <div className="form-control md:w-1/2">
                  <label className="label">
                    <span className="label-text text-lg lg:text-xl text-gray-700  font-semibold">
                      Details
                    </span>
                  </label>
                  <label className="input-group">
                    <input
                      type="text"
                      name="details"
                      defaultValue={details}
                      placeholder="Enter coffee category"
                      className="input input-bordered w-full"
                    />
                  </label>
                </div>
              </div>
              {/* form photo url row */}
              <div>
                <div className="form-control w-full mb-4">
                  <label className="label">
                    <span className="label-text text-lg lg:text-xl text-gray-700  font-semibold">
                      Photo URL
                    </span>
                  </label>
                  <label className="input-group">
                    <input
                      type="text"
                      name="photo"
                      defaultValue={photo}
                      placeholder="Enter photo URL"
                      className="input input-bordered w-full"
                    />
                  </label>
                </div>
              </div>
              <input
                type="submit"
                value="Update Coffee Details"
                className="btn btn-block title bg-[#ba9667] hover:bg-orange-200 text-black text-lg lg:mt-6"
              />
            </form>
          </div>
        </div>
      </div>
    );
};

export default UpdateCoffee;