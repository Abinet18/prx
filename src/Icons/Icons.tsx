import React, { useState } from 'react';
import SelectInput from '../Inputs/SelectInput';

// const IconSVG = lazy(() => import('../assets/icons/google.svg'));

import { iconOptions } from './IconOptions';

const IconChooser = () => {
  const [iconName, setIconName] = useState('');
  // console.log(iconOptions);
  return (
    <>
      <SelectInput
        value={iconName}
        onChange={(iconName) => setIconName(iconName)}
        options={iconOptions}
        groupBy={(option) => option.group ?? ''}
      />

      {iconName && <Icon iconName={iconName} height={100} width={100} />}
    </>
  );
};

type IconProps = {
  iconName: string;
  height: number;
  width: number;
  className?: string;
};
const Icon = ({ iconName, height, width, className }: IconProps) => {
  return (
    <img
      style={{ height, width }}
      alt='Google'
      src={iconName}
      className={className}
    />
  );
};

export default IconChooser;
