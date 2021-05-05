import { FC } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    float: left;
    width: 20%;  
    postion: absolute;
    top: 24px;
    left: 0;
    background-color: blue;
    padding: 16px;
    border: 1px solid;
    ul {
        border: 1px solid red;
    }
`
export const ExpandedMenu: FC = () => {
    return (
        <Wrapper>
            <ul>
                <li>a</li>
              
            </ul>
        </Wrapper>
    );
};