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
  width: 25%;
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
  width: 100%;
  height: 40%;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
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
  color: #161550;
  font-weight: bold;
  font-family: sans-serif;
  font-size: 15px;
  padding-left: 7px;
  padding-top: 7px;
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
`;

const data = [
  { timeDays: 2 },
  { timeDays: 22 },
  { timeDays: 23 },
  { timeDays: 24 },
  { timeDays: 24 },
  { timeDays: 24 },
  { timeDays: 24 },
  { timeDays: 24 },
];

const Workspaces: FC = () => {
  return (
    <Wrapper>
      <Inscription>Workspaces</Inscription>
      <WorkspaceDisplay>
        {data.map((item) => (
          <Workspace>
            <InsideImage src="https://www.prawo.pl/gfx/prawopl/_thumbs/pl/wkdokumenty/000/414/798/1/podpis_00003_istock,nnyD62SdolTLo7bXW5mZ.jpg?v=1" />
            <WorkspaceDisplay>
              <InsideGraphic src="https://thumbs.dreamstime.com/b/kontrakt-cienka-kreskowa-ikona-zgoda-i-podpis-113766916.jpg" />
              <Link to="/workspace">
                <InsideHeader>Client Contract</InsideHeader>
              </Link>
            </WorkspaceDisplay>
            <BottomText>
              <SmallImage src=".\icons\icons\cog.svg" />
              <LabelInfo>Contract</LabelInfo>
              <SmallImage src=".\icons\icons\cog.svg" />
              <LabelInfo>150 users</LabelInfo>
            </BottomText>
            <Footer>Last update {item.timeDays} days ago</Footer>
          </Workspace>
        ))}
      </WorkspaceDisplay>
    </Wrapper>
  );
};

export default Workspaces;
