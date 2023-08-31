import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import { StyledImageForProduct } from '../pages/Style';

export default function ProductCard({ item }) {
  console.log('item', item);
  const navigate = useNavigate();
  const handleProductDetails = () => {
    navigate(`/${item._id}`);
  };
  return (
    <Card
      sx={{
        maxWidth: '300px',
        m: 2,
        width: '300px',
        maxHeight: '90vh',
        height: '60vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: 'none'
      }}
      onClick={handleProductDetails}>
      <StyledImageForProduct
        src={`http://localhost:8000/api/product/photo/${item._id}`}
        alt="My Image"
      />

      <CardContent sx={{ padding: '5px', display: 'flex', justifyContent: 'center' }}>
        <Typography sx={{ margin: 0 }} gutterBottom variant="h5" component="div">
          {item.name}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: 'center', padding: 0 }}>
        <Button size="small" sx={{ background: '#cecece', color: 'black' }}>
          {' '}
          Price:- {item.price} Rs
        </Button>
      </CardActions>
    </Card>
  );
}
