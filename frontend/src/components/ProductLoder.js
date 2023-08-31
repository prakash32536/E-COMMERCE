import React from 'react';
import { Box, Grid } from '@mui/material';
import { StyledGridForProduct } from '../pages/Style';

const ProductLoder = () => {
  const emptyCard = [0, 1, 2, 3, 4, 5, 6, 7];
  return (
    <StyledGridForProduct sx={{ justifyContent: 'space-around' }} container>
      {emptyCard &&
        emptyCard.map((item, index) => {
          return (
            <Grid
              item
              key={index}
              sx={{
                minWidth: '300px',
                width: '300px',
                minHeight: '37vh',
                height: '37vh',
                background: '#cecece',
                margin: '10px',
                borderRadius: '3px',
                display: 'flex',
                justifyContent: 'center'
              }}>
              <Box
                sx={{
                  minWidth: '90%',
                  width: '90%',
                  minHeight: '60%',
                  height: '60%',
                  background: '#ebebeb',
                  margin: '10px',
                  borderRadius: '3px'
                }}></Box>
            </Grid>
          );
        })}
    </StyledGridForProduct>
  );
};

export default ProductLoder;
