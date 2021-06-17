import { FC, ReactNode } from "react";
import useDropdown from "react-dropdown-hook";
import styled from "styled-components";
import { DropdownContent } from "./DropdownContent";
import DropdownIcon from "../../icons/icons/dropdown.svg";
import { useState } from "react";

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

const DropdownIcon2 = styled.img`
  font-size: 1.25rem;
  width: 24px;
  height: 20px;
`;

export interface IDropdownContent {
  src: string;
  label: string;
  path?: string;
  children?: ReactNode;
}

const labels: IDropdownContent[] = [
  {
    src: "./icons/icons/house.svg",
    label: "Home",
    path: "/",
  },
  {
    src: "./icons/icons/publications.png",
    label: "Publications",
  },
  {
    src: "./icons/icons/people.png",
    label: "People",
  },
  {
    src: "./icons/icons/entities.png",
    label: "Entities",
    path: "/entities",
  },
  {
    src: "./icons/icons/administration.png",
    label: "Administration",
  },
  {
    src: "./icons/icons/administration.png",
    label: "Client contract",
  },
  {
    src: "./icons/icons/administration.png",
    label: "Supplier contract",
  },
  {
    src: "./icons/icons/administration.png",
    label: "Corporate",
  },
  {
    src: "./icons/icons/administration.png",
    label: "Group Norms",
  },
];

export const Dropdown: FC = () => {
  const [wrapperRef, dropdownOpen, toggleDropdown, closeDropdown] =
    useDropdown();
  const [dropdownChoice, setDropdownChoice] = useState(labels[0]);
  return (
    <>
      <Wrapper ref={wrapperRef}>
        <ImageFirst src={dropdownChoice.src} />
        <div style={{ display: "flex" }} onClick={toggleDropdown}>
          <Text>{dropdownChoice.label}</Text>
          <DropdownIcon2 src={DropdownIcon} />
        </div>
        {dropdownOpen && (
          <DropdownContent
            labels={labels}
            setDropdownChoice={setDropdownChoice}
            closeDropdown={closeDropdown}
          />
        )}
      </Wrapper>
      {/* <div onClick={closeDropdown}>Close menu after this click</div> */}
    </>
  );
};
