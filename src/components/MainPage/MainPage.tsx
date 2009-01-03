import React, { FC } from "react";
import styled from "styled-components";
import LeftMenu from "../LeftMenu/LeftMenu";
import { TopBar } from "../TopBar/TopBar";
import { MainColor } from "../../utils/colors";
import RightContent from "./RightContent";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Entities from "../Entities/Entities";
import Workspace from "./Workspace";
import Profile from "./Profile";


const Wrapper = styled.div``;

const Content = styled.div`
  // max-width: 1200px;
  display: flex;
  background: ${MainColor};
`;

const MainPage: FC = () => {
  return (

    <Router>
      <Wrapper>
        <TopBar />
        <Content>
          <LeftMenu />
          <Switch>
            <Route path="/entities" exact>
              <Entities />
            </Route>
          </Switch>
          <Switch>
            <Route path="/" exact>
              <RightContent />
            </Route>
          </Switch>
          <Switch>
            <Route path="/workspace" exact>
              <Workspace />
            </Route>
          </Switch>
          <Switch>
            <Route path="/profile" exact>
              <Profile />
            </Route>
          </Switch>
        </Content>
      </Wrapper>
    </Router>
  );
};

export default MainPage;
