import { FC } from "react";
import styled from "styled-components";
import ResumeWorkHeader from "./ResumeWorkHeader";
import ResumeWorkList from "./ResumeWorkList";
import ResumeWorkListFooter from "./ResumeWorkListFooter";

const Wrapper = styled.div`
  margin-top: 10px;
  width: 91%;
`;

const ResumeWork: FC = () => {
  return (
    <Wrapper>
      <ResumeWorkHeader />
      <ResumeWorkList />
      <ResumeWorkListFooter />
    </Wrapper>
  );
};

export default ResumeWork;
