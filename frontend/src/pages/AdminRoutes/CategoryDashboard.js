import React, { useState, useEffect } from 'react';
import AdminLayout from '../../hoc/AdminLayout';
import { AdminDashboardWrapper } from '../Style';
import { useDispatch, useSelector } from 'react-redux';
import CategoryTable from '../../components/Table/CategoryTable';
import { Grid, Typography, TextField, Button } from '@mui/material';
import CategoryDialogBox from '../../components/Dailog/CategoryDialogBox';
import { geAllCategory } from '../../actions/CategoryAction';

const CategoryDashboard = () => {
  const dispatch = useDispatch();
  const loginData = JSON.parse(localStorage.getItem('loginInfo'));
  const categoryList = useSelector((state) => state.GetAllCategory.CategoryList);
  const newCategory = useSelector((state) => state.CreateCategoryReducer.categoryInfo);

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    dispatch(geAllCategory());
  }, []);

  useEffect(() => {
    dispatch(geAllCategory());
  }, [newCategory]);
  return (
    <AdminLayout>
      <AdminDashboardWrapper>
        <Grid container>
          <Grid item xs={12} sm={6}>
            <Typography variant="h3">Category</Typography>
          </Grid>
          <Grid item xs={12} sm={6} sx={{ justifyContent: 'flex-end', display: 'flex' }}>
            <TextField id="outlined-basic" label="Search Category" variant="outlined" />
          </Grid>
          <Grid item xs={12} sm={5} mt={4} mr={1}>
            <Button variant="contained" fullWidth onClick={handleClickOpen}>
              Add a category
            </Button>
          </Grid>
          <Grid item xs={12} mt={4} mr={1}>
            <CategoryTable categoryList={categoryList} />
          </Grid>
        </Grid>
      </AdminDashboardWrapper>
      <CategoryDialogBox onClose={handleClose} open={open} loginData={loginData} />
    </AdminLayout>
  );
};

export default CategoryDashboard;
