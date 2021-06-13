import { FC , useState } from 'react';
import styled from 'styled-components'; 

const Wrapper = styled.div`
    float: left;
    width: 20%;  
    &:hover + ul > li{
        display: block;
    }
`

const ImageFirst = styled.img`
float: left;
padding-right: 7px;
padding-top: 13px;
padding-left: 20px;
`;

const Home = styled.div`
padding-top: 17px;
padding-left: 10px;
`

const Sli = styled.li `
display: list-item;
list-style-position: inside;
width: 100px;
height: 20px;
line-height: 15px;
float: left;
background-color: #FFFF00;
position: relative;
left: 0;
`
const Sul = styled.ul `
position: absolute;
display: none;
`


export const ExpandedMenu: FC = () => {
    const [currentOption, setOption] = useState(3);
    let nazwyobrazow = ["house", "publications", "people", "entities", "administration"]
    let opcje = ["Home" , "Publications" ,"People", "Entities", "Administration"]
    return (
    <Wrapper>
        <div>
            <ImageFirst src={"./icons/icons/" + nazwyobrazow[currentOption] + ".png"}/>
            <Home />
            {opcje[currentOption]}
        </div>
        <Sul>
            <Sli><ImageFirst src="./icons/icons/house.png" /> 
                <Home />
                    Home
            </Sli>
            <Sli><ImageFirst src="./icons/icons/publications.png" /> 
                <Home />
                    Publications
            </Sli>
        </Sul>
    </Wrapper>)
   
    /*return (<Wrapper>            
            <div>
            <ImageFirst src={"./icons/icons/" + nazwyobrazow[currentOption] + ".png"}/>
                <Home />
                {opcje[currentOption]}
            </div>
        </Wrapper>
        );*/
    
/*    return (
        <Wrapper>
            <ul>
                
                <div>
                    <ImageFirst src="./icons/icons/house.png" /> 
                    <Home />
                    Home
                </div>
                <div>
                    <ImageFirst src="./icons/icons/publications.png" /> 
                    <Home />
                    Publications
                </div>
                <div>
                    <ImageFirst src="./icons/icons/people.png" /> 
                    <Home />
                    People
                </div>
                <div>
                    <ImageFirst src="./icons/icons/entities.png" /> 
                    <Home />
                    Entities
                </div>
                <div>
                    <ImageFirst src="./icons/icons/administration.png" /> 
                    <Home />
                    Administration
                </div>

            </ul>
        </Wrapper>
    );*/
};

