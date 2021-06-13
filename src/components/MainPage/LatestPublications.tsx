import React, { FC } from "react";
import styled from "styled-components";
import LeftMenu from "../LeftMenu/LeftMenu";
import { TopBar } from "../TopBar/TopBar";
import { MainColor } from "../../utils/colors";

const Wrapper = styled.div`
  margin-top: 10px;
  width: 91%;
`;

const Wrapperflex = styled.div`
  display: flex;
  border-radius: 7px;
  position: relative;
  box-shadow: 1px 1px 3px #888888;
`;

const PublicationBigImage = styled.img`
  width: 300px;
  height: 300px;
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
`;

const LatestPublicationsName = styled.div`
  font-size: 20px;
  padding-top: 10px;
  margin-left: 10px;
  color: #161550;
  font-weight: bold;
  font-family: sans-serif;
  margin-bottom: 8px;
`;

const PublicationImage = styled.img`
  width: 65px;
  height: 65px;
  padding-right: 5px;
`;

const Container = styled.div`
  padding-top: 10px;
  background-color: white;
  width: 100%;
  position: relative;
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
`;

const Publications = styled.div``;

const Publication = styled.div`
  width: 90%;
  height: 100%;
  margin-bottom: 5px;
  margin-left: 10px;
  display: flex;
`;

const PublicationsAbout = styled.div`
  color: #161550;
  font-family: sans-serif;
  font-size: 14px;
`;

const PublicationsRight = styled.div`
  position: relative;
`;

const PublicationsInformation = styled.div`
  display: flex;
`;

const PublicationsInformationDate = styled.div`
  font-size: 13px;
  bottom: 10px;
  position: absolute;
  color: gray;
`;

const PublicationsInformationImage = styled.img`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  bottom: 6px;
  position: absolute;
  left: 65px;
`;

const PublicationsInformationName = styled.div`
  font-size: 13px;
  bottom: 10px;
  position: absolute;
  left: 90px;
  color: #161550;
`;

const Seemore = styled.a`
  bottom: 10px;
  position: absolute;
  display: flex;
  margin-left: 10px;
  text-decoration: none;
  color: #2b5477;
  font-family: sans-serif;
  font-size: 15px;
`;

const PublicationBigImageInformation = styled.div`
  position: absolute;
  bottom: 20px;
  left: 20px;
  color: white;
  font-family: "Roboto", sans-serif;
`;

const LatestPublications: FC = () => {
  return (
    <Wrapper>
      <Wrapperflex>
        <PublicationBigImage src="https://s3.eu-central-1.amazonaws.com/pressland-cms/cache/metatags_image/cg/wiezowce-w-polsce.jpeg" />
        <PublicationBigImageInformation>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
          laborum cumque dolorem, animi incidunt fuga quas saepe.
        </PublicationBigImageInformation>
        <Container>
          <LatestPublicationsName>Latest publications</LatestPublicationsName>
          <Seemore href="google.com">See more publications</Seemore>

          <Publications>
            <Publication>
              <PublicationImage src="https://s3.eu-central-1.amazonaws.com/pressland-cms/cache/metatags_image/cg/wiezowce-w-polsce.jpeg" />
              <PublicationsRight>
                <PublicationsAbout>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  pretium id nunc sit amet varius. Sed pretium id nunc sit amet
                  varius.
                </PublicationsAbout>
                <PublicationsInformation>
                  <PublicationsInformationDate>
                    7 jan. 2020
                  </PublicationsInformationDate>
                  <PublicationsInformationImage src="https://i.pinimg.com/236x/47/8b/db/478bdb697c39b3047817a0687b73d5d2--corporate-portrait-business-portrait.jpg" />
                  <PublicationsInformationName>
                    John Doe
                  </PublicationsInformationName>
                </PublicationsInformation>
              </PublicationsRight>
            </Publication>
            <Publication>
              <PublicationImage src="https://s3.eu-central-1.amazonaws.com/pressland-cms/cache/metatags_image/cg/wiezowce-w-polsce.jpeg" />
              <PublicationsRight>
                <PublicationsAbout>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  pretium id nunc sit amet varius. Sed pretium id nunc sit amet
                  varius.
                </PublicationsAbout>
                <PublicationsInformation>
                  <PublicationsInformationDate>
                    7 jan. 2020
                  </PublicationsInformationDate>
                  <PublicationsInformationImage src="https://i.pinimg.com/236x/47/8b/db/478bdb697c39b3047817a0687b73d5d2--corporate-portrait-business-portrait.jpg" />
                  <PublicationsInformationName>
                    John Doe
                  </PublicationsInformationName>
                </PublicationsInformation>
              </PublicationsRight>
            </Publication>
            <Publication>
              <PublicationImage src="https://s3.eu-central-1.amazonaws.com/pressland-cms/cache/metatags_image/cg/wiezowce-w-polsce.jpeg" />
              <PublicationsRight>
                <PublicationsAbout>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  pretium id nunc sit amet varius. Sed pretium id nunc sit amet
                  varius.
                </PublicationsAbout>
                <PublicationsInformation>
                  <PublicationsInformationDate>
                    7 jan. 2020
                  </PublicationsInformationDate>
                  <PublicationsInformationImage src="https://i.pinimg.com/236x/47/8b/db/478bdb697c39b3047817a0687b73d5d2--corporate-portrait-business-portrait.jpg" />
                  <PublicationsInformationName>
                    John Doe
                  </PublicationsInformationName>
                </PublicationsInformation>
              </PublicationsRight>
            </Publication>
          </Publications>
        </Container>
      </Wrapperflex>
    </Wrapper>
  );
};

export default LatestPublications;
