import { FC } from "react";
import styled from "styled-components";
import LatestPublications from "./LatestPublications";
import Workspaces from "./Workspaces";
import ResumeWork from "./ResumeWork";

const Wrapper = styled.div`
  width: 75%;
`;

const RightContent: FC = () => {
  return (
    <Wrapper>
      <LatestPublications />
      <Workspaces />
      <ResumeWork />
    </Wrapper>
  );
};

export default RightContent;
