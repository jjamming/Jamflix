import { useParams, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import ProfileCard from '../../components/ProfileCard';
import TOKEN from '../../assets/token';
const MovieDetails = () => {
    const params = useParams();
    //console.log(params);

    const location = useLocation();
    const movie = location.state || {} ;
    //console.log(movie);

    const rate = movie.vote_average;
    const roundedRate = rate.toFixed(1); // 소숫점 첫째자리까지 반올림
    const date = movie.release_date;
    const year = date.substring(0, 4); // 연도만 추출하기 위함

    const [credits, setCredits] = useState([]); 
    useEffect(() => {
        const getCredits = async () => {
            const credits = await axios.get(`https://api.themoviedb.org/3/movie/${movie.id}/credits?language=ko-KR`, {
                headers: {
                    accept: 'application/json',
                    Authorization: TOKEN,
                }
            })
            setCredits(credits.data);
        }
        getCredits()
    },[movie.id]);

    //console.log("credit: ", credits);

    return (
        <DetailDiv>
            <MovieInfo>
                <Image src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`} alt="Poster" />
                <OverlayText>
                    <h1 style = {{margin : 0}}>{movie.title}</h1>
                    <TextStyle>{movie.original_title}</TextStyle>
                    <TextStyle>평점 {roundedRate}</TextStyle>
                    <TextStyle>{year}</TextStyle>
                    <TextStyle className='overview'>{movie.overview}</TextStyle>
                </OverlayText>
            </MovieInfo>
            <MovieInfo>
                <h1 style = {{margin : 0, textAlign:'left', marginLeft : '15px', marginTop : '10px'}}>감독/출연</h1>
                <MovieCredit>
                    {
                        credits.length === 0 ? <h1>loading. . .</h1>
                        :credits.cast.map((cast)=>
                        <ProfileCard 
                            key = {cast.id}{...cast}
                            >
                        </ProfileCard>)
                    }
                </MovieCredit>
            </MovieInfo>
        </DetailDiv>
    );
}

export default MovieDetails;

const DetailDiv = styled.div`
    display : flex;
    flex-direction : column;
    width : 1280px;
    height : 100%;
    // overflow : hidden;
    position : relative;
`
const Image = styled.img`
    width : 100%;
    height : 450px;
    object-fit: cover;
    object-position : center;
    mask-image: linear-gradient(to right, transparent, black);
    border-radius: 15px;
    margin-bottom : 0;
`

const OverlayText = styled.div`
    position: absolute;
    top: 25px;                
    left: 30px;     
    margin : 0;          
    color: white;     
    text-align : left;
`

const TextStyle = styled.p`
    margin-top : 5px;
    margin-bottom : 2px;
    &.overview {
        margin-top : 40px;
        width : 400px;
        font-size : 15px;
    }
    
`
const MovieInfo = styled.div`

`

const MovieCredit = styled.div`
    display: flex;
    flex-wrap: wrap;            /* 하위 요소가 넘칠 때 자동으로 줄바꿈 */
    gap: 16px;                  /* 카드 사이의 간격 */
    justify-content: space-around
`

const CreditDetail = styled.div`
`