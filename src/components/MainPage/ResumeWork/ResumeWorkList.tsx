import React, { FC, useEffect } from "react";
import styled from "styled-components";
import { IWorkList } from ".";

import { IState } from '../../../reducers';
import { IUsersReducer } from '../../../reducers/usersReducers';
import { getUsers } from '../../../actions/usersActions';
import { getImg} from '../../../actions/imagesActions';
import { getPost} from '../../../actions/postsActions';
import { useDispatch, useSelector } from 'react-redux';
import { IImageReducer } from '../../../reducers/imageReducers';
import { IPostsReducer } from '../../../reducers/postsReducers';

type GetImg = ReturnType<typeof getImg>
type GetUsers = ReturnType<typeof getUsers>
type GetPosts = ReturnType<typeof getPost>


const Wrapper = styled.div`
  margin-top: 10px;
  width: 100%;
`;

const Workspace = styled.div`
  width: 100%;
  height: 80px;
  background-color: white;
  padding-bottom: 20px;
  margin-right: 7px;
  border-radius: 6px;
  margin-bottom: 15px;
  box-shadow: 1px 1px 3px #888888;
`;

const WorkspaceDisplay = styled.div`
  display: flex;
`;

const InsideHeader = styled.div`
  color: #100db5;
  font-weight: bold;
  font-family: sans-serif;
  font-size: 15px;
  margin: 10px 0 0 15px;
`;

const SmallImage = styled.img`
  margin-left: 5px;
`;

const BottomText = styled.div`
  font-family: sans-serif;
  font-size: 12px;
  color: grey;
  display: flex;
  align-items: center;
  margin: 7px 0 0 10px;
`;

const LabelInfo = styled.div`
  margin: 0px 5px;
`;

const Lorem = styled.div`
  margin: 7px 0 0 15px;
  color: gray;
`;

const ImageName = styled.img`  width: 20px;
height: 20px;
border-radius: 50%;
margin-left: 5px;
`

const ResumeWorkList = ({ workList }: { workList: IWorkList[] }) => {
  const {usersList } = useSelector<IState, IUsersReducer>(state => ({
    ...state.users
}));

const {imageList} = useSelector<IState, IImageReducer>(state =>({
    ...state.photos
}))

const {postsList} = useSelector<IState, IPostsReducer>(state =>({
    ...state.posts
}))

const dispatch = useDispatch();

useEffect(() => {
    dispatch<GetImg>(getImg());
    dispatch<GetUsers>(getUsers());
    dispatch<GetPosts>(getPost());
}, [dispatch]);
  return (
  
    <Wrapper>
      {workList.map((work) => (
        <Workspace>
          <WorkspaceDisplay>
            <InsideHeader>{work.name}</InsideHeader>
          </WorkspaceDisplay>
          <Lorem>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio
            voluptate tempore nisi tenetur atque mollitia, non dicta ipsa
            molestiae. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Ab, ipsam.
          </Lorem>
          <BottomText>
            <SmallImage src=".\icons\icons\cog.svg" />
            <LabelInfo>Subsid. corp.</LabelInfo>
            <SmallImage src=".\icons\icons\cog.svg" />
            <LabelInfo>Corporate</LabelInfo>
            <ImageName src={imageList[0]?.url} />
            <LabelInfo>Updated 3 days ago by {usersList[0]?.name}</LabelInfo>
          </BottomText>
        </Workspace>
      ))}
    </Wrapper>
  );
};

export default ResumeWorkList;
