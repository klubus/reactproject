import { FC } from "react";
import styled from "styled-components";
import SuperCorp from "../Workspace/SuperCorp";
import MiddleInformations from "../Workspace/MiddleInformations";
import ResumeWork from "./ResumeWork";

const Wrapper = styled.div`
  color: black;
  width: 75%;
`;

const Workspace: FC = () => {
  return (
    <Wrapper>
      <SuperCorp />
      <MiddleInformations />
      <ResumeWork />
    </Wrapper>
  );
};

export default Workspace;
