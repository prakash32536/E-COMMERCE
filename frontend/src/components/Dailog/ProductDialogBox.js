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
import { createProduct } from '../../actions/ProductAction';
import { useSnackbar } from 'notistack';
import { geAllCategory } from '../../actions/CategoryAction';

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

export default function ProductDialogBox({ open, onClose }) {
  const dispatch = useDispatch();
  const productData = useSelector((state) => state.CreateProduct);
  const loginInfo = JSON.parse(localStorage.getItem('loginInfo'));
  const categoryList = useSelector((state) => state.GetAllCategory.CategoryList);
  // console.log('productData', productData);
  const { enqueueSnackbar } = useSnackbar();

  // the data of userRegisterReducer has been changed than this useEffect hook should be trigered
  useEffect(() => {
    const { ProductInfo, error } = productData;
    if (ProductInfo) {
      enqueueSnackbar('User is create successfully', {
        variant: 'success'
      });
    }
    if (error) {
      enqueueSnackbar('Something went wrong', {
        variant: 'error'
      });
    }
  }, [productData]);

  const [formData, setFormData] = React.useState({});

  const handleChange = (e) => {
    const { name } = e.target;
    const value = name === 'photo' ? e.target.files[0] : e.target.value;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, description, price, category, quantity, photo, shipping } = formData;

    const productFormData = new FormData();
    productFormData.set('name', name);
    productFormData.set('description', description);
    productFormData.set('price', price);
    productFormData.set('category', category);
    productFormData.set('quantity', quantity);
    productFormData.set('photo', photo);
    productFormData.set('shipping', shipping);
    // console.log('productFormData', productFormData);
    dispatch(createProduct(loginInfo?.token, productFormData));
    onClose();
  };

  useEffect(() => {
    dispatch(geAllCategory());
  }, []);
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
                label="Enter description"
                name="description"
                onChange={handleChange}
              />
            </FormControl>
            <FormControl sx={{ marginTop: '20px' }}>
              <TextField
                required
                id="outlined-required"
                label="Enter price"
                name="price"
                onChange={handleChange}
              />
            </FormControl>
            <FormControl sx={{ width: '100%', mt: 1 }} error>
              <InputLabel id="demo-simple-select-error-label">category</InputLabel>
              <Select
                labelId="demo-simple-select-error-label"
                id="demo-simple-select-error"
                label="category"
                name="category"
                onChange={handleChange}>
                {categoryList &&
                  categoryList.map((item, index) => {
                    return (
                      <MenuItem key={index} value={item._id}>
                        {item.name}
                      </MenuItem>
                    );
                  })}
              </Select>
            </FormControl>
            <FormControl sx={{ marginTop: '20px' }}>
              <TextField
                required
                id="outlined-required"
                label="Enter quantity"
                name="quantity"
                onChange={handleChange}
              />
            </FormControl>
            <FormControl sx={{ marginTop: '20px' }}>
              <TextField required name="photo" type="file" onChange={handleChange} />
            </FormControl>
            <FormControl sx={{ width: '100%', mt: 1 }} error>
              <InputLabel id="demo-simple-select-error-label">shipping</InputLabel>
              <Select
                labelId="demo-simple-select-error-label"
                id="demo-simple-select-error"
                label="shipping"
                name="shipping"
                onChange={handleChange}>
                <MenuItem value={true}>Yes</MenuItem>
                <MenuItem value={false}>No</MenuItem>
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
