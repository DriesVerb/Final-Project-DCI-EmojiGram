import React from 'react';

import Icons from '../../svg/symbol-defs.svg';

const Icon = ({ name, color, size }) => {
  return (
    <div className="icon">
      <svg className={`icon-${name} icon__color--${color} icon__size--${size}`}>
        <use xlinkHref={`${Icons}#icon-${name}`} />
      </svg>
    </div>
  );
};

export default Icon;
