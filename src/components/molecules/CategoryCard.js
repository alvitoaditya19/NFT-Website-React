import { Link } from "react-router-dom";

function CategoryCard({ image, title }) {
  return (
    <div className="col-lg-3 lg:mb-0 mb-3">
      <Link to="/category">
        <div
          className="rounded-[20px] h-44 relative bg-cover bg-center"
          style={{
            backgroundImage: `url(${image})`,
            // backgroundImage: `url(${require(image)})`,
          }}
        >
          <div className="absolute inline-block h-auto w-32 top-0 right-0 bg-[#120227] text-center category-title">
            <h1 className="m-2 text-base text-white font-semibold">{title}</h1>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default CategoryCard;
