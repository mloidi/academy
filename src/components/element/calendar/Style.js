import styled from 'styled-components';

export const Area = styled.div`
  position: absolute;
  display: ${props => (props.showCalendar ? 'block' : 'none')};
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  background-color: ${props => props.theme.secondary};
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.14), 0 4px 8px rgba(0, 0, 0, 0.28);
  width: 25rem;
  z-index: 10;
`;

export const DateFilter = styled.div`
  display: grid;
  grid-template-columns: 10% 10% auto 10% 10%;
  grid-gap: 1rem;
  text-transform: uppercase;
  padding: 0.5rem;
  border-bottom: 0.1rem solid ${props => props.theme.principal};
`;

export const CurrentMonthYear = styled.div`
  display: grid;
  justify-content: center;
`;

export const CurrentMonth = styled.div`
  display: grid;
  justify-content: center;
`;

export const WeekHeader = styled.div`
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  display: grid;
  grid-template-columns: 3rem 3rem 3rem 3rem 3rem 3rem 3rem;
  grid-gap: 0.2rem;
  border-bottom: 0.1rem solid ${props => props.theme.principal};
`;

export const WeekName = styled.div`
  display: grid;
  justify-content: center;
  border: 0.1rem solid transparent;
`;

export const Week = styled.div`
  display: grid;
  grid-template-columns: 3rem 3rem 3rem 3rem 3rem 3rem 3rem;
  grid-gap: 0.2rem;
`;

export const Day = styled.div`
  margin-top: 0.5rem;
  display: grid;
  justify-content: center;
  border: 0.1rem solid
    ${props =>
      props.isSelected
        ? 'lightgrey'
        : props.isWorkDay
        ? props.theme.principal
        : 'transparent'};
  background-color: ${props =>
    props.isSelected
      ? 'lightgrey'
      : props.isToday
      ? 'black'
      : props.isWorkDay
      ? props.theme.principal
      : 'transparent'};
  color: ${props =>
    props.isBefore
      ? 'lightgrey'
      : props.isWorkDay || props.isToday
      ? props.theme.secondary
      : 'grey'};
  padding: 0.5rem;

  cursor: ${props => (props.isBefore ? 'default' : 'pointer')};
  &:hover,
  &:focus {
    color: ${props =>
      props.isBefore
        ? 'lightgrey'
        : props.isWorkDay || props.isToday
        ? props.theme.secondary
        : props.theme.principal};
    border: 0.1rem solid
      ${props => (props.isBefore ? 'transparent' : props.theme.principal)};
  }
`;
export const NoDay = styled.div`
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  margin-left: 0.5rem;
  display: grid;
  justify-content: end;
  border: 0.1rem solid transparent;
  padding: 0.5rem;
`;
