import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featured from "./../../../assets/home/featured.jpg";
import "./featured.css";

const Featured = () => {
  return (
    <div className="featured-item bg-fixed text-white pt-8 my-10">
      <SectionTitle
        subHeading={"Check it out"}
        heading={"Featured Item"}
      ></SectionTitle>
      <div className="md:flex justify-center items-center pb-20 pt-12 px-36 bg-slate-500 bg-opacity-40">
        <div>
          <img src={featured} alt="" />
        </div>
        <div className="md:ml-10">
          <p>March 20, 2024</p>
          <p>WHERE CAN I GET SOME?</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            voluptate facere, deserunt dolores maiores quod nobis quas quasi.
            Eaque repellat recusandae ad laudantium tempore consequatur
            consequuntur omnis ullam maxime tenetur.
          </p>
          <button className="btn btn-outline border-0 border-b-4 mt-2 text-white">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
