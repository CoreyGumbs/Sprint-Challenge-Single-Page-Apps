import React from "react";
import Header from "./components/Header.js";
import WelcomePage from './components/WelcomePage';
import CharacterList from './components/CharacterList';
import CharacterCard  from './components/CharacterCard';



import {Route} from 'react-router-dom';


export default function App() {
  return (
    <main>
      <Route path="/" component={Header} />
      <Route exact path="/" component={WelcomePage}/>
      <Route path="/characters/" component={CharacterList}/>
      <Route path='/charcters/:id' render={(props) => (
        <CharacterCard {...props} />
      )} />
    </main>
  );
}
