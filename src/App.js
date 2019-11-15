import React, {useState} from "react";
import Header from "./components/Header.js";
import WelcomePage from './components/WelcomePage';
import SearchForm from './components/SearchForm';
import CharacterList from './components/CharacterList';



import {Route} from 'react-router-dom';


export default function App() {
  const [query, setQuery] = useState("")
  console.log(query);
  return (
    <main>
      <Route path="/" component={Header} />
      <Route exact path="/" component={WelcomePage}/>
      <Route path="/characters" render={props => (
        <SearchForm {...props} setQuery={setQuery} />
      )} />
      <Route path="/characters/" render={props =>(
        <CharacterList {...props} query={query} />
      )}/>
    </main>
  );
}
