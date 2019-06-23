import React, { useContext, useState, useEffect } from 'react';

import {
  Button,
  AcademicYearBoxes,
  AcademicYearBox
} from '../../../css/GlobalStyle';
import {
  AuthContext,
  AlertContext,
  AuxDataContext
} from '../../../globalState';
import { AcademicYearService } from '../../../service/adminData.service';
import Icon from '../../element/Icon';
import Details from './details/Details';

const AcademicYears = () => {
  const { token } = useContext(AuthContext);
  const { sendSuccess } = useContext(AlertContext);
  const {
    academicYear,
    // , updateAcademicYear
    setAcademicYear
  } = useContext(AuxDataContext);

  const [showDetails, setShowDetails] = useState(false);
  const [selectedAcademicYear, setSelectedAcademicYear] = useState();

  const [academicYears, setAcademicYears] = useState([]);
  const [hasMoreRightItems, setHasMoreRightItems] = useState(false);
  const [hasMoreLeftItems, setHasMoreLeftItems] = useState(false);

  useEffect(() => {
    if (academicYear) {
      const threeAcademicYears = [];
      let isActive = false;
      for (let index = 0; index < academicYear.length; index++) {
        const element = academicYear[index];
        if (isActive) {
          threeAcademicYears.push(element);
        }
        if (element.active) {
          if (index > 0) {
            threeAcademicYears.push(academicYear[index - 1]);
          }
          threeAcademicYears.push(element);
        }
        isActive = element.active;
      }
      if (academicYear.length > 3) {
        setHasMoreRightItems(true);
      }
      setHasMoreLeftItems(false);
      setAcademicYears(threeAcademicYears);
    }
  }, [academicYear]);

  useEffect(() => {
    AcademicYearService.get(token).then(response => {
      setAcademicYear(response);
    });
  }, [setAcademicYear, token]);

  // const handleInputChange = event => {
  //   const target = event.target;
  //   const name = target.name;
  //   const academicYearCopy = [...academicYear];
  //   updateAcademicYear(
  //     academicYearCopy.map(itemAcademicYearCopy => {
  //       if (itemAcademicYearCopy.description === name) {
  //         itemAcademicYearCopy.active = true;
  //       } else {
  //         itemAcademicYearCopy.active = false;
  //       }
  //       return itemAcademicYearCopy;
  //     })
  //   );
  // };

  const goBackFromDetails = () => {
    setShowDetails(false);
    setSelectedAcademicYear();
  };

  return (
    <React.Fragment>
      <React.Fragment>
        <AcademicYearBoxes>
          {hasMoreLeftItems ? (
            <Button
              show={true}
              onClick={() => {
                const index = academicYear.findIndex(item => {
                  return item._id === academicYears[0]._id;
                });
                const newArray = [];
                if (academicYear[index - 1]) {
                  newArray.push(academicYear[index - 1]);
                }
                newArray.push(academicYear[index]);
                newArray.push(academicYear[index + 1]);
                if (academicYear[0]._id === newArray[0]._id) {
                  setHasMoreLeftItems(false);
                }
                setHasMoreRightItems(true);
                setAcademicYears(newArray);
              }}
            >
              <Icon icon="faArrowLeft" />
            </Button>
          ) : (
            <div />
          )}
          {academicYears &&
            academicYears.map(item => (
              <AcademicYearBox
                key={item._id}
                className={item.active ? 'active' : ''}
                onClick={() => {
                  setShowDetails(!showDetails);
                  if (selectedAcademicYear) {
                    setSelectedAcademicYear();
                  } else {
                    setSelectedAcademicYear(item);
                  }
                }}
              >
                <div>{item.description}</div>
              </AcademicYearBox>
            ))}
          {hasMoreRightItems ? (
            <Button
              show={true}
              onClick={() => {
                const index = academicYear.findIndex(item => {
                  return item._id === academicYears[2]._id;
                });
                const newArray = [];
                newArray.push(academicYear[index - 1]);
                newArray.push(academicYear[index]);
                if (academicYear[index + 1]) {
                  newArray.push(academicYear[index + 1]);
                }
                if (
                  academicYear[academicYear.length - 1]._id ===
                  newArray[newArray.length - 1]._id
                ) {
                  setHasMoreRightItems(false);
                }
                setHasMoreLeftItems(true);
                setAcademicYears(newArray);
              }}
            >
              <Icon icon="faArrowRight" />
            </Button>
          ) : (
            <Button
              show={true}
              onClick={() => {
                const lastAcademicYear = academicYear[academicYear.length - 1];
                const firstYear = lastAcademicYear.secondYear + 1;
                const secondYear = lastAcademicYear.secondYear + 2;
                const academicYearCopy = [...academicYear];
                const newAcademicYear = {
                  _id: firstYear + ' - ' + secondYear,
                  firstYear,
                  secondYear,
                  description: firstYear + ' - ' + secondYear,
                  showActions: false,
                  isAdded: true,
                  isEdited: false,
                  isDeleted: false
                };
                academicYearCopy.push(newAcademicYear);
                setAcademicYear(academicYearCopy);
                sendSuccess(
                  'New academic year ' + newAcademicYear.description + ' added'
                );
              }}
            >
              <Icon icon="faPlus" />
            </Button>
          )}
        </AcademicYearBoxes>
      </React.Fragment>
      {showDetails ? (
        <Details
          academicYear={selectedAcademicYear}
          goBackFromDetails={goBackFromDetails}
        />
      ) : (
        <div />
      )}
    </React.Fragment>
  );
};

export default AcademicYears;
