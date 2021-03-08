import React, { useState } from 'react';
import { func, string } from 'prop-types';
import Switch from 'react-switch';
import { useDarkMode } from './useDarkMode';

// const Button = styled.button`
//   background: ${({ theme }) => theme.background};
//   border: 2px solid ${({ theme }) => theme.toggleBorder};
//   color: ${({ theme }) => theme.text};
//   border-radius: 30px;
//   cursor: pointer;
//   font-size: 0.8rem;
//   padding: 0.6rem;
// `;

const Toggle = () => {
  const [toggled, setToggled] = useState(false);
  const [theme, toggleTheme, loading] = useDarkMode();
  // return <Button onClick={toggleTheme}>Switch Theme</Button>;
  return (
    <label className='d-flex flex-column'>
      <Switch
        onChange={() => {
          console.log('theme', theme);
          toggleTheme();
          setToggled(!toggled);
        }}
        checked={toggled}
      />
      <span className='toggle-text'>Dark Mode</span>
    </label>
  );
};

// Toggle.propTypes = {
//   theme: string.isRequired,
//   toggleTheme: func.isRequired,
// };
export default Toggle;
