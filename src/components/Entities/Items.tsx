import { FC } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  color: black;
  display: flex;
  margin-top: 10%;
`;

const Item = styled.div`
  display: -webkit-flex;
  display: flex;
  -webkit-align-items: center;
  align-items: center;
  -webkit-justify-content: flex-start;
  justify-content: flex-start;
  padding: 0.5%;
  border-radius: 4px;
  background: #fff;
  box-shadow: 0 2px 6px rgb(91 94 106 / 30%);
  width: 55%;
  height: 70px;
`;

const Image = styled.img`
  width: 20%;
  height: 80%;
  border-radius: 4px;
  padding-left: 2%;
`;

const Items: FC = () => {
  return (
    <Wrapper>
      <Item>
        <Image src="https://wpcdn.us-east-1.vip.tn-cloud.net/www.metropolismag.com/content/uploads/2021/01/600x600.png" />
      </Item>
    </Wrapper>
  );
};

export default Items;
