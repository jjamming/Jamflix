import { MOVIES } from '../components/movies'
import MovieButton from '../components/MovieButton'
import styled from 'styled-components';

const HomePage = () => {
    return (
        <MovieList>
            {MOVIES.results.map((movie) => {
            return(
                <MovieButton key={movie.id}{...movie}>
                </MovieButton>
            )})}
            </MovieList>
    );
}

export default HomePage;

const MovieList = styled.div`
    
`