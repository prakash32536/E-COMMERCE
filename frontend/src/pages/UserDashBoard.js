import React from 'react';
import { useSelector } from 'react-redux';
import Banner from '../components/Banner';
import Header from '../components/Header';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Grid, Typography } from '@mui/material';
import { logout } from '../actions/UserActions';
import { StyledGridForUserLinkAndInfo, StyledBoxForUserLinkAndInfo } from './Style';

const UserDashBoard = () => {
  const loginData = useSelector((state) => state.UserLoginReducer.LoginInfo);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };
  return (
    <div>
      <Header buttonName="User Dashboard" />
      <Banner type="User" loginData={loginData} />
      <Grid container>
        <StyledGridForUserLinkAndInfo item sm={12} md={6} lg={6}>
          <Typography>User Links</Typography>
          <StyledBoxForUserLinkAndInfo>
            <Link className="styled_link">My card</Link>
            <Link className="styled_link">Update profile</Link>
            <Link className="styled_link" onClick={handleLogout}>
              LogOut
            </Link>
          </StyledBoxForUserLinkAndInfo>
        </StyledGridForUserLinkAndInfo>
        <StyledGridForUserLinkAndInfo item sm={12} md={6} lg={6}>
          <Typography>User Information</Typography>
          <StyledBoxForUserLinkAndInfo>
            <Typography className="styled_link">Name : {loginData.name}</Typography>
            <Typography className="styled_link">Email : {loginData.email}</Typography>
            <Typography className="styled_link">
              Role : {loginData.role === 0 ? 'User' : 'Admin'}
            </Typography>
          </StyledBoxForUserLinkAndInfo>
        </StyledGridForUserLinkAndInfo>
      </Grid>
    </div>
  );
};

export default UserDashBoard;
