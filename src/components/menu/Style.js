import styled from '../../../node_modules/styled-components/dist/styled-components.cjs';

export const Area = styled.div`
  background-color: ${props => props.theme.principal};
  padding: 1rem 2rem 0.5rem 2rem;
  display: grid;
  grid-template-columns: auto auto auto;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.14), 0 4px 8px rgba(0, 0, 0, 0.28);
`;

export const LogoArea = styled.div`
  display: inline-grid;
  grid-template-columns: auto;
  justify-content: start;
  text-transform: uppercase;
  color: ${props => props.theme.secondary};
  font-size: 2rem;
`;

export const MenuOptionsArea = styled.div`
  display: grid;
  grid-template-columns: auto;
  justify-content: center;
`;

export const EndArea = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  justify-content: end;
  align-content: center;
  grid-gap: 1rem;
`;

export const MenuBar = styled.ul`
  text-transform: uppercase;
  list-style-type: none;
  display: grid;
  grid-template-columns: auto auto auto auto auto auto auto;
  justify-content: center;
  grid-gap: 1rem;
  .link {
    background-color: transparent;
    padding: 0.5rem 1rem;
    color: ${props => props.theme.secondary};
    text-decoration: none;
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
    outline: none;
    color: ${props => props.theme.secondary};
    background-color: ${props => props.theme.principal};
    border: 0.1rem solid ${props => props.theme.secondary};
    &:hover,
    &:focus {
      outline: none;
      color: ${props => props.theme.secondary};
    }
  }
`;

export const Button = styled.button`
  display: ${props => (props.show ? 'block' : 'none')};
  font-size: 1rem;
  color: ${props => props.theme.secondary};
  background-color: transparent;
  cursor: pointer;
  border: 0.1rem solid transparent;
  padding: 0.5rem;
  transition: color 0.5s, background-color 0.5s;
  &:hover,
  &:focus {
    border: 0.1rem solid ${props => props.theme.secondary};
  }
`;

export const Avatar = styled.img`
  vertical-align: middle;
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;
