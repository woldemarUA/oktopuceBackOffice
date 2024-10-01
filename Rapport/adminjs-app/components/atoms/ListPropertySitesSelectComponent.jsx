import React, { useState, useEffect, useRef } from 'react';

import { customResourceAction } from '../actions/apiCalls.mjs';
import DropDownComp from './DropDownComp';
import { Button } from '../styled-componens/Atoms.mjs';

const ListPropertySitesSelectComponent = ({ record, property }) => {
  const [options, setOptions] = useState(null);
  const [openDropDown, setOpenDropDown] = useState(false);
  const wrapperRef = useRef(null);
  useEffect(() => {
    async function fetchSites() {
      try {
        const payload = { id: record.params.id };
        const opt = await customResourceAction(
          property.props.resource,
          property.props.actionName,
          payload
        );
        setOptions(
          property.props.label === 'Sites' ? opt.sites : opt.equipments
        );
      } catch (error) {
        console.error(error);
      }
    }

    fetchSites();

    // Event listener to handle clicks outside the dropdown
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setOpenDropDown(false);
      }
    }
    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [property]);
  // style={{ position: 'relative' }}
  return (
    <>
      {options && (
        <div
          ref={wrapperRef}
          style={{ position: 'relative' }}>
          <Button
            onClick={(event) => {
              setOpenDropDown(!openDropDown);
            }}>
            {options.length}
          </Button>
          {openDropDown && options.length > 0 && (
            <DropDownComp options={options} />
          )}
        </div>
      )}
    </>
  );
};

export default ListPropertySitesSelectComponent;
