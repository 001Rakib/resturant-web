import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";

/* eslint-disable react/prop-types */
const MenuCategory = ({ items, title, coverImg }) => {
  return (
    <div className="p-8">
      {title && <Cover img={coverImg} title={title}></Cover>}

      <div className="grid md:grid-cols-2 gap-4 my-10">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
    </div>
  );
};

export default MenuCategory;
