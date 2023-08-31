import React, { useState, useEffect } from 'react';
import AdminLayout from '../../hoc/AdminLayout';
import { AdminDashboardWrapper } from '../Style';
import { useDispatch, useSelector } from 'react-redux';
import { allUsers } from '../../actions/UserActions';
import UserTable from '../../components/Table/UserTable';
import { Grid, Typography, TextField, Button } from '@mui/material';
import Select from '../../components/Select';
import DialogBox from '../../components/Dailog/DialogBox';

const AdmitDashBoard = () => {
  const dispatch = useDispatch();
  const [selectData, setSelectData] = React.useState('');
  const loginData = JSON.parse(localStorage.getItem('loginInfo'));
  const registerData = useSelector((state) => state.UserRegisterReducer);
  const userListInfo = useSelector((state) => state.UserListReducer.userListInfo);
  const [open, setOpen] = useState(false);
  const [searchData, setSearchData] = useState('');
  // console.log('searchDasta', searchData);

  const handleClickOpen = () => {
    setOpen(true);
  };

  //handling select data

  const handleSelectChange = (event) => {
    setSelectData(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // This useEffect is called everytime when this page is loaded because we have passed empty dependecy array
  useEffect(() => {
    dispatch(allUsers(loginData?.token));
  }, []);

  // when any new user added thorugh modal than registerData reducer is going to update.
  useEffect(() => {
    dispatch(allUsers(loginData?.token));
  }, [registerData]);

  useEffect(() => {
    dispatch(allUsers(loginData?.token, selectData, searchData));
  }, [selectData, searchData]);

  // searching the data
  const handleSearch = (e) => {
    setSearchData(e.target.value);
  };

  return (
    <AdminLayout>
      <AdminDashboardWrapper>
        <Grid container>
          <Grid item xs={12} sm={6}>
            <Typography variant="h3">Users</Typography>
          </Grid>
          <Grid item xs={12} sm={6} sx={{ justifyContent: 'flex-end', display: 'flex' }}>
            <TextField
              onChange={handleSearch}
              id="outlined-basic"
              label="Search User"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={5} mt={3} mr={3}>
            <Select handleSelectChange={handleSelectChange} selectData={selectData} />
          </Grid>
          <Grid item xs={12} sm={5} mt={4} mr={1}>
            <Button variant="contained" fullWidth onClick={handleClickOpen}>
              Add a User
            </Button>
          </Grid>
          <Grid item xs={12} mt={4} mr={1}>
            <UserTable userListInfo={userListInfo} />
          </Grid>
        </Grid>
      </AdminDashboardWrapper>
      <DialogBox onClose={handleClose} open={open} />
    </AdminLayout>
  );
};

export default AdmitDashBoard;
