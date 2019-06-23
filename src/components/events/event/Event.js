import React, { useContext, useState } from 'react';
import moment from 'moment';

import {
  Area,
  Separator,
  TabHeader,
  TabArea,
  Rows,
  Field,
  DateRow,
  Date,
  CheckField,
  Buttons
} from './Style';
import { Button } from '../../../css/GlobalStyle';
import Input from '../../element/Input';
import Icon from '../../element/Icon';
import Calendar from '../../element/calendar/Calendar';
import TextEditor from '../../element/editor/TextEditor';
import {
  AuthContext,
  AlertContext,
  AuxDataContext
} from '../../../globalState';
import { EventService } from '../../../service/event.service';
import Attendee from './attendee/Attendee';
import Task from './task/Task';
import Budget from './budget/Budget';

const dateFormat = 'MMM DD, YYYY';

const Event = props => {
  const { token } = useContext(AuthContext);
  const { sendSuccess } = useContext(AlertContext);
  const { getSelectedAcademicYear } = useContext(AuxDataContext);

  const [tabs, setTabs] = useState(() => {
    return [
      { index: 1, icon: 'faHome', name: 'event data', selected: true },
      { index: 2, icon: 'faHome', name: 'Attendees', selected: false },
      { index: 3, icon: 'faHome', name: 'task', selected: false },
      { index: 4, icon: 'faHome', name: 'Budget', selected: false }
    ];
  });

  const [showStartCalendar, setShowStartCalendar] = useState(false);
  const [showEndCalendar, setShowEndCalendar] = useState(false);

  // Event data
  const [eventId] = useState(props.selectedEvent._id);
  const [name, setName] = useState(props.selectedEvent.name);
  const [description, setDescription] = useState(
    props.selectedEvent.description
  );
  const [start, setStart] = useState(
    props.selectedEvent.start ? props.selectedEvent.start : ''
  );
  const [end, setEnd] = useState(
    props.selectedEvent.end ? props.selectedEvent.end : ''
  );
  const [attendees, setAttendees] = useState(props.selectedEvent.assistants);
  const [publish, setPublish] = useState(props.selectedEvent.publish);

  const handleInputChange = event => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    if (name === 'eventName') {
      setName(value);
    }
    if (name === 'description') {
      setDescription(value);
    }
    if (name === 'assistants') {
      setAttendees(value);
    }
    if (name === 'publish') {
      setPublish(value);
    }
  };

  const handleStartDateChange = date => {
    setStart(date);
  };
  const handleEndDateChange = date => {
    setEnd(date);
  };

  const save = isNew => {
    const userToSave = {
      name,
      description,
      start,
      end,
      assistants: attendees,
      publish,
      academicYear: getSelectedAcademicYear().value
    };
    if (!isNew) userToSave._id = eventId;
    EventService.save(token, userToSave, isNew)
      .then(response => {
        props.updateEvents();
        props.closeForm();
        sendSuccess(response.name + (isNew ? ' added' : ' edited'));
      })
      .catch(error => console.error(error));
  };

  return (
    <Area>
      <Buttons>
        {eventId ? (
          <React.Fragment>
            <Button
              show={true}
              onClick={() => {
                save(false);
              }}
            >
              <Icon icon="faUserEdit" /> {' edit Event'}
            </Button>
            <Button
              show={true}
              onClick={() => {
                EventService.delete(token, eventId).then(response => {
                  props.updateEvents();
                  props.closeForm();
                  sendSuccess(response.name + ' deleted');
                });
              }}
            >
              <Icon icon="faCalendarMinus" /> {' delete Event'}
            </Button>
          </React.Fragment>
        ) : (
          <Button
            show={true}
            onClick={() => {
              save(true);
            }}
          >
            <Icon icon="faCalendarPlus" /> {' new Event'}
          </Button>
        )}
        <Button
          show={true}
          onClick={() => {
            props.closeForm();
          }}
        >
          <Icon icon="faTimes" /> {' Cancel'}
        </Button>
      </Buttons>
      <Separator />
      <Rows>
        <Field isValid={true}>
          Event name:
          <Input
            type="text"
            id="eventName"
            name="eventName"
            show={true}
            isValid={true}
            value={name}
            onChange={handleInputChange}
          />
        </Field>
        <DateRow>
          <div>
            <Date
              onClick={() => {
                setShowStartCalendar(!showStartCalendar);
              }}
            >
              {start ? moment(start).format(dateFormat) : 'Select start date'}{' '}
              <Icon icon="faCalendar" />
            </Date>
            {showStartCalendar ? (
              <Calendar
                date={start}
                onChange={handleStartDateChange}
                showCalendar={showStartCalendar}
                setShowCalendar={setShowStartCalendar}
                minimumDate={moment()}
              />
            ) : (
              <div />
            )}
          </div>
          <div>
            <Icon icon="faArrowRight" />
          </div>
          <div>
            <Date
              onClick={() => {
                setShowEndCalendar(!showEndCalendar);
              }}
            >
              {end ? moment(end).format(dateFormat) : 'Select end date'}{' '}
              <Icon icon="faCalendar" />
            </Date>
            {showEndCalendar ? (
              <Calendar
                date={end}
                onChange={handleEndDateChange}
                showCalendar={showEndCalendar}
                setShowCalendar={setShowEndCalendar}
                minimumDate={start}
              />
            ) : (
              <div />
            )}
          </div>
        </DateRow>
      </Rows>
      <TabHeader>
        {tabs &&
          tabs.map(tab => (
            <li
              key={tab.index}
              className={tab.selected ? 'selected' : 'noSelected'}
              onClick={() => {
                setTabs(
                  tabs.map(item => {
                    if (item.index === tab.index) {
                      item.selected = true;
                    } else {
                      item.selected = false;
                    }
                    return item;
                  })
                );
              }}
            >
              {tab.name}
            </li>
          ))}
      </TabHeader>
      <TabArea>
        {/* Event data */}
        {tabs[0].selected && (
          <Rows>
            <Field isValid={true}>
              {description ? (
                <TextEditor
                  sendText={setDescription}
                  readOnly={false}
                  editorState={JSON.parse(description)}
                />
              ) : (
                <TextEditor sendText={setDescription} readOnly={false} />
              )}
            </Field>
            <CheckField isValid={true}>
              Publish:
              <Input
                type="checkbox"
                id="publish"
                name="publish"
                checked={publish}
                onChange={handleInputChange}
              />
            </CheckField>
          </Rows>
        )}
        {/* Attendees */}
        {tabs[1].selected && (
          <Attendee attendees={attendees} setAttendees={setAttendees} />
        )}
        {/* Tasks */}
        {tabs[2].selected && <Task />}
        {/* Budget */}
        {tabs[3].selected && <Budget />}
      </TabArea>
      <Buttons>
        {eventId ? (
          <React.Fragment>
            <Button
              show={true}
              onClick={() => {
                save(false);
              }}
            >
              <Icon icon="faUserEdit" /> {' edit Event'}
            </Button>
            <Button
              show={true}
              onClick={() => {
                EventService.delete(token, eventId).then(response => {
                  props.updateEvents();
                  props.closeForm();
                  sendSuccess(response.name + ' deleted');
                });
              }}
            >
              <Icon icon="faCalendarMinus" /> {' delete Event'}
            </Button>
          </React.Fragment>
        ) : (
          <Button
            show={true}
            onClick={() => {
              save(true);
            }}
          >
            <Icon icon="faCalendarPlus" /> {' new Event'}
          </Button>
        )}
        <Button
          show={true}
          onClick={() => {
            props.closeForm();
          }}
        >
          <Icon icon="faTimes" /> {' Cancel'}
        </Button>
      </Buttons>
    </Area>
  );
};

export default Event;
