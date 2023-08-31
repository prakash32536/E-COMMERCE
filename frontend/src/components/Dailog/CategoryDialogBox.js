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
import { FormControl, TextField } from '@mui/material';
import { StyledFormDiv } from '../Style';
import { useDispatch, useSelector } from 'react-redux';
import { CreateCategory } from '../../actions/CategoryAction';
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

export default function CategoryDialogBox({ open, onClose, loginData }) {
  const dispatch = useDispatch();
  const categoryData = useSelector((state) => state.CreateCategoryReducer);
  console.log('registerData', categoryData);
  const { enqueueSnackbar } = useSnackbar();

  // the data of userRegisterReducer has been changed than this useEffect hook should be trigered
  useEffect(() => {
    const { categoryInfo, error } = categoryData;
    console.log('userInfo', categoryInfo);
    console.log('error', error);
    if (categoryInfo) {
      enqueueSnackbar('User is create successfully', {
        variant: 'success'
      });
    }
    if (error) {
      enqueueSnackbar('Something went wrong', {
        variant: 'error'
      });
    }
  }, [categoryData]);

  const [formData, setFormData] = React.useState({
    name: ''
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
    const { name } = formData;
    dispatch(CreateCategory(name, loginData?.token));
    onClose();
  };

  return (
    <div>
      <BootstrapDialog
        sx={{ width: '100%' }}
        onClose={onClose}
        aria-labelledby="customized-dialog-title"
        open={open}>
        <BootstrapDialogTitle id="customized-dialog-title">Add a Category</BootstrapDialogTitle>
        <DialogContent dividers>
          <StyledFormDiv>
            <FormControl>
              <TextField
                required
                id="outlined-required"
                label="Enter Catogery Name"
                name="name"
                onChange={handleChange}
              />
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
