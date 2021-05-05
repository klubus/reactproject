import { FC } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    position: absolute; 
    top: 7px;
    right: calc(1% - 7px);
`
const Images = styled.img`
padding-right: 20px;
padding-top: 11px;
`;



export const RightIcons: FC = () => {
    return (
        <Wrapper>
                     <Images src="./icons/icons/house.png"/>
                     <Images src="./icons/icons/comments.png"/>
                     <Images src="./icons/icons/bell.png"/>
        </Wrapper>
    );
};