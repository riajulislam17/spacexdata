import React from "react";
import not_found from "../../Images/not_found.gif";

const NotFound = () => {
  return (
    <div>
      <div className="d-flex justify-content-center align-items-center h-50">
        <img className="img-fluid " src={not_found} style={{height:"400px", width:"800px"}} alt="" />
      </div>
    </div>
  );
};

export default NotFound;
