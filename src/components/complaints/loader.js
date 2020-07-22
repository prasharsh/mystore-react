import React from "react";
import Spinner from "react-bootstrap/Spinner";
import "../home/home.css";
function ShowDetail() {
  return (
    <Spinner className="loading-image" animation="border" role="status">
      <span className="sr-only">Loading...</span>
    </Spinner>
  );
}

export default ShowDetail;
