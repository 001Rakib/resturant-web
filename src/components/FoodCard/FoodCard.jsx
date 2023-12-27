/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
const FoodCard = ({ item }) => {
  const { name, image, recipe, price } = item;

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <p className="bg-slate-900 text-white absolute right-0 mt-4 mr-4 px-4 py-1">
        ${price}
      </p>
      <div className="card-body text-center">
        <h2 className="card-title"> {name} </h2>
        <p> {recipe} </p>
        <div className="card-actions justify-center">
          <button className="btn btn-primary">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
