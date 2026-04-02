import React from "react";

const AlertBox = ({ message }) => {
  if (!message) return null;
  return <div className="alert">{message}</div>;
};

export default AlertBox;


