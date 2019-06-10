import styled from '../../../../node_modules/styled-components/dist/styled-components.cjs';

export const Header = styled.div`
  display: grid;
  grid-template-columns: auto 10% 20%;
  text-transform: uppercase;
  color: ${props => props.theme.text};
  margin-bottom: 0.5rem;
  border-bottom: 0.1rem solid ${props => props.theme.border};
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: auto 10% 20%;
  align-content: center;
  color: ${props => props.theme.text};
  background-color: ${props =>
    props.isAdded
      ? props.theme.rowAdded
      : props.isEdited
      ? props.theme.rowEdited
      : props.isDeleted
      ? props.theme.rowDeleted
      : 'transparent'};
  cursor: pointer;
  padding: 0.5rem;
  &:hover,
  &:focus {
    color: ${props => props.theme.principal};
  }
`;

export const RowText = styled.div`
  padding: 0.5rem;
`;

export const RowActions = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  justify-content: start;
  grid-gap: 1rem;
`;

export const RowButton = styled.button`
  margin: 0;
  padding: 0.5rem;
  font-size: 1rem;
  color: ${props => props.theme.text};
  background-color: transparent;
  cursor: pointer;
  border: 0.1rem solid ${props => props.theme.text};
  transition: color 0.5s, background-color 0.5s;
  &:hover,
  &:focus {
    color: ${props => props.theme.principal};
    border: 0.1rem solid ${props => props.theme.principal};
  }
`;

export const NewAcademicYear = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  justify-content: start;
`;
export const NewAcademicYearInput = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 1rem;
`;

export const ErrorLabel = styled.label`
  color: ${props => props.theme.error};
`;
