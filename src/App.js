import Routes from "./components/Routes";
import "./App.css";
import NavBar from "./components/NavBar";
import { HomeDiv } from "./styles";
import { useSelector } from "react-redux";

function App() {
  const loadingCategories = useSelector(
    (state) => state.categoriesReducer.loading
  );

  return (
    <HomeDiv>
      <NavBar />
      {loadingCategories ? <h3>loading...</h3> : <Routes />}
    </HomeDiv>
  );
}

export default App;
