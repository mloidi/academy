import React from 'react';

import { Button } from '../../../../css/GlobalStyle';
import Icon from '../../../element/Icon';

const Details = ({ academicYear, goBackFromDetails }) => {
  return (
    <React.Fragment>
      <div>{academicYear.description}</div>
      <div>Academic year dates</div>
      <div>Academic year admission dates</div>
      <div>Academic year tuition dates</div>
      <div>Academic year incoming dates</div>
      <div>Academic year outgoing dates</div>
      <div>
        <Button
          show={true}
          onClick={() => {
            goBackFromDetails();
          }}
        >
          <Icon icon="faUndoAlt" /> Go back
        </Button>
        <Button
          show={true}
          onClick={() => {
            goBackFromDetails();
          }}
        >
          <Icon icon="faSave" /> Save
        </Button>
        <Button
          show={true}
          onClick={() => {
            goBackFromDetails();
          }}
        >
          <Icon icon="faTrash" /> Delete
        </Button>
      </div>
    </React.Fragment>
  );
};

export default Details;
