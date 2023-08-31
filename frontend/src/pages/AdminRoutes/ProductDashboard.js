import React, { useState, useEffect } from 'react';
import AdminLayout from '../../hoc/AdminLayout';
import { AdminDashboardWrapper } from '../Style';
import { useDispatch, useSelector } from 'react-redux';
import ProductTable from '../../components/Table/ProductTable';
import { Grid, Typography, TextField, Button } from '@mui/material';
import ProductDialogBox from '../../components/Dailog/ProductDialogBox';
import { getAllProducts } from '../../actions/ProductAction';

const ProductDashboard = () => {
  const dispatch = useDispatch();
  const loginData = JSON.parse(localStorage.getItem('loginInfo'));
  const productList = useSelector((state) => state.GetAllProduct.productList);
  const newProduct = useSelector((state) => state.CreateProduct.ProductInfo);

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  useEffect(() => {
    dispatch(getAllProducts());
  }, [newProduct]);
  return (
    <AdminLayout>
      <AdminDashboardWrapper>
        <Grid container>
          <Grid item xs={12} sm={6}>
            <Typography variant="h3">Product</Typography>
          </Grid>
          <Grid item xs={12} sm={6} sx={{ justifyContent: 'flex-end', display: 'flex' }}>
            <TextField id="outlined-basic" label="Search Product" variant="outlined" />
          </Grid>
          <Grid item xs={12} sm={5} mt={4} mr={1}>
            <Button variant="contained" fullWidth onClick={handleClickOpen}>
              Add a Product
            </Button>
          </Grid>
          <Grid item xs={12} mt={4} mr={1}>
            <ProductTable productList={productList} />
          </Grid>
        </Grid>
      </AdminDashboardWrapper>
      <ProductDialogBox onClose={handleClose} open={open} loginData={loginData} />
    </AdminLayout>
  );
};

export default ProductDashboard;
