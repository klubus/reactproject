import { FC } from 'react';
import styled from 'styled-components';

import { Wrapper } from '../../styleHelpers/styledHelpers/Components';
import { Colors } from '../../styleHelpers/styledHelpers/Colors';
import { ExpandedMenu } from './ExpandedMenu';

const InnerWrapper = styled.div`
float: left; 
width: 40%;  
    background: ${Colors.white};
`;

const RightIcons = styled.div`
    float: left;    
    width: 30%;  
    
`;
 
const InputWrapper = styled.div`
position: fixed; 
width: 30%;  
`;

export const TopBar : FC = () => {
    return(
        <Wrapper>
            <InnerWrapper>
                <img src="./icons/icons/logo.png"/>
                <div>
                    <ExpandedMenu />
                </div>
                <InputWrapper> 
                    <input type='text' />
                    <img src="./icons/icons/search.png"/>
                </InputWrapper>
                <RightIcons>
                     <img src="./icons/icons/house.png"/>
                     <img src="./icons/icons/comments.png"/>
                     <img src="./icons/icons/bell.png"/>
                </RightIcons>
            </InnerWrapper>
        </Wrapper>
    );
};