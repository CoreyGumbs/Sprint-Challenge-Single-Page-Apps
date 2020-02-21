import styled from 'styled-components';

export const CharacterListSection = styled.section.attrs({
    className: 'character-list'
})`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
`;


export const CharacterCardDiv = styled.div`
    width: 30%;
    height: 450px;
    border: 1px solid grey;
    margin: 20px 0;
    border-radius: 30px;
    box-shadow: 1px 2px 5px 1px grey;
`;

export const CharacterCardImgContainer = styled.div`
    width: 100%;
    height: 50%;
`;

export const CharacterCardImg = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 30px 30px 0 0 ;
`;

export const CharacterCardTxtDiv = styled.div`
    padding: 20px 20px;    
`;

export const CharacterCardHeading = styled.h1`
    margin: 10px 0 5px 0;
    font-size: 2rem;
`;

export const CharacterAliveHeading = styled.h2`
    margin: 0;
    font-size: 1.8rem;
    color: green;
`

export const CharacterDeadHeading = styled.h2`
    margin: 0;
    font-size: 1.8rem;
    color: red;
`;

export const CharacterUnknownHeading = styled.h2`
    margin: 0;
    font-size: 1.8rem;
    color: #ffc048;
`;

export const CharacterLocationHeading = styled.h3`
    font-size: 1.3rem;
`;

export const CharacterCardText = styled.p`
    font-size: 1.4rem;
`;