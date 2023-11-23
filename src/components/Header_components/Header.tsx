import React from "react";
import LeftHeader from "./leftheader";
import RightHeader from "./rightheader";
import { Box } from "@mui/material";

interface HeaderProps {
  ind: number;
  details: {
    img1: string;
    txt1: string;
    txt2: string;
    img2: string;
    img3: string;
    firstdrop: string;
    seconddrop: string;
  };
}

const Header: React.FC<HeaderProps> = (props) => {
  return (
    <Box className="header1">
      <LeftHeader
        img1={props.details.img1}
        txt1={props.details.txt1}
      />
      <RightHeader
        img2={props.details.img2}
        img3={props.details.img3}
        txt2={props.details.txt2}
        firstdrop={props.details.firstdrop}
        seconddrop={props.details.seconddrop}
      />
    </Box>
  );
};

export default Header;
