import { FC } from "react";
import styled from "styled-components";

import { Wrapper } from "../../styleHelpers/styledHelpers/Components";
import { Colors } from "../../styleHelpers/styledHelpers/Colors";
import { ExpandedMenu } from "./ExpandedMenu";
import { RightIcons } from "./RightIcons";
import { Dropdown } from "./Dropdown";
import { Link } from "react-router-dom";

const InnerWrapper = styled.div`
  display: flex;
  width: 100%;
  background: ${Colors.white};
`;

const ImageFirst = styled.img`
  height: 40px;
  padding: 5px;
`;

const ImageSearch = styled.img`
  padding-left: 15px;
`;

const InputWrapper = styled.div`
  width: 55%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InsideWrapper = styled.div`
  width: 35%;
  display: flex;
`;

const Top = styled.div`
  width: 20%;
`;

const Input = styled.input`
  font-family: inherit;
  box-sizing: border-box;
  width: 50%;
  height: 50%;
  padding-right: 3%;
  padding-left: 0.5%;
  border: 1px solid #d3d3d3;
  border-radius: 4px;s
`;

export const TopBar: FC = () => {
  return (
    <Wrapper>
      <InnerWrapper>
        <InsideWrapper>
          <ImageFirst src="./icons/icons/logo.png" />

          <Dropdown />
        </InsideWrapper>
        <InputWrapper>
          <Input type="text" placeholder="Search Legalcluster" />
          <ImageSearch src="./icons/icons/search.png" />
        </InputWrapper>
        <Top>
          <RightIcons />
        </Top>
      </InnerWrapper>
    </Wrapper>
  );
};
