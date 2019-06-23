import styled from 'styled-components';

export const Area = styled.div`
  margin-top: 1rem;
  margin-bottom: 1rem;
  padding: 1rem;
  /* border: 0.1rem solid ${props => props.theme.border}; */
  color: ${props => props.theme.text};
`;

export const HeaderRow = styled.div`
  display: grid;
  grid-template-columns: 5% 45% 45% 5%;
  grid-gap: 0.5rem;
  margin-top: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 0.1rem solid ${props => props.theme.border};
`;

export const InputRow = styled.div`
  display: grid;
  grid-template-columns: 5% 45% 45% 5%;
  grid-gap: 0.5rem;
  margin-top: 0.5rem;
  padding-bottom: ${props => props.isTable ? '0' : '1rem'};
  border-bottom: 0.1rem dashed ${props => props.isTable ? 'transparent': props.theme.principal};
`;

export const Button = styled.div`
  font-size: 1rem;
  color: ${props => props.theme.principal};
  background-color: transparent;
  cursor: pointer;
  padding: 0.5rem;
  width: 1rem;
  transition: color 0.5s, background-color 0.5s;
  &:hover,
  &:focus {
    color: ${props => props.theme.secondary};
    background-color: ${props => props.theme.principal};
  }
`;
