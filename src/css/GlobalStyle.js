import styled from 'styled-components';

export const Area = styled.div`
  margin: 1rem 4rem;
  padding: 1rem;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.14), 0 4px 8px rgba(0, 0, 0, 0.28);
`;

export const Title = styled.div`
  font-size: 1.5rem;
  text-transform: uppercase;
  margin-bottom: 1rem;
`;

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

export const AdminLayout = styled.div`
  display: grid;
  grid-template-rows: auto auto;
  grid-gap: 1rem;
`;

export const AdminMenu = styled.ul`
  text-transform: uppercase;
  list-style-type: none;
  display: grid;
  grid-template-columns: auto auto auto auto auto auto auto;
  justify-content: center;
  grid-gap: 1rem;
  margin: 0;
  padding: 0 0.1rem 0 0;
  border-right: 0.1rem solid transparent;
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
  border-left: 0.5rem solid transparent;
  padding: 0.5rem;
  cursor: pointer;
  &:hover,
  &:focus {
    color: ${props => props.theme.principal};
    border: 0.2rem solid ${props => props.theme.principal};
    border-left: 0.5rem solid ${props => props.theme.principal};
  }
`;

export const AcademicYearBoxes = styled.div`
  display: grid;
  grid-template-columns: 5% auto auto auto 5%;
  grid-gap: 1rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  .active {
    color: ${props => props.theme.secondary};
    border: 0.1rem solid ${props => props.theme.principal};
    background-color: ${props => props.theme.principal};
  }
`;

export const AcademicYearBox = styled.div`
  padding: 1rem;
  border: 0.1rem solid ${props => props.theme.principal};
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.14), 0 4px 8px rgba(0, 0, 0, 0.28);
  cursor: pointer;
  transition: color 0.5s, background-color 0.5s;
  &:hover,
  &:focus {
    color: ${props => props.theme.secondary};
    background-color: ${props => props.theme.principal};
    border: 0.1rem solid transparent;
  }
`;

export const Buttons = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  justify-content: start;
  grid-gap: 1rem;
`;
