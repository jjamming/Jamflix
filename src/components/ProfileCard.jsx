import styled from 'styled-components';

const ProfileCard = (props) => {
    const cast = props;

    return (
        <>
            <Container>
                <ProfileImage src = {`https://image.tmdb.org/t/p/w200${cast.profile_path}`}></ProfileImage>
                <Name>{cast.name}</Name>
                <Role>{cast.character}</Role>
            </Container>
        </>
    )

}

export default ProfileCard;

const Container = styled.div`
    display : flex;
    flex-direction: column;
    align-items: center;
    color: white;
    padding: 10px;
    width: 100px;
    text-align : center;
`
const ProfileImage = styled.img`
    width: 80px;
    height: 80px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    border: 2px solid white;
`;

const Name = styled.p`
    font-size: 14px;
    font-weight: bold;
    margin: 5px 0 2px;
`;

const Role = styled.p`
    font-size: 12px;
    color: #aaa;
    margin: 0;
`;