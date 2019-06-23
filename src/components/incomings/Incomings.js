import React from 'react';
import { Helmet } from 'react-helmet';

import { Area, Title, Button, Buttons } from '../../css/GlobalStyle';
import Icon from '../element/Icon';

const Incomings = () => {
  return (
    <Area>
      <Helmet>
        <title>Incomings students</title>
      </Helmet>
      <Title>Incomings students</Title>
      <Buttons>
        <Button show={true}>
          <Icon icon="faPlus" /> {' add incoming student'}
        </Button>
      </Buttons>
    </Area>
  );
};

export default Incomings;
