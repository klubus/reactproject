import { FC } from "react";
import styled, { css } from "styled-components";
import { IEntity } from "./Entities";

const Wrapper = styled.div`
  color: black;
  display: flex;
  margin-top: 10%;
`;

const Item = styled.div<{ isMosaic: boolean }>`
  ${({ isMosaic }) =>
    isMosaic
      ? css`
          width: 24%;
          margin: 5px;
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

const Image = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 4px;
  padding-left: 2%;
`;

const Entity = ({ ent, isMosaic }: { ent: IEntity; isMosaic: boolean }) => {
  return (
    <>
      <Item isMosaic={isMosaic}>
        <Image src={ent.src} />
        {ent.header}
      </Item>
    </>
  );
};

export default Entity;
