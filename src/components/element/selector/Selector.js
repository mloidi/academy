import React, { useState } from 'react';

import { Area, Selected, Items, Item } from './Style';

const Selector = ({ values, setValues }) => {
  const [showSelector, setShowSelector] = useState(false);
  const [items, setItems] = useState(values);

  const getSelectedValue = () => {
    return values.find(value => {
      return value.selected;
    });
  };

  return (
    <Area>
      <div>
        <Selected
          onClick={() => {
            setShowSelector(!showSelector);
          }}
        >
          {getSelectedValue().value}
        </Selected>
        {showSelector && (
          <Items showSelector={showSelector}>
            {items &&
              items.map(item => (
                <Item
                  className={item.selected ? 'selected' : ''}
                  key={item.index}
                  onClick={() => {
                    setItems(
                      [...items].map(itemCopy => {
                        if (itemCopy.index === item.index) {
                          itemCopy.selected = true;
                        } else {
                          itemCopy.selected = false;
                        }
                        return itemCopy;
                      })
                    );
                    setValues(items);
                    setShowSelector(!showSelector);
                  }}
                >
                  {item.value}
                </Item>
              ))}
          </Items>
        )}
      </div>
    </Area>
  );
};

export default Selector;
