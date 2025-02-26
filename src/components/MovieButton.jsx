import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

function MovieButton (props) {
    //const {title, id, poster_path, release_date, ...rest} = props;
    // 객체의 구조분해를 통해 우선 필요한 요소들만 가져옴
    const navigate = useNavigate()
    const movie = props;

    return (
        <MovieContainer onClick={()=>navigate(`/movies/${movie.id}`,{
            replace : false,
            state : movie,
        })}>
            <Image src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt="Poster" />
            <Title>{movie.title}</Title>
            <Date>{movie.release_date}</Date>
        </MovieContainer>
    )
}

export default MovieButton;

const MovieContainer = styled.div`
    display : inline-block;
    margin : 10px;
    width : 100px;
    height : 180px;
    overflow : hidden;

`

const Image = styled.img`
    width: 100%;
    height: 150px;
    border-radius: 7px;
    &:hover{ /* 마우스 커서를 가져다대면 이미지의 밝기를 줄임 */
        filter: brightness(60%); 
    }
    margin-bottom : 0;
    
`

const Title = styled.h6`
    text-align : left;
    font-size : 11px;
    margin : 0;
    padding : 0;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`
const Date = styled.p`
    font-color : black;
    font-size : 8px;
    text-align : left;
    margin : 0;
    padding : 0;
    font-weight : bold;
`