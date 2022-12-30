import React, { useState } from 'react'
import "./Select.css";
import Dropdown from './components/dropdown';
import { DROPDOWN_OPTIONS } from './common/data/dropdown';

const Select = () => {

  const [selectedOption, setSelectedOption] = useState(DROPDOWN_OPTIONS[0]);

  return (
    <div className="select">
      <Dropdown options={DROPDOWN_OPTIONS}
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
        label={"Select the number of Tickets"}
      />
    </div>
  )
}

export default Select
