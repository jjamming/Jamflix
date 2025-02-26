import styled from 'styled-components';
import { Link } from 'react-router-dom';

const CategoriesPage = () => {
    return (
        <>
            <Header>카테고리</Header>
            <CategoryContainer>
                <CategoryBox to = '/movies/now-playing'>
                    <CategoryName>현재 상영중인</CategoryName>
                </CategoryBox>

                <CategoryBox to = '/movies/popular'>
                    <CategoryName>인기있는</CategoryName>
                </CategoryBox>

                <CategoryBox to = '/movies/top-rated'>
                    <CategoryName>높은 평가를 받은</CategoryName>
                </CategoryBox>

                <CategoryBox to = '/movies/up-coming'>
                    <CategoryName>개봉 예정중인</CategoryName>
                </CategoryBox>
            </CategoryContainer>
        </>    
    );
}

export default CategoriesPage;

const Header = styled.h3`
    margin : 0;
    margin-left : 10px;
    text-align : left;
`

const CategoryName = styled.div`
    background-color: rgba(0, 0, 0, 0.7);
    color: white;
    font-size: 16px;
    border-radius: 4px;
    height : 16px;
    padding: 8px 12px;
    margin-left : 5px;
    margin-bottom : 5px;
`
const CategoryContainer = styled.div`
    display : flex;
    margin-top : 10px;
`;

const CategoryBox = styled(Link)`
    display : flex;
    width : 300px;
    height : 160px;
    margin : 10px;
    background-color : #FF5675;
    border-radius: 7px;
    align-items : flex-end;
    &:hover{ /* 마우스 커서를 가져다대면 이미지의 밝기를 줄임 */
        filter: brightness(60%); 
    }
`

const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit; 
`