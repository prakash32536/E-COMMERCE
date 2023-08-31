import React, { useEffect } from 'react';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';
import { getAllProducts } from '../actions/ProductAction';
import { useDispatch, useSelector } from 'react-redux';
import { Grid } from '@mui/material';
import FilterSection from '../components/FilterSection';
import CarouselComponent from '../components/Carousel';
import { Box } from '@mui/material';
import ProductLoder from '../components/ProductLoder';
import { StyledGridForProduct } from './Style';

const GestDashboard = () => {
  const dispatch = useDispatch();
  const { productList, loddingGetAllProduct } = useSelector((state) => state.GetAllProduct);

  console.log('productList', productList);
  useEffect(() => {
    dispatch(getAllProducts());
  }, []);
  return (
    <div>
      <Header profile="none" />
      <FilterSection />
      <CarouselComponent />
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        {loddingGetAllProduct ? (
          <ProductLoder />
        ) : (
          <StyledGridForProduct container>
            {productList &&
              productList.map((item, index) => {
                return (
                  <Grid item key={index}>
                    <ProductCard item={item} />
                  </Grid>
                );
              })}
          </StyledGridForProduct>
        )}
      </Box>
    </div>
  );
};

export default GestDashboard;
