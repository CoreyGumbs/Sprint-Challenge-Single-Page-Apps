import React, {useState} from "react";
import Header from "./components/Header.js";
import WelcomePage from './components/WelcomePage';
import SearchForm from './components/SearchForm';
import CharacterList from './components/CharacterList';
import GlobalStyle from './StyledComponents/GlobalStyle';



import {Route} from 'react-router-dom';


export default function App() {
  const [query, setQuery] = useState("")
  
  const addQueryTerm = term =>{
    setQuery(term);
  }
  console.log(query);

  return (
    <main>
      <GlobalStyle />
      <Route path="/" component={Header} />
      <Route exact path="/" component={WelcomePage}/>
      <Route path="/characters" render={props => (
        <SearchForm {...props} addQueryTerm={addQueryTerm} />
      )} />
      <Route path="/characters/" render={props =>(
        <CharacterList {...props} query={query} />
      )}/>
    </main>
  );
}
