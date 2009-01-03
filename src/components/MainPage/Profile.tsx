import { FC } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import ProfileSection from "../Profile/ProfileSetion";
import Expertise from "../Profile/Expertise";
import PanelInformation from "../Profile/PanelInformation";

const Wrapper = styled.div`
  color: black;
  border-radius: 4px;
  background: #fff;
  box-shadow: 0 2px 6px rgb(91 94 106 / 30%);
  width: 74%;
  height: 15%;
`;

const Line = styled.hr`
  color: black;
`;

const Profile: FC = () => {
  return (
    <Wrapper>
      <ProfileSection />
      <Line />
      <Expertise />
      <Line />
      <PanelInformation />
      <Line />
    </Wrapper>
  );
};

export default Profile;
