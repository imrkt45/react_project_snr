import React from "react";
import { Box, Typography } from "@mui/material";

interface LeftHeaderProps {
  img1: string;
  txt1: string;
}

const LeftHeader: React.FC<LeftHeaderProps> = ({ img1, txt1 }) => {
  return (
    <Box className="content">
      <Box className="image">
        <img src={img1} alt="" />
      </Box>
      <Box className="txt">
        <Typography variant="h6">{txt1}</Typography>
      </Box>
    </Box>
  );
};

export default LeftHeader;
