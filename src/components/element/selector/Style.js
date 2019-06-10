import styled from 'styled-components';

export const Area = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  margin: 1rem 0;
  justify-content: start;
  text-transform: uppercase;
  color: ${props => props.theme.secondary};
  cursor: pointer;
`;

export const Selected = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-gap: 1rem;
  border: 0.1rem solid ${props => props.theme.secondary};
  padding: 0.2rem 0.5rem;
`;

export const Items = styled.ul`
  position: absolute;
  display: ${props => (props.showSelector ? 'block' : 'none')};
  list-style-type: none;
  padding: 0;
  margin: 0;
  background-color: ${props => props.theme.secondary};
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.14), 0 4px 8px rgba(0, 0, 0, 0.28);
  cursor: pointer;
  z-index: 10;
  .selected {
    color: ${props => props.theme.secondary};
    background-color: ${props => props.theme.principal};
  }
`;

export const Item = styled.li`
  color: black;
  padding: 0.5rem;
  &:hover,
  &:focus {
    color: ${props => props.theme.secondary};
    background-color: ${props => props.theme.principal};
  }
`;
