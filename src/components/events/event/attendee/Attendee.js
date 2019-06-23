import React, { useState } from 'react';

import { Area, HeaderRow, InputRow, Button } from './Style';
import Input from '../../../element/Input';
import Icon from '../../../element/Icon';

const Attendee = props => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleInputChange = event => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    if (name === 'name') {
      setName(value);
    }
    if (name === 'email') {
      setEmail(value);
    }
  };
  return (
    <Area>
      <InputRow isTable={false}>
        <div>New</div>
        <Input
          type="text"
          id="name"
          name="name"
          show={true}
          isValid={true}
          value={name}
          onChange={handleInputChange}
        />
        <Input
          type="text"
          id="email"
          name="email"
          show={true}
          isValid={true}
          value={email}
          onChange={handleInputChange}
        />
        <Button
          show={true}
          onClick={() => {
            const attendeesTable = [...props.attendees];
            const index = attendeesTable.length + 1;
            attendeesTable.push({ index, name, email });
            props.setAttendees(attendeesTable);
            setName('');
            setEmail('');
          }}
        >
          <Icon icon="faUserPlus" />
        </Button>
      </InputRow>
      <HeaderRow>
        <div>#</div>
        <div>Name</div>
        <div>Email</div>
        <div />
      </HeaderRow>
      {props.attendees && props.attendees.length > 0 ? (
        props.attendees.map(attendee => (
          <InputRow key={attendee.index} isTable={true}>
            <div>{attendee.index}</div>
            <div>{attendee.name}</div>
            <div>{attendee.email}</div>
            <Button
              show={true}
              onClick={() => {
                props.setAttendees(
                  props.attendees.filter(item => {
                    return item.index !== attendee.index;
                  })
                );
              }}
            >
              <Icon icon="faUserMinus" />
            </Button>
          </InputRow>
        ))
      ) : (
        <div>Add attendees</div>
      )}
    </Area>
  );
};

export default Attendee;
