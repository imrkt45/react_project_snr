import React from "react";
import "./Mainpage.css"; 
import { Box, Card, Typography } from "@mui/material";

interface mainpageprops {
    ind: number;
    details: {
                img:string,
                des:string,

    };
}
  

const Mainpage: React.FC<mainpageprops> = (props):any => {

  return (
    <Box className="maincontainer">
    <Card className="card-container">
      <Card className="image-container">
        <img src={props.details.img} alt="" />
      </Card>
      <Typography variant="h6"  style={{ marginLeft: "30px"}}>
               {props.details.des}
      </Typography>
    </Card>
    </Box>
  );
};
export default Mainpage