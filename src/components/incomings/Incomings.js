import React from '../../../node_modules/react';
import { Helmet } from '../../../node_modules/react-helmet/lib/Helmet';

import { Area, Title, ActionRow } from './Style';
import { Button } from '../../css/GlobalStyle';
import Icon from '../element/Icon';

const Incomings = () => {
  return (
    <Area>
      <Helmet>
        <title>Incomings students</title>
      </Helmet>
      <Title>Incomings students</Title>
      <ActionRow>
        <Button show={true}>
          <Icon icon="faPlus" /> {' add incoming student'}
        </Button>
      </ActionRow>
    </Area>
  );
};

export default Incomings;
