import React from "react";
import { CharacterCardDiv, CharacterCardImgContainer, CharacterCardImg, 
CharacterCardTxtDiv, CharacterCardHeading, CharacterAliveHeading, CharacterDeadHeading, CharacterUnknownHeading, CharacterLocationHeading, CharacterCardText } from "../StyledComponents/CharactersStyle";

const CharacterCard = props => {
  const { character} = props;

  return(
    <CharacterCardDiv>
      <CharacterCardImgContainer>
        <CharacterCardImg src={character.image} alt=""/>
      </CharacterCardImgContainer>
      <CharacterCardTxtDiv>
        <CharacterCardHeading>{character.name}</CharacterCardHeading>
        {character.status === 'Alive' &&
          <CharacterAliveHeading> {character.status}</CharacterAliveHeading>
        }

        { character.status === 'Dead' && 
          <CharacterDeadHeading> {character.status}</CharacterDeadHeading>
        }

        {character.status === 'unknown' &&
          <CharacterUnknownHeading>{character.status}</CharacterUnknownHeading>
        }
        
        <CharacterLocationHeading>Current Location: {character.location.name}</CharacterLocationHeading>
        <CharacterCardText>Species: {character.species}</CharacterCardText>
        <CharacterCardText>Origin: {character.origin.name}</CharacterCardText>
        <CharacterCardText>Gender: {character.gender}</CharacterCardText>
      </CharacterCardTxtDiv>
    </CharacterCardDiv>
  )
}

export default CharacterCard;
