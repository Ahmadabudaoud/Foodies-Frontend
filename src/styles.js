import styled from "styled-components";

export const NavDiv = styled.nav`
  background-color: white;
  border-style: solid;
  height: 50px;
`;
export const ShopImage = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 60%;
`;
export const ListWrapper = styled.div`
  justify-content: flex-start;
  display: flex;
  margin-top: 50px;
  flex-wrap: wrap;
`;
export const ProductWrapper = styled.div`
  color: ${(props) => props.theme.mainColor};
  border-radius: 10px;
  text-align: center;
  height: 100px;
  width: 200px;
  background-color: red;
  margin: 10px;
`;

export const HomeDiv = styled.div`
  align-items: center;

  display: flex;
  flex-direction: column;
`;
