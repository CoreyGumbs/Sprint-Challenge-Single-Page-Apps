import React from "react";
import {NavLink} from 'react-router-dom';
import { RMHeader, Heading, HeaderNav} from '../StyledComponents/HeaderStyle';

export default function Header() {
  return (
    <RMHeader>
      <Heading>Rick &amp; Morty Fan Page</Heading>
     <HeaderNav>
        <NavLink to="/">
          Home
        </NavLink>
        <NavLink to="/characters/">
          Characters
        </NavLink>
      </HeaderNav>
    </RMHeader>
  );
}
