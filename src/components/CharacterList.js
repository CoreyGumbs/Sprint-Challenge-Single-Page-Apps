import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard  from './CharacterCard';
import {CharacterListSection} from '../StyledComponents/CharactersStyle';

export default function CharacterList(props) {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);
  const { query } = props;
  
  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios.get('https://rickandmortyapi.com/api/character/')
    .then( response => {
      const results = response.data.results.filter(character =>
        character.name.toLowerCase().includes(query.toLowerCase()));
      setCharacters(results);
      console.log(results);
    })
    .catch(err => console.log(err));
  }, [query]);

  return (
    <CharacterListSection>
      <h2>Characters: </h2>
        {
          characters.map(character => (
            <CharacterCard character={character} />
          ))
        }
    </CharacterListSection>
  );
}
