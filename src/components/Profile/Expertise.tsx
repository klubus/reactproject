import { FC } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled.div``;

const SmallText = styled.div`
  font-size: 13px;
  margin-left: 3%;
  color: #a2a2a2;
  margin-top: 1%;
`;

const BigText = styled.div`
  margin: 0;
  padding: 2px 0.25%;
  color: #7d91a1;
  border-radius: 4px;
  margin-left: 1%;
  font-size: 17px;
`;

const BigTextColor = styled.span`
  background-color: #e2f2ff;
`;

const HeadInformationButtons = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Expertise: FC = () => {
  return (
    <Wrapper>
      <HeadInformationButtons>ss</HeadInformationButtons>
      <SmallText>Expertise</SmallText>
      <BigText>
        <BigTextColor>Merges and acquisition</BigTextColor>
      </BigText>
      <SmallText>Specialities</SmallText>
      <BigText>
        <BigTextColor>Cross border operation</BigTextColor>
      </BigText>
      <BigText>
        <BigTextColor>Transaction over 500ME/$</BigTextColor>
      </BigText>
      <SmallText>Admissions to practice law</SmallText>
      <BigText>
        <BigTextColor>Paris bar association</BigTextColor>
      </BigText>
      <BigText>
        <BigTextColor>Tunisian bar association</BigTextColor>
      </BigText>
      <SmallText>Counties</SmallText>
      <BigText>
        <BigTextColor>Tunisia</BigTextColor>
      </BigText>
    </Wrapper>
  );
};

export default Expertise;
