import { FC } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  color: black;
  display: flex;
`;

const EntitiesDiv = styled.div`
  display: -webkit-box;
`;

const EntitiesName = styled.div`
  color: #546088;
  font-weight: bold;
  font-family: sans-serif;
  margin-top: 10px;
`;

const EntitiesImage = styled.img`
  margin-top: 5px;
  margin-left: 10px;
`;

const RightView = styled.div`
  display: flex;
  position: absolute;
  left: 90%;
  margin-top: 10px;
`;

const Mosaic = styled.div`
  border: 1px solid grey;
  padding: 2px;
  color: #546088;
  font-size: small;
  border-radius: 4px;
  align-items: center;
  &:hover {
    background-color: #7ca8bd;
    width: 83%;
    border-radius: 3px;
    height: 110%;
    cursor: pointer;
`;

const List = styled.div`
  border: 1px solid grey;
  padding: 2px;
  margin-left: 5px;
  color: #546088;
  font-size: small;
  border-radius: 4px;

  &:hover {
    background-color: #7ca8bd;
    width: 83%;
    border-radius: 3px;
    height: 110%;
    cursor: pointer;
`;

const InsideImage = styled.img`
  padding: 2px;
`;

const Title: FC = () => {
  return (
    <Wrapper>
      <EntitiesDiv>
        <EntitiesName>Entities</EntitiesName>
        <EntitiesImage src="./icons/icons/settings.svg" />
      </EntitiesDiv>
      <RightView>
        <Mosaic>
          <InsideImage src="./icons/icons/cog.svg" />
          Mosaic
        </Mosaic>
        <List>
          <InsideImage src="./icons/icons/cog.svg" />
          List
        </List>
      </RightView>
    </Wrapper>
  );
};

export default Title;
