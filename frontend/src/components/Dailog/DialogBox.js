import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { FormControl, TextField, InputLabel, Select, MenuItem } from '@mui/material';
import { StyledFormDiv } from '../Style';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../actions/UserActions';
import { useSnackbar } from 'notistack';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2)
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1)
  },
  '& .MuiDialog-paper': {
    width: '100%'
  }
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500]
          }}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired
};

export default function CustomizedDialogs({ open, onClose }) {
  const dispatch = useDispatch();
  const registerData = useSelector((state) => state.UserRegisterReducer);
  console.log('registerData', registerData);
  const { enqueueSnackbar } = useSnackbar();

  // the data of userRegisterReducer has been changed than this useEffect hook should be trigered
  useEffect(() => {
    const { userInfo, error } = registerData;
    console.log('userInfo', userInfo);
    console.log('error', error);
    if (userInfo) {
      enqueueSnackbar('User is create successfully', {
        variant: 'success'
      });
    }
    if (error) {
      enqueueSnackbar('Something went wrong', {
        variant: 'error'
      });
    }
  }, [registerData]);

  const [formData, setFormData] = React.useState({
    name: '',
    enail: '',
    password: '',
    role: 0
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, role, password } = formData;
    dispatch(register(name, email, password, role));
    onClose();
  };

  return (
    <div>
      <BootstrapDialog
        sx={{ width: '100%' }}
        onClose={onClose}
        aria-labelledby="customized-dialog-title"
        open={open}>
        <BootstrapDialogTitle id="customized-dialog-title">Add a User</BootstrapDialogTitle>
        <DialogContent dividers>
          <StyledFormDiv>
            <FormControl>
              <TextField
                required
                id="outlined-required"
                label="Enter your Name"
                name="name"
                onChange={handleChange}
              />
            </FormControl>

            <FormControl sx={{ marginTop: '20px' }}>
              <TextField
                required
                id="outlined-required"
                label="Enter your email"
                name="email"
                onChange={handleChange}
              />
            </FormControl>
            <FormControl sx={{ marginTop: '20px' }}>
              <TextField
                required
                id="outlined-required"
                label="Enter your Password"
                name="password"
                onChange={handleChange}
              />
            </FormControl>
            <FormControl sx={{ width: '100%' }} error>
              <InputLabel id="demo-simple-select-error-label">Role</InputLabel>
              <Select
                labelId="demo-simple-select-error-label"
                id="demo-simple-select-error"
                label="Role"
                name="role"
                onChange={handleChange}>
                <MenuItem value={0}>User</MenuItem>
                <MenuItem value={1}>Admin</MenuItem>
              </Select>
            </FormControl>
          </StyledFormDiv>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleSubmit}>
            Save changes
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
