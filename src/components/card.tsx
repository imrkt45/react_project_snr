import React, { useState } from "react";

interface CardProps {
  ind: number;
  details: {
    "lastUpdatedDate":string,
"updateDate": string,

                "companyId": string,
                "resourceId": string,
                "parentId": string,
                "creationDate": string,
                "resourceName": string,
                "ownerId": string,
                "resourceType": string,
                     
  };

  
  onSelect: (index: number, resourceId: string) => void;
  onUnselect: (index: number, resourceId: string) => void;
}

const Card: React.FC<CardProps> = (props): any => {
  const [isselect, setselect] = useState("Select");
  const [borderColor, setBorderColor] = useState("white"); 

  const handleSelectClick = (): void => {
    console.log(`Select clicked for card ${props.ind}`);

    if (isselect === "Select") {
      setselect("Unselect");
      setBorderColor("red"); 
      props.onSelect(props.ind, props.details.resourceId);
    } else {
      setselect("Select");
      setBorderColor("white"); 
      props.onUnselect(props.ind, props.details.resourceId);
    }
  };

  return (
    <button
      className={`card ${isselect === "Unselect" ? "selected" : ""}`}
      style={{ borderColor: borderColor }}
      key={props.ind}
      onClick={handleSelectClick}
    >

      <div className="card-title">
        <p>{props.details.companyId}</p>
      </div>
      <div className="description">
        <p>{props.details.creationDate}</p>
        <p>{props.details.lastUpdatedDate}</p>
        <p>{props.details.parentId}</p>
        <p>{props.details.resourceId}</p>
        <p>{props.details.resourceName}</p>
        <p>{props.details.resourceType}</p>
        <p>{props.details.updateDate}</p>
      </div>
    </button>
  );
};

export default Card;
