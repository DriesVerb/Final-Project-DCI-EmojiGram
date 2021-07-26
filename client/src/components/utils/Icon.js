import React from 'react';

import Icons from '../../svg/symbol-defs.svg';

const Icon = ({ name, color, size }) => {
  return (
    <svg
      className={`icon icon-${name} icon__color--${color} icon__size--${size}`}
    >
      <use xlinkHref={`${Icons}#icon-${name}`} />
    </svg>
  );
};

export default Icon;
