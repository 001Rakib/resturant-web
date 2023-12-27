/* eslint-disable react/prop-types */
import FoodCard from "../../../components/FoodCard/FoodCard";

const OrderTab = ({ tabName }) => {
  return (
    <div className="grid md:grid-cols-3 gap-10">
      {tabName.map((item) => (
        <FoodCard key={item._id} item={item}></FoodCard>
      ))}
    </div>
  );
};

export default OrderTab;
