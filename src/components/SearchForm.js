import React, { useState } from "react";
import {SearchFormSection, SearchFormStyle, SearchFormLabel, SearchFormInput} from '../StyledComponents/SearchStyle'

export default function SearchForm(props) {
  const {addQueryTerm} = props;
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = e => {
    setSearchTerm(e.target.value);
    addQueryTerm(searchTerm);
  }

  return (
    <SearchFormSection>
     <SearchFormStyle>
      <SearchFormLabel>Search By Name:</SearchFormLabel>
        <SearchFormInput  value={searchTerm} onChange={handleChange}/>
      </SearchFormStyle>
    </SearchFormSection>
  );
}
