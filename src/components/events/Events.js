import React, { useContext, useState, useEffect } from '../../../node_modules/react';
import { Helmet } from '../../../node_modules/react-helmet/lib/Helmet';
import moment from '../../../node_modules/moment/moment';

import { Area, Title, Table, Header, Row } from './Style';
import { Button } from '../../css/GlobalStyle';
import { AuthContext, AuxDataContext } from '../../globalState';
import { EventService } from '../../service/event.service';
import Icon from '../element/Icon';
import Event from './event/Event';

export default function Events() {
  const { token } = useContext(AuthContext);
  const { selectedAcademicYear } = useContext(AuxDataContext);

  const [tableHeader] = useState(() => {
    return ['name', 'start', 'end', 'attendees'];
  });

  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState({});
  const [showForm, setShowForm] = useState(false);

  const [updateEvents, setUpdateEvents] = useState(true);

  useEffect(() => {
    if (updateEvents) {
      EventService.get(token, selectedAcademicYear._id)
        .then(response => {
          setEvents(response);
        })
        .catch(error => console.error(error));
      setUpdateEvents(false);
    }
  }, [updateEvents, token, selectedAcademicYear]);

  return (
    <Area>
      <Helmet>
        {selectedEvent.name ? (
          <title>{selectedEvent.name}</title>
        ) : (
          <title>my events</title>
        )}
      </Helmet>
      <Title>
        {selectedEvent.name ? (
          <div>event detail</div>
        ) : (
          <div>my events {'(' + selectedAcademicYear.description + ')'}</div>
        )}
      </Title>
      {!showForm ? (
        <React.Fragment>
          <Button
            show={true}
            onClick={() => {
              setSelectedEvent({
                _id: null,
                name: '',
                description: '',
                start: '',
                end: '',
                assistants: [],
                publish: false
              });
              setShowForm(true);
            }}
          >
            <Icon icon="faCalendarPlus" /> {' new event'}
          </Button>
          <Table>
            <Header>
              {tableHeader.map(tableHeader => (
                <div key={tableHeader}>{tableHeader}</div>
              ))}
            </Header>
            {events.map(event => (
              <Row
                key={event._id}
                onClick={() => {
                  setSelectedEvent({
                    _id: event._id,
                    name: event.name,
                    description: event.description,
                    start: event.start,
                    end: event.end,
                    assistants: event.assistants,
                    publish: event.publish
                  });
                  setShowForm(true);
                }}
              >
                <div>{event.name}</div>
                <div>{moment(event.start).format('MMM DD, YYYY')}</div>
                <div>{moment(event.end).format('MMM DD, YYYY')}</div>
                <div>{event.assistants.length}</div>
              </Row>
            ))}
          </Table>
        </React.Fragment>
      ) : (
        <Event
          selectedEvent={selectedEvent}
          closeForm={() => {
            setShowForm(false);
          }}
          updateEvents={() => {
            setUpdateEvents(true);
          }}
        />
      )}
    </Area>
  );
}
