import { FC } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  color: black;
  border-radius: 4px;
  background: #fff;
  box-shadow: 0 2px 6px rgb(91 94 106 / 30%);
  display: flex;
  width: 100%;
`;

const HeadInformation = styled.div`
  width: 10%;
`;

const HeadInformationText = styled.div`
  width: 40%;
  display: flex;
`;

const HeadInformationTextFirst = styled.div``;

const HeadInformationTextSecond = styled.div``;

const HeadInformationButtons = styled.div`
  width: 40%;
`;

const HeadInformationImageDiv = styled.div``;

const UserInformationDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50%;
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
`;

const Profile: FC = () => {
  return (
    <Wrapper>
      <HeadInformation>
        <HeadInformationImageDiv>
          <UserInformationDetails>
            <UserInformationDetailsContainer>
              <UserInformationDetailsPhoto src="https://i.pinimg.com/236x/47/8b/db/478bdb697c39b3047817a0687b73d5d2--corporate-portrait-business-portrait.jpg" />
              <UserInformationName>Humberta Swift</UserInformationName>
              <UserInformationJobTitle>See profile</UserInformationJobTitle>
            </UserInformationDetailsContainer>
          </UserInformationDetails>
        </HeadInformationImageDiv>
        <HeadInformationText>
          <HeadInformationTextFirst>ssss</HeadInformationTextFirst>
          <HeadInformationTextSecond>ssss</HeadInformationTextSecond>
        </HeadInformationText>
      </HeadInformation>
    </Wrapper>
  );
};

export default Profile;
