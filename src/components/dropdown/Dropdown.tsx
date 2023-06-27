import { useState } from 'react';

import { DropdownField } from '../dropdownField/DropdownField';
import { DropdownOption, type Option } from '../dropdownOption/DropdownOption';

import styles from './Dropdown.module.scss';

type DropdownProps = {
  selectedOption?: Option
  options: Option[]
  onChange: (option: Option | undefined) => void
}

export function Dropdown({ selectedOption, options, onChange }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  const selectOption = (option: Option | undefined) => {
    setIsOpen(false);
    onChange(option);
  }

  return (
    <>
      <DropdownField
        selectedOption={selectedOption}
        isOpen={isOpen}
        onFiledClick={setIsOpen}
      />
      {isOpen && 
      <ul className={styles.optionsList}>
        {options.map((option) =>
          <DropdownOption 
            option={option}
            onChange={selectOption}
          />
        )}
      </ul>}
    </>
  );
};
