import { useEffect, useState } from 'react';

import { Dropdown, DropdownOption } from '../dropdown/Dropdown';

import styles from './App.module.scss';

const optionsMock = [
  { label: "Option 1", value: 1 },
  { label: "Option 2", value: 2 },
  { label: "Option 3", value: 3 },
  { label: "Option 4", value: 4 },
  { label: "Option 5", value: 5 },
  { label: "Option 6", value: 6 },
  { label: "Option 7", value: 7 },
  { label: "Option 8", value: 8 },
  { label: "Option 9", value: 9 },
  { label: "Option 10", value: 10 }
]

function App() {
  const [options, setOptions] = useState<DropdownOption[]>([]);
  const [selectedOption, setSelectedOption] = useState<DropdownOption | undefined>();

  useEffect(() => {
    setOptions(optionsMock); // if we pretend that getting options - it's a side effect
  })

  return (
    <div className={styles.content}>
      <Dropdown
        options={options}
        selectedOption={selectedOption}
        onChange={option => setSelectedOption(option)} 
      />
    </div>
  );
}

export default App;
