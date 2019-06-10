import React, { useContext } from '../../../node_modules/react';
import { NavLink as Link } from '../../../node_modules/react-router-dom';

import {
  Area,
  MenuOptionsArea,
  EndArea,
  MenuBar,
  Button,
  Avatar
} from './Style';
import { AuthContext, AuxDataContext } from '../../globalState';
import Icon from '../element/Icon';

export default function Menu() {
  const { logOut, user } = useContext(AuthContext);
  const { menu, selectedAcademicYear } = useContext(AuxDataContext);

  const canSeeMenuOption = (role, roles) => {
    if (role === 'ADMIN') {
      return true;
    }
    if (
      roles.find(item => {
        return item === role;
      })
    ) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <Area>
      <div>{selectedAcademicYear && selectedAcademicYear.description}</div>
      <MenuOptionsArea>
        <MenuBar>
          {menu.map(menu => (
            <React.Fragment key={menu.name}>
              {canSeeMenuOption(user.role, menu.role) && (
                <li>
                  <Link
                    className="link"
                    activeClassName="selected"
                    exact
                    to={menu.path}
                  >
                    <Icon icon={menu.icon} />
                    {' ' + menu.name}
                  </Link>
                </li>
              )}
            </React.Fragment>
          ))}
        </MenuBar>
      </MenuOptionsArea>
      <EndArea>
        <Avatar src={user.image} alt={user.userName} />
        <Button onClick={() => logOut()} show={true}>
          <Icon icon="faSignOutAlt" />
          {' Log out'}
        </Button>
      </EndArea>
    </Area>
  );
}
