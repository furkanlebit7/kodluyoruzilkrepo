import React, { useState } from "react";
import { Toast, ToastContainer } from "react-bootstrap";
function Error({ message }) {
  console.log(message);
  const [show, setShow] = useState(true);
  return (
    <ToastContainer className="p-3" position="top-end">
      <Toast autohide onClose={() => setShow(false)} show={show} delay={3000}>
        <Toast.Header>
          <strong className="me-auto">Error</strong>
          <small>Now</small>
        </Toast.Header>
        <Toast.Body>{message}</Toast.Body>
      </Toast>
    </ToastContainer>
  );
}

export default Error;
