import React, { FC } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  margin-top: 10px;
  width: 91%;
`;

const Wrapperflex = styled.div`
    border-radius: 7px;
    position: relative;
    box-shadow: 1px 1px 3px #888888;
    height: 350px;
    background: #fff;
}
`;

const PublicationBigImage = styled.img`
  width: 100%;
  height: 220px;
  margin-bottom: 2%;
  object-fit: cover;
`;

const ButtomWrapper = styled.div`
  display: flex;
`;

const ButtomImage = styled.img`
  width: 8%;
  margin-left: 2%;
  margin-right: 2%;
`;

const RightTextButtom = styled.div``;

const BottomTextBig = styled.div`
  font-weight: bold;
  font-size: 24px;
  margin-bottom: 2%;
  color: #546088;
`;

const BottomTextSmall = styled.div`
  color: #a2a2a2;
  font-size: 17px;
`;

const SuperCorp: FC = () => {
  return (
    <Wrapper>
      <Wrapperflex>
        <PublicationBigImage src="https://media.istockphoto.com/photos/millennial-black-businesswoman-addressing-colleagues-at-a-corporate-picture-id1146472948" />
        <ButtomWrapper>
          <ButtomImage src="https://media-public.canva.com/gAPiQ/MAEFhFgAPiQ/1/tl.png" />
          <RightTextButtom>
            <BottomTextBig>Super Corp.</BottomTextBig>
            <BottomTextSmall>
              Y’know, me too. That’s another thing we have in common. I hate it
              when you’ve got someone in your face, you try to give someone a
              hint and they won’t leave, and then there’s that big awkward
              silence…
            </BottomTextSmall>
          </RightTextButtom>
        </ButtomWrapper>
      </Wrapperflex>
    </Wrapper>
  );
};

export default SuperCorp;
