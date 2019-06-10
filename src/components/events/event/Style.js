import styled from '../../../../node_modules/styled-components/dist/styled-components.cjs';

export const Area = styled.div`
  margin-top: 1rem;
  margin-bottom: 1rem;
  padding: 1rem;
  color: ${props => props.theme.text};
`;

export const HeadRow = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 1rem;
`;

export const Separator = styled.div`
  display: grid;
  grid-template-columns: auto;
  border-bottom: 0.1rem solid ${props => props.theme.principal};
  margin: 1rem 0;
`;

export const TabHeader = styled.ul`
  display: grid;
  grid-template-columns: auto auto auto auto;
  background-color: transparent;
  padding: 1rem 0 0 0;
  margin: 1rem 0 0 0;
  list-style-type: none;
  text-transform: uppercase;
  .noSelected {
    background-color: transparent;
    padding: 0.5rem 1rem;
    text-decoration: none;
    color: ${props => props.theme.principal};
    border: 0.1rem solid transparent;
    transition: border 0.5s, color 0.5s;
    cursor: pointer;
    &:hover,
    &:focus {
      outline: none;
      color: ${props => props.theme.secondary};
      background-color: ${props => props.theme.principal};
      border: 0.1rem solid ${props => props.theme.secondary};
    }
  }
  .selected {
    background-color: ${props => props.theme.principal};
    outline: none;
    padding: 0.5rem 1rem;
    text-decoration: none;
    color: ${props => props.theme.secondary};
    border: 0.1rem solid ${props => props.theme.principal};
    transition: border 0.5s, color 0.5s;
    &:hover,
    &:focus {
      outline: none;
      color: ${props => props.theme.secondary};
    }
  }
`;

export const TabArea = styled.div`
  border: 0.1rem solid ${props => props.theme.principal};
  padding: 1rem;
`;

export const Rows = styled.div`
  display: grid;
  grid-template-rows: auto;
  grid-gap: 1rem;
`;

export const Field = styled.div`
  display: grid;
  grid-template-rows: auto;
  grid-gap: 0.5rem;
`;

export const CheckField = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  justify-content: start;
  grid-gap: 0.5rem;
`;

export const DateRow = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  justify-content: start;
  grid-gap: 1rem;
`;

export const Date = styled.div`
  display: grid;
  grid-template-columns: 11rem auto;
  justify-content: start;
  grid-gap: 1rem;
  cursor: pointer;
  &:hover,
  &:focus {
    color: ${props => props.theme.principal};
  }
`;

export const Buttons = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 1rem;
  justify-content: end;
  margin: 1rem 0;
`;
