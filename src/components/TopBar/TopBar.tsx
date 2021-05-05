import { FC } from 'react';
import styled from 'styled-components';

import { Wrapper } from '../../styleHelpers/styledHelpers/Components';
import { Colors } from '../../styleHelpers/styledHelpers/Colors';
import { ExpandedMenu } from './ExpandedMenu';
import { RightIcons } from './RightIcons';

const InnerWrapper = styled.div`
float: left; 
width: 100%;
    background: ${Colors.white};
`;

const ImageFirst = styled.img`
float: left;
   height: 40px;
   padding: 5px;
`;

const ImageSearch = styled.img`
padding-left: 15px;

`;
 
const InputWrapper = styled.div`
position: absolute; 
left: 50%;
transform: translate(-50%, 50%);

`;

export const TopBar : FC = () => {
    return(
        <Wrapper>
            <InnerWrapper>
                <ImageFirst src="./icons/icons/logo.png" /> 
                    <ExpandedMenu />
                <InputWrapper> 
                    <input type='text' />
                    <ImageSearch src="./icons/icons/search.png"/>
                </InputWrapper>
                <RightIcons />
            </InnerWrapper>
        </Wrapper>
    );
};