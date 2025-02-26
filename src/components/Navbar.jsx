import React from "react";
import {Link} from "react-router-dom";
import styled from 'styled-components';
import { LoginProvider, LoginContext } from '../components/LoginProvider';
import { useContext } from 'react';

const Navbar = () => {
    const {user, userName, online, logout} = useContext(LoginContext);
    // let userName = 'user';
    // if(online === 'online') {
    //     userName = user.email.split("@")[0]; // email의 @ 앞부분만 추출
    // }

    return (
            <Header>
                <Logo>
                    <StyledLink to ="/">JamFlix</StyledLink>
                </Logo>
                {online === 'online' 
                ? <NavLinks>
                    <NavLink>
                    <StyledLink>
                        {userName}님, 환영합니다.
                    </StyledLink>
                    </NavLink>
                    <NavLink className = 'signup' onClick={logout}>
                        <StyledLink to ="/">로그아웃</StyledLink>
                    </NavLink>
                </NavLinks>
                : <NavLinks>
                    <NavLink>
                        <StyledLink to ="login">로그인</StyledLink>
                    </NavLink>
                    <NavLink className = 'signup'>
                        <StyledLink to ="signup">회원가입</StyledLink>
                    </NavLink>
                </NavLinks>}
                
            </Header>
    )
}

export default Navbar;
const StyledLink = styled(Link)`
    text-decoration: none; /* 밑줄 없애기 */
    color: inherit; /* 부모 요소의 색상 사용 */
    }
`;

const Header = styled.div`
    display: flex;
    align-items : center;
    justify-content : space-between;
    background-color : #282828;
    padding : 20px;
    width : 100%;
    box-sizing : border-box;
    height : 60px;
`

const Logo = styled.h2`
    color : #FF5675;
    font-size : 24px;
    font-weight : bold;
`

const NavLinks = styled.div`
    display : flex;
    gap : 15px;
    
`

const NavLink = styled.div`
    background-color : #282828;
    padding : 10px;
    font-color : 'white';
    border-radius: 7px;
    &:hover{ /* 마우스 커서를 가져다대면 이미지의 밝기를 줄임 */
        filter: brightness(60%); 
    }
    &.signup{
        background-color : #FF5675;
    }
`