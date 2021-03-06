import styled from "styled-components";

export const NavDiv = styled.nav`
  background-color: white;
  border-style: solid;
  height: 50px;
  width: 90px;
`;
export const ShopImage = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 90%;
  height: 70%;
`;
export const ListWrapper = styled.div`
  justify-content: flex-start;
  display: flex;
  margin-top: 50px;
  flex-wrap: wrap;
`;
export const ProductWrapper = styled.div`
  color: ${(props) => props.theme.mainColor};
  border-style: ${(props) => (props.selected ? "solid" : "none")};
  border-radius: 10px;
  text-align: center;
  font-weight: bold;
  border-color: green;

  width: 200px;
  margin: 10px;
  fill-opacity: initial;
  box-shadow: 4px 4px lightgrey;
`;

export const HomeDiv = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

export const CardImage = styled.img`
  border-radius: 10px;
  width: 100%;
  height: 75%;
`;
export const IngredientHome = styled.div``;
