import React, { useState } from 'react';
import Header from '../components/Header';
import { StyledCard, StyledDiv, StyledCardContent } from './Style';
import { Typography, TextField, Button, Box } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useDispatch } from 'react-redux';
import { register } from '../actions/UserActions';
import { useNavigate } from 'react-router-dom';

const SignupPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFromData] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFromData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, role, password } = formData;
    dispatch(register(name, email, password, role));
    navigate('/');
  };
  return (
    <div>
      <Header buttonName="Log in" />
      <StyledDiv>
        <StyledCard>
          <StyledCardContent>
            <Typography variant="h4">Sign up</Typography>
            <TextField
              required
              id="outlined-required"
              label="Enter your name"
              name="name"
              onChange={handleChange}
              sx={{ mt: 2 }}
            />
            <TextField
              required
              id="outlined-required"
              label="Enter your Email id"
              name="email"
              onChange={handleChange}
              sx={{ mt: 2 }}
            />
            <TextField
              required
              id="outlined-required"
              label="Enter your Password"
              name="password"
              onChange={handleChange}
              sx={{ mt: 2 }}
            />
            {/* set role  */}
            <Box sx={{ minWidth: 120, mt: 2 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Role</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  //   value={Role}
                  label="Role"
                  name="role"
                  onChange={handleChange}>
                  <MenuItem value={0}>User</MenuItem>
                  <MenuItem value={1}>Admin</MenuItem>
                </Select>
              </FormControl>
            </Box>
            {/* set role ends hare  */}
            <Button
              onClick={handleSubmit}
              sx={{ mt: 2, background: '#cdebe9', color: 'black' }}
              variant="contained">
              <Typography variant="h6">Sign up</Typography>
            </Button>
          </StyledCardContent>
        </StyledCard>
      </StyledDiv>
    </div>
  );
};

export default SignupPage;
