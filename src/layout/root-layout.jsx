import { Outlet } from 'react-router-dom';
import Navbar from '../components/NavBar';
import Sidebar from '../components/Sidebar';
import styled from 'styled-components';

const RootLayout = () => {
    return (
        <>
            <Navbar/>
            <RootDiv>
                <Sidebar/>
                <Content>
                    <Outlet/>
                </Content>
            </RootDiv>
        </>
    )
}

export default RootLayout;

const RootDiv = styled.div`    
    display: flex;
    justify-content: start;
    heigth : 100%;
`;
const Content = styled.div`
    flex-grow: 1;
    padding: 20px;
    background-color : #251F1F;
    `;
