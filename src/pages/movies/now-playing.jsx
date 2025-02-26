import React, {useEffect, useState} from 'react';
import MovieButton from '../../components/MovieButton';
import styled from 'styled-components';
import axios from 'axios';
import TOKEN from '../../assets/token';

const NowPlaying = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const getMovies = async () => {
            const movies = await axios.get(`https://api.themoviedb.org/3/movie/now_playing?language=ko-KR&page=1`, {
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
            <h1>현재 상영중</h1>
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

export default NowPlaying;