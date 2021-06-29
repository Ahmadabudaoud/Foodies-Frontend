import CategoryList from "../categories/CategoryList";
import { HomeDiv, ShopImage } from "../styles";
import NavBar from "./NavBar";

const Home = () => {
  return (
    <HomeDiv>
      <NavBar />
      <ShopImage
        src="https://i.pinimg.com/originals/19/e9/9d/19e99d1a4f11fabb6ff97ffab9b05764.jpg"
        alt="food"
      />
      <CategoryList />
    </HomeDiv>
  );
};
export default Home;
