import { FC, useState } from "react";
import styled, { css } from "styled-components";
import Title from "./Title";
import SearchLine from "../MainPage/SearchLine";
import Entity from "./Entity";

const Wrapper = styled.div`
  width: 75%;
`;
const EntitiesContainer = styled.div<{ isMosaic: boolean }>`
  ${({ isMosaic }) =>
    isMosaic
      ? css`
          display: flex;
          flex-wrap: wrap;
        `
      : `
  flex-direction: column;
`}
  margin: 8px;
`;

export interface IEntity {
  src: string;
  header: string;
  description: string;
}
const entitiesList: IEntity[] = [
  {
    src: "https://wpcdn.us-east-1.vip.tn-cloud.net/www.metropolismag.com/content/uploads/2021/01/600x600.png",
    header: "header",
    description: "description",
  },
  {
    src: "https://wpcdn.us-east-1.vip.tn-cloud.net/www.metropolismag.com/content/uploads/2021/01/600x600.png",
    header: "header",
    description: "description",
  },
  {
    src: "https://wpcdn.us-east-1.vip.tn-cloud.net/www.metropolismag.com/content/uploads/2021/01/600x600.png",
    header: "header",
    description: "description",
  },
  {
    src: "https://wpcdn.us-east-1.vip.tn-cloud.net/www.metropolismag.com/content/uploads/2021/01/600x600.png",
    header: "header",
    description: "description",
  },
  {
    src: "https://wpcdn.us-east-1.vip.tn-cloud.net/www.metropolismag.com/content/uploads/2021/01/600x600.png",
    header: "header",
    description: "description",
  },
  {
    src: "https://wpcdn.us-east-1.vip.tn-cloud.net/www.metropolismag.com/content/uploads/2021/01/600x600.png",
    header: "header",
    description: "description",
  },
  {
    src: "https://wpcdn.us-east-1.vip.tn-cloud.net/www.metropolismag.com/content/uploads/2021/01/600x600.png",
    header: "header",
    description: "description",
  },
  {
    src: "https://wpcdn.us-east-1.vip.tn-cloud.net/www.metropolismag.com/content/uploads/2021/01/600x600.png",
    header: "header",
    description: "description",
  },
  {
    src: "https://wpcdn.us-east-1.vip.tn-cloud.net/www.metropolismag.com/content/uploads/2021/01/600x600.png",
    header: "header",
    description: "description",
  },
];

const Entities: FC = () => {
  const [isMosaic, setIsMosaic] = useState(true);
  const [mylist, setMylist] = useState(entitiesList);

  //sorting
  // const newlist = mylist.sort()
  //setMylist(newlist)
  //filter
  // const newlist = mylist.filter(list => true ? false jezeli true to zostaw to w array a jezeli false to wyrzuc )
  // filter only contains 'a' mylist.filter(list => list.contains(a)

  return (
    <Wrapper>
      <Title setIsMosaic={setIsMosaic} />
      {/* <SearchLine /> */}
      <EntitiesContainer isMosaic={isMosaic}>
        {mylist.map((ent) => (
          <Entity ent={ent} isMosaic={isMosaic} />
        ))}
        {/* <Entity ent={ent} isMosaic={isMosaic} /> */}
        {/* ))} */}
      </EntitiesContainer>
    </Wrapper>
  );
};

export default Entities;
