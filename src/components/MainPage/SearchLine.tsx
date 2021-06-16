import { FC } from "react";
import styled from "styled-components";
import { ItemsContent } from "../Entities/ItemsContent";
import useDropdown from "react-dropdown-hook";

const Wrapper = styled.div`
  display: flex;
  margin-top: 10%;
`;

const InsideImage = styled.img``;

const FirstFilter = styled.button`
  display: flex;
  cursor: pointer;
`;

const FirstFilterText = styled.div`
  margin-right: 20%;
`;

const Option = styled.img`
  margin-left: 20%;
`;

const Sort = styled.div`
  margin-left: 20%;
  display: flex;
`;

const Filters = styled.div`
  margin-left: 20%;
  display: flex;
`;

const FullSize = styled.img`
  margin-left: 20%;
`;

const Share = styled.div`
  margin-left: 20%;
  display: flex;
`;

const Input = styled.input`
  font-family: inherit;
  border: 1px solid #d3d3d3;
  border-radius: 4px;
  margin-left: 20%;
`;

const ImageFirst = styled.img`
  weight: 10px;
  height: 45%;
`;

const Items = styled.div`
  display: flex;
  position: relative;
  cursor: pointer;
  outline: 0;
  top: 25%;
  left: 8%;
  font-size: 107%;
  color: #161550;
  z-index: 1;
`;

const Text = styled.div`
  margin-left: 15%;
  margin-top: 2px;
  color: black;
  font-family: sans-serif;
`;

const SearchLine: FC = () => {
  const [wrapperRef, dropdownOpen, toggleDropdown, closeDropdown] =
    useDropdown();
  return (
    <Wrapper>
      <FirstFilter disabled>
        <InsideImage src="./icons/icons/cog.svg" />
        <FirstFilterText>All</FirstFilterText>
        <InsideImage src="./icons/icons/cog.svg" />
      </FirstFilter>
      <Option src="./icons/icons/cog.svg" />
      <Sort>
        <img src="./icons/icons/cog.svg" />
        Sort
      </Sort>
      <Filters>
        <img src="./icons/icons/cog.svg" />
        Filters
      </Filters>
      <FullSize src="./icons/icons/cog.svg" />
      <Share>
        <img src="./icons/icons/cog.svg" />
        Filters
      </Share>
      <Input type="text" placeholder="Filter by title..." />
      <Items ref={wrapperRef}>
        <ImageFirst src="./icons/icons/house.png" />
        <Text onClick={toggleDropdown}>Home</Text>
        {dropdownOpen && <ItemsContent />}
      </Items>
      {/* <div onClick={closeDropdown}>Close menu after this click</div> */}
    </Wrapper>
  );
};

export default SearchLine;
