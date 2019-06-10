import styled from '../../../node_modules/styled-components/dist/styled-components.cjs';

export const Area = styled.div`
  margin: 1rem 4rem;
  padding: 1rem;
  background-color: ${props => props.theme.secondary};
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.14), 0 4px 8px rgba(0, 0, 0, 0.28);
`;

export const Title = styled.div`
  font-size: 1.5rem;
  text-transform: uppercase;
  margin-bottom: 1rem;
`;

export const Layout = styled.div`
  display: grid;
  grid-template-columns: 15% auto;
  /* justify-content: start; */
  grid-gap: 1rem;
`;

export const AdminMenu = styled.ul`
  text-transform: uppercase;
  list-style-type: none;
  margin: 0;
  padding: 0 0.1rem 0 0;
  border-right: 0.1rem solid ${props => props.theme.text};
  .selected {
    color: ${props => props.theme.principal};
    border: 0.2rem solid ${props => props.theme.principal};
    border-left: 0.5rem solid ${props => props.theme.principal};
  }
`;

export const AdminMenuOption = styled.li`
  margin-top: 0.5rem;
  color: ${props => props.theme.text};
  border: 0.2rem solid transparent;
  border-left: 0.5rem solid ${props => props.theme.principal};
  padding: 0.5rem;
  cursor: pointer;
  &:hover,
  &:focus {
    color: ${props => props.theme.principal};
    border: 0.2rem solid ${props => props.theme.principal};
    border-left: 0.5rem solid ${props => props.theme.principal};
  }
`;
