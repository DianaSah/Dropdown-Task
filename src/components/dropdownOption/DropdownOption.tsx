import styles from './DropdownOption.module.scss';

export type Option = {
  label: string
  value: number
}

type DropdownOptionProps = {
  option: Option
  onChange: (option: Option | undefined) => void
}

export function DropdownOption({ option, onChange }: DropdownOptionProps) {
  return (
    <li
      key={option.value}
      className={styles.option}
      onClick={() => {
        onChange(option)
      }}
    >
      {option.label}
    </li>
  );
};
