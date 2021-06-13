import { FC } from "react";
import useDropdown from "react-dropdown-hook";
import styled from "styled-components";
import { DropdownContent } from "./DropdownContent";

const ImageFirst = styled.img`
  weight: 10px;
  height: 45%;
`;

const Wrapper = styled.div`
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

export const Dropdown: FC = () => {
  const [wrapperRef, dropdownOpen, toggleDropdown, closeDropdown] =
    useDropdown();
  return (
    <>
      <Wrapper ref={wrapperRef}>
        <ImageFirst src="./icons/icons/house.png" />
        <Text onClick={toggleDropdown}>Home</Text>
        {dropdownOpen && <DropdownContent />}
      </Wrapper>
      {/* <div onClick={closeDropdown}>Close menu after this click</div> */}
    </>
  );
};
