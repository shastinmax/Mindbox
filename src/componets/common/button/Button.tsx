import React from 'react';

import { ButtonPropsType } from './types';

export const Button = (props: ButtonPropsType) => {
  const { title, className, callback } = props;

  return (
    <button onClick={callback} className={className} type="button">
      <span>{title}</span>
      <i />
    </button>
  );
};
