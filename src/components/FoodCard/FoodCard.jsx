/* eslint-disable react/prop-types */

import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useCart from "../../Hooks/useCart";

// eslint-disable-next-line react/prop-types
const FoodCard = ({ item }) => {
  const { name, image, recipe, price, _id } = item;
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();
  const [, refetch] = useCart();

  const handleAddToCart = () => {
    if (user && user.email) {
      // send cart item to the database
      const cartItem = {
        menuId: _id,
        email: user.email,
        name,
        image,
        price,
      };
      axiosSecure.post("/carts", cartItem).then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: `${name} added to your cart`,
            showConfirmButton: false,
            timer: 1500,
          });
          // refetch the cart to update cart count
          refetch();
        }
      });
    } else {
      Swal.fire({
        title: "You are not logged in",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login",
      }).then((result) => {
        if (result.isConfirmed) {
          // send the user to the login page
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <p className="bg-slate-900 text-white absolute right-0 mt-4 mr-4 px-4 py-1">
        ${price}
      </p>
      <div className="card-body text-center flex flex-col items-center">
        <h2 className="card-title"> {name} </h2>
        <p> {recipe} </p>
        <div className="card-actions justify-center">
          <button
            onClick={handleAddToCart}
            className="btn btn-outline border-0 border-b-4 mt-2 text-orange-400 bg-slate-100"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
