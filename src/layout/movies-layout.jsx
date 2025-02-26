import { Outlet } from 'react-router-dom';
import CategoriesPage from '../pages/movies';
import styled from 'styled-components';

const MovieLayout = () => {
    return (
        <>
            <Outlet></Outlet>
        </>
    )
}

export default MovieLayout;
