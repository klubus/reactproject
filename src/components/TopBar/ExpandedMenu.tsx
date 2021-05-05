import { FC , useState } from 'react';
import styled from 'styled-components'; 

const Wrapper = styled.div`
    float: left;
    width: 20%;  
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

export const ExpandedMenu: FC = () => {
    const [currentOption, setOption] = useState(3);
    let nazwyobrazow = ["house", "publications", "people", "entities", "administration"]
    let opcje = ["Home" , "Publications" ,"People", "Entities", "Administration"]
    return (<Wrapper>            
            <div>
            <ImageFirst src={"./icons/icons/" + nazwyobrazow[currentOption] + ".png"}/>
                <Home />
                {opcje[currentOption]}
            </div>
        </Wrapper>
        );
    
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