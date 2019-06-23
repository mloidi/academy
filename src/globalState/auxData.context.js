import React, { createContext, useState } from 'react';

import { AcademicYearService } from '../service/adminData.service';

export const AuxDataContext = createContext();

export const AuxDataProvider = ({ children }) => {
  const [menu] = useState(() => {
    return [
      { icon: 'faHome', name: 'home', path: '/', role: ['USER'] },
      {
        icon: 'faUserGraduate',
        name: 'incomings',
        path: '/incomings',
        role: ['USER']
      },
      {
        icon: 'faCalendarAlt',
        name: 'events',
        path: '/events',
        role: ['USER']
      },
      { icon: 'faCogs', name: 'admin', path: '/admin', role: ['ADMIN'] }
    ];
  });

  const [adminMenu, setAdminMenu] = useState(() => {
    return [
      {
        index: 1,
        icon: 'faUniversity',
        value: 'Academic years',
        selected: true
      },
      { index: 2, icon: 'faUniversity', value: 'Campus', selected: false },
      { index: 3, icon: 'faUniversity', value: 'Schools', selected: false }
    ];
  });

  const [academicYear, setAcademicYear] = useState();

  const [selectedAcademicYear, setSelectedAcademicYear] = useState();

  const updateAcademicYear = updatedAcademicYear => {
    setAcademicYear(
      updatedAcademicYear.map(item => {
        if (item.active) {
          setSelectedAcademicYear(item);
        }
        return item;
      })
    );
  };

  const loadAuxData = token => {
    if (!academicYear) {
      AcademicYearService.get(token).then(response => {
        setAcademicYear(
          response.map(item => {
            if (item.active) {
              setSelectedAcademicYear(item);
            }
            return item;
          })
        );
      });
    }
  };

  return (
    <AuxDataContext.Provider
      value={{
        menu,
        academicYear,
        selectedAcademicYear,
        setAcademicYear,
        updateAcademicYear,
        adminMenu,
        setAdminMenu,
        loadAuxData
      }}
    >
      {children}
    </AuxDataContext.Provider>
  );
};
