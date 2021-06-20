import React, { FC } from "react";
import styled from "styled-components";
import LeftMenu from "../LeftMenu/LeftMenu";
import { TopBar } from "../TopBar/TopBar";
import { MainColor } from "../../utils/colors";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  margin-top: 10px;
  width: 91%;
  overflow-x: auto;
`;

const Inscription = styled.div`
  margin-top: 15px;
  margin-bottom: 15px;
  margin-left: 10px;
  color: #161550;
  font-weight: bold;
  font-family: sans-serif;
  font-size: 20px;
`;

const Workspace = styled.div`
  width: 33%;
  height: 200px;
  background-color: white;
  margin-bottom: 15px;
  margin-right: 7px;
  border-radius: 6px;
  box-sizing: border-box;
`;

const WorkspaceDisplay = styled.div`
  display: flex;
`;

const InsideImage = styled.img`
  width: 24%;
  height: 43%;
  padding-left: 4%;
  padding-top: 4%;
  padding-bottom: 4%;
`;

const InsideGraphic = styled.img`
  width: 20%;
  height: 20%;
  border: 1px solid black;
  margin-left: 10px;
  border-radius: 3px;
  margin-top: -13px;
  martin-bottom: 13px;
`;

const InsideHeader = styled.div`
  color: #546088;
  font-weight: bold;
  font-family: sans-serif;
  font-size: 15px;
  padding-left: 4%;
  padding-bottom: 4%;
`;

const SmallImage = styled.img`
  margin-left: 5px;
`;

const BottomText = styled.div`
  font-family: sans-serif;
  font-size: 12px;
  color: grey;
  display: flex;
  align-items: center;
  margin: 5px 0 5px 8px;
`;

const Footer = styled.div`
  font-family: sans-serif;
  font-size: 10px;
  color: grey;
  margin-left: 10px;
`;

const LabelInfo = styled.div`
  margin: 0px 5px;
  color: #546088;
`;

const MiddleInformations: FC = () => {
  return (
    <Wrapper>
      <Inscription>Start working on what corporate matters</Inscription>
      <WorkspaceDisplay>
        <Workspace>
          <InsideImage src="https://media-public.canva.com/TOwuw/MACNAeTOwuw/2/tl.png" />
          <WorkspaceDisplay>
            <InsideHeader>Explore your entities</InsideHeader>
          </WorkspaceDisplay>
          <BottomText>
            <LabelInfo>
              Take a few minutes to look at the most important elements and
              specifities of your entities
            </LabelInfo>
          </BottomText>
        </Workspace>
        <Workspace>
          <InsideImage src="https://media-public.canva.com/Y2jA0/MAEH8xY2jA0/1/tl.png" />
          <WorkspaceDisplay>
            <InsideHeader>Structure the ownership</InsideHeader>
          </WorkspaceDisplay>
          <BottomText>
            <LabelInfo>
              Get a clear view of the ownership by looking at the relations
              between individuals and entities
            </LabelInfo>
          </BottomText>
        </Workspace>
        <Workspace>
          <InsideImage src="https://media-public.canva.com/y-pb4/MAA9p3y-pb4/4/tl.png" />
          <WorkspaceDisplay>
            <InsideHeader>Define the calendar</InsideHeader>
          </WorkspaceDisplay>
          <BottomText>
            <LabelInfo>
              Prepare future events by creating detailed plans around the life
              of your entity
            </LabelInfo>
          </BottomText>
        </Workspace>
      </WorkspaceDisplay>
    </Wrapper>
  );
};

export default MiddleInformations;
