import React from 'react';
import { Typography } from '@mui/material';
import { StyledBannerDiv } from './Style';

const Banner = ({ type, loginData }) => {
  return (
    <StyledBannerDiv>
      <Typography variant="h3">{`${type} Dashboard`}</Typography>
      <Typography variant="h5">{loginData.name}</Typography>
    </StyledBannerDiv>
  );
};

export default Banner;
