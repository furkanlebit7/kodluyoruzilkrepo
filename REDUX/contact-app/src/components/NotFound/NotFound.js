import React from "react";
import { useRouteError } from "react-router-dom";

function NotFound() {
  const error = useRouteError();
  return (
    <div className="d-flex align-items-center justify-content-center flex-column mt-5">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}

export default NotFound;
