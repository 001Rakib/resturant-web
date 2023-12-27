import { useState } from "react";
import Cover from "../../Shared/Cover/Cover";
import orderCover from "./../../../assets/shop/order.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../../Hooks/useMenu";
import OrderTab from "../OrderTab/OrderTab";
const Order = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [menu] = useMenu();
  const desserts = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  const drinks = menu.filter((item) => item.category === "drinks");
  return (
    <div>
      <Cover img={orderCover} title={"Order Food"}></Cover>
      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <div className="text-center my-10">
          <TabList>
            <Tab>Salad</Tab>
            <Tab>Pizza</Tab>
            <Tab>Soup</Tab>
            <Tab>Desert</Tab>
            <Tab>Drinks</Tab>
          </TabList>
        </div>
        <TabPanel>
          <OrderTab tabName={salad}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab tabName={pizza}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab tabName={soup}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab tabName={desserts}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab tabName={drinks}></OrderTab>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
