import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import { StyledCard, StyledDiv, StyledCardContent } from './Style';
import { Typography, TextField, Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { Login } from '../actions/UserActions';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [formData, setFromData] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loginData = useSelector((state) => state.UserLoginReducer.LoginInfo);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFromData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = formData;
    dispatch(Login(email, password));
  };

  useEffect(() => {
    if (loginData?.role === 0) {
      navigate('/user-dashboard');
    } else if (loginData?.role === 1) {
      navigate('/admin-dashboard');
    }
  }, [loginData]);
  return (
    <div>
      <Header buttonName="Sign up" />
      <StyledDiv>
        <StyledCard>
          <StyledCardContent>
            <Typography variant="h4">Log in</Typography>
            <TextField
              required
              id="outlined-required"
              onChange={handleChange}
              name="email"
              label="Enter Email id"
              sx={{ mt: 2 }}
            />
            <TextField
              required
              id="outlined-required"
              name="password"
              onChange={handleChange}
              label="Enter Password"
              sx={{ mt: 2 }}
            />
            <Button
              onClick={handleSubmit}
              sx={{ mt: 2, background: '#cdebe9', color: 'black' }}
              variant="contained">
              <Typography variant="h6">Log in</Typography>
            </Button>
          </StyledCardContent>
        </StyledCard>
      </StyledDiv>
    </div>
  );
};

export default LoginPage;
