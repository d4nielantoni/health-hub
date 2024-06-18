import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

function AlertDismissible(props) {

  return (
    <>
      <Alert show={props.show} variant={props.type}>
        <Alert.Heading>{props.heading}</Alert.Heading>
        <p>
          {props.message || "This is a default message"}
        </p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => props.setShow(false)} variant="outline-success">
            fechar
          </Button>
        </div>
      </Alert>

    </>
  );
}

export default AlertDismissible;