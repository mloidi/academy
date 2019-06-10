import React, { useState, useEffect, useCallback } from '../../../../node_modules/react';
import moment from '../../../../node_modules/moment/moment';

import {
  Area,
  DateFilter,
  CurrentMonthYear,
  CurrentMonth,
  WeekHeader,
  WeekName,
  Week,
  Day,
  NoDay
} from './Style';
import { Button } from '../../../css/GlobalStyle';
import Icon from '../Icon';

const Calendar = ({
  date,
  showCalendar,
  setShowCalendar,
  onChange,
  minimumDate
}) => {
  const [today] = useState(moment());
  const [dateFilter, setDateFilter] = useState(moment());

  const names = Object.freeze([
    'Sun',
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri',
    'Sat'
  ]);

  const getDaysArray = useCallback(
    (year, month) => {
      const date = new Date(year, month - 1, 1);
      const result = [];
      let i;
      for (i = 0; i < names.length; i++) {
        if (names[date.getDay()] === names[i]) {
          result.push({
            number: `${date.getDate()}`,
            weekDay: names[i]
          });
          date.setDate(date.getDate() + 1);
          break;
        } else {
          result.push({
            number: null,
            weekDay: names[i]
          });
        }
      }
      while (date.getMonth() === month - 1) {
        result.push({
          number: `${date.getDate()}`,
          weekDay: `${names[date.getDay()]}`
        });
        date.setDate(date.getDate() + 1);
      }
      return result;
    },
    [names]
  );

  const [days, setDays] = useState(
    getDaysArray(
      moment(dateFilter).format('YYYY'),
      moment(dateFilter).format('MM')
    )
  );

  useEffect(() => {
    setDays(
      getDaysArray(
        moment(dateFilter).format('YYYY'),
        moment(dateFilter).format('MM')
      )
    );
  }, [getDaysArray, dateFilter]);

  const formatDate = day => {
    return moment([
      moment(dateFilter).format('YYYY'),
      moment(dateFilter).format('MM') - 1,
      day.number
    ]);
  };

  const isLaterThenMinimumDate = day => {
    return moment(formatDate(day)).isSameOrAfter(minimumDate, 'day');
  };
  return (
    <Area showCalendar={showCalendar}>
      <DateFilter>
        <Button
          show={true}
          onClick={() => {
            setDateFilter(moment(dateFilter).subtract(1, 'years'));
          }}
        >
          <Icon icon="faAngleDoubleLeft" />
        </Button>
        <Button
          show={true}
          onClick={() => {
            setDateFilter(moment(dateFilter).subtract(1, 'months'));
          }}
        >
          <Icon icon="faAngleLeft" />
        </Button>
        <CurrentMonthYear>
          <strong>
            {moment(dateFilter).format('MMM') +
              ' ' +
              moment(dateFilter).format('YYYY')}
          </strong>
        </CurrentMonthYear>
        <Button
          show={true}
          onClick={() => {
            setDateFilter(moment(dateFilter).add(1, 'months'));
          }}
        >
          <Icon icon="faAngleRight" />
        </Button>
        <Button
          show={true}
          onClick={() => {
            setDateFilter(moment(dateFilter).add(1, 'years'));
          }}
        >
          <Icon icon="faAngleDoubleRight" />
        </Button>
      </DateFilter>
      <CurrentMonth>
        <WeekHeader>
          {names.map(day => (
            <WeekName key={day}>{day}</WeekName>
          ))}
        </WeekHeader>
        <Week>
          {days.map(day =>
            day.number ? (
              <Day
                key={day.number}
                isWorkDay={day.weekDay === 'Sat' || day.weekDay === 'Sun'}
                isToday={moment(formatDate(day)).isSame(today, 'day')}
                isSelected={moment(formatDate(day)).isSame(date, 'day')}
                isBefore={moment(formatDate(day)).isBefore(minimumDate, 'day')}
                onClick={() => {
                  const date = formatDate(day);
                  if (isLaterThenMinimumDate(day)) {
                    onChange(date);
                    setShowCalendar(false);
                  }
                }}
              >
                {day.number}
              </Day>
            ) : (
              <NoDay key={day.weekDay} />
            )
          )}
        </Week>
      </CurrentMonth>
    </Area>
  );
};

export default Calendar;
