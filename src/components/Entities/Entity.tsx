import { FC } from "react";
import styled, { css } from "styled-components";
import { IEntity } from "./Entities";

const Wrapper = styled.div<{ isMosaic: boolean }>`
  ${({ isMosaic }) =>
    isMosaic
      ? css`
          width: 21.9%;
          margin: 7px;
          padding: 0px 10px;
        `
      : `
width: 100%;
margin: 10px 0px;
`}
  display: -webkit-flex;
  display: flex;
  -webkit-align-items: center;
  align-items: center;
  -webkit-justify-content: flex-start;
  justify-content: flex-start;
  border-radius: 4px;
  background: #fff;
  box-shadow: 0 2px 6px rgb(91 94 106 / 30%);
  height: 90px;
`;

const Item = styled.div``;

const Image = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 4px;
  padding-left: 2%;
`;

const TextHeader = styled.div``;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 63%;
  padding: 5px;
`;
const TextDescription = styled.div``;

const Entity = ({ ent, isMosaic }: { ent: IEntity; isMosaic: boolean }) => {
  return (
    <Wrapper isMosaic={isMosaic}>
      <Item>
        <Image src={ent.src} />
      </Item>
      <TextWrapper>
        <TextHeader>{ent.header}</TextHeader>
        <TextDescription>{ent.description}</TextDescription>
      </TextWrapper>
    </Wrapper>
  );
};

export default Entity;
