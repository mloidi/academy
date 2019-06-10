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

export const ActionRow = styled.div`
  display: grid;
  justify-content: start;
`;
