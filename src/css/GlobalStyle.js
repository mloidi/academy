import styled from '../../node_modules/styled-components/dist/styled-components.cjs';

export const Button = styled.button`
  display: ${props => (props.show ? 'block' : 'none')};
  font-size: 1rem;
  color: ${props => props.theme.principal};
  background-color: transparent;
  cursor: pointer;
  border: 0.1rem solid ${props => props.theme.principal};
  padding: 0.5rem;
  transition: color 0.5s, background-color 0.5s;
  &:hover,
  &:focus {
    color: ${props => props.theme.secondary};
    background-color: ${props => props.theme.principal};
    border: 0.1rem solid ${props => props.theme.principal};
  }
`;
