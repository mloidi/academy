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

export const Table = styled.div`
  display: grid;
  grid-template-rows: auto;
  margin-top: 1rem;
`;

export const Header = styled.div`
  display: grid;
  grid-template-columns: 40% 20% 20% 20%;
  justify-content: start;
  text-transform: uppercase;
  color: ${props => props.theme.text};
  margin-bottom: 0.5rem;
  border-bottom: 0.1rem solid ${props => props.theme.border};
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: 40% 20% 20% 20%;
  justify-content: start;
  color: ${props => props.theme.text};
  cursor: pointer;
  padding: 0.5rem;
  &:hover,
  &:focus {
    color: ${props => props.theme.secondary};
    background-color: ${props => props.theme.principal};
    border: 0.1rem solid transparent;
  }
`;
