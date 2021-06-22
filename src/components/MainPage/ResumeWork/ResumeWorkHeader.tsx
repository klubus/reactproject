import { Dispatch, FC, SetStateAction, useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  margin-top: 10px;
  width: 91%;
  display: flex;
`;

const Header = styled.div`
  margin-top: 15px;
  margin-bottom: 15px;
  margin-left: 10px;
  color: #161550;
  font-weight: bold;
  font-family: sans-serif;
  font-size: 20px;
`;

const FilterInput = styled.div`
  margin-top: 10px;
  position: absolute;
  left: 70%;
`;

const Followed = styled.div`
  margin-top: 10px;
  position: absolute;
  left: 87%;
`;

const Image = styled.img`
  margin-top: 10px;
  position: absolute;
  left: 85%;
`;

const ResumeWorkHeader = ({
  input,
  setInput,
}: {
  input: string;
  setInput: Dispatch<SetStateAction<string>>;
}) => {
  return (
    <Wrapper>
      <Header>Resume your work</Header>
      <FilterInput>
        <input
          type="text"
          value={input}
          onChange={(e: any) => setInput(e.target.value)}
        />
        <img src="./icons/icons/search.png" />
      </FilterInput>
      <Image src="./icons/icons/privacy.png" />
      <Followed>Followed</Followed>
    </Wrapper>
  );
};

export default ResumeWorkHeader;
