import React, { useContext } from 'react';
import AlertContext from '../../context/alert/alertContext';

const Alerts = () => {
  const alertContext = useContext(AlertContext);

  const { alerts } = alertContext;

  return (
    //if the alert state has something then loop in it
    alerts.length > 0 &&
    alerts.map((alert) => (
      <div className="app-grid__alert">
        <div className="alert-side">
          <div
            className={`alert-popup alert-popup__${alert.alertStyle}`}
            key={alert.id}
          >
            <div className="alert-popup__msg">{alert.msg}</div>
          </div>
        </div>
      </div>
    ))
  );
};

export default Alerts;
