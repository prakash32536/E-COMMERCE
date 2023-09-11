import React, { useEffect, useState } from 'react';
import { StyledFormDiv } from '../components/Style';
import {
  FormControl,
  Grid,
  TextField,
  Card,
  Typography,
  Button,
  Box,
  Checkbox
} from '@mui/material';
import Header from '../components/Header';
import { StyledGridForAddToCard, StyledGridForShippingList } from './Style';
import { useDispatch, useSelector } from 'react-redux';
import { saveShippingDetails, getShippingdetails } from '../actions/ShippingAction';
import './Style.css';

const Shipping = () => {
  const loginInfo = JSON.parse(localStorage.getItem('loginInfo'));
  const [formData, setFormData] = useState({ userId: loginInfo?._id });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  useEffect(() => {
    dispatch(getShippingdetails(loginInfo?.token, loginInfo?._id));
  }, []);

  const shippingList = useSelector(
    (state) => state.getShippingDetailsReducer.getShippingDetailsInfo
  );
  if (shippingList) {
    console.log('shippingList', shippingList.result);
  }

  // const token = userData.loginInfo.token;
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(saveShippingDetails(loginInfo?.token, formData));
  };
  return (
    <div>
      <Header />
      <Grid container sx={{ m: 1 }}>
        <StyledGridForAddToCard item sx={12} sm={12} md={7} lg={7}>
          <Card sx={{ padding: '10px 20px' }}>
            <form onSubmit={handleSubmit}>
              <StyledFormDiv>
                <Typography variant="h4">Shipping Address</Typography>
                <FormControl sx={{ marginTop: '15px' }}>
                  <TextField
                    required
                    id="outlined-required"
                    label="Enter your Name"
                    name="name"
                    onChange={handleChange}
                  />
                </FormControl>

                <FormControl sx={{ marginTop: '15px' }}>
                  <TextField
                    required
                    id="outlined-required"
                    label="Enter your email"
                    name="email"
                    onChange={handleChange}
                  />
                </FormControl>
                <FormControl sx={{ marginTop: '15px' }}>
                  <TextField
                    required
                    id="outlined-required"
                    label="Enter your number"
                    name="number"
                    onChange={handleChange}
                  />
                </FormControl>
                <FormControl sx={{ marginTop: '15px' }}>
                  <TextField
                    required
                    id="outlined-required"
                    label="Enter your address"
                    name="address"
                    onChange={handleChange}
                  />
                </FormControl>
                <FormControl sx={{ marginTop: '15px' }}>
                  <TextField
                    required
                    id="outlined-required"
                    label="Enter your landMark"
                    name="landMark"
                    onChange={handleChange}
                  />
                </FormControl>
                <FormControl sx={{ marginTop: '15px' }}>
                  <TextField
                    required
                    id="outlined-required"
                    label="Enter your pincode"
                    name="pincode"
                    onChange={handleChange}
                  />
                </FormControl>
              </StyledFormDiv>
              <Button type="submit" sx={{ marginTop: '15px', background: 'black', color: 'white' }}>
                Save
              </Button>
            </form>
          </Card>
        </StyledGridForAddToCard>
        <StyledGridForShippingList item sx={12} sm={12} md={5} lg={5}>
          <Card sx={{ padding: '10px 20px', width: '80%' }}>
            <Typography variant="h4">Select Your Address </Typography>
            {shippingList &&
              shippingList.result.map((item, index) => {
                return (
                  <Box key={index} sx={{ display: 'flex', mt: 3 }}>
                    <Checkbox />
                    <Box>
                      <Typography>Name:- {item.name}</Typography>
                      <Typography>Number:- {item.number}</Typography>
                      <Typography>Email:- {item.email}</Typography>
                      <Typography>Address:- {item.address}</Typography>
                      <Typography>landMark:- {item.landMark}</Typography>
                    </Box>
                  </Box>
                );
              })}
          </Card>
        </StyledGridForShippingList>
      </Grid>
    </div>
  );
};

export default Shipping;
