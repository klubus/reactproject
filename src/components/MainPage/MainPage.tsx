import React, { FC } from "react";
import styled from "styled-components";
import LeftMenu from "../LeftMenu/LeftMenu";
import { TopBar } from "../TopBar/TopBar";
//import {LeftMenu} from '../LeftMenu/LeftMenu';
import { MainColor } from "../../utils/colors";
import RightContent from "./RightContent";

const Wrapper = styled.div``;

const Content = styled.div`
  // max-width: 1200px;
  display: flex;
  background: ${MainColor};
`;

const MainPage: FC = () => {
  return (
    <Wrapper>
      <TopBar />
      <Content>
        <LeftMenu />
        <RightContent />
      </Content>
    </Wrapper>
  );
};

export default MainPage;
