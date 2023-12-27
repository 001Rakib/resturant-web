import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuBg from "./../../../assets/menu/banner3.jpg";
import dessertBg from "./../../../assets/menu/dessert-bg.jpeg";
import pizzaBg from "./../../../assets/menu/pizza-bg.jpg";
import saladBg from "./../../../assets/menu/salad-bg.jpg";
import soupBg from "./../../../assets/menu/soup-bg.jpg";
import useMenu from "../../../Hooks/useMenu";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";
const Menu = () => {
  const [menu] = useMenu();
  const desserts = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  const offered = menu.filter((item) => item.category === "offered");
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Cover img={menuBg} title={"our menu"}></Cover>
      {/* main cover */}
      <SectionTitle
        subHeading={"Don't Miss"}
        heading={"today's offer"}
      ></SectionTitle>
      {/* offered menu items */}
      <MenuCategory items={offered}></MenuCategory>
      {/* dessert menu items */}
      <MenuCategory
        items={desserts}
        title={"Dessert"}
        coverImg={dessertBg}
      ></MenuCategory>
      {/* pizza menu items */}
      <MenuCategory
        items={pizza}
        title={"Pizza"}
        coverImg={pizzaBg}
      ></MenuCategory>
      {/* salad menu items */}
      <MenuCategory
        title={"Salad"}
        items={salad}
        coverImg={saladBg}
      ></MenuCategory>
      {/* soup menu category */}
      <MenuCategory
        items={soup}
        title={"Soup"}
        coverImg={soupBg}
      ></MenuCategory>
    </div>
  );
};

export default Menu;
