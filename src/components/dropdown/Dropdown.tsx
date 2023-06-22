import { useState } from 'react';
import classNames from 'classnames';

import ArrowDown from '../../assets/ArrowDown';
import ArrowUp from '../../assets/ArrowUp';

import styles from './Dropdown.module.scss';

export type DropdownOption = {
  label: string
  value: number
}

type DropdownProps = {
  selectedOption?: DropdownOption
  options: DropdownOption[]
  onChange: (value: DropdownOption | undefined) => void
}

export function Dropdown({ selectedOption, options, onChange }: DropdownProps) {
  const defaultLabel = 'Select an option';
  const [isOpen, setIsOpen] = useState(false);

  const selectOption = (option: DropdownOption) => {
    onChange(option);
  }

  return (
    <div className={styles.container}>
      <button
        className={classNames(styles.dropdown, {
          [styles.defaultText]: !selectedOption?.label
        })}
        onClick={() => setIsOpen(prev => !prev)}
      >
        {selectedOption?.label || defaultLabel}
        {isOpen ? <ArrowUp /> : <ArrowDown />}
      </button>
      {isOpen && 
      <ul className={styles.optionsList}>
        {options.map((option) =>
          <li
            key={option.value}
            className={styles.option}
            onClick={e => {
              selectOption(option)
              setIsOpen(false)
            }}
          >
            {option.label}
          </li>
        )}
      </ul>}
    </div>
  );
};
