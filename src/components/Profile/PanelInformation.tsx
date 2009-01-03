import { FC } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled.div``;

const Header = styled.div`
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 1%;
  padding-left: 1%;
  color: #546088;
`;

const SmallText = styled.div`
  font-size: 13px;
  margin-left: 2%;
  color: #a2a2a2;
  margin-top: 1%;
`;

const ColorText = styled.div`
  margin: 0;
  padding: 2px 0.25%;
  border-radius: 4px;
  margin-left: 1%;
  font-size: 18px;
  color: #546088;
  margin-left: 2%;
  padding: 0.5% 0.5%;
  background-color: #e2f2ff;
  margin-top: 1%;
`;

const ColorTextFlex = styled.div`
  margin: 0;
  padding: 2px 0.25%;
  border-radius: 4px;
  margin-left: 1%;
  font-size: 18px;
  color: #546088;
  margin-left: 2%;
  padding: 0.5% 0.5%;
  background-color: #e2f2ff;
  margin-top: 1%;
  display: flex;
`;

const BigText = styled.div`
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 1%;
  padding-left: 2%;
  color: #546088;
`;

const BigTextFlex = styled.div`
  font-size: 18px;
  font-weight: 400;
  padding-left: 1.5% 1.5%;
  color: #546088;
`;

const BoldText = styled.div`
  font-size: 19px;
  font-weight: 600;
  margin-bottom: 1%;
  padding-left: 2%;
  color: #546088;
  margin-top: 1%;
`;

const HeaderDiv = styled.div`
  display: flex;
  padding-left: 2%;
  &:hover {
    background-color: #ced0d1;
    border-radius: 3px;
    cursor: pointer;
    padding-left: 2%;
  }
`;

const HeaderDivText = styled.div`
  justify-content: center;
  cursor: pointer;
  transition: color 0.24s, border-color 0.24s;
  color: #8e9ce5;
  border-radius: 4px;
  outline: 0;
  background: transparent;
  border: 2px solid transparent;
  padding-left: 6%;
`;

const HeaderDivImage = styled.img`
  height: 66%;
`;

const PanelInformation: FC = () => {
  return (
    <Wrapper>
      <Header>Panel Informations</Header>
      <SmallText>Hourly fee</SmallText>
      <BigText>610$/hour (Negociated)</BigText>
      <SmallText>Terms Conditions</SmallText>
      <BigText>Monthly 10k$ retainer - see with Jeanny Smith</BigText>
      <ColorText>Attachement_lorem.jpg</ColorText>
      <BoldText>Service & projects</BoldText>
      <BigText>Corporate M&A and international qcquisitions</BigText>
      <BoldText>Internal correspondants</BoldText>
      <ColorTextFlex>
        <BigTextFlex>Lorem Kowalski</BigTextFlex>
        <HeaderDiv>
          <HeaderDivImage src="./icons/icons/administration.png" />
          <HeaderDivText>Message</HeaderDivText>
        </HeaderDiv>
        <HeaderDiv>
          <HeaderDivImage src="./icons/icons/administration.png" />
          <HeaderDivText>Profile</HeaderDivText>
        </HeaderDiv>
      </ColorTextFlex>
      <ColorTextFlex>
        <BigTextFlex>Lorem Kowalski</BigTextFlex>
        <HeaderDiv>
          <HeaderDivImage src="./icons/icons/administration.png" />
          <HeaderDivText>Message</HeaderDivText>
        </HeaderDiv>
        <HeaderDiv>
          <HeaderDivImage src="./icons/icons/administration.png" />
          <HeaderDivText>Profile</HeaderDivText>
        </HeaderDiv>
      </ColorTextFlex>
    </Wrapper>
  );
};

export default PanelInformation;
