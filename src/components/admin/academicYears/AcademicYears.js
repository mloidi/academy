import React, { useContext, useState, useEffect } from '../../../../node_modules/react';

import {
  Header,
  Row,
  RowText,
  RowActions,
  NewAcademicYear,
  NewAcademicYearInput
  // ErrorLabel
} from './Style';
import { Button } from '../../../css/GlobalStyle';
import {
  AuthContext,
  AlertContext,
  AuxDataContext
} from '../../../globalState';
import { AcademicYearService } from '../../../service/adminData.service';
import Input from '../../element/Input';
import Icon from '../../element/Icon';

const AcademicYears = () => {
  const { token } = useContext(AuthContext);
  const { sendSuccess } = useContext(AlertContext);
  const { academicYear, updateAcademicYear, setAcademicYear } = useContext(
    AuxDataContext
  );
  const [tableHeader] = useState(() => {
    return ['academic year', 'current', ''];
  });
  const [showNewAcademicYear, setShowNewAcademicYear] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [firstYear, setFirstYear] = useState('');
  // const [isOkFirstYear, setIsOkFirstYear] = useState(true);
  const [secondYear, setSecondYear] = useState('');
  // const [isOkSecondYear, setIsOkSecondYear] = useState(true);

  useEffect(() => {
    AcademicYearService.get(token).then(response => {
      setAcademicYear(response);
    });
  }, [setAcademicYear, token]);

  const handleInputChange = event => {
    const target = event.target;
    const name = target.name;
    const academicYearCopy = [...academicYear];
    updateAcademicYear(
      academicYearCopy.map(itemAcademicYearCopy => {
        if (itemAcademicYearCopy.description === name) {
          itemAcademicYearCopy.active = true;
        } else {
          itemAcademicYearCopy.active = false;
        }
        return itemAcademicYearCopy;
      })
    );
  };

  const showActionsButton = (_id, showActions) => {
    const academicYearCopy = [...academicYear];
    setAcademicYear(
      academicYearCopy.map(itemAcademicYearCopy => {
        if (itemAcademicYearCopy._id === _id) {
          itemAcademicYearCopy.showActions = showActions;
        }
        return itemAcademicYearCopy;
      })
    );
  };

  return (
    <React.Fragment>
      <Header>
        {tableHeader.map(tableHeader => (
          <div key={tableHeader}>{tableHeader}</div>
        ))}
      </Header>
      {academicYear &&
        academicYear.map(item => (
          <Row
            isAdded={item.isAdded}
            isEdited={item.isEdited}
            isDeleted={item.isDeleted}
            key={item._id}
            onMouseEnter={() => {
              showActionsButton(item._id, true);
            }}
            onMouseLeave={() => {
              showActionsButton(item._id, false);
            }}
          >
            <RowText>{item.description}</RowText>
            <RowText>
              <Input
                type="checkbox"
                id={item.description}
                name={item.description}
                checked={item.active}
                onChange={handleInputChange}
              />
            </RowText>
            {item.showActions && !isEditing ? (
              <RowActions>
                <Button
                  show={true}
                  onClick={() => {
                    const academicYearCopy = [...academicYear];
                    setAcademicYear(
                      academicYearCopy.map(itemAcademicYearCopy => {
                        if (itemAcademicYearCopy._id === item._id) {
                          itemAcademicYearCopy.isEdited = true;
                        }
                        return itemAcademicYearCopy;
                      })
                    );
                  }}
                >
                  <Icon icon="faEdit" /> Edit
                </Button>
                <Button
                  show={true}
                  onClick={() => {
                    const academicYearCopy = [...academicYear];
                    setAcademicYear(
                      academicYearCopy.map(itemAcademicYearCopy => {
                        if (itemAcademicYearCopy._id === item._id) {
                          itemAcademicYearCopy.isDeleted = true;
                        }
                        return itemAcademicYearCopy;
                      })
                    );
                  }}
                >
                  <Icon icon="faTrash" /> Delete
                </Button>
              </RowActions>
            ) : (
              <div />
            )}
          </Row>
        ))}
      {showNewAcademicYear ? (
        <Row>
          <NewAcademicYear>
            <NewAcademicYearInput>
              <RowText>
                <label>{firstYear}</label>
                <label>{' - '}</label>
                <label>{secondYear}</label>
              </RowText>
              {/* <Input
                type="text"
                id="firstYear"
                name="firstYear"
                show={true}
                isValid={isOkFirstYear}
                value={firstYear}
                onChange={event => {
                  const target = event.target;
                  const value = target.value;
                  if (value !== '') {
                    setIsOkFirstYear(true);
                  }
                  if (value.match(/^[0-9]{0,4}$/)) {
                    setFirstYear(value);
                  }
                }}
              />
              <Input
                type="text"
                id="secondYear"
                name="secondYear"
                show={true}
                isValid={isOkSecondYear}
                value={secondYear}
                onChange={event => {
                  const target = event.target;
                  const value = target.value;
                  if (value !== '') {
                    setIsOkSecondYear(true);
                  }
                  if (value.match(/^[0-9]{0,4}$/)) {
                    setSecondYear(value);
                  }
                }}
              /> */}
            </NewAcademicYearInput>
            {/* {isOkFirstYear && isOkSecondYear ? (
              ''
            ) : (
              <ErrorLabel>
                Please insert a new <strong>Academic year</strong>
              </ErrorLabel>
            )} */}
          </NewAcademicYear>
          <div />
          <RowActions>
            <Button
              show={true}
              onClick={() => {
                // if (firstYear === '' && secondYear === '') {
                //   setIsOkFirstYear(false);
                //   setIsOkSecondYear(false);
                // } else {
                //   AcademicYearService.save(
                //     token,
                //     {
                //       firstYear,
                //       secondYear
                //     },
                //     true
                //   ).then(response => {
                //     sendSuccess(
                //       'New academic year ' + response.description + ' added'
                //     );
                //     setShowNewAcademicYear(!showNewAcademicYear);
                //     setIsEditing(false);
                //   });
                // }
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
                setShowNewAcademicYear(!showNewAcademicYear);
                setIsEditing(false);
              }}
            >
              <Icon icon="faSave" /> Save
            </Button>
            <Button
              show={true}
              onClick={() => {
                // setIsOkFirstYear(true);
                // setIsOkSecondYear(true);
                setFirstYear('');
                setSecondYear('');
                setShowNewAcademicYear(!showNewAcademicYear);
                setIsEditing(false);
              }}
            >
              <Icon icon="faTimes" /> Cancel
            </Button>
          </RowActions>
        </Row>
      ) : (
        <Button
          show={true}
          onClick={() => {
            const lastAcademicYear = academicYear[academicYear.length - 1];
            setFirstYear(lastAcademicYear.secondYear + 1);
            setSecondYear(lastAcademicYear.secondYear + 2);
            setShowNewAcademicYear(!showNewAcademicYear);
            setIsEditing(true);
          }}
        >
          <Icon icon="faPlus" /> Academic Year
        </Button>
      )}
    </React.Fragment>
  );
};

export default AcademicYears;
