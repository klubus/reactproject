import { FC } from "react";
import styled from "styled-components";
import Title from "./Title";
import SearchLine from "../MainPage/SearchLine";
import Items from "./Items";

const Wrapper = styled.div``;

const Entities: FC = () => {
  return (
    <Wrapper>
      <Title />
      <SearchLine />
      <Items />
    </Wrapper>
  );
};

export default Entities;
