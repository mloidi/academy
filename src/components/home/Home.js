import React, { useContext } from '../../../node_modules/react';

import { AuxDataContext } from '../../globalState';

export default function Home() {
  const { selectedAcademicYear } = useContext(AuxDataContext);
  return <div>{selectedAcademicYear && selectedAcademicYear.description}</div>;
}
