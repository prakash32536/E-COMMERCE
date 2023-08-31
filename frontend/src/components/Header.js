import * as React from 'react';
import { StyledAppBar, StyledBoxForHeader1 } from './Style';
import SearchIcon from '@mui/icons-material/Search';
import Person4Icon from '@mui/icons-material/Person4';
import {
  Paper,
  InputBase,
  Toolbar,
  Typography,
  Button,
  IconButton,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  Box
} from '@mui/material';
import './Style.css';
import { useNavigate } from 'react-router-dom';

export default function Header(props) {
  let display1 = 'none';
  if (props.buttonName) {
    display1 = 'block';
  }
  let display2 = 'inline-flex';
  if (props.buttonName) {
    display2 = 'none';
  }
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate('/login');
  };
  const handleSignup = () => {
    navigate('/signup');
  };
  const handleRoute = () => {
    if (props.buttonName == 'Sign up') {
      navigate('/signup');
    } else {
      navigate('/login');
    }
  };
  return (
    <StyledBoxForHeader1>
      <StyledAppBar position="static">
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box sx={{ width: '100px' }}>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              Ecomers
            </Typography>
          </Box>
          <Paper
            component="form"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}>
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search Google Maps"
              inputProps={{ 'aria-label': 'search google maps' }}
            />
            <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
              <SearchIcon />
            </IconButton>
          </Paper>
          <Button onClick={handleRoute} sx={{ display: display1 }} color="inherit">
            {props.buttonName}
          </Button>
          {/* signin  */}
          <FormControl sx={{ m: 1, minWidth: 80, display: display2 }}>
            <InputLabel id="demo-simple-select-autowidth-label">
              <Person4Icon />
            </InputLabel>
            <Select
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select-autowidth"
              autoWidth
              label="Age">
              <MenuItem onClick={handleLogin}>Login</MenuItem>
              <MenuItem onClick={handleSignup}>SignUp</MenuItem>
              <MenuItem sx={{ display: props.profile }}>Profile</MenuItem>
            </Select>
          </FormControl>
          {/* out  */}
        </Toolbar>
      </StyledAppBar>
    </StyledBoxForHeader1>
  );
}
