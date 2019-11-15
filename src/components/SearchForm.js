import React, { useState } from "react";

export default function SearchForm(props) {
  const {addQueryTerm} = props;
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = e => {
    setSearchTerm(e.target.value);
    addQueryTerm(searchTerm);
  }

  return (
    <section className="search-form">
     <form action="">
       <input type="text" name="search" id="" value={searchTerm} onChange={handleChange} placeholder={'Enter Character Name'}/>
     </form>
    </section>
  );
}
