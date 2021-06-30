import CategoryList from "../categories/CategoryList";
import { HomeDiv, ShopImage } from "../styles";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <HomeDiv>
      <ShopImage
        src="https://thumbs.dreamstime.com/b/food-background-breakfast-yogurt-granola-muesli-strawberries-banner-image-website-gray-concrete-table-top-view-214357125.jpg"
        alt="food"
      />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginLeft: "65px",
          width: "30%",

          alignSelf: "flex-start",
        }}
      >
        <h1
          style={{
            alignSelf: "flex-start",
            // marginLeft: "60px",
          }}
        >
          Category
        </h1>
        <Link to="/categories/new">
          <button style={{ marginLeft: "15px", marginTop: "5px" }}>+</button>
        </Link>
      </div>
      <CategoryList />

      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginLeft: "65px",
          width: "30%",

          alignSelf: "flex-start",
        }}
      >
        <h1
          style={{
            alignSelf: "flex-start",
            // marginLeft: "60px",
          }}
        >
          Recipe
        </h1>
        <Link to="/recipe/new">
          <button style={{ marginLeft: "15px", marginTop: "5px" }}>+</button>
        </Link>
      </div>
    </HomeDiv>
  );
};
export default Home;
