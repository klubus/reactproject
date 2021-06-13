import { FC } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  margin-top: 10px;
  width: 100%;
`;

const Workspace = styled.div`
  width: 100%;
  height: 80px;
  background-color: white;
  padding-bottom: 20px;
  margin-right: 7px;
  border-radius: 6px;
  margin-bottom: 15px;
  box-shadow: 1px 1px 3px #888888;
`;

const WorkspaceDisplay = styled.div`
  display: flex;
`;

const InsideHeader = styled.div`
  color: #100db5;
  font-weight: bold;
  font-family: sans-serif;
  font-size: 15px;
  margin: 10px 0 0 15px;
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
  margin: 7px 0 0 10px;
`;

const LabelInfo = styled.div`
  margin: 0px 5px;
`;

const Lorem = styled.div`
  margin: 7px 0 0 15px;
  color: gray;
`;

const ResumeWorkList: FC = () => {
  return (
    <Wrapper>
      <Workspace>
        <WorkspaceDisplay>
          <InsideHeader>Contract #145</InsideHeader>
        </WorkspaceDisplay>
        <Lorem>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio
          voluptate tempore nisi tenetur atque mollitia, non dicta ipsa
          molestiae. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Ab, ipsam.
        </Lorem>
        <BottomText>
          <SmallImage src=".\icons\icons\cog.svg" />
          <LabelInfo>Subsid. corp.</LabelInfo>
          <SmallImage src=".\icons\icons\cog.svg" />
          <LabelInfo>Corporate</LabelInfo>
          Updated 3 days ago by John Dee
        </BottomText>
      </Workspace>
    </Wrapper>
  );
};

export default ResumeWorkList;
