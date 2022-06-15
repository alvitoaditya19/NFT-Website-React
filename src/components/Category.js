/* eslint-disable react/style-prop-object */
import { Category1, Category2, Category3, Category4 } from "../assets";
import CategoryCard from "./molecules/CategoryCard";

function Category() {
  return (
    <>
      <div className="container-fluid bg-[#120227]">
        <div className="container">
          <div className=" text-white font-semibold text-xl pt-8 mb-3">
            Category
          </div>
          <div className="row">
            <CategoryCard image={Category1} title="Digital Arts"/>
            <CategoryCard image={Category2} title="Photography"/>
            <CategoryCard image={Category3} title="Trading Card"/>
            <CategoryCard image={Category4} title="Music"/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Category;
