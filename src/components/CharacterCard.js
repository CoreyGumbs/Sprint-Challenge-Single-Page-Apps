import React from "react";

const CharacterCard = props => {
  const { character} = props;

  return(
    <div>
      <div>
        <img src={character.image} alt=""/>
      </div>
      <div>
        <h1>{character.name}</h1>
        <h2>Status: {character.status}</h2>
        <h3>Current Location: {character.location.name}</h3>
        <p>Species: {character.species}</p>
        <p>Origin: {character.origin.name}</p>
        <p>Gender: {character.gender}</p>
      </div>
    </div>
  )
}

export default CharacterCard;
