import React from 'react';
import {Link} from "react-router-dom";
import styled from 'styled-components';
import { FaSearch } from "react-icons/fa";
import { PiFilmSlateBold } from "react-icons/pi";

const Sidebar = () => {
    return (
        <SideList>
            <Sideitem>
                <FaSearch />
                <StyledLink to ="/search"> 찾기</StyledLink>
            </Sideitem>
            <Sideitem>
                <PiFilmSlateBold/>
                <StyledLink to ="/movies"> 영화</StyledLink>
            </Sideitem>
        </SideList>
    )
}

export default Sidebar;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit; 
`

const SideList = styled.div`
    left:0;
    height: 100vh;
    width: 200px;
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    margin-top : 0;
`

const Sideitem = styled.div`
    padding: 7px 10px;
    font-size: 15px;
    text-align : left;
    &:hover{ /* 마우스 커서를 가져다대면 이미지의 밝기를 줄임 */
        filter: brightness(60%); 
    }
`