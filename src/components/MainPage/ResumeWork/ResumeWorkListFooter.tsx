import { FC } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  margin-top: 10px;
  width: 100%;
  display: flex;
`;

const Previous = styled.div`
  width: 100%;
  color: #007fbc;
`;

const Next = styled.div`
  width: 100%;
  color: #007fbc;
`;

const Numbers = styled.div`
  width: 100%;
  color: #007fbc;
`;

const ResumeWorkListFooter: FC = () => {
  return (
    <Wrapper>
      <Previous>PREVIOUS</Previous>
      <Numbers>01 ... 09 10 11 ... 18</Numbers>
      <Next>NEXT</Next>
    </Wrapper>
  );
};

export default ResumeWorkListFooter;
