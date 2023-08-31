import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProductByID } from '../actions/ProductAction';
import { Box, Grid, Typography, FormControl, Select, MenuItem } from '@mui/material';
import Header from '../components/Header';
import {
  StyledProductDetailsCardPriceBox,
  StyledProductDetailsCardBox,
  StyledProductDetailsCardPriceTypography,
  StyledGridForProductDetailsRight,
  StyledButtonForProductDetailsAddToCard,
  StyledImageForProduct
} from './Style';

const ProductDetails = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const ProductInfo = useSelector((state) => state.getProductById);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    console.log('hello');
    dispatch(getProductByID(params.productId));
  }, [params]);

  const handleCard = () => {
    navigate(`/card/${ProductInfo.ProductInfo.result._id}/${quantity}`);
  };

  const handleChange = (event) => {
    setQuantity(event.target.value);
  };

  return (
    <div>
      <Header profile="none" />
      <Grid container>
        <Grid item md={6} lg={5} sx={{ borderRight: '1px solid gray', height: `89vh` }}>
          <Box
            sx={{
              height: '100%',
              width: '90%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
            <StyledImageForProduct
              src={`http://localhost:8000/api/product/photo/${params.productId}`}
              alt="Product Image"
              height="80%"
            />
          </Box>
        </Grid>
        <StyledGridForProductDetailsRight item lg={6} md={6}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '100%',
              alignItems: 'center'
            }}>
            <Typography variant="h3">
              {ProductInfo.lodding == false ? ProductInfo.ProductInfo.result.name : 'Product Name '}
            </Typography>
            <Typography
              variant="h5"
              sx={{ padding: '10px', background: 'black', color: 'white', borderRadius: '3px' }}>
              {ProductInfo.lodding == false ? ProductInfo.ProductInfo.result.price : '----'} RS
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '100%',
              alignItems: 'center',
              flexDirection: 'column',
              minHeight: '15vh',
              marginTop: '30px'
            }}>
            <Typography variant="h6">
              {ProductInfo.lodding == false
                ? ProductInfo.ProductInfo.result.description
                : 'Description.......'}
            </Typography>
          </Box>
          <StyledProductDetailsCardBox>
            <StyledProductDetailsCardPriceBox>
              <StyledProductDetailsCardPriceTypography>
                Price
              </StyledProductDetailsCardPriceTypography>
              <StyledProductDetailsCardPriceTypography>
                {ProductInfo.lodding == false ? ProductInfo.ProductInfo.result.price : '----'} RS
              </StyledProductDetailsCardPriceTypography>
            </StyledProductDetailsCardPriceBox>
            <StyledProductDetailsCardPriceBox>
              <StyledProductDetailsCardPriceTypography>
                Status
              </StyledProductDetailsCardPriceTypography>
              <StyledProductDetailsCardPriceTypography>
                {ProductInfo.lodding == false
                  ? ProductInfo.ProductInfo.result.quantity > 0
                    ? 'In Stock'
                    : 'Out Of Stock'
                  : 'In Stock'}
              </StyledProductDetailsCardPriceTypography>
            </StyledProductDetailsCardPriceBox>
            <StyledProductDetailsCardPriceBox>
              <StyledProductDetailsCardPriceTypography>
                Quantity
              </StyledProductDetailsCardPriceTypography>
              <FormControl sx={{ width: '20%' }}>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  defaultValue={1}
                  label="Age"
                  sx={{ height: '45px' }}
                  onChange={handleChange}>
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                  <MenuItem value={4}>4</MenuItem>
                  <MenuItem value={5}>5</MenuItem>
                </Select>
              </FormControl>
            </StyledProductDetailsCardPriceBox>

            <StyledButtonForProductDetailsAddToCard
              onClick={handleCard}
              disabled={
                ProductInfo.lodding == false
                  ? ProductInfo.ProductInfo.result.quantity > 0
                    ? false
                    : true
                  : false
              }>
              Add To Card
            </StyledButtonForProductDetailsAddToCard>
          </StyledProductDetailsCardBox>
        </StyledGridForProductDetailsRight>
      </Grid>
    </div>
  );
};

export default ProductDetails;
