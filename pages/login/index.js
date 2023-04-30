import React from 'react';
import {Box} from "@mui/material";
import ImageFrame from "../../src/page-components/login/ImageFrame";
import LoginComponent from "../../src/page-components/login/LoginComponent";

const Index = () => {

    return (
      <ImageFrame>
          <Box display="flex" alignItems={'center'} width={'100%'} justifyContent={'center'} flexDirection="column" height="100%">
              <LoginComponent/>
          </Box>
      </ImageFrame>
  );
};

export default Index;
