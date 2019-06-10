import React, { useContext, useState } from '../../../node_modules/react';
import { Helmet } from '../../../node_modules/react-helmet/lib/Helmet';

import { Area, Title, Layout, AdminMenu, AdminMenuOption } from './Style';
import { AuxDataContext } from '../../globalState';
import Icon from '../element/Icon';
import AcademicYears from './academicYears/AcademicYears';
import Campus from './campus/Campus';
import Schools from './schools/Schools';

const Admin = () => {
  const { adminMenu, setAdminMenu } = useContext(AuxDataContext);
  const [selectedMenuOption, setSelectedMenuOption] = useState(() => {
    return adminMenu.find(item => {
      return item.selected;
    });
  });
  return (
    <Area>
      <Helmet>
        <title>admin</title>
      </Helmet>
      <Title>
        <Icon icon="faCogs" /> Admin
      </Title>
      <Layout>
        <AdminMenu>
          {adminMenu.map(item => (
            <AdminMenuOption
              key={item.index}
              className={item.selected ? 'selected' : ''}
              onClick={() => {
                setAdminMenu(
                  [...adminMenu].map(itemCopy => {
                    if (itemCopy.index === item.index) {
                      itemCopy.selected = true;
                      setSelectedMenuOption(itemCopy);
                    } else {
                      itemCopy.selected = false;
                    }
                    return itemCopy;
                  })
                );
              }}
            >
              {item.value}
            </AdminMenuOption>
          ))}
        </AdminMenu>
        <div>
          {selectedMenuOption.index === 1 ? (
            <AcademicYears />
          ) : selectedMenuOption.index === 2 ? (
            <Campus />
          ) : selectedMenuOption.index === 3 ? (
            <Schools />
          ) : (
            <div />
          )}
        </div>
      </Layout>
    </Area>
  );
};

export default Admin;
