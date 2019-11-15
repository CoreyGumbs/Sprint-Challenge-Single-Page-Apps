import styled  from 'styled-components';


export const RMHeader = styled.header.attrs({
    className: 'ui centered'
})`
    

`;

export const Heading = styled.h1.attrs({
    className: 'ui center'
})`
    font-size: 5rem;
    font-family: 'Schoolbell', cursive;
    color: #103F49;
`;


export const HeaderNav = styled.nav`
    
    display: flex;
    flex-flow: row wrap;
    justify-content: center;

    & > a{
        padding: 10px 20px;
        text-decoration: none;
        font-size: 3rem;
        font-family: 'Schoolbell', cursive;
        color: #ff5e57;

        &:hover{
            color: grey;
        }
    }
`;