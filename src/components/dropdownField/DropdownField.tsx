import classNames from 'classnames';

import { type Option } from '../dropdownOption/DropdownOption';
import { ReactComponent as ArrowDown } from '../../assets/arrowDown.svg';
import { ReactComponent as ArrowUp } from '../../assets/arrowUp.svg';

import styles from './DropdownField.module.scss';

type DropdownFieldProps = {
  selectedOption?: Option
  isOpen: boolean
  onFiledClick: (isOpen: boolean) => void
}

export function DropdownField({ selectedOption, isOpen, onFiledClick }: DropdownFieldProps) {
  const defaultLabel = 'Select an option';

  return (
    <button
      className={classNames(styles.dropdown, {
        [styles.defaultText]: !selectedOption?.label
      })}
      onClick={() => { onFiledClick(!isOpen)} }
    >
      {selectedOption?.label || defaultLabel}
      {isOpen
        ? <ArrowDown />
        : <ArrowUp />
      }
    </button>
);
};
