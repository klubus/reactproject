import React, { FC, useEffect } from "react";
import styled from "styled-components";
import administration from "../../icons/icons/administration.svg";
import { MainColor } from "../../utils/colors";
import { Link } from "react-router-dom";
import { IState } from '../../reducers';
import { IUsersReducer } from '../../reducers/usersReducers';
import { getUsers } from '../../actions/usersActions';
import { getImg} from '../../actions/imagesActions';
import { getPost} from '../../actions/postsActions';
import { useDispatch, useSelector } from 'react-redux';
import { IImageReducer } from '../../reducers/imageReducers';
import { IPostsReducer } from '../../reducers/postsReducers';

type GetImg = ReturnType<typeof getImg>
type GetUsers = ReturnType<typeof getUsers>
type GetPosts = ReturnType<typeof getPost>

const Wrapper = styled.div`
  width: 25%;
  display: flex;
  justify-content: center;
`;
interface imgProps {
  dimension?: number;
}

const UserInformationDetailsPhoto = styled.img<imgProps>`
  width: ${(props) => props.dimension || "60"}px;
  height: ${(props) => props.dimension || "60"}px;
  margin-top: 10px;
  border-radius: 50%;
`;

const FlexPhoto = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const UserInformationDetails = styled.div`
  background: white;
  border-bottom: 1px solid #d3cbcb;
  border-left: 2px solid #d3cbcb;
  border-top: 2px solid #d3cbcb;
  border-right: 2px solid #d3cbcb;
`;

const UserInformationPublications = styled.div`
  //   display: flex;
  justify-content: space-between;
  background: white;
  border-left: 2px solid #d3cbcb;
  border-bottom: 2px solid #d3cbcb;
  border-right: 2px solid #d3cbcb;
`;
const UserInformationYourNetwork = styled.div`
  display: flex;
`;

const UserInformationYourPublications = styled.div``;

const UserInformationExtras = styled.div`
  padding-top: 10px;
`;

const UserInformation = styled.div`
  padding: 10px 10px;
  width: 64%;
`;

const UserInformationPublicationsContainer = styled.div`
  display: flex;
  padding: 8px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-left: 20px;
  padding-right: 20px;
  &:hover {
    background-color: #7ca8bd;
    width: 83%;
    border-radius: 3px;
    height: 110%;
    cursor: pointer;
  }
`;

const UserInformationDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const UserInformationJobTitle = styled.div`
  color: grey;
  padding-top: 7px;
  padding-bottom: 20px;
  font-size: small;
  font-family: sans-serif;
`;

const UserInformationName = styled.div`
  color: #4f4fd5;
  font-size: big;
  font-weight: bold;
  font-family: sans-serif;
  padding-top: 4px;
`;

const UserTextPublications = styled.div`
  display: flex;
  &:hover {
    background-color: #7ca8bd;
    width: 83%;
    border-radius: 3px;
    height: 110%;
    cursor: pointer;
  }
`;

const UseriInformationInsideImage = styled.img`
  float: left;
  padding: 2px;
  padding-right: 7px;
`;

const UseriInformationInsideImage2 = styled.img`
  float: right;
  display: flex;
  flex-direction: row;
`;

const UseriInformationText = styled.div``;

const ImagesBottom = styled.img`
  padding-right: 15px;
  padding-left: 10px;
  padding-bottom: 15px;
  max-width: 15px;
`;

const UserInformationPublicationsLabel = styled.div`
  display: flex;
  align-items: center;
`;

const UserTextPublicationsName = styled.a`
  text-decoration: none;
`;

const LeftMenu: FC = () => {
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
      <UserInformation>
        <UserInformationDetails>
          <UserInformationDetailsContainer>
            <Link to="/profile">
              <FlexPhoto>
                <UserInformationDetailsPhoto src={imageList[0]?.url} />
                <UserInformationName>                  {usersList[0]?.name}
</UserInformationName>
              </FlexPhoto>
            </Link>

            <UserInformationJobTitle>
              Job Title &bull; Company
            </UserInformationJobTitle>
          </UserInformationDetailsContainer>
        </UserInformationDetails>
        <UserInformationPublications>
          <div>
            <div>
              <UserInformationPublicationsContainer>
                <UserInformationPublicationsLabel>
                  <UseriInformationInsideImage src="../../icons/icons/network.png" />
                  <UseriInformationText>Your Network</UseriInformationText>
                </UserInformationPublicationsLabel>
                <UseriInformationInsideImage2 src="../../icons/icons/network.svg" />
              </UserInformationPublicationsContainer>
            </div>
            <div>
              <UserInformationPublicationsContainer>
                <UserInformationPublicationsLabel>
                  <UseriInformationInsideImage src="../../icons/icons/bell.png" />
                  <UseriInformationText>Your Publications</UseriInformationText>
                </UserInformationPublicationsLabel>
                <UseriInformationInsideImage2 src="../../icons/icons/plus.png" />
              </UserInformationPublicationsContainer>
            </div>
          </div>
        </UserInformationPublications>
        <UserInformationExtras>
          <UserTextPublications>
            <ImagesBottom src="../../icons/icons/publications.svg" />
            <div>Publications</div>
          </UserTextPublications>
          <UserTextPublications>
            <ImagesBottom src="../../icons/icons/ecosystem.svg" />
            <div>Ecosystem</div>
          </UserTextPublications>
          <UserTextPublications>
            <ImagesBottom src="../../icons/icons/entities.svg" />
            <Link to="/entities">
              <UserTextPublicationsName>Entities</UserTextPublicationsName>
            </Link>
          </UserTextPublications>
        </UserInformationExtras>
      </UserInformation>
    </Wrapper>
  );
};

export default LeftMenu;
