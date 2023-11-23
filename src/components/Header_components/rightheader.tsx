import React, { useState } from "react";
import { Button, Box, Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

interface RightHeaderProps {
  img2: string;
  img3: string;
  txt2: string;
  firstdrop: string;
  seconddrop: string;
}

const RightHeader: React.FC<RightHeaderProps> = ({ img2, img3, txt2, firstdrop, seconddrop }) => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  const handleSignInClick = () => {
    setIsSignedIn(true);
  };

  return (
    <Box className="new_class">
      <Box className="dropdown">
        <Typography >
          {firstdrop}{" "}
          <FontAwesomeIcon className="angle-down" icon={faAngleDown} />
        </Typography>
      </Box>
      <Box className="dropdown" >
        <Typography>
          {seconddrop}{" "}
          <FontAwesomeIcon className="angle-down" icon={faAngleDown} />
     </Typography>
      </Box>
      <Box className="moon">
        <img src={img2} alt="" />
      </Box>
      {!isSignedIn ? (
        <Button className="signin-button" onClick={handleSignInClick}>
          {txt2}
        </Button>
      ) : (
        <Box className="moon">
          <img src={img3} alt="" />
        </Box>
      )}
    </Box>
  );
};

export default RightHeader;
