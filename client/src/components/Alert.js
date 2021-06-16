import React, { useContext } from 'react';
import AlertContext from '../context/alert/alertContext';
import { Alert } from 'react-bootstrap';

const Alerts = () => {
    const alertContext = useContext(AlertContext);
    
    const { alerts } = alertContext;

    return (
      //if the alert state has something then loop in it 
    alerts.length > 0 &&
    alerts.map(alert => (
      <Alert key={alert.id} variant={`${alert.alertStyle}`}>
        <i className='fas fa-info-circle' /> {alert.msg}
      </Alert>
    ))
  );
};

export default Alerts;