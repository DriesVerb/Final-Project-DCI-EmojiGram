import React, { useContext } from 'react';
import AlertContext from '../../context/alert/alertContext';
import { Alert,Col,Row } from 'react-bootstrap';

const Alerts = () => {
    const alertContext = useContext(AlertContext);
    
    const { alerts } = alertContext;

    return (
      //if the alert state has something then loop in it 
    alerts.length > 0 &&
    alerts.map(alert => (
      <Alert key={alert.id} variant={`${alert.alertStyle}`}>
        <Row>
           <Col  md={{ span: 8, offset: 3 }} className='fas fa-info-circle' >
 <span>{""} </span>{alert.msg} </Col></Row>
      </Alert>
    ))
  );
};

export default Alerts;