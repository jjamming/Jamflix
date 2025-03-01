import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import MovieButton from '../../components/MovieButton';
import TOKEN from '../../assets/token';

const Popular = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const getMovies = async () => {
            const movies = await axios.get(`https://api.themoviedb.org/3/movie/popular?language=ko-KR&page=1`, {
                headers: {
                    accept: 'application/json',
                    Authorization: TOKEN,
                }
            })
            setMovies(movies);
        }
        getMovies()
    }, []);

    return (
        <>
            <h1>인기있는</h1>
            <div>
                {movies.data?.results.map((movie) => {
                return(
                    <MovieButton
                    key={movie.id}
                    {...movie}
                    />
                )})}
            </div>
        </>
        
    )
}

export default Popular;