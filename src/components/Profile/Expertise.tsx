import { FC } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  color: black;
  border-radius: 4px;
  background: #fff;
  box-shadow: 0 2px 6px rgb(91 94 106 / 30%);
  width: 74%;
  height: 15%;
`;

const Wrapper2 = styled.div`
  display: flex;
`;

const FlexPhoto = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const HeadInformationText = styled.div`
  width: 44%;
  display: flex;
  position: relative;
`;

const HeadInformationTextFirst = styled.div`
  color: #546088;
  position: absolute;
  bottom: 0;
  width: 50%;
  margin-bottom: ;
`;

const HeadInformationTextSecond = styled.div`
  position: absolute;
  left: 36%;
  bottom: 1%;
`;

const HeadInformationButtons = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const HeadInformationImageDiv = styled.div`
  width: 12%;
  margin-right: 2%;
`;

const Header = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const UserInformationJobTitle = styled.div`
  color: grey;
  padding-top: 7px;
  padding-bottom: 20px;
  font-size: small;
  font-family: sans-serif;
`;

const UserInformationName = styled.div`
  color: #4f4fd5;
  font-size: big;
  font-weight: bold;
  font-family: sans-serif;
  padding-top: 4px;
`;

interface imgProps {
  dimension?: number;
}

const UserInformationDetailsPhoto = styled.img<imgProps>`
  width: ${(props) => props.dimension || "60"}px;
  height: ${(props) => props.dimension || "60"}px;
  margin-top: 10px;
  border-radius: 50%;
`;

const UserInformationDetails = styled.div`
  background: white;
  align-items: center;
  display: flex;
  flex-direction: column;
  padding-left: 7%;
  padding-top: 10%;
  width: 100%;
`;

const Line = styled.hr`
  color: rgba(0, 0, 0, 0.65);
`;

const Text = styled.div`
  margin: 0;
  padding: 0 0.5%;
  border: 2px solid transparent;
`;

const HeaderDiv = styled.div`
  display: flex;
  padding-top: 1%;
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
`;

const HeaderDivImage = styled.img`
  height: 66%;
`;

const Text2 = styled.div``;
const Expertise: FC = () => {
  return (
    <Wrapper>
      <Header>
        <HeaderDiv>
          <HeaderDivImage src="./icons/icons/administration.png" />
          <HeaderDivText>Message</HeaderDivText>
        </HeaderDiv>
        <HeaderDiv>
          <HeaderDivImage src="./icons/icons/administration.png" />
          <HeaderDivText>Create a request</HeaderDivText>
        </HeaderDiv>
        <HeaderDiv>
          <HeaderDivImage src="./icons/icons/administration.png" />
          <HeaderDivText>Add to cluster</HeaderDivText>
        </HeaderDiv>
      </Header>
      <HeadInformationButtons>ss</HeadInformationButtons>

      <Wrapper2>
        <HeadInformationImageDiv>
          <UserInformationDetails>
            <UserInformationDetailsPhoto src="https://i.pinimg.com/236x/47/8b/db/478bdb697c39b3047817a0687b73d5d2--corporate-portrait-business-portrait.jpg" />
            <UserInformationName>Humberta Swift</UserInformationName>
            <UserInformationJobTitle>See profile</UserInformationJobTitle>
          </UserInformationDetails>
        </HeadInformationImageDiv>
        <HeadInformationText>
          <HeadInformationTextFirst>
            <Text>Leanne Graham</Text>
            <Text>Romaguera-Crona</Text>
            <Text>Gwenborough </Text>
            <Text>Partner</Text>
          </HeadInformationTextFirst>
          <HeadInformationTextSecond>
            <Text2>Sincere@april.biz</Text2>
            <Text2>1-770-736-8031 x56442</Text2>
          </HeadInformationTextSecond>
        </HeadInformationText>
      </Wrapper2>
      <Line />
    </Wrapper>
  );
};

export default Expertise;
