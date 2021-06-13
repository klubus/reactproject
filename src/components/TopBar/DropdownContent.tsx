import { EDEADLK } from "node:constants";
import { FC } from "react";
import styled from "styled-components";

const DropdownContainer = styled.div`
  position: absolute;
  top: 23px;
  left: 17px;
  background-color: white;
  border: 1px solid grey;
  width: 313%;
  border-radius: 4px;
  border: 2px grey solid;
`;

const Title = styled.div`
  width: 100%;
  font-size: small;
  color: gray;
  margin-left: 5px;
  margin-bottom: 10px;
`;

const LabelWrapper = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 10px;
  margin-left: 5px;
  margin-right: 15px;
  &:hover {
    background-color: #7ca8bd;
    width: 80%;
    border-radius: 3px;
    height: 110%;
  }
`;

const LabelIcon = styled.img`
  margin-right: 12px;
  width: 12%;
`;

const LabelText = styled.div``;

const Input = styled.input`
  width: 100%;
`;

const InputWrapper = styled.div`
  padding: 5px 17px 5px 10px;
  &:hover {
    background-color: #7ca8bd;
  }
`;

const AccountDiv = styled.div`
  border-top: 1px solid grey;
  padding-top: 5%;
`;

const Logout = styled.div`
  border-top: 1px solid grey;
  padding-top: 8px;
  justify-content: center;
  display: -webkit-flex;
  padding-bottom: 3%;
  &:hover {
    background-color: #7ca8bd;
    width: 100%;
    border-radius: 3px;
    height: 110%;
  }
`;

export const DropdownContent: FC = () => {
  return (
    <DropdownContainer>
      <InputWrapper>
        <Input placeholder="Filter..." />
      </InputWrapper>

      <Title>Platform</Title>
      <LabelWrapper>
        <LabelIcon src="./icons/icons/house.svg" />
        <LabelText>Home</LabelText>
      </LabelWrapper>
      <LabelWrapper>
        <LabelIcon src="./icons/icons/publications.png" />
        <LabelText>Publications</LabelText>
      </LabelWrapper>
      <LabelWrapper>
        <LabelIcon src="./icons/icons/people.png" />
        <LabelText>People</LabelText>
      </LabelWrapper>
      <LabelWrapper>
        <LabelIcon src="./icons/icons/entities.png" />
        <LabelText>Entities</LabelText>
      </LabelWrapper>
      <LabelWrapper>
        <LabelIcon src="./icons/icons/administration.png" />
        <LabelText>Administration</LabelText>
      </LabelWrapper>
      <Title>Workspaces</Title>
      <LabelWrapper>
        <LabelIcon src="./icons/icons/house.svg" />
        <LabelText>Client contract</LabelText>
      </LabelWrapper>
      <LabelWrapper>
        <LabelIcon src="./icons/icons/publications.png" />
        <LabelText>Supplier contract</LabelText>
      </LabelWrapper>
      <LabelWrapper>
        <LabelIcon src="./icons/icons/people.png" />
        <LabelText>Corporate</LabelText>
      </LabelWrapper>
      <LabelWrapper>
        <LabelIcon src="./icons/icons/entities.png" />
        <LabelText>Group Norms</LabelText>
      </LabelWrapper>
      <LabelWrapper>
        <LabelIcon src="./icons/icons/administration.png" />
        <LabelText>Real estate contracts</LabelText>
      </LabelWrapper>
      <AccountDiv>
        <Title>Account</Title>
        <LabelWrapper>
          <LabelIcon src="./icons/icons/house.svg" />
          <LabelText>See profile</LabelText>
        </LabelWrapper>
        <LabelWrapper>
          <LabelIcon src="./icons/icons/publications.png" />
          <LabelText>Privacy</LabelText>
        </LabelWrapper>
        <LabelWrapper>
          <LabelIcon src="./icons/icons/people.png" />
          <LabelText>Settings</LabelText>
        </LabelWrapper>
      </AccountDiv>
      <Logout>Logout</Logout>
    </DropdownContainer>
  );
};
