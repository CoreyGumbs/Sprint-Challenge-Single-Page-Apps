import styled from 'styled-components';


export const SearchFormSection = styled.section.attrs({
    className: 'search-form'
})`


`;

export const SearchFormStyle = styled.form`
    padding: 10px 0;
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-items: center;
`;

export const SearchFormLabel = styled.label.attrs({
    htmlFor: "search"
})`
    padding: 0 10px;
    font-size: 1.5rem;
    color: #485460;
`;

export const SearchFormInput = styled.input.attrs({
    type: 'text',
    name:'search', 
    id:'',
    placeholder: 'Enter Character Name'

})`
    width: 80%;
    padding: 10px;
    font-size: 1.3rem;
    border: 1px solid #ccc;
    border-radius: 5px;
`;